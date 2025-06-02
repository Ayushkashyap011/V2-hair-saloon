import Navbar from "../components/Navbar";

export default function AboutPage() {
    return (
        <>
        <Navbar/>
      <div className="min-h-screen bg-gradient-to-br from-[#1a0000] via-[#3d0000] to-[#1a0000] text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#ff3333]/20 rounded-2xl blur-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Barbershop interior" 
                  className="relative z-10 rounded-xl w-full h-auto border border-[#ff3333]/30"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold mb-6">About V2 Hair Saloon</h1>
              <div className="w-20 h-1 bg-[#ff3333] mb-6"></div>
              
              <p className="text-[#ff9999] mb-6">
                Established in 2023, V2 Hair Saloon brings a modern approach to traditional barbering. 
                Our master barbers combine time-honored techniques with contemporary styles.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-[#ff3333] mr-3">✓</div>
                  <p>5+ years experienced barbers</p>
                </div>
                <div className="flex items-start">
                  <div className="text-[#ff3333] mr-3">✓</div>
                  <p>Sanitized tools for every client</p>
                </div>
                <div className="flex items-start">
                  <div className="text-[#ff3333] mr-3">✓</div>
                  <p>Premium grooming products</p>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-[#ff3333] to-[#cc0000] px-6 py-3 rounded-lg hover:from-[#ff4444] hover:to-[#dd0000] transition">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
                  </>
    );
  }