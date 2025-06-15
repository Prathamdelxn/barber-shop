// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FiScissors, FiClock, FiDollarSign, FiPlus, FiEdit2, FiTrash2, FiMenu } from 'react-icons/fi'

// export default function ServicesPage() {
//   const [services, setServices] = useState([
//     { id: 1, name: 'Classic Haircut', price: 35, category: 'Haircut' },
//     { id: 2, name: 'Beard Trim', price: 25, category: 'Beard' },
//     { id: 3, name: 'Deluxe Package', price: 55, category: 'Package' },
//     { id: 4, name: 'Kids Cut',  price: 30, category: 'Haircut' }
//   ])

//   const [newService, setNewService] = useState({
//     name: '',
    
//     price: '',
//     category: 'Haircut',
  
//   })

//   const [showAddForm, setShowAddForm] = useState(false)
//   const [isLoading, setIsLoading] = useState(true)
//   const [editingId, setEditingId] = useState(null)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   const categories = ['Haircut', 'Beard', 'Package', 'Coloring', 'Treatment']

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 800)
//     return () => clearTimeout(timer)
//   }, [])

//   const addService = () => {
//     if (newService.name  && newService.price) {
//       if (editingId) {
//         setServices(services.map(service => 
//           service.id === editingId ? { 
//             ...newService, 
//             id: editingId,
        
//             price: parseFloat(newService.price)
//           } : service
//         ))
//         setEditingId(null)
//       } else {
//         setServices([{ 
//           id: services.length + 1, 
//           ...newService,
       
//           price: parseFloat(newService.price)
//         }, ...services])
//       }
//       setNewService({ name: '',  price: '', category: 'Haircut', })
//       setShowAddForm(false)
//     }
//   }

//   const editService = (service) => {
//     setNewService({
//       name: service.name,
    
//       price: service.price.toString(),
//       category: service.category,
     
//     })
//     setEditingId(service.id)
//     setShowAddForm(true)
//   }

//   const deleteService = (serviceId) => {
//     setServices(services.filter(service => service.id !== serviceId))
//   }

//   const getCategoryColor = (category) => {
//     const colors = {
//       'Haircut': 'bg-blue-100 text-blue-800 border-blue-200',
//       'Beard': 'bg-amber-100 text-amber-800 border-amber-200',
//       'Package': 'bg-purple-100 text-purple-800 border-purple-200',
//       'Coloring': 'bg-pink-100 text-pink-800 border-pink-200',
//       'Treatment': 'bg-emerald-100 text-emerald-800 border-emerald-200'
//     }
//     return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200'
//   }

//   const formatDuration = (minutes) => {
//     const hours = Math.floor(minutes / 60)
//     const mins = minutes % 60
//     return hours > 0 ? `${hours}h ${mins}m` : `${minutes}m`
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8"
//         >
//           <div className="flex items-center justify-between w-full md:w-auto">
//             <div>
//               <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Services</h1>
//               <p className="text-gray-600 text-sm md:text-base mt-1">Manage your barber shop services</p>
//             </div>
//             <button 
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden p-2 rounded-lg bg-white shadow-sm border border-gray-200"
//             >
//               <FiMenu className="w-5 h-5 text-gray-700" />
//             </button>
//           </div>
          
//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => {
//               setNewService({ name: '', price: '', category: 'Haircut', })
//               setEditingId(null)
//               setShowAddForm(true)
//             }}
//             className={`mt-4 md:mt-0 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 md:px-5 md:py-3 rounded-lg md:rounded-xl font-medium shadow-lg hover:shadow-xl transition-all ${mobileMenuOpen ? 'flex' : 'hidden md:flex'}`}
//           >
//             <FiPlus className="w-4 h-4 md:w-5 md:h-5" />
//             <span className="text-sm md:text-base">Add Service</span>
//           </motion.button>
//         </motion.div>

 

//         {/* Add/Edit Service Form */}
//         <AnimatePresence>
//           {showAddForm && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="mb-6 md:mb-8 overflow-hidden"
//             >
//               <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
//                   <FiScissors className="text-blue-500" />
//                   <span>{editingId ? 'Edit Service' : 'Add New Service'}</span>
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Service Name*</label>
//                     <input
//                       type="text"
//                       placeholder="e.g., Classic Haircut"
//                       value={newService.name}
//                       onChange={(e) => setNewService({...newService, name: e.target.value})}
//                       className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 md:px-4 md:py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
//                     <select
//                       value={newService.category}
//                       onChange={(e) => setNewService({...newService, category: e.target.value})}
//                       className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 md:px-4 md:py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base"
//                     >
//                       {categories.map(category => (
//                         <option key={category} value={category}>{category}</option>
//                       ))}
//                     </select>
//                   </div>
                  
                 
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)*</label>
//                     <input
//                       type="number"
//                       placeholder="e.g., 35"
//                       value={newService.price}
//                       onChange={(e) => setNewService({...newService, price: e.target.value})}
//                       className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 md:px-4 md:py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base"
//                     />
//                   </div>
                  
                 
//                 </div>
//                 <div className="mt-4 md:mt-6 flex justify-end gap-2 md:gap-3">
//                   <motion.button
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => setShowAddForm(false)}
//                     className="px-4 py-2 md:px-6 md:py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all text-sm md:text-base"
//                   >
//                     Cancel
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={addService}
//                     className="px-4 py-2 md:px-6 md:py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md text-sm md:text-base"
//                   >
//                     {editingId ? 'Update' : 'Add Service'}
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Services List */}
//         {isLoading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//             {[...Array(4)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-white rounded-xl p-4 border border-gray-200 h-48 animate-pulse"
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//             <AnimatePresence>
//               {services.map((service) => (
//                 <motion.div
//                   key={service.id}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.3 }}
//                   whileHover={{ y: -5 }}
//                   className="bg-white rounded-xl p-4 md:p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
//                 >
//                   <div className="flex justify-between items-start mb-3">
//                     <div>
//                       <h3 className="text-lg md:text-xl font-semibold text-gray-800 line-clamp-1">{service.name}</h3>
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(service.category)}`}>
//                         {service.category}
//                       </span>
//                     </div>
//                     <div className="text-xl md:text-2xl font-bold text-gray-800 whitespace-nowrap">${service.price}</div>
//                   </div>

//                   {/* <div className="flex items-center gap-3 mb-3">
//                     <div className="flex items-center gap-1 text-gray-600 text-sm">
//                       <FiClock className="text-blue-500" />
//                       <span>{formatDuration(service.duration)}</span>
//                     </div>
//                   </div> */}

//                   {/* {service.description && (
//                     <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
//                   )} */}

//                   <div className="flex gap-2">
//                     <motion.button
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => editService(service)}
//                       className="flex-1 px-2 py-1.5 md:px-3 md:py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium transition-all flex items-center justify-center gap-1 text-sm md:text-base"
//                     >
//                       <FiEdit2 className="w-3 h-3 md:w-4 md:h-4" />
//                       <span>Edit</span>
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => deleteService(service.id)}
//                       className="px-2 py-1.5 md:px-3 md:py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg font-medium transition-all flex items-center justify-center gap-1 text-sm md:text-base"
//                     >
//                       <FiTrash2 className="w-3 h-3 md:w-4 md:h-4" />
//                       <span>Delete</span>
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         )}

//         {services.length === 0 && !isLoading && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm text-center"
//           >
//             <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
//               <FiScissors className="w-8 h-8 text-blue-500" />
//             </div>
//             <h3 className="text-lg font-medium text-gray-800 mb-2">No services yet</h3>
//             <p className="text-gray-600 mb-4">Add your first service to get started</p>
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => {
//                 setNewService({ name: '', price: '', category: 'Haircut',  })
//                 setEditingId(null)
//                 setShowAddForm(true)
//               }}
//               className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
//             >
//               <FiPlus className="inline mr-1.5" />
//               Add Service
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
import { FiScissors, FiClock, FiDollarSign, FiPlus, FiEdit2, FiTrash2, FiMenu, FiX } from 'react-icons/fi'

export default function ServicesPage() {
  // State management
  const [services, setServices] = useState([])
  const [newService, setNewService] = useState({
    name: '',
    price: '',
    category: 'Haircut',
    duration: '30'
  })
  const [showAddForm, setShowAddForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const categories = ['Haircut', 'Beard', 'Package', 'Coloring', 'Treatment']
  // const durations = ['15', '30', '45', '60', '90', '120']

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services/fetchAll')
        if (!response.ok) throw new Error('Failed to fetch services')
        const data = await response.json()
        setServices(data.services)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchServices()
  }, [])

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewService(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Submit service to API
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!newService.name || !newService.price ) {
      setError('Please fill all required fields')
      return
    }

    setIsSubmitting(true)
    setError(null)
    setSuccess(null)

    try {
      const serviceData = {
        ...newService,
        price: parseFloat(newService.price),
        // duration: parseInt(newService.duration)
      }

      const endpoint = editingId 
        ? `/api/services/update-by-id/${editingId}`
        : '/api/services/add'

      const method = editingId ? 'PUT' : 'POST'

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData)
      })

      if (!response.ok) {
        throw new Error(editingId ? 'Failed to update service' : 'Failed to add service')
      }

      const result = await response.json()

      if (editingId) {
        setServices(services.map(service => 
          service._id === editingId ? result : service
        ))
        setSuccess('Service updated successfully!')
      } else {
        setServices([result, ...services])
        setSuccess('Service added successfully!')
      }

      // Reset form
      setNewService({ 
        name: '', 
        price: '', 
        category: 'Haircut',
    
      })
      setEditingId(null)
      setShowAddForm(false)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Edit service
  const editService = (service) => {
    setNewService({
      name: service.name,
      price: service.price.toString(),
      category: service.category,
      
    })
    setEditingId(service._id)
    setShowAddForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Delete service
  const deleteService = async (serviceId) => {
    if (!confirm('Are you sure you want to delete this service? This action cannot be undone.')) return

    try {
      const response = await fetch(`/api/services/delete-by-id/${serviceId}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw new Error('Failed to delete service')

      setServices(services.filter(service => service._id !== serviceId))
      setSuccess('Service deleted successfully!')
    } catch (err) {
      setError(err.message)
    }
  }

  // Category color mapping
  const getCategoryColor = (category) => {
    const colors = {
      'Haircut': 'bg-blue-100 text-blue-800 border-blue-200',
      'Beard': 'bg-amber-100 text-amber-800 border-amber-200',
      'Package': 'bg-purple-100 text-purple-800 border-purple-200',
      'Coloring': 'bg-pink-100 text-pink-800 border-pink-200',
      'Treatment': 'bg-emerald-100 text-emerald-800 border-emerald-200'
    }
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  // Format duration
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}m` : `${minutes}m`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
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
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8"
        >
          <div className="flex items-center justify-between w-full md:w-auto">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Services</h1>
              <p className="text-gray-600 text-sm md:text-base mt-1">Manage your barber shop services</p>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white shadow-sm border border-gray-200"
            >
              <FiMenu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setNewService({ 
                name: '', 
                price: '', 
                category: 'Haircut',
            
              })
              setEditingId(null)
              setShowAddForm(true)
            }}
            className={`mt-4 md:mt-0 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 md:px-5 md:py-3 rounded-lg md:rounded-xl font-medium shadow-lg hover:shadow-xl transition-all ${mobileMenuOpen ? 'flex' : 'hidden md:flex'}`}
          >
            <FiPlus className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">Add Service</span>
          </motion.button>
        </motion.div>

        {/* Add/Edit Service Form */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 md:mb-8 overflow-hidden"
            >
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FiScissors className="text-blue-500" />
                  <span>{editingId ? 'Edit Service' : 'Add New Service'}</span>
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Name*</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="e.g., Classic Haircut"
                        value={newService.name}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 md:px-4 md:py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
                      <select
                        name="category"
                        value={newService.category}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 md:px-4 md:py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base"
                        required
                      >
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    
                  
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)*</label>
                      <input
                        type="number"
                        name="price"
                        placeholder="e.g., 35"
                        value={newService.price}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 md:px-4 md:py-3 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base"
                        min="0"
                        step="0.01"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-6 flex justify-end gap-2 md:gap-3">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => {
                        setShowAddForm(false)
                        setEditingId(null)
                      }}
                      className="px-4 py-2 md:px-6 md:py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all text-sm md:text-base"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="px-4 py-2 md:px-6 md:py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md text-sm md:text-base flex items-center justify-center min-w-24"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                          {editingId ? 'Updating...' : 'Adding...'}
                        </>
                      ) : (
                        <>
                          {editingId ? 'Update' : 'Add Service'}
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Services List */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-4 border border-gray-200 h-48 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence>
              {services.map((service) => (
                <motion.div
                  key={service._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-4 md:p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 line-clamp-1">{service.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(service.category)}`}>
                        {service.category}
                      </span>
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-gray-800 whitespace-nowrap">${service.price}</div>
                  </div>

                 

                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => editService(service)}
                      className="flex-1 px-2 py-1.5 md:px-3 md:py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium transition-all flex items-center justify-center gap-1 text-sm md:text-base"
                    >
                      <FiEdit2 className="w-3 h-3 md:w-4 md:h-4" />
                      <span>Edit</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => deleteService(service._id)}
                      className="px-2 py-1.5 md:px-3 md:py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg font-medium transition-all flex items-center justify-center gap-1 text-sm md:text-base"
                    >
                      <FiTrash2 className="w-3 h-3 md:w-4 md:h-4" />
                      <span>Delete</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {services.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm text-center"
          >
            <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <FiScissors className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">No services yet</h3>
            <p className="text-gray-600 mb-4">Add your first service to get started</p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setNewService({ 
                  name: '', 
                  price: '', 
                  category: 'Haircut',
                
                })
                setEditingId(null)
                setShowAddForm(true)
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              <FiPlus className="inline mr-1.5" />
              Add Service
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}