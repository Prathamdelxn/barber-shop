'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiHome, FiUsers, FiCalendar, FiClock, FiPieChart, FiScissors, FiUser, FiSettings } from 'react-icons/fi'

export default function AdminLayout({ children }) {
  const pathname = usePathname()

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: <FiHome className="w-5 h-5" /> },
    { name: 'Staff', href: '/admin/staff', icon: <FiUsers className="w-5 h-5" /> },
    { name: 'Bookings', href: '/admin/bookings', icon: <FiCalendar className="w-5 h-5" /> },
    { name: 'Seats', href: '/admin/seats', icon: <FiUser className="w-5 h-5" /> },
    { name: 'Timing', href: '/admin/timing', icon: <FiClock className="w-5 h-5" /> },
    { name: 'Analytics', href: '/admin/analytics', icon: <FiPieChart className="w-5 h-5" /> },
    { name: 'Services', href: '/admin/services', icon: <FiScissors className="w-5 h-5" /> },
    { name: 'Customers', href: '/admin/customers', icon: <FiUser className="w-5 h-5" /> }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <div className="p-6 pb-0">
        <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Elite Barber Shop
              </h1>
              <p className="text-gray-400 mt-1">Professional Management Dashboard</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-xl font-semibold text-white">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-gray-400">
                {new Date().toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6 pb-0">
        <div className="bg-gray-800/80 backdrop-blur-lg rounded-xl p-2 border border-gray-700/50 shadow-lg">
          <div className="flex flex-wrap gap-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-lg min-h-[calc(100vh-260px)]">
          {children}
        </div>
      </div>
    </div>
  )
}