import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a0000] border-t border-[#ff0000]/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="bg-[#ff3333] text-[#1a0000] font-bold text-xl px-3 py-2 rounded inline-block mb-4">
              V2 Saloon
            </div>
            <p className="text-[#ff9999] max-w-xs">
              Premium men's grooming salon providing exceptional services since 2023.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-[#ff9999] hover:text-[#ff6666] transition">Home</Link></li>
                <li><Link to="/services" className="text-[#ff9999] hover:text-[#ff6666] transition">Services</Link></li>
                <li><Link to="/about" className="text-[#ff9999] hover:text-[#ff6666] transition">About</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-[#ff9999]">
                <li> Straight Mile Rd, Vidyapati Nagar, Baridih, Jamshedpur, Jharkhand 831017</li>
                <li>+91 7295049491</li>
                <li>contact@v2saloon.com</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
              <ul className="space-y-2 text-[#ff9999]">
                <li>Mon-Sun: 10AM - 10PM</li>
                <li>THU: Closed</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#ff0000]/10 mt-12 pt-8 text-center text-[#ff9999]">
          © 2023 V2 Saloon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}