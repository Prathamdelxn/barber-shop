'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUser, FiMail, FiPhone, FiCalendar, FiEdit2, FiTrash2, FiPlus, FiSearch } from 'react-icons/fi'

export default function CustomersPage() {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Smith', email: 'john@example.com', phone: '+1234567890', joinDate: '2023-01-15', visits: 12, lastVisit: '2023-05-20' },
    { id: 2, name: 'Michael Johnson', email: 'michael@example.com', phone: '+1234567891', joinDate: '2022-11-05', visits: 8, lastVisit: '2023-04-15' },
    { id: 3, name: 'Robert Williams', email: 'robert@example.com', phone: '+1234567892', joinDate: '2023-02-28', visits: 5, lastVisit: '2023-05-10' },
    { id: 4, name: 'David Brown', email: 'david@example.com', phone: '+1234567893', joinDate: '2022-09-12', visits: 18, lastVisit: '2023-05-18' },
    { id: 5, name: 'James Wilson', email: 'james@example.com', phone: '+1234567894', joinDate: '2023-03-22', visits: 3, lastVisit: '2023-05-05' },
  ])

  const [newCustomer, setNewCustomer] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
  })

  const [showAddForm, setShowAddForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])


 
  const addCustomer = () => {
    if (newCustomer.name && newCustomer.email && newCustomer.phone) {
      if (editingId) {
        setCustomers(customers.map(customer => 
          customer.id === editingId ? { 
            ...newCustomer, 
            id: editingId,
            joinDate: customers.find(c => c.id === editingId)?.joinDate || new Date().toISOString().split('T')[0],
            visits: customers.find(c => c.id === editingId)?.visits || 0,
            lastVisit: customers.find(c => c.id === editingId)?.lastVisit || null
          } : customer
        ))
        setEditingId(null)
      } else {
        setCustomers([{ 
          id: customers.length + 1, 
          ...newCustomer,
          joinDate: new Date().toISOString().split('T')[0],
          visits: 0,
          lastVisit: null
        }, ...customers])
      }
      setNewCustomer({ name: '', email: '', phone: '' })
      setShowAddForm(false)
    }
  }

  const editCustomer = (customer) => {
    setNewCustomer({
      name: customer.name,
      email: customer.email,
      phone: customer.phone
    })
    setEditingId(customer.id)
    setShowAddForm(true)
  }

  const deleteCustomer = (customerId) => {
    setCustomers(customers.filter(customer => customer.id !== customerId))
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Never'
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  const getRandomColor = (id) => {
    const colors = [
      'bg-blue-100 text-blue-800',
      'bg-green-100 text-green-800',
      'bg-purple-100 text-purple-800',
      'bg-amber-100 text-amber-800',
      'bg-pink-100 text-pink-800',
      'bg-indigo-100 text-indigo-800'
    ]
    return colors[id % colors.length]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6"
        >
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Customer Management</h1>
            <p className="text-gray-600 text-sm md:text-base mt-1">Manage your barber shop customers</p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setNewCustomer({ name: '', email: '', phone: '' })
                setEditingId(null)
                setShowAddForm(true)
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg font-medium shadow hover:shadow-md transition-all"
            >
              <FiPlus className="w-4 h-4" />
              <span>Add Customer</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Customer Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
          >
            <p className="text-2xl font-bold text-blue-600">{customers.length}</p>
            <p className="text-blue-500 text-sm">Total Customers</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
          >
            <p className="text-2xl font-bold text-green-600">
              {customers.filter(c => c.visits > 0).length}
            </p>
            <p className="text-green-500 text-sm">Active Customers</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
          >
            <p className="text-2xl font-bold text-purple-600">
              {Math.round(customers.reduce((sum, c) => sum + c.visits, 0) / customers.length) || 0}
            </p>
            <p className="text-purple-500 text-sm">Avg Visits</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
          >
            <p className="text-2xl font-bold text-amber-600">
              {formatDate(customers.sort((a, b) => new Date(b.lastVisit) - new Date(a.lastVisit))[0]?.lastVisit)}
            </p>
            <p className="text-amber-500 text-sm">Last Visit</p>
          </motion.div>
        </motion.div>

        {/* Add/Edit Customer Form */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 overflow-hidden"
            >
              <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FiUser className="text-blue-500" />
                  <span>{editingId ? 'Edit Customer' : 'Add New Customer'}</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={newCustomer.name}
                      onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={newCustomer.email}
                      onChange={(e) => setNewCustomer({...newCustomer, email: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                    <input
                      type="tel"
                      placeholder="+1234567890"
                      value={newCustomer.phone}
                      onChange={(e) => setNewCustomer({...newCustomer, phone: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-end gap-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={addCustomer}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md"
                  >
                    {editingId ? 'Update' : 'Add Customer'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Customers Table */}
        {isLoading ? (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-4 border border-gray-200 h-20 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member Since</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visits</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Visit</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <AnimatePresence>
                    {filteredCustomers.map((customer) => (
                      <motion.tr
                        key={customer.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${getRandomColor(customer.id)}`}>
                              {getInitials(customer.name)}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{customer.email}</div>
                          <div className="text-sm text-gray-500">{customer.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(customer.joinDate)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            customer.visits > 10 ? 'bg-green-100 text-green-800' :
                            customer.visits > 5 ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {customer.visits} {customer.visits === 1 ? 'visit' : 'visits'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(customer.lastVisit)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button
                              onClick={() => editCustomer(customer)}
                              className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                            >
                              <FiEdit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteCustomer(customer.id)}
                              className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                            >
                              <FiTrash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>

            {filteredCustomers.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8 text-center"
              >
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <FiUser className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">No customers found</h3>
                <p className="text-gray-600 mb-4">
                  {searchTerm ? 'Try a different search term' : 'Add your first customer to get started'}
                </p>
                {!searchTerm && (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setNewCustomer({ name: '', email: '', phone: '' })
                      setEditingId(null)
                      setShowAddForm(true)
                    }}
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                  >
                    <FiPlus className="inline mr-1.5" />
                    Add Customer
                  </motion.button>
                )}
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}