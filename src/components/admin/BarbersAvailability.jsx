'use client'
import { UserCircleIcon } from '@heroicons/react/24/outline'

export default function BarbersAvailability() {
  const barbers = [
    { id: 1, name: 'John Doe', availability: '4 slots available' },
    { id: 2, name: 'Mike Smith', availability: '2 slots available' },
    { id: 3, name: 'Sarah Johnson', availability: 'Fully booked' },
  ]

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Barbers Availability</h2>
      <div className="space-y-3">
        {barbers.map((barber) => (
          <div key={barber.id} className="flex items-center">
            <UserCircleIcon className="h-8 w-8 text-gray-400" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{barber.name}</p>
              <p className={`text-sm ${barber.availability === 'Fully booked' ? 'text-red-500' : 'text-green-500'}`}>
                {barber.availability}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}