// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { motion } from 'framer-motion'
// // import { FiSettings, FiClock, FiImage, FiMail, FiPhone, FiMapPin, FiSave, FiInstagram, FiFacebook, FiTwitter, FiYoutube, FiLinkedin, FiPlus, FiTrash2, FiLogOut } from 'react-icons/fi'
// // import { useAuth } from '@/context/AuthContext';
// // export default function SettingsPage() {
// //       const { logout } = useAuth();
// //   const [settings, setSettings] = useState({
// //     shopName: 'Elite Barber Shop',
// //     shopLogo: '',
// //     contactEmail: 'contact@elitebarber.com',
// //     contactPhone: '+1234567890',
// //     address: '123 Barber Street, New York, NY',
// //     businessHours: {
// //       monday: { open: '09:00', close: '18:00' },
// //       tuesday: { open: '09:00', close: '18:00' },
// //       wednesday: { open: '09:00', close: '18:00' },
// //       thursday: { open: '09:00', close: '18:00' },
// //       friday: { open: '09:00', close: '19:00' },
// //       saturday: { open: '10:00', close: '17:00' },
// //       sunday: { open: '', close: '' }
// //     },
// //     bookingSettings: {
// //       slotDuration: 30,
// //       bufferTime: 15,
// //       advanceBookingDays: 30
// //     },
// //     socialMedia: [
// //       { platform: 'Instagram', url: 'https://instagram.com/elitebarber' },
// //       { platform: 'Facebook', url: 'https://facebook.com/elitebarber' }
// //     ]
// //   })

// //   const [isLoading, setIsLoading] = useState(true)
// //   const [logoPreview, setLogoPreview] = useState('')
// //   const [activeTab, setActiveTab] = useState('general')
// //   const [newSocialMedia, setNewSocialMedia] = useState({ platform: '', url: '' })

// //   useEffect(() => {
// //     // Simulate loading settings
// //     const timer = setTimeout(() => {
// //       setIsLoading(false)
// //       // In a real app, you would load settings from your backend here
// //     }, 800)
// //     return () => clearTimeout(timer)
// //   }, [])

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target
// //     setSettings(prev => ({ ...prev, [name]: value }))
// //   }

// //   const handleBusinessHoursChange = (day, field, value) => {
// //     setSettings(prev => ({
// //       ...prev,
// //       businessHours: {
// //         ...prev.businessHours,
// //         [day]: {
// //           ...prev.businessHours[day],
// //           [field]: value
// //         }
// //       }
// //     }))
// //   }

// //   const handleBookingSettingsChange = (field, value) => {
// //     setSettings(prev => ({
// //       ...prev,
// //       bookingSettings: {
// //         ...prev.bookingSettings,
// //         [field]: parseInt(value) || 0
// //       }
// //     }))
// //   }

// //   const handleLogoUpload = (e) => {
// //     const file = e.target.files[0]
// //     if (file) {
// //       const reader = new FileReader()
// //       reader.onloadend = () => {
// //         setLogoPreview(reader.result)
// //         setSettings(prev => ({ ...prev, shopLogo: reader.result }))
// //       }
// //       reader.readAsDataURL(file)
// //     }
// //   }

// // const saveSettings = async () => {
// //   try {
// //     const response = await fetch('/api/shopinfo/create', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(settings),
// //     });

// //     if (!response.ok) {
// //       const errorData = await response.json();
// //       console.error('Error saving settings:', errorData.message);
// //       alert('Failed to save settings!');
// //       return;
// //     }

// //     const result = await response.json();
// //     console.log('Service created:', result.service);
// //     alert('Settings saved successfully!');
// //   } catch (error) {
// //     console.error('Network or server error:', error);
// //     alert('An error occurred while saving settings.');
// //   }
// // };


// //   const handleSocialMediaChange = (index, field, value) => {
// //     const updatedSocialMedia = [...settings.socialMedia]
// //     updatedSocialMedia[index][field] = value
// //     setSettings(prev => ({
// //       ...prev,
// //       socialMedia: updatedSocialMedia
// //     }))
// //   }

// //   const addSocialMedia = () => {
// //     if (newSocialMedia.platform && newSocialMedia.url) {
// //       setSettings(prev => ({
// //         ...prev,
// //         socialMedia: [...prev.socialMedia, newSocialMedia]
// //       }))
// //       setNewSocialMedia({ platform: '', url: '' })
// //     }
// //   }

// //   const removeSocialMedia = (index) => {
// //     const updatedSocialMedia = [...settings.socialMedia]
// //     updatedSocialMedia.splice(index, 1)
// //     setSettings(prev => ({
// //       ...prev,
// //       socialMedia: updatedSocialMedia
// //     }))
// //   }

// //   const daysOfWeek = [
// //     { id: 'monday', name: 'Monday' },
// //     { id: 'tuesday', name: 'Tuesday' },
// //     { id: 'wednesday', name: 'Wednesday' },
// //     { id: 'thursday', name: 'Thursday' },
// //     { id: 'friday', name: 'Friday' },
// //     { id: 'saturday', name: 'Saturday' },
// //     { id: 'sunday', name: 'Sunday' }
// //   ]

// //   const socialMediaIcons = {
// //     'Instagram': <FiInstagram className="text-pink-600" />,
// //     'Facebook': <FiFacebook className="text-blue-600" />,
// //     'Twitter': <FiTwitter className="text-blue-400" />,
// //     'YouTube': <FiYoutube className="text-red-600" />,
// //     'LinkedIn': <FiLinkedin className="text-blue-700" />,
// //     'Default': <FiPlus className="text-gray-500" />
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
// //       <div className="max-w-6xl mx-auto">
// //         {/* Header */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //           className="flex items-center justify-between mb-8"
// //         >
// //           <div>
// //             <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
// //               <FiSettings className="text-blue-500" />
// //               <span>Shop Settings</span>
// //             </h1>
// //             <p className="text-gray-600 mt-1">Configure your barber shop preferences</p>
// //           </div>
// //            <motion.button
// //             whileHover={{ scale: 1.03 }}
// //             whileTap={{ scale: 0.98 }}
// //             onClick={logout}
// //             className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 md:px-5 md:py-3 rounded-lg font-medium shadow hover:shadow-md transition-all"
// //           >
// //             <FiLogOut className="w-4 h-4 md:w-5 md:h-5" />
// //             <span>Logout</span>
// //           </motion.button>
// //           <motion.button
// //             whileHover={{ scale: 1.03 }}
// //             whileTap={{ scale: 0.98 }}
// //             onClick={saveSettings}
// //             className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 md:px-5 md:py-3 rounded-lg font-medium shadow hover:shadow-md transition-all"
// //           >
// //             <FiSave className="w-4 h-4 md:w-5 md:h-5" />
// //             <span>Save Settings</span>
// //           </motion.button>
// //         </motion.div>

// //         {/* Tabs */}
// //         <div className="flex overflow-x-auto border-b border-gray-200 mb-6">
// //           {['general', 'hours', 'booking', 'social'].map((tab) => (
// //             <button
// //               key={tab}
// //               onClick={() => setActiveTab(tab)}
// //               className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
// //                 activeTab === tab
// //                   ? 'border-b-2 border-blue-500 text-blue-600'
// //                   : 'text-gray-500 hover:text-gray-700'
// //               }`}
// //             >
// //               {tab === 'social' ? 'Social Media' : tab.charAt(0).toUpperCase() + tab.slice(1)}
// //             </button>
// //           ))}
// //         </div>

// //         {isLoading ? (
// //           <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm text-center">
// //             <div className="animate-pulse space-y-4">
// //               <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
// //               <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
// //               <div className="h-32 bg-gray-200 rounded mt-6"></div>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
// //             {/* General Settings */}
// //             {activeTab === 'general' && (
// //               <motion.div
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ duration: 0.3 }}
// //                 className="p-6"
// //               >
// //                 <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
// //                   <FiSettings className="text-blue-500" />
// //                   <span>General Settings</span>
// //                 </h2>
                
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   {/* Shop Name & Logo */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">Shop Name</label>
// //                     <input
// //                       type="text"
// //                       name="shopName"
// //                       value={settings.shopName}
// //                       onChange={handleInputChange}
// //                       className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                     />
// //                   </div>
                  
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">Shop Logo</label>
// //                     <div className="flex items-center gap-4">
// //                       <div className="relative">
// //                         <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden border border-gray-200 flex items-center justify-center">
// //                           {logoPreview || settings.shopLogo ? (
// //                             <img 
// //                               src={logoPreview || settings.shopLogo} 
// //                               alt="Shop logo" 
// //                               className="w-full h-full object-cover"
// //                             />
// //                           ) : (
// //                             <FiImage className="w-6 h-6 text-gray-400" />
// //                           )}
// //                         </div>
// //                         <input
// //                           type="file"
// //                           id="logo-upload"
// //                           accept="image/*"
// //                           onChange={handleLogoUpload}
// //                           className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
// //                         />
// //                       </div>
// //                       <label 
// //                         htmlFor="logo-upload"
// //                         className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
// //                       >
// //                         {logoPreview ? 'Change logo' : 'Upload logo'}
// //                       </label>
// //                     </div>
// //                   </div>
                  
// //                   {/* Contact Info */}
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
// //                     <input
// //                       type="email"
// //                       name="contactEmail"
// //                       value={settings.contactEmail}
// //                       onChange={handleInputChange}
// //                       className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                     />
// //                   </div>
                  
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
// //                     <input
// //                       type="tel"
// //                       name="contactPhone"
// //                       value={settings.contactPhone}
// //                       onChange={handleInputChange}
// //                       className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                     />
// //                   </div>
                  
// //                   <div className="md:col-span-2">
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
// //                     <input
// //                       type="text"
// //                       name="address"
// //                       value={settings.address}
// //                       onChange={handleInputChange}
// //                       className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                     />
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             )}

// //             {/* Business Hours */}
// //             {activeTab === 'hours' && (
// //               <motion.div
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ duration: 0.3 }}
// //                 className="p-6"
// //               >
// //                 <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
// //                   <FiClock className="text-blue-500" />
// //                   <span>Business Hours</span>
// //                 </h2>
                
// //                 <div className="space-y-4">
// //                   {daysOfWeek.map((day) => (
// //                     <div key={day.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
// //                       <div className="md:col-span-2">
// //                         <label className="block text-sm font-medium text-gray-700">{day.name}</label>
// //                       </div>
// //                       <div className="md:col-span-4">
// //                         <div className="flex items-center gap-2">
// //                           <input
// //                             type="time"
// //                             value={settings.businessHours[day.id].open}
// //                             onChange={(e) => handleBusinessHoursChange(day.id, 'open', e.target.value)}
// //                             className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                           />
// //                           <span className="text-gray-500">to</span>
// //                           <input
// //                             type="time"
// //                             value={settings.businessHours[day.id].close}
// //                             onChange={(e) => handleBusinessHoursChange(day.id, 'close', e.target.value)}
// //                             className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                             disabled={!settings.businessHours[day.id].open}
// //                           />
// //                         </div>
// //                       </div>
// //                       <div className="md:col-span-6">
// //                         {!settings.businessHours[day.id].open && (
// //                           <button
// //                             onClick={() => handleBusinessHoursChange(day.id, 'open', '09:00')}
// //                             className="text-sm text-blue-600 hover:text-blue-800"
// //                           >
// //                             + Add hours for {day.name}
// //                           </button>
// //                         )}
// //                         {settings.businessHours[day.id].open && (
// //                           <button
// //                             onClick={() => handleBusinessHoursChange(day.id, 'open', '')}
// //                             className="text-sm text-red-600 hover:text-red-800 ml-2"
// //                           >
// //                             Remove hours
// //                           </button>
// //                         )}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </motion.div>
// //             )}

// //             {/* Booking Settings */}
// //             {activeTab === 'booking' && (
// //               <motion.div
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ duration: 0.3 }}
// //                 className="p-6"
// //               >
// //                 <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
// //                   <FiClock className="text-blue-500" />
// //                   <span>Booking Settings</span>
// //                 </h2>
                
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">Slot Duration (minutes)</label>
// //                     <input
// //                       type="number"
// //                       min="15"
// //                       max="60"
// //                       step="15"
// //                       value={settings.bookingSettings.slotDuration}
// //                       onChange={(e) => handleBookingSettingsChange('slotDuration', e.target.value)}
// //                       className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                     />
// //                   </div>
                  
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">Buffer Time Between Appointments (minutes)</label>
// //                     <input
// //                       type="number"
// //                       min="0"
// //                       max="30"
// //                       step="5"
// //                       value={settings.bookingSettings.bufferTime}
// //                       onChange={(e) => handleBookingSettingsChange('bufferTime', e.target.value)}
// //                       className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                     />
// //                   </div>
                  
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">Advance Booking Window (days)</label>
// //                     <input
// //                       type="number"
// //                       min="1"
// //                       max="90"
// //                       value={settings.bookingSettings.advanceBookingDays}
// //                       onChange={(e) => handleBookingSettingsChange('advanceBookingDays', e.target.value)}
// //                       className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                     />
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             )}

// //             {/* Social Media Settings */}
// //             {activeTab === 'social' && (
// //               <motion.div
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ duration: 0.3 }}
// //                 className="p-6"
// //               >
// //                 <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
// //                   <FiInstagram className="text-pink-600" />
// //                   <span>Social Media</span>
// //                 </h2>
                
// //                 <div className="space-y-6">
// //                   {settings.socialMedia.map((social, index) => (
// //                     <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
// //                       <div className="md:col-span-3">
// //                         <select
// //                           value={social.platform}
// //                           onChange={(e) => handleSocialMediaChange(index, 'platform', e.target.value)}
// //                           className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                         >
// //                           <option value="">Select Platform</option>
// //                           <option value="Instagram">Instagram</option>
// //                           <option value="Facebook">Facebook</option>
// //                           <option value="Twitter">Twitter</option>
// //                           <option value="YouTube">YouTube</option>
// //                           <option value="LinkedIn">LinkedIn</option>
// //                           <option value="Other">Other</option>
// //                         </select>
// //                       </div>
// //                       <div className="md:col-span-8">
// //                         <div className="flex items-center gap-2">
// //                           <div className="flex-shrink-0">
// //                             {socialMediaIcons[social.platform] || socialMediaIcons['Default']}
// //                           </div>
// //                           <input
// //                             type="url"
// //                             value={social.url}
// //                             onChange={(e) => handleSocialMediaChange(index, 'url', e.target.value)}
// //                             placeholder="https://example.com/yourprofile"
// //                             className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                           />
// //                         </div>
// //                       </div>
// //                       <div className="md:col-span-1">
// //                         <button
// //                           onClick={() => removeSocialMedia(index)}
// //                           className="text-red-500 hover:text-red-700"
// //                         >
// //                           <FiTrash2 />
// //                         </button>
// //                       </div>
// //                     </div>
// //                   ))}

// //                   <div className="pt-4 border-t border-gray-200">
// //                     <h3 className="text-md font-medium text-gray-800 mb-4">Add New Social Media</h3>
// //                     <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
// //                       <div className="md:col-span-3">
// //                         <select
// //                           value={newSocialMedia.platform}
// //                           onChange={(e) => setNewSocialMedia({ ...newSocialMedia, platform: e.target.value })}
// //                           className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                         >
// //                           <option value="">Select Platform</option>
// //                           <option value="Instagram">Instagram</option>
// //                           <option value="Facebook">Facebook</option>
// //                           <option value="Twitter">Twitter</option>
// //                           <option value="YouTube">YouTube</option>
// //                           <option value="LinkedIn">LinkedIn</option>
// //                           <option value="Other">Other</option>
// //                         </select>
// //                       </div>
// //                       <div className="md:col-span-8">
// //                         <input
// //                           type="url"
// //                           value={newSocialMedia.url}
// //                           onChange={(e) => setNewSocialMedia({ ...newSocialMedia, url: e.target.value })}
// //                           placeholder="https://example.com/yourprofile"
// //                           className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
// //                         />
// //                       </div>
// //                       <div className="md:col-span-1">
// //                         <motion.button
// //                           whileHover={{ scale: 1.05 }}
// //                           whileTap={{ scale: 0.95 }}
// //                           onClick={addSocialMedia}
// //                           disabled={!newSocialMedia.platform || !newSocialMedia.url}
// //                           className={`p-2 rounded-full ${newSocialMedia.platform && newSocialMedia.url ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}
// //                         >
// //                           <FiPlus />
// //                         </motion.button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   )
// // }

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiSettings, FiClock, FiImage, FiMail, FiPhone, FiMapPin, FiSave, FiInstagram, FiFacebook, FiTwitter, FiYoutube, FiLinkedin, FiPlus, FiTrash2, FiLogOut } from 'react-icons/fi'
import { useAuth } from '@/context/AuthContext'

export default function SettingsPage() {
  const { logout } = useAuth()
  const [userId, setUser] = useState(null)
  const [settings, setSettings] = useState({
    shopName: '',
    shopLogo: '',
    contactEmail: '',
    contactPhone: '',
    address: '',
    userId: '',
    businessHours: {
      monday: { open: '', close: '' },
      tuesday: { open: '', close: '' },
      wednesday: { open: '', close: '' },
      thursday: { open: '', close: '' },
      friday: { open: '', close: '' },
      saturday: { open: '', close: '' },
      sunday: { open: '', close: '' }
    },
    socialMedia: []
  })

  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [logoPreview, setLogoPreview] = useState('')
  const [activeTab, setActiveTab] = useState('general')
  const [newSocialMedia, setNewSocialMedia] = useState({ platform: '', url: '' })
  const [shopExists, setShopExists] = useState(false)
  const [shopId, setShopId] = useState(null)

  // Set user ID from localStorage
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      const data = JSON.parse(user)
      setUser(data._id)
      setSettings(prev => ({ ...prev, userId: data._id }))
    }
  }, [])

  // Fetch shop settings when userId is available
  useEffect(() => {
    const fetchShopSettings = async () => {
      if (!userId) return
      
      try {
        const response = await fetch(`/api/shopinfo/fetch-by-id/${userId}`)
        if (response.ok) {
          const data = await response.json()
          console.log("sdf",data[0])
          if (data) {
            setSettings(data[0])
            // setSettings(prev => ({
            //   ...prev,
            //   ...data,
            //   businessHours: {
            //     ...prev.businessHours,
            //     ...(data.businessHours || {})
            //   },
            //   socialMedia: data.socialMedia || []
            // }))
            setShopExists(true)
            setShopId(data[0]._id)
            if (data.shopLogo) {
              setLogoPreview(data.shopLogo)
            }
          }
        }
      } catch (error) {
        console.error('Error fetching shop settings:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchShopSettings()
  }, [userId])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSettings(prev => ({ ...prev, [name]: value }))
  }

  const handleBusinessHoursChange = (day, field, value) => {
    setSettings(prev => ({
      ...prev,
      businessHours: {
        ...prev.businessHours,
        [day]: {
          ...prev.businessHours[day],
          [field]: value
        }
      }
    }))
  }

  const handleLogoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoPreview(reader.result)
        setSettings(prev => ({ ...prev, shopLogo: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const saveSettings = async () => {
    setIsSaving(true)
    
    try {
      const dataToSend = { ...settings, userId: userId }
      const endpoint = shopExists ? `/api/shopinfo/update-by-id/${shopId}` : '/api/shopinfo/create'
      const method = shopExists ? 'PUT' : 'POST'

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })

      if (!response.ok) {
        throw new Error('Failed to save settings')
      }

      const result = await response.json()
      if (!shopExists) {
        setShopExists(true)
        setShopId(result._id)
      }
    } catch (error) {
      console.error('Error saving settings:', error)
      alert('Failed to save settings. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const handleSocialMediaChange = (index, field, value) => {
    const updatedSocialMedia = [...settings.socialMedia]
    updatedSocialMedia[index][field] = value
    setSettings(prev => ({
      ...prev,
      socialMedia: updatedSocialMedia
    }))
  }

  const addSocialMedia = () => {
    if (newSocialMedia.platform && newSocialMedia.url) {
      setSettings(prev => ({
        ...prev,
        socialMedia: [...prev.socialMedia, newSocialMedia]
      }))
      setNewSocialMedia({ platform: '', url: '' })
    }
  }

  const removeSocialMedia = (index) => {
    const updatedSocialMedia = [...settings.socialMedia]
    updatedSocialMedia.splice(index, 1)
    setSettings(prev => ({
      ...prev,
      socialMedia: updatedSocialMedia
    }))
  }

  const daysOfWeek = [
    { id: 'monday', name: 'Monday' },
    { id: 'tuesday', name: 'Tuesday' },
    { id: 'wednesday', name: 'Wednesday' },
    { id: 'thursday', name: 'Thursday' },
    { id: 'friday', name: 'Friday' },
    { id: 'saturday', name: 'Saturday' },
    { id: 'sunday', name: 'Sunday' }
  ]

  const socialMediaIcons = {
    'Instagram': <FiInstagram className="text-pink-600" />,
    'Facebook': <FiFacebook className="text-blue-600" />,
    'Twitter': <FiTwitter className="text-blue-400" />,
    'YouTube': <FiYoutube className="text-red-600" />,
    'LinkedIn': <FiLinkedin className="text-blue-700" />,
    'Default': <FiPlus className="text-gray-500" />
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 flex items-center justify-center">
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm text-center w-full max-w-2xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="h-32 bg-gray-200 rounded mt-6"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4"
        >
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
              <FiSettings className="text-blue-500" />
              <span>Shop Settings</span>
            </h1>
            <p className="text-gray-600 mt-1">Configure your barber shop preferences</p>
          </div>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={logout}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 md:px-5 md:py-3 rounded-lg font-medium shadow hover:shadow-md transition-all"
            >
              <FiLogOut className="w-4 h-4 md:w-5 md:h-5" />
              <span>Logout</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={saveSettings}
              disabled={isSaving}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 md:px-5 md:py-3 rounded-lg font-medium shadow hover:shadow-md transition-all disabled:opacity-70"
            >
              <FiSave className="w-4 h-4 md:w-5 md:h-5" />
              <span>{isSaving ? 'Saving...' : 'Save Settings'}</span>
            </motion.button>
          </div>
        </motion.div>

        <div className="flex overflow-x-auto border-b border-gray-200 mb-6">
          {['general', 'hours', 'social'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                activeTab === tab
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab === 'general' && 'General'}
              {tab === 'hours' && 'Business Hours'}
              {tab === 'social' && 'Social Media'}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          {activeTab === 'general' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FiSettings className="text-blue-500" />
                <span>General Settings</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Shop Name</label>
                  <input
                    type="text"
                    name="shopName"
                    value={settings.shopName || ''}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter your shop name"
                  />
                </div>
                
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Shop Logo</label>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden border border-gray-200 flex items-center justify-center">
                        {logoPreview ? (
                          <img 
                            src={logoPreview} 
                            alt="Shop logo" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <FiImage className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                      <input
                        type="file"
                        id="logo-upload"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    <label 
                      htmlFor="logo-upload"
                      className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
                    >
                      {logoPreview ? 'Change logo' : 'Upload logo'}
                    </label>
                  </div>
                </div> */}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={settings.contactEmail || ''}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="contact@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={settings.contactPhone || ''}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="+1234567890"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={settings.address || ''}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter your shop address"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'hours' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FiClock className="text-blue-500" />
                <span>Business Hours</span>
              </h2>
              
              <div className="space-y-4">
                {daysOfWeek.map((day) => (
                  <div key={day.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">{day.name}</label>
                    </div>
                    <div className="md:col-span-4">
                      <div className="flex items-center gap-2">
                        <input
                          type="time"
                          value={settings.businessHours[day.id].open || ''}
                          onChange={(e) => handleBusinessHoursChange(day.id, 'open', e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        />
                        <span className="text-gray-500">to</span>
                        <input
                          type="time"
                          value={settings.businessHours[day.id].close || ''}
                          onChange={(e) => handleBusinessHoursChange(day.id, 'close', e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          disabled={!settings.businessHours[day.id].open}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      {!settings.businessHours[day.id].open && (
                        <button
                          onClick={() => handleBusinessHoursChange(day.id, 'open', '09:00')}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          + Add hours for {day.name}
                        </button>
                      )}
                      {settings.businessHours[day.id].open && (
                        <button
                          onClick={() => {
                            handleBusinessHoursChange(day.id, 'open', '')
                            handleBusinessHoursChange(day.id, 'close', '')
                          }}
                          className="text-sm text-red-600 hover:text-red-800 ml-2"
                        >
                          Remove hours
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'social' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FiInstagram className="text-pink-600" />
                <span>Social Media</span>
              </h2>
              
              <div className="space-y-6">
                {settings.socialMedia.map((social, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-3">
                      <select
                        value={social.platform || ''}
                        onChange={(e) => handleSocialMediaChange(index, 'platform', e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      >
                        <option value="">Select Platform</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Twitter">Twitter</option>
                        <option value="YouTube">YouTube</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="md:col-span-8">
                      <div className="flex items-center gap-2">
                        <div className="flex-shrink-0">
                          {socialMediaIcons[social.platform] || socialMediaIcons['Default']}
                        </div>
                        <input
                          type="url"
                          value={social.url || ''}
                          onChange={(e) => handleSocialMediaChange(index, 'url', e.target.value)}
                          placeholder="https://example.com/yourprofile"
                          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-1">
                      <button
                        onClick={() => removeSocialMedia(index)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-md font-medium text-gray-800 mb-4">Add New Social Media</h3>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-3">
                      <select
                        value={newSocialMedia.platform}
                        onChange={(e) => setNewSocialMedia({ ...newSocialMedia, platform: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      >
                        <option value="">Select Platform</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Twitter">Twitter</option>
                        <option value="YouTube">YouTube</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="md:col-span-8">
                      <input
                        type="url"
                        value={newSocialMedia.url}
                        onChange={(e) => setNewSocialMedia({ ...newSocialMedia, url: e.target.value })}
                        placeholder="https://example.com/yourprofile"
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={addSocialMedia}
                        disabled={!newSocialMedia.platform || !newSocialMedia.url}
                        className={`p-2 rounded-full ${newSocialMedia.platform && newSocialMedia.url ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}
                      >
                        <FiPlus />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}