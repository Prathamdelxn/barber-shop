

// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FiUser, FiScissors, FiMail, FiPhone, FiStar, FiCalendar, FiEdit2, FiTrash2, FiPlus, FiMoreVertical, FiX } from 'react-icons/fi'

// export default function StaffPage() {
//   // State management
//   const [staff, setStaff] = useState([])
//   const [newStaff, setNewStaff] = useState({ 
//     name: '', 
//     speciality: '', 
//     experience: '', 
//     phone: '', 
//     email: '' 
//   })
//   const [showAddForm, setShowAddForm] = useState(false)
//   const [isLoading, setIsLoading] = useState(true)
//   const [expandedCard, setExpandedCard] = useState(null)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [error, setError] = useState(null)
//   const [success, setSuccess] = useState(null)

//   const specialities = ['Classic Cuts', 'Modern Styles', 'Beard Styling', 'Hair Coloring', 'Hair Washing', 'Styling']

//   // Fetch staff from API
//   useEffect(() => {
//     const fetchStaff = async () => {
//       try {
//         const response = await fetch('/api/staff/fetchAll')
//         if (!response.ok) throw new Error('Failed to fetch staff')
//         const data = await response.json();
//       const userdata=data.staff
//         setStaff(userdata.map(member => ({
//           id: member._id,
//           name: member.name,
//           speciality: member.speciality,
//           experience: member.experience || '0 years',
//           phone: member.phone,
//           email: member.email,
//           status: member.isActive ? 'active' : 'inactive',
//           rating: member.rating || 4.5,
//           joinDate: member.createdAt || new Date().toISOString(),
//           totalServices: member.totalServices || 0
//         })))
//       } catch (err) {
//         setError(err.message)
//       } finally {
//         setIsLoading(false)
//       }
//     }
    
//     fetchStaff()
//   }, [])
// console.log("asdf",staff)
//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setNewStaff(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   // Add new staff member
//   const addStaff = async (e) => {
//     e.preventDefault()
    
//     if (!newStaff.name || !newStaff.speciality || !newStaff.phone || !newStaff.email) {
//       setError('Please fill all required fields')
//       return
//     }

//     setIsSubmitting(true)
//     setError(null)
//     setSuccess(null)

//     try {
//       const response = await fetch('/api/staff/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: newStaff.name,
//           speciality: newStaff.speciality,
//           experience: newStaff.experience || '0 years',
//           phone: newStaff.phone,
//           email: newStaff.email,
//           isActive: true
//         })
//       })

//       if (!response.ok) {
//         throw new Error('Failed to add staff member')
//       }

//       const result = await response.json()

//       // Add to local state
//       setStaff([{
//         id: result.data._id,
//         name: result.data.name,
//         speciality: result.data.speciality,
//         experience: result.data.experience || '0 years',
//         phone: result.data.phone,
//         email: result.data.email,
//         status: 'active',
//         rating: 4.5,
//         joinDate: new Date().toISOString().split('T')[0],
//         totalServices: 0
//       }, ...staff])

//       setSuccess('Staff member added successfully!')
//       setNewStaff({ name: '', speciality: '', experience: '', phone: '', email: '' })
//       setShowAddForm(false)
//     } catch (err) {
//       setError(err.message)
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const toggleStaffStatus = (staffId) => {
//     setStaff(staff.map(member => 
//       member.id === staffId 
//         ? { ...member, status: member.status === 'active' ? 'inactive' : 'active' }
//         : member
//     ))
//   }


//   const deleteStaff = async (staffId) => {
//   try {
//     const response = await fetch(`/api/staff/delete/${staffId}`, {
//       method: 'DELETE',
//     });

//     const result = await response.json();

//     if (response.ok && result.success) {
//       // Remove deleted staff from state
//       setStaff((prev) => prev.filter((member) => member._id !== staffId));
//       setExpandedCard(null);
//       console.log('Staff deleted successfully');
//     } else {
//       console.error('Delete failed:', result.message);
//     }
//   } catch (error) {
//     console.error('Error deleting staff:', error);
//   }
// };

//   const getStatusColor = (status) => {
//     return status === 'active' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
//   }

//   const getInitials = (name) => {
//     return name.split(' ').map(n => n[0]).join('')
//   }

//   const getGradient = (id) => {
//     const gradients = [
//       'from-purple-400 to-pink-400',
//       'from-blue-400 to-cyan-400',
//       'from-amber-400 to-orange-400',
//       'from-emerald-400 to-teal-400',
//       'from-indigo-400 to-violet-400',
//       'from-rose-400 to-pink-400'
//     ]
//     return gradients[id % gradients.length]
//   }

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' }
//     return new Date(dateString).toLocaleDateString('en-US', options)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Notifications */}
//         <AnimatePresence>
//           {error && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg flex justify-between items-center"
//             >
//               <span>{error}</span>
//               <button 
//                 onClick={() => setError(null)}
//                 className="text-red-800 hover:text-red-900"
//               >
//                 <FiX />
//               </button>
//             </motion.div>
//           )}

//           {success && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="mb-4 p-4 bg-green-50 border border-green-200 text-green-600 rounded-lg flex justify-between items-center"
//             >
//               <span>{success}</span>
//               <button 
//                 onClick={() => setSuccess(null)}
//                 className="text-green-800 hover:text-green-900"
//               >
//                 <FiX />
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
//         >
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">Staff Management</h1>
//             <p className="text-gray-600 mt-1">Manage your elite barber team</p>
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => setShowAddForm(!showAddForm)}
//             className="mt-4 md:mt-0 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
//           >
//             <FiPlus className="w-5 h-5" />
//             <span>Add New Staff</span>
//           </motion.button>
//         </motion.div>

//         {/* Add Staff Form */}
//         <AnimatePresence>
//           {showAddForm && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="mb-8 overflow-hidden"
//             >
//               <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-6 border border-gray-200 shadow-lg">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
//                   <FiUser className="text-blue-500" />
//                   <span>New Staff Member</span>
//                 </h2>
//                 <form onSubmit={addStaff}>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="John Smith"
//                         value={newStaff.name}
//                         onChange={handleInputChange}
//                         className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                         required
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Speciality*</label>
//                       <select
//                         name="speciality"
//                         value={newStaff.speciality}
//                         onChange={handleInputChange}
//                         className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                         required
//                       >
//                         <option value="">Select Speciality</option>
//                         {specialities.map(spec => (
//                           <option key={spec} value={spec}>{spec}</option>
//                         ))}
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
//                       <input
//                         type="text"
//                         name="experience"
//                         placeholder="3 years"
//                         value={newStaff.experience}
//                         onChange={handleInputChange}
//                         className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         placeholder="+1234567890"
//                         value={newStaff.phone}
//                         onChange={handleInputChange}
//                         className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                         required
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="john@barbershop.com"
//                         value={newStaff.email}
//                         onChange={handleInputChange}
//                         className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="mt-6 flex justify-end gap-3">
//                     <motion.button
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.98 }}
//                       type="button"
//                       onClick={() => setShowAddForm(false)}
//                       className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
//                       disabled={isSubmitting}
//                     >
//                       Cancel
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.98 }}
//                       type="submit"
//                       className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md flex items-center justify-center min-w-32"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
//                           Adding...
//                         </>
//                       ) : (
//                         'Add Staff Member'
//                       )}
//                     </motion.button>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Staff List */}
//         {isLoading ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[...Array(4)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="backdrop-blur-sm bg-white/80 rounded-2xl p-6 border border-gray-200 h-64 animate-pulse"
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <AnimatePresence>
//               {staff.map((member) => (
//                 <motion.div
//                   key={member.id}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.3 }}
//                   whileHover={{ y: -5 }}
//                   className={`backdrop-blur-sm bg-white/80 rounded-2xl p-6 border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 ${expandedCard === member.id ? 'ring-2 ring-blue-500' : ''}`}
//                 >
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg bg-gray-500 ${getGradient(member.id)}`}>
//                         {getInitials(member.name)}
                       
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(member.status)}`}>
//                           {member.status}
//                         </span>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => setExpandedCard(expandedCard === member.id ? null : member.id)}
//                       className="text-gray-500 hover:text-gray-700 transition-colors p-1"
//                     >
//                       <FiMoreVertical className="w-5 h-5" />
//                     </button>
//                   </div>

//                   <div className="space-y-3 mb-4">
//                     <div className="flex items-center gap-2 text-gray-700">
//                       <FiScissors className="text-blue-500" />
//                       <span>{member.speciality}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-700">
//                       <FiCalendar className="text-amber-500" />
//                       <span>{member.experience} experience</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-700">
//                       <FiPhone className="text-emerald-500" />
//                       <span>{member.phone}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-700">
//                       <FiMail className="text-purple-500" />
//                       <span className="truncate">{member.email}</span>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div className="bg-gray-50 rounded-lg p-2 text-center">
//                       <p className="text-yellow-500 font-bold text-xl">{member.rating}</p>
//                       <p className="text-gray-500 text-xs">Rating</p>
//                     </div>
//                     <div className="bg-gray-50 rounded-lg p-2 text-center">
//                       <p className="text-gray-800 font-bold text-xl">{member.totalServices}</p>
//                       <p className="text-gray-500 text-xs">Services</p>
//                     </div>
//                   </div>

//                   <div className="flex gap-2">
//                     <motion.button
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => toggleStaffStatus(member.id)}
//                       className={`flex-1 px-3 py-2 rounded-lg font-medium transition-all ${
//                         member.status === 'active' 
//                           ? 'bg-rose-500 hover:bg-rose-600 text-white' 
//                           : 'bg-emerald-500 hover:bg-emerald-600 text-white'
//                       }`}
//                     >
//                       {member.status === 'active' ? 'Deactivate' : 'Activate'}
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all"
//                     >
//                       <FiEdit2 className="w-4 h-4" />
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => deleteStaff(member.id)}
//                       className="px-3 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-all"
//                     >
//                       <FiTrash2 className="w-4 h-4" />
//                     </motion.button>
//                   </div>

//                   <AnimatePresence>
//                     {expandedCard === member.id && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="mt-4 pt-4 border-t border-gray-200"
//                       >
//                         <p className="text-gray-600 text-sm">
//                           <span className="font-medium text-gray-800">Joined:</span> {formatDate(member.joinDate)}
//                         </p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         )}

//         {staff.length === 0 && !isLoading && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm text-center"
//           >
//             <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
//               <FiUser className="w-8 h-8 text-blue-500" />
//             </div>
//             <h3 className="text-lg font-medium text-gray-800 mb-2">No staff members yet</h3>
//             <p className="text-gray-600 mb-4">Add your first staff member to get started</p>
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => {
//                 setNewStaff({ name: '', speciality: '', experience: '', phone: '', email: '' })
//                 setShowAddForm(true)
//               }}
//               className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
//             >
//               <FiPlus className="inline mr-1.5" />
//               Add Staff Member
//             </motion.button>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUser, FiScissors, FiMail, FiPhone, FiStar, FiCalendar, FiEdit2, FiTrash2, FiPlus, FiMoreVertical, FiX } from 'react-icons/fi'

export default function StaffPage() {
  // State management
  const [staff, setStaff] = useState([])
  const [newStaff, setNewStaff] = useState({ 
    name: '', 
    speciality: '', 
    experience: '', 
    phone: '', 
    email: '' 
  })
  const [showAddForm, setShowAddForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [expandedCard, setExpandedCard] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [editingStaff, setEditingStaff] = useState(null)
  const [editFormData, setEditFormData] = useState({
    name: '',
    speciality: '',
    experience: '',
    phone: '',
    email: ''
  })

  const specialities = ['Classic Cuts', 'Modern Styles', 'Beard Styling', 'Hair Coloring', 'Hair Washing', 'Styling']

  // Fetch staff from API
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await fetch('/api/staff/fetchAll')
        if (!response.ok) throw new Error('Failed to fetch staff')
        const data = await response.json();
        const userdata = data.staff
        setStaff(userdata.map(member => ({
          id: member._id,
          name: member.name,
          speciality: member.speciality,
          experience: member.experience || '0 years',
          phone: member.phone,
          email: member.email,
          status: member.isActive ? 'active' : 'inactive',
          rating: member.rating || 4.5,
           isActive: member.isActive, 
          joinDate: member.createdAt || new Date().toISOString(),
          totalServices: member.totalServices || 0
        })))
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchStaff()
  }, [])

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewStaff(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle edit form input changes
  const handleEditInputChange = (e) => {
    const { name, value } = e.target
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Add new staff member
  const addStaff = async (e) => {
    e.preventDefault()
    
    if (!newStaff.name || !newStaff.speciality || !newStaff.phone || !newStaff.email) {
      setError('Please fill all required fields')
      return
    }

    setIsSubmitting(true)
    setError(null)
    setSuccess(null)

    try {
      const response = await fetch('/api/staff/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newStaff.name,
          speciality: newStaff.speciality,
          experience: newStaff.experience || '0 years',
          phone: newStaff.phone,
          email: newStaff.email,
          isActive: true
        })
      })

      if (!response.ok) {
        throw new Error('Failed to add staff member')
      }

      const result = await response.json()

      // Add to local state
      setStaff([{
        id: result.data._id,
        name: result.data.name,
        speciality: result.data.speciality,
        experience: result.data.experience || '0 years',
        phone: result.data.phone,
        email: result.data.email,
        status: 'active',
        rating: 4.5,
        joinDate: new Date().toISOString().split('T')[0],
        totalServices: 0
      }, ...staff])

      setSuccess('Staff member added successfully!')
      setNewStaff({ name: '', speciality: '', experience: '', phone: '', email: '' })
      setShowAddForm(false)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Open edit form with staff member data
  const openEditForm = (staffMember) => {
    setEditingStaff(staffMember.id)
    setEditFormData({
      name: staffMember.name,
      speciality: staffMember.speciality,
      experience: staffMember.experience,
      phone: staffMember.phone,
      email: staffMember.email
    })
    setExpandedCard(null) // Close expanded card if open
  }

  // Submit edited staff data
  const updateStaff = async (e) => {
    e.preventDefault()
    
    if (!editFormData.name || !editFormData.speciality || !editFormData.phone || !editFormData.email) {
      setError('Please fill all required fields')
      return
    }

    setIsSubmitting(true)
    setError(null)
    setSuccess(null)

    try {
      const response = await fetch(`/api/staff/update/${editingStaff}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editFormData)
      })

      if (!response.ok) {
        throw new Error('Failed to update staff member')
      }

      // Update local state
      setStaff(staff.map(member => 
        member.id === editingStaff 
          ? { 
              ...member,
              name: editFormData.name,
              speciality: editFormData.speciality,
              experience: editFormData.experience,
              phone: editFormData.phone,
              email: editFormData.email
            }
          : member
      ))

      setSuccess('Staff member updated successfully!')
      setEditingStaff(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Cancel editing
  const cancelEdit = () => {
    setEditingStaff(null)
    setEditFormData({
      name: '',
      speciality: '',
      experience: '',
      phone: '',
      email: ''
    })
  }

  // const toggleStaffStatus = (staffId) => {
  //   setStaff(staff.map(member => 
  //     member.id === staffId 
  //       ? { ...member, status: member.status === 'active' ? 'inactive' : 'active' }
  //       : member
  //   ))
  // }


//   const toggleStaffStatus = async (staffId) => {
//   try {
//     setIsSubmitting(true);
//     setError(null);
//     setSuccess(null);

//     const response = await fetch(`/api/staff/update-status/${staffId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//        body: JSON.stringify({ isActive: false }),
//     });

//     const result = await response.json();

//     if (!response.ok) {
//       throw new Error(result.message || 'Failed to update status');
//     }

//     // Update local state
//     setStaff(staff.map(member => 
//       member.id === staffId 
//         ? { 
//             ...member,
//             status: result.data.isActive ? 'active' : 'inactive' 
//           }
//         : member
//     ));

//     setSuccess(result.message);
//   } catch (err) {
//     setError(err.message);
//   } finally {
//     setIsSubmitting(false);
//   }
// };

const toggleStaffStatus = async (staffId) => {
  try {
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    // Find the current staff member
    const staffMember = staff.find(member => member.id === staffId);
    const newStatus = !staffMember.isActive; // Toggle the status

    const response = await fetch(`/api/staff/update-status/${staffId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isActive: newStatus }), // Send the new status
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to update status');
    }

    // Update local state
    setStaff(staff.map(member => 
      member.id === staffId 
        ? { 
            ...member,
            status: result.data.isActive ? 'active' : 'inactive',
            isActive: result.data.isActive // Make sure to include this in your state
          }
        : member
    ));

    setSuccess(result.message);
  } catch (err) {
    setError(err.message);
  } finally {
    setIsSubmitting(false);
  }
};


  const deleteStaff = async (staffId) => {
    try {
      const response = await fetch(`/api/staff/delete/${staffId}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Remove deleted staff from state
        setStaff((prev) => prev.filter((member) => member.id !== staffId));
        setExpandedCard(null);
        setSuccess('Staff member deleted successfully');
      } else {
        setError(result.message || 'Delete failed');
      }
    } catch (error) {
      setError('Error deleting staff: ' + error.message);
    }
  };

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  const getGradient = (id) => {
    const gradients = [
      'from-purple-400 to-pink-400',
      'from-blue-400 to-cyan-400',
      'from-amber-400 to-orange-400',
      'from-emerald-400 to-teal-400',
      'from-indigo-400 to-violet-400',
      'from-rose-400 to-pink-400'
    ]
    return gradients[id % gradients.length]
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  // Edit Staff Form Component
  const EditStaffForm = ({ staffMember }) => (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-6 backdrop-blur-sm bg-white/80 rounded-2xl p-6 border border-gray-200 shadow-lg"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <FiEdit2 className="text-blue-500" />
        <span>Edit Staff Member</span>
      </h2>
      <form onSubmit={updateStaff}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
            <input
              type="text"
              name="name"
              placeholder="John Smith"
              value={editFormData.name}
              onChange={handleEditInputChange}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Speciality*</label>
            <select
              name="speciality"
              value={editFormData.speciality}
              onChange={handleEditInputChange}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            >
              <option value="">Select Speciality</option>
              {specialities.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
            <input
              type="text"
              name="experience"
              placeholder="3 years"
              value={editFormData.experience}
              onChange={handleEditInputChange}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
            <input
              type="tel"
              name="phone"
              placeholder="+1234567890"
              value={editFormData.phone}
              onChange={handleEditInputChange}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
            <input
              type="email"
              name="email"
              placeholder="john@barbershop.com"
              value={editFormData.email}
              onChange={handleEditInputChange}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={cancelEdit}
            className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
            disabled={isSubmitting}
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md flex items-center justify-center min-w-32"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                Updating...
              </>
            ) : (
              'Update Staff'
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Notifications */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg flex justify-between items-center"
            >
              <span>{error}</span>
              <button 
                onClick={() => setError(null)}
                className="text-red-800 hover:text-red-900"
              >
                <FiX />
              </button>
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-4 p-4 bg-green-50 border border-green-200 text-green-600 rounded-lg flex justify-between items-center"
            >
              <span>{success}</span>
              <button 
                onClick={() => setSuccess(null)}
                className="text-green-800 hover:text-green-900"
              >
                <FiX />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Staff Management</h1>
            <p className="text-gray-600 mt-1">Manage your elite barber team</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAddForm(!showAddForm)}
            className="mt-4 md:mt-0 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <FiPlus className="w-5 h-5" />
            <span>Add New Staff</span>
          </motion.button>
        </motion.div>

        {/* Add Staff Form */}
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
                  <span>New Staff Member</span>
                </h2>
                <form onSubmit={addStaff}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Smith"
                        value={newStaff.name}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Speciality*</label>
                      <select
                        name="speciality"
                        value={newStaff.speciality}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        required
                      >
                        <option value="">Select Speciality</option>
                        {specialities.map(spec => (
                          <option key={spec} value={spec}>{spec}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                      <input
                        type="text"
                        name="experience"
                        placeholder="3 years"
                        value={newStaff.experience}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1234567890"
                        value={newStaff.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@barbershop.com"
                        value={newStaff.email}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end gap-3">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md flex items-center justify-center min-w-32"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                          Adding...
                        </>
                      ) : (
                        'Add Staff Member'
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Staff List */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="backdrop-blur-sm bg-white/80 rounded-2xl p-6 border border-gray-200 h-64 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {staff.map((member) => (
                <div key={member.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className={`backdrop-blur-sm bg-white/80 rounded-2xl p-6 border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 ${expandedCard === member.id ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg bg-gray-500 ${getGradient(member.id)}`}>
                          {getInitials(member.name)}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(member.status)}`}>
                            {member.status}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setExpandedCard(expandedCard === member.id ? null : member.id)}
                        className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                      >
                        <FiMoreVertical className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <FiScissors className="text-blue-500" />
                        <span>{member.speciality}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <FiCalendar className="text-amber-500" />
                        <span>{member.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <FiPhone className="text-emerald-500" />
                        <span>{member.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <FiMail className="text-purple-500" />
                        <span className="truncate">{member.email}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-2 text-center">
                        <p className="text-yellow-500 font-bold text-xl">{member.rating}</p>
                        <p className="text-gray-500 text-xs">Rating</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2 text-center">
                        <p className="text-gray-800 font-bold text-xl">{member.totalServices}</p>
                        <p className="text-gray-500 text-xs">Services</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleStaffStatus(member.id)}
                        className={`flex-1 px-3 py-2 rounded-lg font-medium transition-all ${
                          member.status === 'active' 
                            ? 'bg-rose-500 hover:bg-rose-600 text-white' 
                            : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                        }`}
                      >
                       
                        {member.isActive ? 'Deactivate' : 'Activate'}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openEditForm(member)}
                        className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all"
                      >
                        <FiEdit2 className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => deleteStaff(member.id)}
                        className="px-3 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-all"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </motion.button>
                    </div>

                    <AnimatePresence>
                      {expandedCard === member.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-200"
                        >
                          <p className="text-gray-600 text-sm">
                            <span className="font-medium text-gray-800">Joined:</span> {formatDate(member.joinDate)}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {editingStaff === member.id && (
                    <EditStaffForm staffMember={member} />
                  )}
                </div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {staff.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm text-center"
          >
            <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <FiUser className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">No staff members yet</h3>
            <p className="text-gray-600 mb-4">Add your first staff member to get started</p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setNewStaff({ name: '', speciality: '', experience: '', phone: '', email: '' })
                setShowAddForm(true)
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              <FiPlus className="inline mr-1.5" />
              Add Staff Member
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}