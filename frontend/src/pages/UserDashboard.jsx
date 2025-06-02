export default function UserDashboard() {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-bold text-blue-600 mb-6">My Appointments</h1>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium">Haircut + Beard</h3>
              <p className="text-gray-600">Today, 3:00 PM - 3:30 PM</p>
              <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Confirmed
              </span>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-medium">Hair Color</h3>
              <p className="text-gray-600">Tomorrow, 11:00 AM - 11:30 AM</p>
              <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                Pending
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }