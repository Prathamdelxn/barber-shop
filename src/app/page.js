import StatsCards from "@/components/admin/StatsCards";
import RecentBookings from "@/components/admin/RecentBookings";
import BarbersAvailability from "@/components/admin/BarbersAvailability";
import SeatsStatus from "@/components/admin/SeatsStatus";
// import CalendarView from '@/components/admin/CalendarView'

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Generate Report
          </button>
        </div>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          {/* <CalendarView /> */}
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <BarbersAvailability />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <RecentBookings />
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <SeatsStatus />
        </div>
      </div>
    </div>
  );
}
