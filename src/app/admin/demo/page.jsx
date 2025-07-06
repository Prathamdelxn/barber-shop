
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCalendar, FiUser, FiScissors, FiDollarSign, FiChevronDown, FiChevronUp, FiPhone, FiEdit2, FiTrash2, FiPlus, FiFilter, FiX, FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const DateScroll = ({ selectedDate, onDateChange }) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [scrollContainer, setScrollContainer] = useState(null);

  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i)
    return date
  });

  const handleScroll = (e) => {
    const container = e.target;
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  const scrollLeft = () => {
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: -120, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: 120, behavior: 'smooth' });
    }
  };

  const navigateDate = (direction) => {
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() + direction);
    onDateChange(currentDate.toISOString().split('T')[0]);
  };

  useEffect(() => {
    if (scrollContainer) {
      handleScroll({ target: scrollContainer });
    }
  }, [scrollContainer]);

  return (
    <div className="relative w-full">
      {/* Left Navigation Arrow */}
      <button 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-all duration-200 border border-gray-200"
        onClick={() => navigateDate(-1)}
      >
        <FiChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
      </button>
      
      {/* Scroll Left Arrow (for horizontal scrolling) */}
      {showLeftArrow && (
        <button 
          className="absolute left-8 sm:left-10 top-1/2 -translate-y-1/2 z-10 p-1 bg-white/90 rounded-full shadow-sm hover:bg-gray-50 transition-all duration-200 border border-gray-200"
          onClick={scrollLeft}
        >
          <FiChevronLeft className="w-3 h-3 text-gray-500" />
        </button>
      )}
      
      {/* Date Container */}
      <div 
        ref={setScrollContainer}
        onScroll={handleScroll}
        className="flex space-x-2 sm:space-x-3 overflow-x-auto py-2 sm:py-4 px-8 sm:px-12 scrollbar-hide scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitScrollbar: { display: 'none' }
        }}
      >
        {dates.map((date) => {
          const dateStr = date.toISOString().split('T')[0];
          const isSelected = dateStr === selectedDate;
          const isToday = dateStr === new Date().toISOString().split('T')[0];
          
          return (
            <button
              key={dateStr}
              onClick={() => onDateChange(dateStr)}
              className={`
                flex flex-col items-center justify-center 
                min-w-[48px] w-12 h-12 sm:min-w-[60px] sm:w-14 sm:h-14 
                rounded-lg sm:rounded-xl 
                transition-all duration-200 
                transform hover:scale-105 active:scale-95
                ${isSelected
                  ? 'bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200'
                  : isToday
                    ? 'bg-gradient-to-b from-blue-50 to-blue-100 text-blue-600 border-2 border-blue-200'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                }
              `}
            >
              <span className="text-[10px] sm:text-xs font-medium leading-none">
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
              </span>
              <span className="text-sm sm:text-lg font-bold leading-none mt-0.5 sm:mt-1">
                {date.getDate()}
              </span>
              {/* Small indicator for current month */}
              {date.getMonth() !== new Date().getMonth() && (
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-0.5 opacity-50"></div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Scroll Right Arrow (for horizontal scrolling) */}
      {showRightArrow && (
        <button 
          className="absolute right-8 sm:right-10 top-1/2 -translate-y-1/2 z-10 p-1 bg-white/90 rounded-full shadow-sm hover:bg-gray-50 transition-all duration-200 border border-gray-200"
          onClick={scrollRight}
        >
          <FiChevronRight className="w-3 h-3 text-gray-500" />
        </button>
      )}
      
      {/* Right Navigation Arrow */}
      <button 
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-all duration-200 border border-gray-200"
        onClick={() => navigateDate(1)}
      >
        <FiChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
      </button>
      
      {/* Gradient Overlays for better UX */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default function BookingsPage() {
  const getTodayDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const [bookings, setBookings] = useState([
    { 
      id: 1, 
      customer: {name:'Alex Johnson',phone:'+1234567890'}, 
      services: ['Haircut', 'Beard Trim'], 
      barber: 'John Doe', 
      date: getTodayDate(),
      time: '10:00', 
      status: 'confirmed', 
      totalPrice: 40
    },
    { 
      id: 2, 
      customer: {name:'Sarah Williams',phone:'+1234567891'}, 
      services: ['Hair Coloring'], 
      barber: 'Mike Smith', 
      date: getTodayDate(),
      time: '14:00', 
      status: 'confirmed', 
      totalPrice: 60
    },
    { 
      id: 3, 
      customer: {name:'Robert Brown',phone:'+1234567892'}, 
      services: ['Haircut'], 
      barber: 'David Johnson', 
      date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0],
      time: '11:30', 
      status: 'pending', 
      totalPrice: 30
    }
  ])
  
  const fetchAppointment = async () => {
    // In a real app, you would fetch from your API
    const res = await fetch("/api/appointment/fetchAll")
    const response = await res.json()
    const data = response.data
    setBookings(data)
  }

  useEffect(() => {
    fetchAppointment()
  }, [])

  const [newBooking, setNewBooking] = useState({ 
    customer: {name: '', phone: ''}, 
    services: [], 
    barber: '', 
    date: getTodayDate(),
    time: '', 
    totalPrice: 0
  })
  
  const [editingBooking, setEditingBooking] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterDate, setFilterDate] = useState(getTodayDate())
  const [showFilters, setShowFilters] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [expandedBooking, setExpandedBooking] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleExpandBooking = (bookingId) => {
    setExpandedBooking(expandedBooking === bookingId ? null : bookingId)
  }

  const allServices = [
    { name: 'Haircut', totalPrice: 25 },
    { name: 'Beard Trim', totalPrice: 15 },
    { name: 'Hair Coloring', totalPrice: 40 },
    { name: 'Hair Washing', totalPrice: 10 },
    { name: 'Styling', totalPrice: 20 },
    { name: 'Head Massage', totalPrice: 15 }
  ]
  
  const staffMembers = ['John Doe', 'Mike Smith', 'David Johnson', 'Carlos Rodriguez']

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  const toggleService = (service) => {
    if (editingBooking) {
      const updatedServices = editingBooking.services.includes(service.name)
        ? editingBooking.services.filter(s => s !== service.name)
        : [...editingBooking.services, service.name]
      
      setEditingBooking({
        ...editingBooking,
        services: updatedServices,
        totalPrice: calculatePrice(updatedServices)
      })
    } else {
      const updatedServices = newBooking.services.includes(service.name)
        ? newBooking.services.filter(s => s !== service.name)
        : [...newBooking.services, service.name]
      
      setNewBooking({
        ...newBooking,
        services: updatedServices,
        totalPrice: calculatePrice(updatedServices)
      })
    }
  }

  const calculatePrice = (services) => {
    return services.reduce((total, serviceName) => {
      const service = allServices.find(s => s.name === serviceName)
      return total + (service?.totalPrice || 0)
    }, 0)
  }

  const addBooking = () => {
    if (newBooking.customer.name && newBooking.services.length > 0 && newBooking.barber && newBooking.date && newBooking.time) {
      setBookings([...bookings, { 
        id: bookings.length + 1, 
        ...newBooking,
        status: 'pending'
      }])
      setNewBooking({ 
        customer: {name: '', phone: ''}, 
        services: [], 
        barber: '', 
        date: getTodayDate(), 
        time: '', 
        totalPrice: 0 
      })
      setShowAddForm(false)
    }
  }

  const startEditing = (booking) => {
    setEditingBooking({...booking})
    setShowAddForm(false)
  }

  const saveEdit = () => {
    if (editingBooking.customer.name && editingBooking.services.length > 0 && editingBooking.barber && editingBooking.date && editingBooking.time) {
      setBookings(bookings.map(booking => 
        booking.id === editingBooking.id ? editingBooking : booking
      ))
      setEditingBooking(null)
    }
  }

  const cancelEdit = () => {
    setEditingBooking(null)
  }

  const updateBookingStatus = async (bookingId, newStatus) => {
    try {
      // In a real app, you would call your API here
      // const response = await fetch('/api/appointment/update-status', {
      //   method: 'PATCH',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     appointmentId: bookingId,
      //     status: newStatus,
      //   }),
      // })

      // For demo purposes, we'll update the local state directly
      setBookings(bookings.map(booking => 
        booking.id === bookingId ? { ...booking, status: newStatus } : booking
      ))
    } catch (error) {
      console.error("Error updating booking status:", error)
    }
  }

  const deleteBooking = (bookingId) => {
    setBookings(bookings.filter(booking => booking.id !== bookingId))
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'bg-emerald-100 text-emerald-800'
      case 'pending': return 'bg-amber-100 text-amber-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      case 'cancelled': return 'bg-rose-100 text-rose-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredBookings = bookings.filter(booking => {
    const statusMatch = filterStatus === 'all' || booking.status === filterStatus
    const dateMatch = booking.date === filterDate
    return statusMatch && dateMatch
  })

  const totalRevenue = bookings
    .filter(booking => booking.status === 'completed')
    .reduce((sum, booking) => sum + booking.totalPrice, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-2 sm:p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 sm:mb-6 gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Appointments</h1>
              <p className="text-xs sm:text-sm text-gray-500">
                Showing appointments for {new Date(filterDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-1 sm:gap-2 bg-white border border-gray-300 text-gray-700 px-3 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-gray-50 transition-all shadow-sm text-xs sm:text-sm"
              >
                <FiFilter className="w-4 h-4" />
                <span>Filters</span>
              </button>
              <button 
                onClick={() => {
                  setShowAddForm(!showAddForm)
                  setEditingBooking(null)
                }}
                className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl text-xs sm:text-sm"
              >
                <FiPlus className="w-4 h-4" />
                <span>{showAddForm ? 'Cancel' : 'New'}</span>
              </button>
            </div>
          </div>

          {/* Enhanced Responsive Date Scroll */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <DateScroll 
              selectedDate={filterDate} 
              onDateChange={setFilterDate} 
            />
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 sm:p-4 rounded-xl border border-blue-200 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <div className="p-1 sm:p-2 rounded-lg bg-blue-100 text-blue-600">
                  <FiCalendar className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-medium text-blue-600">Total</h3>
                  <p className="text-lg sm:text-xl font-bold text-blue-900">
                    {filteredBookings.length}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-2 sm:p-4 rounded-xl border border-emerald-200 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <div className="p-1 sm:p-2 rounded-lg bg-emerald-100 text-emerald-600">
                  <FiUser className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-medium text-emerald-600">Confirmed</h3>
                  <p className="text-lg sm:text-xl font-bold text-emerald-900">
                    {filteredBookings.filter(b => b.status === 'confirmed').length}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-amber-50 to-amber-100 p-2 sm:p-4 rounded-xl border border-amber-200 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <div className="p-1 sm:p-2 rounded-lg bg-amber-100 text-amber-600">
                  <FiScissors className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-medium text-amber-600">Pending</h3>
                  <p className="text-lg sm:text-xl font-bold text-amber-900">
                    {filteredBookings.filter(b => b.status === 'pending').length}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-2 sm:p-4 rounded-xl border border-purple-200 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <div className="p-1 sm:p-2 rounded-lg bg-purple-100 text-purple-600">
                  <FiDollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-medium text-purple-600">Revenue</h3>
                  <p className="text-lg sm:text-xl font-bold text-purple-900">
                    ₹{filteredBookings
                      .filter(b => b.status === 'completed')
                      .reduce((sum, b) => sum + b.totalPrice, 0)}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Status Filter */}
          <AnimatePresence>
            {showFilters && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Status</label>
                    <div className="relative">
                      <select 
                        value={filterStatus} 
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="w-full appearance-none border border-gray-300 rounded-lg px-3 py-1 sm:px-4 sm:py-2 pr-6 sm:pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-xs sm:text-sm"
                      >
                        <option value="all">All Statuses</option>
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Add/Edit Booking Form */}
        <AnimatePresence>
          {(showAddForm || editingBooking) && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-gray-200"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                {editingBooking ? <FiEdit2 className="text-blue-600" /> : <FiPlus className="text-blue-600" />}
                <span>{editingBooking ? 'Edit Booking' : 'New Booking'}</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {/* Customer Info */}
                <div className="sm:col-span-2 lg:col-span-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={editingBooking ? editingBooking.customer.name : newBooking.customer.name}
                    onChange={(e) => editingBooking 
                      ? setEditingBooking({...editingBooking, customer: {...editingBooking.customer, name: e.target.value}})
                      : setNewBooking({...newBooking, customer: {...newBooking.customer, name: e.target.value}})
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-1 sm:px-4 sm:py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
                  />
                </div>

                {/* Phone Number */}
                <div className="sm:col-span-2 lg:col-span-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1234567890"
                    value={editingBooking ? editingBooking.customer.phone : newBooking.customer.phone}
                    onChange={(e) => editingBooking 
                      ? setEditingBooking({...editingBooking, customer: {...editingBooking.customer, phone: e.target.value}})
                      : setNewBooking({...newBooking, customer: {...newBooking.customer, phone: e.target.value}})
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-1 sm:px-4 sm:py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
                  />
                </div>
                
                {/* Services - Multi-select */}
                <div className="sm:col-span-2">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Services</label>
                  <div className="flex flex-wrap gap-2">
                    {allServices.map(service => {
                      const isSelected = editingBooking 
                        ? editingBooking.services.includes(service.name)
                        : newBooking.services.includes(service.name)
                      return (
                        <button
                          key={service.name}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-3 py-1 rounded-full text-xs sm:text-sm transition-colors ${
                            isSelected
                              ? 'bg-blue-100 text-blue-800 border border-blue-300'
                              : 'bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200'
                          }`}
                        >
                          {service.name} (₹{service.totalPrice})
                        </button>
                      )
                    })}
                  </div>
                </div>
                
                {/* Staff */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Staff</label>
                  <select
                    value={editingBooking ? editingBooking.barber : newBooking.barber}
                    onChange={(e) => editingBooking
                      ? setEditingBooking({...editingBooking, barber: e.target.value})
                      : setNewBooking({...newBooking, barber: e.target.value})
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-1 sm:px-4 sm:py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
                  >
                    <option value="">Select Staff</option>
                    {staffMembers.map(staff => (
                      <option key={staff} value={staff}>{staff}</option>
                    ))}
                  </select>
                </div>
                
                {/* Date */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={editingBooking ? editingBooking.date : newBooking.date}
                    onChange={(e) => editingBooking
                      ? setEditingBooking({...editingBooking, date: e.target.value})
                      : setNewBooking({...newBooking, date: e.target.value})
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-1 sm:px-4 sm:py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
                  />
                </div>
                
                {/* Time */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Time</label>
                  <input
                    type="time"
                    value={editingBooking ? editingBooking.time : newBooking.time}
                    onChange={(e) => editingBooking
                      ? setEditingBooking({...editingBooking, time: e.target.value})
                      : setNewBooking({...newBooking, time: e.target.value})
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-1 sm:px-4 sm:py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
                  />
                </div>
                
                {/* Total Price Display */}
                <div className="sm:col-span-2 lg:col-span-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Total Price</label>
                  <div className="w-full border border-gray-300 rounded-lg px-3 py-1 sm:px-4 sm:py-2 bg-gray-50 text-xs sm:text-sm font-medium text-gray-700">
                    ₹{editingBooking ? editingBooking.totalPrice : newBooking.totalPrice}
                  </div>
                </div>
              </div>
              
              {/* Form Actions */}
              <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
                <button
                  onClick={editingBooking ? saveEdit : addBooking}
                  className="flex-1 sm:flex-none bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl text-xs sm:text-sm font-medium"
                >
                  {editingBooking ? 'Save Changes' : 'Add Booking'}
                </button>
                <button
                  onClick={() => {
                    if (editingBooking) {
                      cancelEdit()
                    } else {
                      setShowAddForm(false)
                      setNewBooking({ 
                        customer: {name: '', phone: ''}, 
                        services: [], 
                        barber: '', 
                        date: getTodayDate(), 
                        time: '', 
                        totalPrice: 0 
                      })
                    }
                  }}
                  className="flex-1 sm:flex-none bg-gray-100 text-gray-700 px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-200 transition-all text-xs sm:text-sm font-medium"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bookings List */}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
        >
          {isLoading ? (
            <div className="p-8 sm:p-12 flex justify-center items-center">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-blue-100 h-8 w-8 sm:h-12 sm:w-12"></div>
              </div>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      {!isMobile && (
                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Services</th>
                      )}
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Barber</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <AnimatePresence>
                      {filteredBookings.reverse().map((booking, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="hover:bg-gray-50 cursor-pointer"
                          onClick={() => isMobile && toggleExpandBooking(booking.id)}
                        >
                          <td className="px-3 sm:px-6 py-4">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <FiUser className="w-4 h-4 sm:w-5 sm:h-5" />
                              </div>
                              <div className="ml-2 sm:ml-4">
                                <div className="text-xs sm:text-sm font-medium text-gray-900 truncate max-w-[100px] sm:max-w-[150px]">
                                  {booking.customer.name}
                                  {isMobile && (
                                    <span className="ml-2 text-gray-400">
                                      {expandedBooking === booking.id ? (
                                        <FiChevronUp className="inline" />
                                      ) : (
                                        <FiChevronDown className="inline" />
                                      )}
                                    </span>
                                  )}
                                </div>
                                <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                  <FiPhone className="w-2 h-2 sm:w-3 sm:h-3" />
                                  <span className="truncate max-w-[80px] sm:max-w-none">{booking.customer.phone}</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          
                          {/* Services - Hidden on mobile */}
                          {!isMobile && (
                            <td className="px-3 sm:px-6 py-4">
                              <div className="flex flex-wrap gap-1">
                                {booking.services.map(service => (
                                  <span 
                                    key={service} 
                                    className="px-2 py-1 bg-blue-50 text-blue-800 text-xs rounded-full"
                                  >
                                    {service}
                                  </span>
                                ))}
                              </div>
                             
                            </td>
                          )}
                          
                          <td className="px-3 sm:px-6 py-4">
                            <div className="text-xs sm:text-sm text-gray-900 font-medium">
                              {booking.barber}
                            </div>
                          </td>
                          <td className="px-3 sm:px-6 py-4">
                            <select
                              value={booking.status}
                              onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                              className={`text-xs rounded-lg px-2 py-1 sm:px-3 sm:py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${getStatusColor(booking.status)}`}
                            >
                              <option value="pending">Pending</option>
                              <option value="confirmed">Confirmed</option>
                              <option value="completed">Completed</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          </td>
                          <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-gray-900">
                            ₹{booking.totalPrice}
                          </td>
                          <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm space-x-1 sm:space-x-2">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation()
                                startEditing(booking)
                              }}
                              className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50 transition-colors"
                            >
                              <FiEdit2 className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                deleteBooking(booking.id)
                              }}
                              className="text-rose-600 hover:text-rose-800 p-1 rounded-full hover:bg-rose-50 transition-colors"
                            >
                              <FiTrash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
              
              {filteredBookings.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8 sm:py-12"
                >
                  <div className="mx-auto w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <FiCalendar className="w-6 h-6 sm:w-10 sm:h-10 text-gray-400" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-medium text-gray-900">No bookings found</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {filterStatus !== 'all' ? 
                      "Try adjusting your filters" : 
                      "No appointments scheduled for this date"}
                  </p>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}