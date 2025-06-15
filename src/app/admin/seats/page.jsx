'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUser, FiPlus, FiEdit2, FiTrash2, FiCheck, FiX } from 'react-icons/fi'

export default function SeatsPage() {
  const [seats, setSeats] = useState([
    { id: 1, number: 'Seat 1', status: 'available', customer: null },
    { id: 2, number: 'Seat 2', status: 'occupied', customer: 'John Doe' },
    { id: 3, number: 'Seat 3', status: 'maintenance', customer: null },
    { id: 4, number: 'Seat 4', status: 'available', customer: null },
    { id: 5, number: 'Seat 5', status: 'occupied', customer: 'Mike Smith' },
    { id: 6, number: 'Seat 6', status: 'available', customer: null },
  ])

  const [newSeat, setNewSeat] = useState({
    number: '',
    status: 'available'
  })

  const [showAddForm, setShowAddForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  const addSeat = () => {
    if (newSeat.number) {
      setSeats([...seats, { 
        id: seats.length + 1, 
        ...newSeat,
        customer: null
      }])
      setNewSeat({ number: '', status: 'available' })
      setShowAddForm(false)
    }
  }

  const toggleSeatStatus = (seatId, newStatus) => {
    setSeats(seats.map(seat => 
      seat.id === seatId 
        ? { ...seat, status: newStatus } 
        : seat
    ))
  }

  const deleteSeat = (seatId) => {
    setSeats(seats.filter(seat => seat.id !== seatId))
  }

  const getStatusColor = (status) => {
    const colors = {
      'available': 'bg-green-100 text-green-800',
      'occupied': 'bg-red-100 text-red-800',
      'maintenance': 'bg-yellow-100 text-yellow-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Seats Management</h1>
            <p className="text-gray-600 mt-1">Manage your barber shop seating arrangement</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAddForm(!showAddForm)}
            className="mt-4 md:mt-0 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <FiPlus className="w-5 h-5" />
            <span>Add New Seat</span>
          </motion.button>
        </motion.div>

        {/* Add Seat Form */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 overflow-hidden"
            >
              <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-6 border border-gray-200 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FiUser className="text-blue-500" />
                  <span>New Seat</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Seat Number</label>
                    <input
                      type="text"
                      placeholder="e.g., Seat 7"
                      value={newSeat.number}
                      onChange={(e) => setNewSeat({...newSeat, number: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Initial Status</label>
                    <select
                      value={newSeat.status}
                      onChange={(e) => setNewSeat({...newSeat, status: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      <option value="available">Available</option>
                      <option value="occupied">Occupied</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowAddForm(false)}
                    className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={addSeat}
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md"
                  >
                    Add Seat
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Seats Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="backdrop-blur-sm bg-white/80 rounded-2xl p-6 border border-gray-200 shadow-lg mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <FiUser className="text-blue-500" />
            <span>Seats Overview</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 shadow-sm"
            >
              <p className="text-3xl font-bold text-blue-800">{seats.length}</p>
              <p className="text-blue-600 text-sm">Total Seats</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200 shadow-sm"
            >
              <p className="text-3xl font-bold text-green-800">
                {seats.filter(s => s.status === 'available').length}
              </p>
              <p className="text-green-600 text-sm">Available</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200 shadow-sm"
            >
              <p className="text-3xl font-bold text-red-800">
                {seats.filter(s => s.status === 'occupied').length}
              </p>
              <p className="text-red-600 text-sm">Occupied</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl border border-yellow-200 shadow-sm"
            >
              <p className="text-3xl font-bold text-yellow-800">
                {seats.filter(s => s.status === 'maintenance').length}
              </p>
              <p className="text-yellow-600 text-sm">Maintenance</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Seats Grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="backdrop-blur-sm bg-white/80 rounded-xl p-4 border border-gray-200 h-32 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <AnimatePresence>
              {seats.map((seat) => (
                <motion.div
                  key={seat.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className={`backdrop-blur-sm bg-white/80 rounded-xl p-4 border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 flex flex-col items-center justify-center ${
                    seat.status === 'available' ? 'hover:bg-green-50' :
                    seat.status === 'occupied' ? 'hover:bg-red-50' :
                    'hover:bg-yellow-50'
                  }`}
                >
                  <div className="text-lg font-semibold text-gray-800 mb-2">{seat.number}</div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium mb-3 ${getStatusColor(seat.status)}`}>
                    {seat.status}
                  </div>
                  
                  {seat.customer && (
                    <div className="text-sm text-gray-600 text-center mb-3">
                      <FiUser className="inline mr-1" />
                      {seat.customer}
                    </div>
                  )}

                  <div className="flex gap-2 w-full">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleSeatStatus(seat.id, 'available')}
                      className={`flex-1 p-1 rounded-lg ${seat.status === 'available' ? 'bg-green-500 text-white' : 'bg-green-100 text-green-800'}`}
                    >
                      <FiCheck className="mx-auto" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleSeatStatus(seat.id, 'occupied')}
                      className={`flex-1 p-1 rounded-lg ${seat.status === 'occupied' ? 'bg-red-500 text-white' : 'bg-red-100 text-red-800'}`}
                    >
                      <FiUser className="mx-auto" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleSeatStatus(seat.id, 'maintenance')}
                      className={`flex-1 p-1 rounded-lg ${seat.status === 'maintenance' ? 'bg-yellow-500 text-white' : 'bg-yellow-100 text-yellow-800'}`}
                    >
                      <FiX className="mx-auto" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}