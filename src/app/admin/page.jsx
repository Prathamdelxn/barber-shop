'use client'

import { useState } from 'react'
import { FiCalendar, FiUsers, FiDollarSign, FiStar, FiClock, FiPlus, FiUser, FiPieChart } from 'react-icons/fi'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', revenue: 1200 },
  { name: 'Tue', revenue: 1900 },
  { name: 'Wed', revenue: 1500 },
  { name: 'Thu', revenue: 2100 },
  { name: 'Fri', revenue: 2800 },
  { name: 'Sat', revenue: 2200 },
  { name: 'Sun', revenue: 1800 },
]

export default function AdminDashboard() {
  const [stats] = useState({
    totalBookings: 25,
    todayBookings: 8,
    activeStaff: 5,
    occupiedSeats: 3,
    revenue: 1250,
    weeklyRevenue: 8500,
    monthlyRevenue: 35000,
    customerSatisfaction: 4.8
  })

  const [recentBookings] = useState([
    { id: 1, customer: 'Alex Johnson', service: 'Haircut & Beard', staff: 'John Doe', time: '10:00 AM', status: 'confirmed' },
    { id: 2, customer: 'Robert Brown', service: 'Classic Cut', staff: 'Mike Smith', time: '11:30 AM', status: 'pending' },
    { id: 3, customer: 'James Wilson', service: 'Styling', staff: 'David Johnson', time: '2:00 PM', status: 'completed' },
    { id: 4, customer: 'Michael Davis', service: 'Beard Trim', staff: 'John Doe', time: '3:30 PM', status: 'confirmed' }
  ])

  const [quickActions] = useState([
    { name: 'New Booking', icon: <FiCalendar className="w-6 h-6" />, color: 'from-blue-600 to-indigo-600', href: '/admin/bookings' },
    { name: 'Add Staff', icon: <FiUsers className="w-6 h-6" />, color: 'from-emerald-600 to-teal-600', href: '/admin/staff' },
    { name: 'Manage Seats', icon: <FiUser className="w-6 h-6" />, color: 'from-amber-600 to-orange-600', href: '/admin/seats' },
    { name: 'View Analytics', icon: <FiPieChart className="w-6 h-6" />, color: 'from-rose-600 to-pink-600', href: '/admin/analytics' }
  ])

  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'bg-emerald-500 text-emerald-100'
      case 'pending': return 'bg-amber-500 text-amber-100'
      case 'completed': return 'bg-blue-500 text-blue-100'
      default: return 'bg-gray-500 text-gray-100'
    }
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Today's Bookings</p>
              <p className="text-3xl font-bold text-white mt-1">{stats.todayBookings}</p>
              <p className="text-emerald-400 text-xs mt-2 flex items-center">
                <span className="inline-block w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-emerald-400 mr-1"></span>
                +12% from yesterday
              </p>
            </div>
            <div className="p-3 rounded-lg bg-blue-900/20 text-blue-400">
              <FiCalendar className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Active Staff</p>
              <p className="text-3xl font-bold text-white mt-1">{stats.activeStaff}</p>
              <p className="text-blue-400 text-xs mt-2">All available</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-900/20 text-emerald-400">
              <FiUsers className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Occupied Seats</p>
              <p className="text-3xl font-bold text-white mt-1">{stats.occupiedSeats}/6</p>
              <p className="text-amber-400 text-xs mt-2">3 available</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-900/20 text-amber-400">
              <FiUser className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Today's Revenue</p>
              <p className="text-3xl font-bold text-white mt-1">${stats.revenue}</p>
              <p className="text-emerald-400 text-xs mt-2 flex items-center">
                <span className="inline-block w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-emerald-400 mr-1"></span>
                +8% from yesterday
              </p>
            </div>
            <div className="p-3 rounded-lg bg-purple-900/20 text-purple-400">
              <FiDollarSign className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-900/20 text-blue-400">
              <FiDollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">Weekly Revenue</h3>
          </div>
          <p className="text-3xl font-bold text-white">${stats.weeklyRevenue}</p>
          <p className="text-emerald-400 text-sm mt-2">+15% from last week</p>
        </div>

        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-purple-900/20 text-purple-400">
              <FiDollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">Monthly Revenue</h3>
          </div>
          <p className="text-3xl font-bold text-white">${stats.monthlyRevenue}</p>
          <p className="text-emerald-400 text-sm mt-2">+22% from last month</p>
        </div>

        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-amber-900/20 text-amber-400">
              <FiStar className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">Customer Rating</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-white">{stats.customerSatisfaction}</p>
            <p className="text-gray-400">/5</p>
          </div>
          <p className="text-amber-400 text-sm mt-2">Excellent service</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-rose-900/20 text-rose-400">
            <FiPlus className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.name}
              className={`p-5 rounded-xl bg-gradient-to-r ${action.color} text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex flex-col items-start`}
            >
              <div className="p-2 rounded-lg bg-white/10 mb-3">
                {action.icon}
              </div>
              <div className="text-left">{action.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-emerald-900/20 text-emerald-400">
            <FiClock className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
        </div>
        <div className="space-y-3">
          {recentBookings.map((booking) => (
            <div 
              key={booking.id} 
              className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200 border border-gray-700/50"
            >
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(booking.status).split(' ')[0]}`}></div>
                <div>
                  <p className="text-white font-medium">{booking.customer}</p>
                  <p className="text-gray-400 text-sm">{booking.service} • {booking.staff}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-300">{booking.time}</p>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-purple-900/20 text-purple-400">
            <FiPieChart className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-white">Weekly Performance</h3>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9CA3AF' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9CA3AF' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937',
                  borderColor: '#374151',
                  borderRadius: '0.5rem',
                }}
                itemStyle={{ color: '#E5E7EB' }}
                labelStyle={{ color: '#9CA3AF', fontWeight: 'bold' }}
              />
              <Bar 
                dataKey="revenue" 
                radius={[4, 4, 0, 0]} 
                gradientTransform="rotate(90)"
              >
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}