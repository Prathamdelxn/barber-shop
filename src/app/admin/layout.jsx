// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { FiHome, FiUsers, FiCalendar, FiClock, FiPieChart, FiScissors, FiUser, FiSettings } from 'react-icons/fi'

// export default function AdminLayout({ children }) {
//   const pathname = usePathname()

//   const navigation = [
//     { name: 'Dashboard', href: '/admin', icon: <FiHome className="w-5 h-5" /> },
//     { name: 'Staff', href: '/admin/staff', icon: <FiUsers className="w-5 h-5" /> },
//     // { name: 'Bookings', href: '/admin/bookings', icon: <FiCalendar className="w-5 h-5" /> },
//     // { name: 'Seats', href: '/admin/seats', icon: <FiUser className="w-5 h-5" /> },
//     // { name: 'Timing', href: '/admin/timing', icon: <FiClock className="w-5 h-5" /> },
//     // { name: 'Analytics', href: '/admin/analytics', icon: <FiPieChart className="w-5 h-5" /> },
//     { name: 'Services', href: '/admin/services', icon: <FiScissors className="w-5 h-5" /> },
//     { name: 'Customers', href: '/admin/customers', icon: <FiUser className="w-5 h-5" /> },
//     { name: 'Settings', href: '/admin/settings', icon: <FiSettings className="w-5 h-5" /> },
//   ]

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800">
//       {/* Header */}
//       <div className="p-6 pb-0">
//         <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
//             <div className="mb-4 md:mb-0">
//               <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
//                 Elite Barber Shop
//               </h1>
//               <p className="text-gray-500 mt-1">Professional Management Dashboard</p>
//             </div>
//             <div className="flex flex-col items-end">
//               <p className="text-lg font-medium text-gray-700">
//                 {new Date().toLocaleDateString('en-US', { 
//                   weekday: 'long', 
//                   year: 'numeric', 
//                   month: 'long', 
//                   day: 'numeric' 
//                 })}
//               </p>
//               <p className="text-gray-500">
//                 {new Date().toLocaleTimeString('en-US', {
//                   hour: '2-digit',
//                   minute: '2-digit',
//                   hour12: true
//                 })}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="p-6 pb-0">
//         <div className="bg-white rounded-xl p-2 border border-gray-200 shadow-sm">
//           <div className="flex flex-wrap justify-around gap-2">
//             {navigation.map((item) => {
//               const isActive = pathname === item.href
//               return (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
//                     isActive 
//                       ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-md' 
//                       : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
//                   }`}
//                 >
//                   <span className="text-lg">{item.icon}</span>
//                   <span>{item.name}</span>
//                 </Link>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="p-6">
//         <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm min-h-[calc(100vh-260px)]">
//           {children}
//         </div>
//       </div>
//     </div>
//   )
// }



'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { 
  FiHome, 
  FiUsers, 
  FiCalendar, 
  FiClock, 
  FiPieChart, 
  FiScissors, 
  FiUser, 
  FiSettings 
} from 'react-icons/fi'
import { useAuth } from '@/context/AuthContext';
export default function AdminLayout({ children }) {
  
  const router = useRouter()
  const pathname = usePathname()
  const { token, logout } = useAuth();
  // console.log(token)
useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'));
console.log("Asdf", user);
  if (!token && user?.role!=="Barber") {
    router.push('/auth')  // redirect to login page
  }
}, [token])
  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: <FiHome className="w-5 h-5" /> },
    { name: 'Staff', href: '/admin/staff', icon: <FiUsers className="w-5 h-5" /> },
    { name: 'Services', href: '/admin/services', icon: <FiScissors className="w-5 h-5" /> },
    { name: 'Customers', href: '/admin/customers', icon: <FiUser className="w-5 h-5" /> },
    { name: 'Settings', href: '/admin/settings', icon: <FiSettings className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pb-20 md:pb-0">
      {/* Header */}
      <div className="p-6 pb-0">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                Elite Barber Shop
              </h1>
              <p className="text-gray-500 mt-1">Professional Management Dashboard</p>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex flex-col items-end"
            >
              <p className="text-lg font-medium text-gray-700">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-gray-500">
                {new Date().toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                })}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block p-6 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl p-2 border border-gray-200 shadow-sm"
        >
          <div className="flex flex-wrap justify-around gap-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-md' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Mobile Bottom Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
      >
        <div className="flex justify-around items-center p-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative p-3 rounded-full flex flex-col items-center transition-all duration-300 ${
                  isActive ? 'text-white' : 'text-gray-600'
                }`}
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="mobile-nav-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full -z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                </AnimatePresence>
                <span className="text-xl">{item.icon}</span>
                <span className={`text-xs mt-1 transition-all duration-200 ${
                  isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0 absolute'
                }`}>
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="p-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-2xl p-2 border border-gray-200 shadow-sm min-h-[calc(100vh-260px)]"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}