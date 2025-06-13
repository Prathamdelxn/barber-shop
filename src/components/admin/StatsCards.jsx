'use client'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/20/solid'

export default function StatsCards() {
  const stats = [
    { name: 'Today\'s Appointments', value: '24', change: '+4', changeType: 'positive' },
    { name: 'Available Barbers', value: '5', change: '+1', changeType: 'positive' },
    { name: 'Occupied Seats', value: '8', change: '-2', changeType: 'negative' },
    { name: 'Monthly Revenue', value: '$8,240', change: '+12%', changeType: 'positive' },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white rounded-lg shadow px-6 py-5">
          <div>
            <p className="text-sm font-medium text-gray-500 truncate">{stat.name}</p>
            <div className="mt-1 flex items-baseline justify-between">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <div className={`flex items-baseline ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.changeType === 'positive' ? (
                  <ArrowUpIcon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                )}
                <span className="ml-1 text-sm font-medium">
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}