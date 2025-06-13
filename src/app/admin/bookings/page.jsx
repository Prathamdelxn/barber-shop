'use client'
import { useState } from 'react'

export default function BookingsPage() {
  const [bookings, setBookings] = useState([
    { id: 1, customer: 'Alex Johnson', service: 'Haircut & Beard', staff: 'John Doe', date: '2024-06-15', time: '10:00', status: 'confirmed', price: 45, phone: '+1234567890', notes: 'Regular customer, prefers short cuts' },
    { id: 2, customer: 'Robert Brown', service: 'Classic Cut', staff: 'Mike Smith', date: '2024-06-15', time: '11:30', status: 'pending', price: 30, phone: '+1234567891', notes: 'First time customer' },
    { id: 3, customer: 'James Wilson', service: 'Styling', staff: 'David Johnson', date: '2024-06-16', time: '14:00', status: 'completed', price: 50, phone: '+1234567892', notes: 'Wedding preparation' },
    { id: 4, customer: 'Michael Davis', service: 'Beard Trim', staff: 'John Doe', date: '2024-06-16', time: '15:30', status: 'confirmed', price: 25, phone: '+1234567893', notes: 'Maintenance trim' }
  ])
  
  const [newBooking, setNewBooking] = useState({ 
    customer: '', 
    service: '', 
    staff: '', 
    date: '', 
    time: '', 
    price: '', 
    phone: '', 
    notes: '' 
  })
  
  const [showAddForm, setShowAddForm] = useState(false)
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterDate, setFilterDate] = useState('')

  const services = ['Haircut', 'Beard Trim', 'Haircut & Beard', 'Classic Cut', 'Modern Styling', 'Hair Coloring', 'Hair Washing']
  const staffMembers = ['John Doe', 'Mike Smith', 'David Johnson', 'Carlos Rodriguez']

  const addBooking = () => {
    if (newBooking.customer && newBooking.service && newBooking.staff && newBooking.date && newBooking.time && newBooking.price) {
      setBookings([...bookings, { 
        id: bookings.length + 1, 
        ...newBooking, 
        price: parseFloat(newBooking.price),
        status: 'pending' 
      }])
      setNewBooking({ customer: '', service: '', staff: '', date: '', time: '', price: '', phone: '', notes: '' })
      setShowAddForm(false)
    }
  }

  const updateBookingStatus = (bookingId, newStatus) => {
    setBookings(bookings.map(booking => 
      booking.id === bookingId ? { ...booking, status: newStatus } : booking
    ))
  }

  const deleteBooking = (bookingId) => {
    setBookings(bookings.filter(booking => booking.id !== bookingId))
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'bg-green-500'
      case 'pending': return 'bg-yellow-500'
      case 'completed': return 'bg-blue-500'
      case 'cancelled': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const filteredBookings = bookings.filter(booking => {
    const statusMatch = filterStatus === 'all' || booking.status === filterStatus
    const dateMatch = !filterDate || booking.date === filterDate
    return statusMatch && dateMatch
  })

  const totalRevenue = bookings
    .filter(booking => booking.status === 'completed')
    .reduce((sum, booking) => sum + booking.price, 0)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-800">Booking Management</h1>
            <button 
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAddForm ? 'Cancel' : 'Add New Booking'}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-blue-600">Total Bookings</h3>
              <p className="text-2xl font-bold text-blue-900">{bookings.length}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-green-600">Confirmed</h3>
              <p className="text-2xl font-bold text-green-900">
                {bookings.filter(b => b.status === 'confirmed').length}
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-yellow-600">Pending</h3>
              <p className="text-2xl font-bold text-yellow-900">
                {bookings.filter(b => b.status === 'pending').length}
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-purple-600">Revenue</h3>
              <p className="text-2xl font-bold text-purple-900">${totalRevenue}</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
              <select 
                value={filterStatus} 
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Date</label>
              <input 
                type="date" 
                value={filterDate} 
                onChange={(e) => setFilterDate(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {filterDate && (
              <div className="flex items-end">
                <button 
                  onClick={() => setFilterDate('')}
                  className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Clear Date Filter
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Add Booking Form */}
        {showAddForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Booking</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Customer Name"
                value={newBooking.customer}
                onChange={(e) => setNewBooking({...newBooking, customer: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <select
                value={newBooking.service}
                onChange={(e) => setNewBooking({...newBooking, service: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Service</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              <select
                value={newBooking.staff}
                onChange={(e) => setNewBooking({...newBooking, staff: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Staff</option>
                {staffMembers.map(staff => (
                  <option key={staff} value={staff}>{staff}</option>
                ))}
              </select>
              <input
                type="date"
                value={newBooking.date}
                onChange={(e) => setNewBooking({...newBooking, date: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="time"
                value={newBooking.time}
                onChange={(e) => setNewBooking({...newBooking, time: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                placeholder="Price"
                value={newBooking.price}
                onChange={(e) => setNewBooking({...newBooking, price: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={newBooking.phone}
                onChange={(e) => setNewBooking({...newBooking, phone: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Notes"
                value={newBooking.notes}
                onChange={(e) => setNewBooking({...newBooking, notes: e.target.value})}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mt-4">
              <button 
                onClick={addBooking}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Add Booking
              </button>
            </div>
          </div>
        )}

        {/* Bookings Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{booking.customer}</div>
                        {booking.notes && (
                          <div className="text-sm text-gray-500 max-w-xs truncate" title={booking.notes}>
                            {booking.notes}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.service}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.staff}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div>{booking.date}</div>
                      <div className="text-gray-500">{booking.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      ${booking.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <select
                        value={booking.status}
                        onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                        className="text-xs border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                      <button
                        onClick={() => deleteBooking(booking.id)}
                        className="text-red-600 hover:text-red-900 font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredBookings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No bookings found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}