import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-[#ff3333]">V2 Saloon</span>
        </h1>
        <p className="text-lg text-[#ff9999] mb-8">
          Premium grooming services for the modern gentleman. Book your appointment today and experience luxury styling.
        </p>
        <div className="flex space-x-4">
          <Link to="/services" className="bg-gradient-to-r from-[#ff3333] to-[#cc0000] px-6 py-3 rounded-lg hover:from-[#ff4444] hover:to-[#dd0000] transition">
            Our Services
          </Link>
          <Link to="/booking" className="border border-[#ff3333] px-6 py-3 rounded-lg hover:bg-[#ff3333]/10 transition">
            Book Now
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md">
          <div className="absolute -inset-2 bg-[#ff3333]/30 rounded-xl blur"></div>
          <img 
            src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Barber working" 
            className="relative rounded-xl w-full h-auto border border-[#ff3333]/30"
          />
        </div>
      </div>
    </section>
  );
}