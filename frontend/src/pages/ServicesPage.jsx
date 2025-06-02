import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const services = [
  
  {
    name: "Hair",
    description: "Professional haircut with styling using premium products",
    price: "₹80",
    duration: "30 mins",
    icon: "✂️"
  },
  {
    name: "Beard",
    description: "Precision beard trimming and neck shave with hot towel",
    price: "₹50",
    duration: "20 mins",
    icon: "🧔"
  },
  {
    name: "Hair + Beard",
    description: "Combined haircut and beard grooming session",
    price: "₹120",
    duration: "30 mins",
    icon: "✂️"
  },
  {
    name: "Facial",
    description: "Traditional hot towel shave with facial massage",
    price: "₹120-400",
    duration: "30 mins",
    icon: "🪒"
  },
  {
    name: "Spa",
    description: "Deep conditioning treatment for damaged hair",
    price: "₹350",
    duration: "30-45 mins",
    icon: "💆"
  },
  {
    name: "Coloring",
    description: "Premium hair coloring with ammonia-free products",
    price: "₹400-1000",
    duration: "45 mins",
    icon: "🎨"
  }


];

export default function ServicesPage() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-[#1a0000] via-[#3d0000] to-[#1a0000] text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <div className="w-20 h-1 bg-[#ff3333] mx-auto"></div>
          <p className="text-[#ff9999] max-w-2xl mx-auto mt-4">
            Premium grooming services tailored for the modern gentleman
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
            key={index} 
            className="bg-[#1a0000]/50 border border-[#ff0000]/20 rounded-xl p-6 hover:border-[#ff3333]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-[#ff9999] mb-4">{service.description}</p>
              <div className="flex justify-between items-center mt-6">
                <span className="text-[#ff3333] font-medium">{service.price}</span>
                <span className="text-sm text-[#ff9999]">{service.duration}</span>
              </div>
              <Link 
                to="/booking" 
                className="mt-4 inline-block text-[#ff3333] hover:text-[#ff6666] transition"
              >
                Book Now →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
          </>
  );
}