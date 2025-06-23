

'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCalendar, FiUser, FiScissors, FiDollarSign,FiChevronDown, FiChevronUp, FiPhone, FiEdit2, FiTrash2, FiPlus, FiFilter, FiX, FiCheck } from 'react-icons/fi'
import React from 'react'
export default function BookingsPage() {
  const [bookings, setBookings] = useState([
    { 
      id: 1, 
      customer: {name:'Alex Johnson',phone:'+1234567890'}, 
      services: ['Haircut', 'Beard Trim'], 
      barber: 'John Doe', 
      date: '2024-06-15', 
      time: '10:00', 
      status: 'confirmed', 
      totalPrice: 40, 
       
      
    },
    // { 
    //   id: 2, 
    //   customer: 'Robert Brown', 
    //   services: ['Classic Cut'], 
    //   staff: 'Mike Smith', 
    //   date: '2024-06-15', 
    //   time: '11:30', 
    //   status: 'pending', 
    //   price: 30, 
    //   phone: '+1234567891', 
    //   notes: 'First time customer' 
    // },
    // { 
    //   id: 3, 
    //   customer: 'James Wilson', 
    //   services: ['Hair Coloring', 'Hair Washing'], 
    //   staff: 'David Johnson', 
    //   date: '2024-06-16', 
    //   time: '14:00', 
    //   status: 'completed', 
    //   price: 50, 
    //   phone: '+1234567892', 
    //   notes: 'Wedding preparation' 
    // }
  ])
  
  const fetchAppointment=async()=>{

    const res = await fetch("/api/appointment/fetchAll");
    const response = await res.json();
    const data = response.data
console.log(data);
setBookings(data);
  }

  useEffect(()=>{
fetchAppointment();
  },[])
  const [newBooking, setNewBooking] = useState({ 
    customer: '', 
    services: [], 
    staff: '', 
    date: '', 
    time: '', 
    price: 0, 
    phone: '', 
    notes: '' 
  })
  
  const [editingBooking, setEditingBooking] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterDate, setFilterDate] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
 const [expandedBooking, setExpandedBooking] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // Tailwind's md breakpoint
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleExpandBooking = (bookingId) => {
    setExpandedBooking(expandedBooking === bookingId ? null : bookingId)
  }
  const allServices = [
    { name: 'Haircut', price: 25 },
    { name: 'Beard Trim', price: 15 },
    { name: 'Hair Coloring', price: 40 },
    { name: 'Hair Washing', price: 10 },
    { name: 'Styling', price: 20 },
    { name: 'Head Massage', price: 15 }
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
        price: calculatePrice(updatedServices)
      })
    } else {
      const updatedServices = newBooking.services.includes(service.name)
        ? newBooking.services.filter(s => s !== service.name)
        : [...newBooking.services, service.name]
      
      setNewBooking({
        ...newBooking,
        services: updatedServices,
        price: calculatePrice(updatedServices)
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
      setNewBooking({ customer: '', services: [], staff: '', date: '', time: '', price: 0, phone: '', notes: '' })
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

  // const updateBookingStatus = (bookingId, newStatus) => {
  //   console.log(bookingId)
  //   setBookings(bookings.map(booking => 
  //     booking.id === bookingId ? { ...booking, status: newStatus } : booking
  //   ))
  // }

  const updateBookingStatus = async (bookingId, newStatus) => {
  console.log("Updating booking:", bookingId, "to status:", newStatus);

  try {
    const response = await fetch('/api/appointment/update-status', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appointmentId: bookingId,
        status: newStatus,
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      // Update local state after successful API update
      setBookings(bookings.map(booking => 
        booking._id === bookingId ? { ...booking, status: newStatus } : booking
      ));
    } else {
      console.error("Failed to update status:", result.error);
    }
  } catch (error) {
    console.error("Error updating booking status:", error);
  }
};


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
    const dateMatch = !filterDate || booking.date === filterDate
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
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Bookings</h1>
              <p className="text-xs sm:text-sm text-gray-500">Manage all salon appointments</p>
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
                  <p className="text-lg sm:text-xl font-bold text-blue-900">{bookings.length}</p>
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
                    {bookings.filter(b => b.status === 'confirmed').length}
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
                    {bookings.filter(b => b.status === 'pending').length}
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
                  <p className="text-lg sm:text-xl font-bold text-purple-900">${totalRevenue}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4 p-2 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-1">
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
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 sm:px-2 text-gray-700">
                        <svg className="fill-current h-3 w-3 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Date</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        value={filterDate} 
                        onChange={(e) => setFilterDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1 sm:px-4 sm:py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
                      />
                      {filterDate && (
                        <button 
                          onClick={() => setFilterDate('')}
                          className="absolute right-1 sm:right-2 top-1 sm:top-2 text-gray-400 hover:text-gray-600"
                        >
                          <FiX className="w-4 h-4" />
                        </button>
                      )}
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
                      ? setEditingBooking({...editingBooking, customer: e.target.value})
                      : setNewBooking({...newBooking, customer: e.target.value})
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
                          {service.name} (${service.totalPrice})
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
                      ? setEditingBooking({...editingBooking, staff: e.target.value})
                      : setNewBooking({...newBooking, staff: e.target.value})
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
                
                {/* Price (auto-calculated) */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                  <input
                    type="number"
                    value={editingBooking ? editingBooking.totalPrice : newBooking.totalPrice}
                    readOnly
                    className="w-full border border-gray-300 rounded-lg px-3 py-1 sm:px-4 sm:py-2 bg-gray-50 text-xs sm:text-sm"
                  />
                </div>
                
                {/* Phone */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="+1234567890"
                    value={editingBooking ? editingBooking.customer.phone : newBooking.customer.phone}
                    onChange={(e) => editingBooking
                      ? setEditingBooking({...editingBooking, phone: e.target.value})
                      : setNewBooking({...newBooking, phone: e.target.value})
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-1 sm:px-4 sm:py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
                  />
                </div>
                
                {/* Notes */}
               
              </div>
              
              <div className="mt-4 sm:mt-6 flex justify-end gap-2 sm:gap-3">
                <button 
                  onClick={editingBooking ? cancelEdit : () => setShowAddForm(false)}
                  className="px-4 sm:px-6 py-1 sm:py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-xs sm:text-sm"
                >
                  Cancel
                </button>
                <button 
                  onClick={editingBooking ? saveEdit : addBooking}
                  className="px-4 sm:px-6 py-1 sm:py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md text-xs sm:text-sm"
                >
                  {editingBooking ? (
                    <>
                      <FiCheck className="inline mr-1" />
                      Save Changes
                    </>
                  ) : 'Create Booking'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bookings Table */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
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
                      {/* <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Services</th> */}
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
          <AnimatePresence>
            {filteredBookings.map((booking,index) => (
              <React.Fragment key={booking.id}>
                <motion.tr 
                  // key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
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
                      <div className="text-xs text-gray-500 mt-1">{booking.barber}</div>
                    </td>
                  )}
                  
                  <td className="px-3 sm:px-6 py-4">
                    <div className="text-xs sm:text-sm text-gray-900 font-medium">
                      {new Date(booking.date).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="text-xs text-gray-500">
                      {booking.time}
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-4">
                    <select
                      value={booking.status}
                      onChange={(e) => updateBookingStatus(booking._id, e.target.value)}
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

                {/* Expanded services for mobile */}
                {isMobile && expandedBooking === booking.id && (
                  <motion.tr
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gray-50"
                  >
                    <td colSpan="6" className="px-3 sm:px-6 py-2">
                      <div className="flex flex-col gap-2">
                        <div className="font-medium text-xs text-gray-700">Services:</div>
                        <div className="flex flex-wrap gap-1">
                          {booking.services.map(service => (
                            <span 
                              key={service} 
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                        <div className="text-xs text-gray-700">
                          <span className="font-medium">Staff:</span> {booking.barber}
                        </div>
                       
                      </div>
                    </td>
                  </motion.tr>
                )}
              </React.Fragment>
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
                    {filterStatus !== 'all' || filterDate ? 
                      "Try adjusting your filters" : 
                      "Create your first booking"}
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