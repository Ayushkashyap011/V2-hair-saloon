export default function AdminDashboard() {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-bold text-blue-600 mb-6">Admin Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800">Total Appointments</h3>
              <p className="text-3xl font-bold mt-2">24</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800">Confirmed</h3>
              <p className="text-3xl font-bold mt-2">18</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-medium text-yellow-800">Pending</h3>
              <p className="text-3xl font-bold mt-2">6</p>
            </div>
          </div>
        </div>
      </div>
    )
  }