import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <>
    <Navbar/>

    <div className="min-h-screen bg-gradient-to-br from-[#1a0000] via-[#3d0000] to-[#1a0000] text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-[#ff3333] mx-auto"></div>
          <p className="text-[#ff9999] max-w-2xl mx-auto mt-4">
            Have questions? Reach out to our team for assistance
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#ff9999] mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1a0000]/50 border border-[#ff0000]/30 rounded-lg focus:ring-2 focus:ring-[#ff3333]"
                  required
                  />
              </div>
              
              <div>
                <label className="block text-[#ff9999] mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1a0000]/50 border border-[#ff0000]/30 rounded-lg focus:ring-2 focus:ring-[#ff3333]"
                  required
                  />
              </div>
              
              <div>
                <label className="block text-[#ff9999] mb-2">Your Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1a0000]/50 border border-[#ff0000]/30 rounded-lg focus:ring-2 focus:ring-[#ff3333]"
                  required
                  ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-gradient-to-r from-[#ff3333] to-[#cc0000] px-6 py-3 rounded-lg hover:from-[#ff4444] hover:to-[#dd0000] transition"
                >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-[#1a0000]/50 border border-[#ff0000]/20 rounded-xl p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">Visit Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-[#ff3333] mr-4 mt-1">📍</div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-[#ff9999]">Straight Mile Rd, Vidyapati Nagar, Baridih, Jamshedpur, Jharkhand 831017</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#ff3333] mr-4 mt-1">📞</div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-[#ff9999]">+91 7295049491</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#ff3333] mr-4 mt-1">✉️</div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-[#ff9999]">contact@v2saloon.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#ff3333] mr-4 mt-1">🕒</div>
                  <div>
                    <h4 className="font-medium">Opening Hours</h4>
                    <p className="text-[#ff9999]">Mon-Fri: 9AM - 8PM</p>
                    <p className="text-[#ff9999]">Sat: 10AM - 6PM</p>
                    <p className="text-[#ff9999]">Sun: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#ff9999] hover:text-[#ff3333] transition">Instagram</a>
                  <a href="#" className="text-[#ff9999] hover:text-[#ff3333] transition">Facebook</a>
                  <a href="#" className="text-[#ff9999] hover:text-[#ff3333] transition">Twitter</a>
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