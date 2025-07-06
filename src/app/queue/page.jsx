// 'use client'
// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FiCalendar, FiClock, FiUser, FiScissors, FiChevronLeft, FiChevronRight, FiPhone, FiDollarSign } from 'react-icons/fi'

// const DateScroll = ({ selectedDate, onDateChange }) => {
//   const [showLeftArrow, setShowLeftArrow] = useState(false)
//   const [showRightArrow, setShowRightArrow] = useState(true)
//   const [scrollContainer, setScrollContainer] = useState(null)

//   const dates = Array.from({ length: 14 }, (_, i) => {
//     const date = new Date()
//     date.setDate(date.getDate() + i)
//     return date
//   })

//   const handleScroll = (e) => {
//     const container = e.target
//     setShowLeftArrow(container.scrollLeft > 0)
//     setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth)
//   }

//   const scrollLeft = () => {
//     if (scrollContainer) {
//       scrollContainer.scrollBy({ left: -120, behavior: 'smooth' })
//     }
//   }

//   const scrollRight = () => {
//     if (scrollContainer) {
//       scrollContainer.scrollBy({ left: 120, behavior: 'smooth' })
//     }
//   }

//   const navigateDate = (direction) => {
//     const currentDate = new Date(selectedDate)
//     currentDate.setDate(currentDate.getDate() + direction)
//     onDateChange(currentDate.toISOString().split('T')[0])
//   }

//   useEffect(() => {
//     if (scrollContainer) {
//       handleScroll({ target: scrollContainer })
//     }
//   }, [scrollContainer])

//   return (
//     <div className="relative w-full">
//       {/* Left Navigation Arrow */}
//       <motion.button 
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//         onClick={() => navigateDate(-1)}
//       >
//         <FiChevronLeft className="w-4 h-4" />
//       </motion.button>
      
//       {/* Scroll Left Arrow */}
//       <AnimatePresence>
//         {showLeftArrow && (
//           <motion.button 
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -10 }}
//             whileHover={{ scale: 1.1 }}
//             className="absolute left-12 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300"
//             onClick={scrollLeft}
//           >
//             <FiChevronLeft className="w-3 h-3 text-gray-600" />
//           </motion.button>
//         )}
//       </AnimatePresence>
      
//       {/* Date Container */}
//       <div 
//         ref={setScrollContainer}
//         onScroll={handleScroll}
//         className="flex space-x-3 overflow-x-auto py-4 px-16 scrollbar-hide scroll-smooth"
//       >
//         {dates.map((date, index) => {
//           const dateStr = date.toISOString().split('T')[0]
//           const isSelected = dateStr === selectedDate
//           const isToday = dateStr === new Date().toISOString().split('T')[0]
          
//           return (
//             <motion.button
//               key={dateStr}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => onDateChange(dateStr)}
//               className={`
//                 flex flex-col items-center justify-center 
//                 min-w-[60px] w-14 h-14 
//                 rounded-2xl 
//                 transition-all duration-300 
//                 backdrop-blur-sm
//                 ${isSelected
//                   ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200 border-2 border-white/20'
//                   : isToday
//                     ? 'bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600 border-2 border-blue-200 shadow-md'
//                     : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md border border-gray-200/50'
//                 }
//               `}
//             >
//               <span className="text-xs font-medium leading-none">
//                 {date.toLocaleDateString('en-US', { weekday: 'short' })}
//               </span>
//               <span className="text-lg font-bold leading-none mt-1">
//                 {date.getDate()}
//               </span>
//             </motion.button>
//           )
//         })}
//       </div>
      
//       {/* Scroll Right Arrow */}
//       <AnimatePresence>
//         {showRightArrow && (
//           <motion.button 
//             initial={{ opacity: 0, x: 10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 10 }}
//             whileHover={{ scale: 1.1 }}
//             className="absolute right-12 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300"
//             onClick={scrollRight}
//           >
//             <FiChevronRight className="w-3 h-3 text-gray-600" />
//           </motion.button>
//         )}
//       </AnimatePresence>
      
//       {/* Right Navigation Arrow */}
//       <motion.button 
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//         onClick={() => navigateDate(1)}
//       >
//         <FiChevronRight className="w-4 h-4" />
//       </motion.button>
//     </div>
//   )
// }

// export default function QueuePage() {
//   const [appointments, setAppointments] = useState([])
//   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
//   const [isLoading, setIsLoading] = useState(true)

//   // Fetch appointments from API
//   useEffect(() => {
//     // const fetchAppointments = async () => {
//     //   try {
//     //     setIsLoading(true)
        
//     //     // Fetch appointments for the selected date
//     //     const res = await fetch(`/api/appointment/fetchAll?date=${selectedDate}`)
//     //     const data = await res.json()
        
//     //     // Filter only pending appointments
//     //     const pendingAppointments = data.data.filter(
//     //       (appointment) => appointment.status === 'pending'
//     //     )
//     //     console.log(pendingAppointments)
//     //     setAppointments(pendingAppointments)
//     //     setIsLoading(false)
//     //   } catch (error) {
//     //     console.error("Error fetching appointments:", error)
//     //     setIsLoading(false)
//     //   }
//     // }
// // In your fetchAppointments function, modify it like this:
// const fetchAppointments = async () => {
//   try {
//     setIsLoading(true)
    
//     // Fetch all appointments (remove the date filter from API call)
//     const res = await fetch(`/api/appointment/fetchAll`)
//     const data = await res.json()
    
//     // Filter by status and date on the client side
//     const pendingAppointments = data.data.filter(
//       (appointment) => {
//         // Convert both dates to ISO string format for comparison
//         const appointmentDate = new Date(appointment.date).toISOString().split('T')[0]
//         const selectedDateFormatted = new Date(selectedDate).toISOString().split('T')[0]
//         return appointment.status === 'pending' && appointmentDate === selectedDateFormatted
//       }
//     )
    
//     console.log("Filtered appointments:", pendingAppointments)
//     setAppointments(pendingAppointments)
//     setIsLoading(false)
//   } catch (error) {
//     console.error("Error fetching appointments:", error)
//     setIsLoading(false)
//   }
// }
//     fetchAppointments()
//   }, [selectedDate])

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'confirmed':
//         return 'from-green-400 to-emerald-500'
//       case 'pending':
//         return 'from-amber-400 to-orange-500'
//       case 'in-progress':
//         return 'from-blue-400 to-cyan-500'
//       default:
//         return 'from-gray-400 to-gray-500'
//     }
//   }

//   const getBarberColor = (barber) => {
//     const colors = {
//       'Mike Johnson': 'from-blue-500 to-purple-600',
//       'Emma Davis': 'from-pink-500 to-rose-600',
//       'Alex Thompson': 'from-green-500 to-teal-600',
//       'default': 'from-gray-500 to-gray-600'
//     }
//     return colors[barber] || colors.default
//   }

//   // Function to format date for display
//   const formatDisplayDate = (dateString) => {
//     const date = new Date(dateString)
//     return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8 text-center"
//         >
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
//             Appointment Queue
//           </h1>
//           <p className="text-gray-600 text-lg mb-2">
//             {formatDisplayDate(selectedDate)}
//           </p>
//           {!isLoading && (
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.5 }}
//               className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg"
//             >
//               <FiCalendar className="w-4 h-4" />
//               <span className="font-semibold">
//                 {appointments.length} {appointments.length === 1 ? 'appointment' : 'appointments'} scheduled
//               </span>
//             </motion.div>
//           )}
//         </motion.div>

//         {/* Date Scroll */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6 mb-8"
//         >
//           <DateScroll selectedDate={selectedDate} onDateChange={setSelectedDate} />
//         </motion.div>

//         {/* Queue Display */}
//         <AnimatePresence mode="wait">
//           {isLoading ? (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="space-y-4"
//             >
//               {[...Array(3)].map((_, i) => (
//                 <motion.div 
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                   className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 h-32 animate-pulse border border-white/20"
//                 />
//               ))}
//             </motion.div>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="space-y-4"
//             >
//               {appointments.map((appointment, index) => (
//                 <motion.div
//                   key={appointment._id || appointment.id}
//                   initial={{ opacity: 0, y: 30, scale: 0.95 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   transition={{ delay: index * 0.1, duration: 0.3 }}
//                   whileHover={{ scale: 1.02, y: -4 }}
//                   className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 overflow-hidden group"
//                 >
//                   {/* Status Bar */}
//                   <div className={`h-1 bg-gradient-to-r from-green-400 to-emerald-500`} />
                  
//                   <div className="p-6">
//                     <div className="flex items-center justify-between mb-4">
//                       {/* Queue Number & Customer Info */}
//                       <div className="flex items-center space-x-4">
//                         <div className="relative">
//                           <motion.div 
//                             whileHover={{ rotate: 360 }}
//                             transition={{ duration: 0.5 }}
//                             className="bg-gradient-to-br from-blue-400 to-purple-500 text-white rounded-full p-3 shadow-lg"
//                           >
//                             <FiUser className="w-6 h-6" />
//                           </motion.div>
//                           {/* Queue Number Badge */}
//                           <motion.div 
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             transition={{ delay: (index * 0.1) + 0.3, type: "spring", stiffness: 200 }}
//                             className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-white"
//                           >
//                             {index + 1}
//                           </motion.div>
//                         </div>
//                         <div>
//                           <div className="flex items-center space-x-2">
//                             <h3 className="font-bold text-xl text-gray-800">{appointment.customer.name}</h3>
//                           </div>
//                           <div className="flex items-center text-gray-500 mt-1">
//                             <FiPhone className="w-4 h-4 mr-1" />
//                             <span className="text-sm">{appointment.customer.phone}</span>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Time & Price */}
                      
//                     </div>

//                     {/* Services */}
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {appointment.services.map((service, serviceIndex) => (
//                         <motion.span 
//                           key={serviceIndex}
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: (index * 0.1) + (serviceIndex * 0.05) }}
//                           className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full border border-blue-200 shadow-sm"
//                         >
//                           <FiScissors className="inline w-3 h-3 mr-1" />
//                           {service}
//                         </motion.span>
//                       ))}
//                     </div>

//                     {/* Bottom Row */}
//                     <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                       {/* Barber */}
//                       <div className="flex items-center space-x-3">
//                         <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${getBarberColor(appointment.barber)} flex items-center justify-center shadow-lg`}>
//                           <span className="text-white font-bold text-sm">
//                             {appointment.barber.split(' ').map(n => n[0]).join('')}
//                           </span>
//                         </div>
//                         <div>
//                           <div className="text-sm text-gray-500">Barber</div>
//                           <div className="font-semibold capitalize text-gray-800">{appointment.barber}</div>
//                         </div>
//                       </div>

//                       {/* Status */}
//                       {/* <motion.span 
//                         whileHover={{ scale: 1.05 }}
//                         className={`px-4 py-2 text-white font-semibold text-sm rounded-full shadow-lg bg-gradient-to-r ${getStatusColor(appointment.status)} capitalize`}
//                       >
//                         {appointment.status}
//                       </motion.span> */}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Empty State */}
//         {!isLoading && appointments.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20"
//           >
//             <FiCalendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-600 mb-2">No appointments scheduled</h3>
//             <p className="text-gray-500">No appointments found for {formatDisplayDate(selectedDate)}.</p>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   )
// }

'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCalendar, FiClock, FiUser, FiScissors, FiChevronLeft, FiChevronRight, FiPhone, FiDollarSign } from 'react-icons/fi'

const DateScroll = ({ selectedDate, onDateChange }) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [scrollContainer, setScrollContainer] = useState(null)

  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i)
    return date
  })

  const handleScroll = (e) => {
    const container = e.target
    setShowLeftArrow(container.scrollLeft > 0)
    setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth)
  }

  const scrollLeft = () => {
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: -120, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: 120, behavior: 'smooth' })
    }
  }

  const navigateDate = (direction) => {
    const currentDate = new Date(selectedDate)
    currentDate.setDate(currentDate.getDate() + direction)
    onDateChange(currentDate.toISOString().split('T')[0])
  }

  useEffect(() => {
    if (scrollContainer) {
      handleScroll({ target: scrollContainer })
    }
  }, [scrollContainer])

  return (
    <div className="relative w-full">
      {/* Left Navigation Arrow */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => navigateDate(-1)}
      >
        <FiChevronLeft className="w-4 h-4" />
      </motion.button>
      
      {/* Scroll Left Arrow */}
      <AnimatePresence>
        {showLeftArrow && (
          <motion.button 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            whileHover={{ scale: 1.1 }}
            className="absolute left-12 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300"
            onClick={scrollLeft}
          >
            <FiChevronLeft className="w-3 h-3 text-gray-600" />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Date Container */}
      <div 
        ref={setScrollContainer}
        onScroll={handleScroll}
        className="flex space-x-3 overflow-x-auto py-4 px-16 scrollbar-hide scroll-smooth"
      >
        {dates.map((date, index) => {
          const dateStr = date.toISOString().split('T')[0]
          const isSelected = dateStr === selectedDate
          const isToday = dateStr === new Date().toISOString().split('T')[0]
          
          return (
            <motion.button
              key={dateStr}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onDateChange(dateStr)}
              className={`
                flex flex-col items-center justify-center 
                min-w-[60px] w-14 h-14 
                rounded-2xl 
                transition-all duration-300 
                backdrop-blur-sm
                ${isSelected
                  ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200 border-2 border-white/20'
                  : isToday
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600 border-2 border-blue-200 shadow-md'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md border border-gray-200/50'
                }
              `}
            >
              <span className="text-xs font-medium leading-none">
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
              </span>
              <span className="text-lg font-bold leading-none mt-1">
                {date.getDate()}
              </span>
            </motion.button>
          )
        })}
      </div>
      
      {/* Scroll Right Arrow */}
      <AnimatePresence>
        {showRightArrow && (
          <motion.button 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            whileHover={{ scale: 1.1 }}
            className="absolute right-12 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300"
            onClick={scrollRight}
          >
            <FiChevronRight className="w-3 h-3 text-gray-600" />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Right Navigation Arrow */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => navigateDate(1)}
      >
        <FiChevronRight className="w-4 h-4" />
      </motion.button>
    </div>
  )
}

export default function QueuePage() {
  const [appointments, setAppointments] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [isLoading, setIsLoading] = useState(true)

  const fetchAppointments = async () => {
    try {
      setIsLoading(true)
      
      // Fetch all appointments (remove the date filter from API call)
      const res = await fetch(`/api/appointment/fetchAll`)
      const data = await res.json()
      
      // Filter by status and date on the client side
      const pendingAppointments = data.data.filter(
        (appointment) => {
          // Convert both dates to ISO string format for comparison
          const appointmentDate = new Date(appointment.date).toISOString().split('T')[0]
          const selectedDateFormatted = new Date(selectedDate).toISOString().split('T')[0]
          return appointment.status === 'pending' && appointmentDate === selectedDateFormatted
        }
      )
      
      console.log("Filtered appointments:", pendingAppointments)
      setAppointments(pendingAppointments)
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching appointments:", error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [selectedDate])

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'from-green-400 to-emerald-500'
      case 'pending':
        return 'from-amber-400 to-orange-500'
      case 'in-progress':
        return 'from-blue-400 to-cyan-500'
      default:
        return 'from-gray-400 to-gray-500'
    }
  }

  const getBarberColor = (barber) => {
    const colors = {
      'Mike Johnson': 'from-blue-500 to-purple-600',
      'Emma Davis': 'from-pink-500 to-rose-600',
      'Alex Thompson': 'from-green-500 to-teal-600',
      'default': 'from-gray-500 to-gray-600'
    }
    return colors[barber] || colors.default
  }

  const formatDisplayDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Appointment Queue
          </h1>
          <p className="text-gray-600 text-lg mb-2">
            {formatDisplayDate(selectedDate)}
          </p>
          {!isLoading && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg"
            >
              <FiCalendar className="w-4 h-4" />
              <span className="font-semibold">
                {appointments.length} {appointments.length === 1 ? 'appointment' : 'appointments'} scheduled
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Date Scroll */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6 mb-8"
        >
          <DateScroll selectedDate={selectedDate} onDateChange={setSelectedDate} />
        </motion.div>

        {/* Queue Display */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 h-32 animate-pulse border border-white/20"
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {[...appointments].reverse().map((appointment, index) => (
                <motion.div
                  key={appointment._id || appointment.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 overflow-hidden group"
                >
                  {/* Status Bar */}
                  <div className={`h-1 bg-gradient-to-r from-green-400 to-emerald-500`} />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      {/* Queue Number & Customer Info */}
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <motion.div 
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-br from-blue-400 to-purple-500 text-white rounded-full p-3 shadow-lg"
                          >
                            <FiUser className="w-6 h-6" />
                          </motion.div>
                          {/* Queue Number Badge */}
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: (index * 0.1) + 0.3, type: "spring", stiffness: 200 }}
                            className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-white"
                          >
                            {index + 1}
                          </motion.div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-bold text-xl text-gray-800">{appointment.customer.name}</h3>
                          </div>
                          <div className="flex items-center text-gray-500 mt-1">
                            <FiPhone className="w-4 h-4 mr-1" />
                            <span className="text-sm">{appointment.customer.phone}</span>
                          </div>
                        </div>
                      </div>

                      {/* Time & Price */}
                      <div className="flex items-center space-x-2">
                        <FiClock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{new Date(appointment.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                        <FiDollarSign className="w-4 h-4 text-gray-500" />
                        <span className="font-semibold text-gray-700">${appointment.price}</span>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {appointment.services.map((service, serviceIndex) => (
                        <motion.span 
                          key={serviceIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (index * 0.1) + (serviceIndex * 0.05) }}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full border border-blue-200 shadow-sm"
                        >
                          <FiScissors className="inline w-3 h-3 mr-1" />
                          {service}
                        </motion.span>
                      ))}
                    </div>

                    {/* Bottom Row */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      {/* Barber */}
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${getBarberColor(appointment.barber)} flex items-center justify-center shadow-lg`}>
                          <span className="text-white font-bold text-sm">
                            {appointment.barber.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Barber</div>
                          <div className="font-semibold capitalize text-gray-800">{appointment.barber}</div>
                        </div>
                      </div>

                      {/* Status */}
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className={`px-4 py-2 text-white font-semibold text-sm rounded-full shadow-lg bg-gradient-to-r ${getStatusColor(appointment.status)} capitalize`}
                      >
                        {appointment.status}
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!isLoading && appointments.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20"
          >
            <FiCalendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No appointments scheduled</h3>
            <p className="text-gray-500">No appointments found for {formatDisplayDate(selectedDate)}.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}