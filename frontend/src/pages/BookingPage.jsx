import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function BookingPage() {
    const services = [
        { id: 1, name: "Classic Haircut", price: 80, duration: "30 mins" },
        { id: 2, name: "Beard Trim", price: 50, duration: "20 mins" },
        { id: 3, name: "Hair + Beard", price: 120, duration: "30 mins" },
        { id: 4, name: "Facial", price: 120, duration: "30 mins" },
        { id: 5, name: "Hair Spa", price: 350, duration: "30 mins" },
        { id: 6, name: "Hair Coloring", price: 700, duration: "30 mins" }
      ];

  // Generate time slots (30-minute intervals from 9AM to 8PM)
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 10; // 9AM
    const endHour = 22;  // 10PM
    
    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();
  const [availableSlots, setAvailableSlots] = useState(timeSlots);
  const [bookedSlots, setBookedSlots] = useState([]); // Would come from API in real app

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    selectedService: '',
    date: '',
    time: ''
  });

  const [total, setTotal] = useState(0);

  // Filter available slots when date changes (simulating API call)
  useEffect(() => {
    if (formData.date) {
      // In a real app, you would fetch booked slots for this date from your API
      // This is just a simulation with random booked slots
      const randomBooked = timeSlots.filter(() => Math.random() > 0.7);
      setBookedSlots(randomBooked);
      setAvailableSlots(timeSlots.filter(slot => !randomBooked.includes(slot)));
    }
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset time when date changes
      ...(name === 'date' && { time: '' })
    }));

    if (name === 'selectedService') {
      const selected = services.find(s => s.id === parseInt(value));
      setTotal(selected ? selected.price : 0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, total });
    // Add your booking submission logic here
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-[#1a0000] via-[#3d0000] to-[#1a0000] text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-2">Book Your Appointment</h1>
        <div className="w-20 h-1 bg-[#ff3333] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <div className="bg-[#1a0000]/80 border border-[#ff0000]/20 rounded-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#ff9999] mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#2a0000] border border-[#ff0000]/30 rounded-lg focus:ring-2 focus:ring-[#ff3333]"
                  required
                />
              </div>

              <div>
                <label className="block text-[#ff9999] mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#2a0000] border border-[#ff0000]/30 rounded-lg focus:ring-2 focus:ring-[#ff3333]"
                  required
                />
              </div>

              <div>
                <label className="block text-[#ff9999] mb-2">Select Service</label>
                <select
                  name="selectedService"
                  value={formData.selectedService}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#2a0000] border border-[#ff0000]/30 rounded-lg focus:ring-2 focus:ring-[#ff3333]"
                  required
                >
                  <option value="">-- Select a service --</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name} - ₹{service.price} ({service.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#ff9999] mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]} // Disable past dates
                  className="w-full p-3 bg-[#2a0000] border border-[#ff0000]/30 rounded-lg focus:ring-2 focus:ring-[#ff3333]"
                  required
                />
              </div>

              {formData.date && (
                <div>
                  <label className="block text-[#ff9999] mb-2">Available Time Slots (30 mins)</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {availableSlots.map(slot => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData({ ...formData, time: slot })}
                        className={`p-2 rounded-lg border ${
                          formData.time === slot
                            ? 'bg-[#ff3333] border-[#ff3333]'
                            : 'bg-[#2a0000] border-[#ff0000]/30 hover:border-[#ff3333]'
                        } transition`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  {bookedSlots.length > 0 && (
                    <p className="text-sm text-[#ff9999] mt-2">
                      Booked slots: {bookedSlots.join(', ')}
                    </p>
                  )}
                </div>
              )}

              <div className="pt-4 border-t border-[#ff0000]/20">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Total:</span>
                  <span className="text-2xl font-bold text-[#ff3333]">₹{total}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={!formData.time}
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  formData.time
                    ? 'bg-gradient-to-r from-[#ff3333] to-[#cc0000] hover:from-[#ff4444] hover:to-[#dd0000]'
                    : 'bg-gray-500 cursor-not-allowed'
                }`}
              >
                {formData.time ? 'Confirm Booking' : 'Select Time Slot'}
              </button>
            </form>
          </div>

          {/* Payment Section */}
          <div className="bg-[#1a0000]/80 border border-[#ff0000]/20 rounded-xl p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Complete Payment</h2>
            <div className="flex-grow flex flex-col items-center justify-center">
              <div className="mb-6 text-center">
                <p className="text-[#ff9999] mb-2">Scan QR code to pay</p>
                <div className="bg-white p-4 rounded-lg inline-block">
                  <img 
                    src="https://via.placeholder.com/200x200.png?text=Your+QR+Code+Here" 
                    alt="Payment QR Code" 
                    className="w-48 h-48"
                  />
                </div>
                <p className="text-[#ff9999] mt-4">Or pay at the salon</p>
              </div>
              
              <div className="w-full bg-[#2a0000] p-4 rounded-lg">
                <h3 className="font-medium mb-2">Booking Summary</h3>
                <div className="space-y-2 text-sm text-[#ff9999]">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span>
                      {formData.selectedService 
                        ? services.find(s => s.id === parseInt(formData.selectedService))?.name 
                        : 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span>{formData.date || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span>{formData.time || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between border-t border-[#ff0000]/20 pt-2 mt-2">
                    <span className="font-medium">Amount:</span>
                    <span className="text-[#ff3333] font-bold">${total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}