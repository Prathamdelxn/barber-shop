'use client'

import { useState } from 'react'

export default function StaffPage() {
  const [staff, setStaff] = useState([
    { id: 1, name: 'John Doe', speciality: 'Classic Cuts', experience: '5 years', status: 'active', rating: 4.8, phone: '+1234567890', email: 'john@barbershop.com', joinDate: '2019-03-15', totalServices: 1250 },
    { id: 2, name: 'Mike Smith', speciality: 'Beard Styling', experience: '3 years', status: 'active', rating: 4.6, phone: '+1234567891', email: 'mike@barbershop.com', joinDate: '2021-06-20', totalServices: 890 },
    { id: 3, name: 'David Johnson', speciality: 'Modern Styles', experience: '7 years', status: 'inactive', rating: 4.9, phone: '+1234567892', email: 'david@barbershop.com', joinDate: '2017-01-10', totalServices: 2100 },
    { id: 4, name: 'Carlos Rodriguez', speciality: 'Hair Coloring', experience: '4 years', status: 'active', rating: 4.7, phone: '+1234567893', email: 'carlos@barbershop.com', joinDate: '2020-09-12', totalServices: 950 }
  ])

  const [newStaff, setNewStaff] = useState({ 
    name: '', 
    speciality: '', 
    experience: '', 
    phone: '', 
    email: '' 
  })

  const [showAddForm, setShowAddForm] = useState(false)
  const [selectedStaff, setSelectedStaff] = useState(null)

  const addStaff = () => {
    if (newStaff.name && newStaff.speciality && newStaff.experience && newStaff.phone && newStaff.email) {
      setStaff([...staff, { 
        id: staff.length + 1, 
        ...newStaff, 
        status: 'active', 
        rating: 4.5,
        joinDate: new Date().toISOString().split('T')[0],
        totalServices: 0
      }])
      setNewStaff({ name: '', speciality: '', experience: '', phone: '', email: '' })
      setShowAddForm(false)
    }
  }

  const toggleStaffStatus = (staffId) => {
    setStaff(staff.map(member => 
      member.id === staffId 
        ? { ...member, status: member.status === 'active' ? 'inactive' : 'active' }
        : member
    ))
  }

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-500' : 'bg-red-500'
  }

  const specialities = ['Classic Cuts', 'Modern Styles', 'Beard Styling', 'Hair Coloring', 'Hair Washing', 'Styling']

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">👥 Staff Management</h2>
          <p className="text-purple-200 mt-1">Manage your barber shop team</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
        >
          <span>➕</span>
          <span>Add New Staff</span>
        </button>
      </div>

      {/* Add Staff Form */}
      {showAddForm && (
        <div className="glass-effect rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Add New Staff Member</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={newStaff.name}
              onChange={(e) => setNewStaff({...newStaff, name: e.target.value})}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <select
              value={newStaff.speciality}
              onChange={(e) => setNewStaff({...newStaff, speciality: e.target.value})}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Speciality</option>
              {specialities.map(spec => (
                <option key={spec} value={spec} className="bg-slate-800">{spec}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Experience (e.g., 3 years)"
              value={newStaff.experience}
              onChange={(e) => setNewStaff({...newStaff, experience: e.target.value})}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={newStaff.phone}
              onChange={(e) => setNewStaff({...newStaff, phone: e.target.value})}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={newStaff.email}
              onChange={(e) => setNewStaff({...newStaff, email: e.target.value})}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="flex space-x-2">
              <button
                onClick={addStaff}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Add Staff
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((member) => (
          <div key={member.id} className="glass-effect rounded-xl p-6 card-hover border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{member.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(member.status)} text-white`}>
                    {member.status}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedStaff(selectedStaff === member.id ? null : member.id)}
                className="text-purple-200 hover:text-white transition-colors"
              >
                ⋮
              </button>
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-purple-200 flex items-center"><span className="mr-2">🎯</span> {member.speciality}</p>
              <p className="text-purple-200 flex items-center"><span className="mr-2">⏱️</span> {member.experience}</p>
              <p className="text-purple-200 flex items-center"><span className="mr-2">📞</span> {member.phone}</p>
              <p className="text-purple-200 flex items-center"><span className="mr-2">📧</span> {member.email}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <p className="text-yellow-400 font-bold text-lg">{member.rating}</p>
                <p className="text-purple-200 text-xs">Rating</p>
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-lg">{member.totalServices}</p>
                <p className="text-purple-200 text-xs">Services</p>
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => toggleStaffStatus(member.id)}
                className={`flex-1 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                  member.status === 'active' 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {member.status === 'active' ? 'Deactivate' : 'Activate'}
              </button>
              <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300">
                Edit
              </button>
            </div>

            {selectedStaff === member.id && (
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-purple-200 text-sm">
                  <span className="font-medium">Joined:</span> {new Date(member.joinDate).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Staff Statistics */}
      <div className="glass-effect rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-6">📊 Staff Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">{staff.length}</p>
            <p className="text-purple-200">Total Staff</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-400">{staff.filter(s => s.status === 'active').length}</p>
            <p className="text-purple-200">Active Staff</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-400">
              {(staff.reduce((sum, s) => sum + s.rating, 0) / staff.length).toFixed(1)}
            </p>
            <p className="text-purple-200">Avg Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">
              {staff.reduce((sum, s) => sum + s.totalServices, 0)}
            </p>
            <p className="text-purple-200">Total Services</p>
          </div>
        </div>
      </div>
    </div>
  )
}