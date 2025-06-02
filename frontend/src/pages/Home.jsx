import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0000] via-[#3d0000] to-[#1a0000] text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}