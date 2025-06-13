'use client'
import { ClockIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function RecentBookings() {
  const recentBookings = [
    { id: 1, customer: 'Alex Johnson', time: '10:00 AM', status: 'upcoming' },
    { id: 2, customer: 'Sarah Williams', time: '11:30 AM', status: 'completed' },
    { id: 3, customer: 'Michael Brown', time: '2:00 PM', status: 'cancelled' },
    { id: 4, customer: 'Emily Davis', time: '3:30 PM', status: 'upcoming' },
  ]

  const statusIcons = {
    upcoming: <ClockIcon className="h-5 w-5 text-yellow-500" />,
    completed: <CheckIcon className="h-5 w-5 text-green-500" />,
    cancelled: <XMarkIcon className="h-5 w-5 text-red-500" />
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Bookings</h2>
      <div className="space-y-4">
        {recentBookings.map((booking) => (
          <div key={booking.id} className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              {statusIcons[booking.status]}
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">{booking.customer}</p>
              <p className="text-sm text-gray-500">{booking.time} - {booking.status}</p>
            </div>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}