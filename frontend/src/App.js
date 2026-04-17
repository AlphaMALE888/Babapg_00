import { ThemeProvider } from 'next-themes';
import '@/App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HighlightsMarquee from './components/HighlightsMarquee';
import AboutSection from './components/AboutSection';
import RoomTypes from './components/RoomTypes';
import Facilities from './components/Facilities';
import FoodSection from './components/FoodSection';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import LocationSection from './components/LocationSection';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main>
          <HeroSection />
          <HighlightsMarquee />
          <AboutSection />
          <RoomTypes />
          <Facilities />
          <FoodSection />
          <Gallery />
          <Testimonials />
          <LocationSection />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
