import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center ">
      <div className="flex items-center">
        <div className="bg-[#ff3333] text-[#1a0000] font-bold text-xl px-3 py-2 rounded">
          <a href="/" >V2 Saloon</a>
        </div>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link to="/services" className="hover:text-[#ff6666] transition">Services</Link>
        <Link to="/about" className="hover:text-[#ff6666] transition">About</Link>
        <Link to="/contact" className="hover:text-[#ff6666] transition">Contact</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/login" className="px-4 py-2 rounded hover:bg-[#ff3333]/20 transition">Login</Link>
        <Link to="/signup" className="bg-gradient-to-r from-[#ff3333] to-[#cc0000] px-4 py-2 rounded hover:from-[#ff4444] hover:to-[#dd0000] transition">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}