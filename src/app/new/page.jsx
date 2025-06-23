"use client"
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, MapPin, Scissors, Star, CheckCircle, X, Plus, Minus } from 'lucide-react';

const BarberShopBooking = () => {
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    phone: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const[barbers,setBarber]=useState([
    { id: 1, name: 'Marcus Johnson', rating: 4.9, speciality: 'Classic Cuts', image: '👨‍🦲' },
    { id: 2, name: 'Alex Rodriguez', rating: 4.8, speciality: 'Modern Styles', image: '👨‍🦱' },
    { id: 3, name: 'David Chen', rating: 4.9, speciality: 'Beard Expert', image: '👨‍🦳' }
  ]);

const fetchBarber=async()=>{
    try{

        const res = await fetch("/api/staff/fetchAll")
        const data =await res.json();

        console.log(data);
        setBarber(data.staff)
        

    }
    catch(err){

        console.log("Internal Server Error",err)

    }
}


  // Fetch services from database
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/services/fetchAll');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        console.log(data);
         setServices(data.services);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching services:', err);
        // Fallback to mock data for demo purposes
        setServices([
          { _id: '1', name: 'Classic Cut', price: 25, category: 'Hair Cut' },
          { _id: '2', name: 'Fade Cut', price: 30, category: 'Hair Cut' },
          { _id: '3', name: 'Beard Trim', price: 15, category: 'Hair Cut' },
          { _id: '4', name: 'Deep Cleansing Facial', price: 45, category: 'Skin Care' },
          { _id: '5', name: 'Full Hair Color', price: 80, category: 'Hair Coloring' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
    fetchBarber();
  }, []);

 

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  // Helper functions for service selection
  const addService = (service) => {
    setSelectedServices(prev => [...prev, service]);
  };

  const removeService = (serviceId) => {
    setSelectedServices(prev => prev.filter(s => s._id !== serviceId));
  };

  const getTotalPrice = () => {
    return selectedServices.reduce((total, service) => total + service.price, 0);
  };

  const handleBooking = async () => {
    if (selectedServices.length > 0 && selectedBarber && selectedDate && selectedTime && customerInfo.name && customerInfo.address && customerInfo.phone) {
      try {
        // Here you can add booking logic to save to database
        const bookingData = {
          services: selectedServices.map(s => s.name),
          barber: selectedBarber.name,
          date: selectedDate,
          time: selectedTime,
          customer: customerInfo,
          totalPrice: getTotalPrice()
        };
        
        // Uncomment below to save booking to database
        const response = await fetch('/api/appointment/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bookingData)
        });
        console.log(response)
        console.log('Booking Data:', bookingData);
        setCurrentStep(5);
      } catch (err) {
        console.error('Error creating booking:', err);
        setError('Failed to create booking. Please try again.');
      }
    }
  };

  // Group services by category for better display
  const servicesByCategory = services?.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  // Category icons mapping
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Hair Cut': return '✂️';
      case 'Skin Care': return '🧴';
      case 'Hair Coloring': return '🎨';
      case 'Beard' : return '🧔🏻‍♂️';
      default: return '💎';
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        if (loading) {
          return (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading services...</p>
            </div>
          );
        }

        if (error && services.length === 0) {
          return (
            <div className="text-center py-12">
              <div className="text-red-500 mb-4">
                <X size={48} className="mx-auto mb-2" />
                <p className="text-lg font-semibold">Failed to load services</p>
                <p className="text-sm">{error}</p>
              </div>
              <button 
                onClick={() => window.location.reload()}
                className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                Retry
              </button>
            </div>
          );
        }

        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-3">
                Select Your Services
              </h2>
              <p className="text-gray-600 text-sm md:text-lg">Choose one or more services</p>
            </div>

            {/* Selected Services Summary */}
            {selectedServices.length > 0 && (
              <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 mb-6 border border-purple-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">Selected Services ({selectedServices.length})</h4>
                  </div>
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ₹{getTotalPrice()}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedServices.map((service) => (
                    <div key={service._id} className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-xs border">
                      <span>{service.name}</span>
                      <button
                        onClick={() => removeService(service._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
              <div key={category} className="mb-8">
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-xl md:text-3xl">
                    {getCategoryIcon(category)}
                  </span>
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {category}
                  </span>
                </h3>
                <div className="space-y-4">
                  {categoryServices.map((service) => {
                    const isSelected = selectedServices.some(s => s._id === service._id);
                    return (
                      <div
                        key={service._id}
                        className={`p-4 md:p-6 rounded-2xl border-2 transition-all duration-300 ${
                          isSelected
                            ? 'border-transparent bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 shadow-lg ring-2 ring-purple-400/30'
                            : 'border-gray-200 bg-white/80 backdrop-blur-sm'
                        }`}
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{service.name}</h4>
                            <p className="text-gray-600 mb-3 text-sm md:text-base">
                              {service.description || `Professional ${service?.name} service`}
                            </p>
                            <div className="flex items-center gap-3 text-xs md:text-sm">
                              <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-600 text-xs">
                                {service.category}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-3">
                            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                              ₹{service.price}
                            </div>
                            <button
                              onClick={() => isSelected ? removeService(service._id) : addService(service)}
                              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                isSelected
                                  ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                              }`}
                            >
                              {isSelected ? <Minus size={18} /> : <Plus size={18} />}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                Choose Your Barber
              </h2>
              <p className="text-gray-600 text-sm md:text-lg">Select from our expert stylists</p>
            </div>
            <div className="space-y-4">
              {barbers.map((barber) => (
                <div
                  key={barber._id}
                  onClick={() => setSelectedBarber(barber)}
                  className={`p-4 md:p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedBarber?._id === barber._id
                      ? 'border-transparent bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 shadow-lg ring-2 ring-blue-400/30'
                      : 'border-gray-200 bg-white/80 backdrop-blur-sm hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl md:text-6xl">
                      {barber.image || '👨‍🦱'} 
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">{barber.name}</h3>
                      <p className="text-gray-600 mb-2 text-sm md:text-lg">{barber.speciality}</p>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                Select Date & Time
              </h2>
              <p className="text-gray-600 text-sm md:text-lg">Pick your preferred appointment slot</p>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-800 font-bold mb-3 text-base md:text-lg">Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-4 md:p-5 rounded-2xl bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 text-gray-800 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-base md:text-lg"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-bold mb-3 text-base md:text-lg">Available Times</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 md:p-4 rounded-2xl border-2 transition-all duration-300 font-medium text-sm md:text-base ${
                        selectedTime === time
                          ? 'border-transparent bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                Your Information
              </h2>
              <p className="text-gray-600 text-sm md:text-lg">Let us know how to reach you</p>
            </div>
            <div className="space-y-5">
              <div>
                <label className="block text-gray-800 font-bold mb-3 text-base md:text-lg">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 md:py-5 rounded-2xl bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 text-gray-800 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-base md:text-lg"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-800 font-bold mb-3 text-base md:text-lg">Address</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 md:py-5 rounded-2xl bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 text-gray-800 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-base md:text-lg"
                    placeholder="Enter your complete address"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-800 font-bold mb-3 text-base md:text-lg">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 md:py-5 rounded-2xl bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 text-gray-800 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-base md:text-lg"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center space-y-6">
            <div className="animate-bounce">
              <CheckCircle className="mx-auto text-green-500 mb-6" size={80} />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Booking Confirmed!
            </h2>
            <p className="text-gray-600 mb-8 text-sm md:text-lg">Your appointment has been successfully scheduled</p>
            
            <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl p-6 space-y-4 text-left border-2 border-gray-100 shadow-lg">
              {/* Services */}
              <div>
                <span className="text-gray-600 font-medium text-sm md:text-base">Services:</span>
                <div className="mt-2 space-y-2">
                  {selectedServices.map((service) => (
                    <div key={service._id} className="flex justify-between items-center text-sm md:text-base">
                      <span className="text-gray-800">{service.name}</span>
                      <span className="text-gray-600">₹{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center text-sm md:text-base">
                <span className="text-gray-600 font-medium">Barber:</span>
                <span className="text-gray-800 font-bold">{selectedBarber?.name}</span>
              </div>
              <div className="flex justify-between items-center text-sm md:text-base">
                <span className="text-gray-600 font-medium">Date:</span>
                <span className="text-gray-800 font-bold">{selectedDate}</span>
              </div>
              <div className="flex justify-between items-center text-sm md:text-base">
                <span className="text-gray-600 font-medium">Time:</span>
                <span className="text-gray-800 font-bold">{selectedTime}</span>
              </div>
              <div className="border-t-2 border-gray-200 pt-4">
                <div className="flex justify-between items-center text-lg md:text-xl">
                  <span className="text-gray-700 font-bold">Total:</span>
                  <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ₹{getTotalPrice()}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-xs md:text-sm text-gray-500 bg-gray-50 p-3 md:p-4 rounded-2xl">
              📍 Thanks for using our service
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>
        <div className="relative px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="p-2 md:p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                <Scissors className="text-white animate-pulse" size={24} />
              </div>
              <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Elite Cuts
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 md:gap-3 text-gray-600 mb-6 md:mb-8">
              <MapPin size={16} />
              <span className="text-sm md:text-lg">123 Main Street, Downtown</span>
            </div>
            
            {/* Progress Bar */}
            {currentStep < 5 && (
              <div className="flex items-center justify-center gap-2 md:gap-6 mb-8 md:mb-12 overflow-x-auto">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-3 transition-all duration-500 font-bold text-sm md:text-lg ${
                      currentStep >= step 
                        ? 'border-transparent bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg transform scale-110' 
                        : 'border-gray-300 text-gray-400 bg-white'
                    }`}>
                      {step}
                    </div>
                    {step < 4 && (
                      <div className={`w-8 md:w-16 h-2 mx-2 md:mx-4 rounded-full transition-all duration-500 ${
                        currentStep > step 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                          : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/50 shadow-2xl p-6 md:p-10">
            {renderStepContent()}
            
            {/* Navigation Buttons */}
            {currentStep < 5 && (
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="px-6 md:px-8 py-3 md:py-4 rounded-2xl border-2 border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium text-base md:text-lg order-2 sm:order-1"
                >
                  Previous
                </button>
                
                <button
                  onClick={() => {
                    if (currentStep === 4) {
                      handleBooking();
                    } else {
                      setCurrentStep(currentStep + 1);
                    }
                  }}
                  disabled={
                    (currentStep === 1 && selectedServices.length === 0) ||
                    (currentStep === 2 && !selectedBarber) ||
                    (currentStep === 3 && (!selectedDate || !selectedTime)) ||
                    (currentStep === 4 && (!customerInfo.name || !customerInfo.address || !customerInfo.phone))
                  }
                  className="px-8 md:px-10 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-bold text-base md:text-lg hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg order-1 sm:order-2"
                >
                  {currentStep === 4 ? 'Confirm Booking' : 'Next'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarberShopBooking;