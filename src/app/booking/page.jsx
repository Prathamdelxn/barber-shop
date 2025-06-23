'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedBarber, setSelectedBarber] = useState(null)
  const [selectedDateTime, setSelectedDateTime] = useState(null)
  const [selectedSeat, setSelectedSeat] = useState(null)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  // Sample data
  const barbers = [
    { id: 1, name: 'Tony', expertise: 'Classic Cuts', rating: 4.9, image: '/barber1.jpg' },
    { id: 2, name: 'Marcus', expertise: 'Modern Styles', rating: 4.8, image: '/barber2.jpg' },
    { id: 3, name: 'David', expertise: 'Beard Grooming', rating: 4.7, image: '/barber3.jpg' },
    { id: 4, name: 'James', expertise: 'Premium Services', rating: 5.0, image: '/barber4.jpg' },
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  const seats = [
    { id: 1, name: 'Seat 1', description: 'Window view' },
    { id: 2, name: 'Seat 2', description: 'VIP section' },
    { id: 3, name: 'Seat 3', description: 'Standard' },
    { id: 4, name: 'Seat 4', description: 'Private corner' },
  ]

  const BookingSteps = ({ currentStep }) => {
    const steps = [
      { id: 1, name: 'Barber' },
      { id: 2, name: 'Date & Time' },
      { id: 3, name: 'Seat' },
      { id: 4, name: 'Summary' },
    ]
    
    return (
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
        <div 
          className="absolute top-1/2 left-0 h-1 bg-indigo-600 transition-all duration-500 ease-in-out -z-10"
          style={{ width: `${(currentStep - 1) * 33.33}%` }}
        ></div>
        <div className="flex justify-between">
          {steps.map((stepItem) => (
            <div key={stepItem.id} className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= stepItem.id ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'} transition-colors duration-300`}>
                {stepItem.id}
              </div>
              <span className={`mt-2 text-sm ${currentStep >= stepItem.id ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                {stepItem.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const BarberSelection = ({ onSelect, selected, onNext }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      >
        <h2 className="text-2xl font-semibold text-gray-800">Select Your Barber</h2>
        <p className="text-gray-600">Choose from our talented professionals</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {barbers.map((barber) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              key={barber.id}
              className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${selected?.id === barber.id ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-transparent hover:border-gray-200'}`}
              onClick={() => onSelect(barber)}
            >
              <div className="relative">
                <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">{barber.name.charAt(0)}</span>
                </div>
                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-semibold flex items-center">
                  ⭐ {barber.rating}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{barber.name}</h3>
                <p className="text-gray-600 text-sm">{barber.expertise}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-end pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!selected}
            onClick={onNext}
            className={`px-6 py-3 rounded-lg font-medium ${selected ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'} transition-colors duration-300`}
          >
            Next: Date & Time
          </motion.button>
        </div>
      </motion.div>
    )
  }

  const DateTimeSelection = ({ onSelect, selected, onNext, onBack }) => {
    const [selectedDate, setSelectedDate] = useState(null)
    
    // Generate next 7 days
    const dates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() + i)
      return date
    })

    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      >
        <div>
          <button 
            onClick={onBack}
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300 mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
          <h2 className="text-2xl font-semibold text-gray-800">Select Date & Time</h2>
          <p className="text-gray-600">Choose when you'd like your appointment</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-gray-700 mb-3">Available Dates</h3>
            <div className="grid grid-cols-3 gap-2">
              {dates.map((date, index) => {
                const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
                const dayNumber = date.getDate()
                const month = date.toLocaleDateString('en-US', { month: 'short' })
                const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString()
                
                return (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    className={`py-3 rounded-lg border ${isSelected ? 'bg-indigo-600 text-white border-indigo-700' : 'bg-white border-gray-200 hover:border-indigo-300'} transition-colors duration-300`}
                  >
                    <div className="text-sm">{dayName}</div>
                    <div className="font-medium">{dayNumber}</div>
                    <div className="text-xs">{month}</div>
                  </motion.button>
                )
              })}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-700 mb-3">Available Times</h3>
            {selectedDate ? (
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time, index) => (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    key={index}
                    onClick={() => onSelect({ date: selectedDate, time })}
                    className={`py-2 rounded-lg border ${selected?.time === time ? 'bg-indigo-600 text-white border-indigo-700' : 'bg-white border-gray-200 hover:border-indigo-300'} transition-colors duration-300`}
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="mt-2 text-gray-500">Please select a date first</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-between pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="px-6 py-3 rounded-lg font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-300"
          >
            Back
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!selected}
            onClick={onNext}
            className={`px-6 py-3 rounded-lg font-medium ${selected ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'} transition-colors duration-300`}
          >
            Next: Seat Selection
          </motion.button>
        </div>
      </motion.div>
    )
  }

  const SeatSelection = ({ onSelect, selected, onNext, onBack }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      >
        <div>
          <button 
            onClick={onBack}
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300 mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
          <h2 className="text-2xl font-semibold text-gray-800">Select Your Seat</h2>
          <p className="text-gray-600">Choose where you'd like to sit during your appointment</p>
        </div>
        
        <div className="relative bg-gray-100 rounded-xl p-8">
          <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-dashed border-gray-300 rounded-lg"></div>
          
          <div className="relative z-10 grid grid-cols-2 gap-6">
            {seats.map((seat) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                key={seat.id}
                onClick={() => onSelect(seat)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${selected?.id === seat.id ? 'bg-indigo-600 text-white' : 'bg-white hover:bg-gray-50'} shadow-md`}
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${selected?.id === seat.id ? 'bg-indigo-700 text-white' : 'bg-indigo-100 text-indigo-600'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">{seat.name}</h3>
                    <p className={`text-sm ${selected?.id === seat.id ? 'text-indigo-100' : 'text-gray-600'}`}>{seat.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="px-6 py-3 rounded-lg font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-300"
          >
            Back
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!selected}
            onClick={onNext}
            className={`px-6 py-3 rounded-lg font-medium ${selected ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'} transition-colors duration-300`}
          >
            Next: Booking Summary
          </motion.button>
        </div>
      </motion.div>
    )
  }

  const BookingSummary = ({ barber, dateTime, seat, onBack }) => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    
    const handleSubmit = () => {
      setIsSubmitting(true)
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSuccess(true)
      }, 1500)
    }
    
    if (isSuccess) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-gray-900">Booking Confirmed!</h2>
          <p className="mt-2 text-gray-600">Your appointment with {barber.name} is confirmed for {dateTime.date.toLocaleDateString()} at {dateTime.time}.</p>
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
            >
              Book Another Appointment
            </motion.button>
          </div>
        </motion.div>
      )
    }
    
    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      >
        <div>
          <button 
            onClick={onBack}
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300 mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
          <h2 className="text-2xl font-semibold text-gray-800">Booking Summary</h2>
          <p className="text-gray-600">Review your appointment details before confirming</p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Barber</h3>
              <p className="text-gray-600">{barber.name} ({barber.expertise})</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Date & Time</h3>
              <p className="text-gray-600">{dateTime.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {dateTime.time}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Seat</h3>
              <p className="text-gray-600">{seat.name} ({seat.description})</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="px-6 py-3 rounded-lg font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-300"
          >
            Back
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`px-6 py-3 rounded-lg font-medium flex items-center ${isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} text-white transition-colors duration-300`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Confirm Booking'
            )}
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Book Your Appointment</h1>
            <p className="text-gray-600 mb-8">Complete your booking in just a few simple steps</p>
            
            <BookingSteps currentStep={step} />
            
            <div className="mt-12">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <BarberSelection 
                    onSelect={setSelectedBarber} 
                    selected={selectedBarber} 
                    onNext={nextStep} 
                  />
                )}
                
                {step === 2 && (
                  <DateTimeSelection 
                    onSelect={setSelectedDateTime} 
                    selected={selectedDateTime} 
                    onNext={nextStep} 
                    onBack={prevStep} 
                  />
                )}
                
                {step === 3 && (
                  <SeatSelection 
                    onSelect={setSelectedSeat} 
                    selected={selectedSeat} 
                    onNext={nextStep} 
                    onBack={prevStep} 
                  />
                )}
                
                {step === 4 && (
                  <BookingSummary 
                    barber={selectedBarber} 
                    dateTime={selectedDateTime} 
                    seat={selectedSeat} 
                    onBack={prevStep} 
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}