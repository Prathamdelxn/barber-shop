'use client'
import { useState } from 'react'

export default function SeatsStatus() {
  const [seats] = useState([
    { id: 1, number: 'A1', status: 'available' },
    { id: 2, number: 'A2', status: 'occupied' },
    { id: 3, number: 'A3', status: 'maintenance' },
    { id: 4, number: 'B1', status: 'available' },
    { id: 5, number: 'B2', status: 'available' },
    { id: 6, number: 'B3', status: 'occupied' },
  ])

  const statusColors = {
    available: 'bg-green-100 text-green-800',
    occupied: 'bg-red-100 text-red-800',
    maintenance: 'bg-yellow-100 text-yellow-800'
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Seats Status</h2>
      <div className="grid grid-cols-3 gap-3">
        {seats.map((seat) => (
          <div 
            key={seat.id}
            className={`rounded-md p-3 text-center font-medium ${statusColors[seat.status]}`}
          >
            {seat.number}
            <div className="text-xs mt-1 capitalize">{seat.status}</div>
          </div>
        ))}
      </div>
    </div>
  )
}