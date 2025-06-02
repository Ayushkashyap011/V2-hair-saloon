export default function ServicesSection() {
    const services = [
      { name: "Classic Haircut", price: "₹80", duration: "30 mins" },
      { name: "Beard", price: "₹50", duration: "20 mins" },
      { name: "Hair + Beard ", price: "₹120", duration: "30 mins" },
      { name: "Hair Spa", price: "₹350", duration: "40 mins" },
    ];
  
    return (
      <section className="container mx-auto px-6 py-20" id="services">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-[#ff9999] text-center max-w-2xl mx-auto mb-12">
          Professional grooming services tailored to your style
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[#1a0000]/50 border border-[#ff0000]/20 rounded-xl p-6 hover:border-[#ff3333]/50 transition group">
              <div className="bg-[#ff3333]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#ff3333]/20 transition">
                ✂️
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <div className="flex justify-between text-[#ff9999]">
                <span>{service.price}</span>
                <span>{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }