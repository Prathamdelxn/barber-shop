// 'use client'
// import { useState } from 'react'
// import SeatGrid from '@/components/admin/SeatGrid'
// import SeatConfiguration from '@/components/admin/SeatConfiguration'

// export default function SeatManagement() {
//   const [seats, setSeats] = useState([
//     { id: 1, number: 'A1', status: 'available', type: 'standard' },
//     { id: 2, number: 'A2', status: 'occupied', type: 'standard' },
//     { id: 3, number: 'A3', status: 'maintenance', type: 'standard' },
//     { id: 4, number: 'B1', status: 'available', type: 'premium' },
//     { id: 5, number: 'B2', status: 'available', type: 'premium' },
//     { id: 6, number: 'B3', status: 'available', type: 'premium' },
//   ])

//   const [config, setConfig] = useState({
//     totalSeats: 6,
//     premiumSeats: 3,
//     standardSeats: 3
//   })

//   const updateSeatStatus = (id, newStatus) => {
//     setSeats(seats.map(seat => 
//       seat.id === id ? { ...seat, status: newStatus } : seat
//     ))
//   }

//   const updateConfiguration = (newConfig) => {
//     setConfig(newConfig)
//     // Generate new seats based on configuration
//     const newSeats = []
//     let seatId = 1
    
//     // Add standard seats
//     for (let i = 1; i <= newConfig.standardSeats; i++) {
//       newSeats.push({
//         id: seatId++,
//         number: `S${i}`,
//         status: 'available',
//         type: 'standard'
//       })
//     }
    
//     // Add premium seats
//     for (let i = 1; i <= newConfig.premiumSeats; i++) {
//       newSeats.push({
//         id: seatId++,
//         number: `P${i}`,
//         status: 'available',
//         type: 'premium'
//       })
//     }
    
//     setSeats(newSeats)
//   }

//   return (
//     <div className="space-y-8">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-900">Seat Management</h1>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-lg font-semibold mb-4">Current Seat Layout</h2>
//             <SeatGrid seats={seats} onStatusChange={updateSeatStatus} />
//           </div>
//         </div>
        
//         <div className="bg-white p-6 rounded-xl shadow">
//           <SeatConfiguration 
//             currentConfig={config} 
//             onUpdate={updateConfiguration} 
//           />
//         </div>
//       </div>
//     </div>
//   )
// }