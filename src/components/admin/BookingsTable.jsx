'use client'
import { CheckCircleIcon, XCircleIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function BookingsTable({ bookings, onSelect, onStatusChange }) {
  const statusIcons = {
    confirmed: <ClockIcon className="h-5 w-5 text-yellow-500" />,
    completed: <CheckCircleIcon className="h-5 w-5 text-green-500" />,
    cancelled: <XCircleIcon className="h-5 w-5 text-red-500" />
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Barber
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date & Time
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Service
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bookings.map((booking) => (
            <tr 
              key={booking.id} 
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => onSelect(booking)}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                      {booking.customer.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{booking.customer}</div>
                    <div className="text-sm text-gray-500">{booking.seat}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{booking.barber}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{booking.date}</div>
                <div className="text-sm text-gray-500">{booking.time}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{booking.service}</div>
                <div className="text-sm text-gray-500">{booking.price}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {statusIcons[booking.status]}
                  <span className="ml-2 text-sm text-gray-500 capitalize">{booking.status}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onStatusChange(booking.id, 'completed')
                  }}
                  className="text-indigo-600 hover:text-indigo-900 mr-3"
                >
                  Complete
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onStatusChange(booking.id, 'cancelled')
                  }}
                  className="text-red-600 hover:text-red-900"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}