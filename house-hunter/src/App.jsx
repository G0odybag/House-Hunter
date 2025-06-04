import Navbar from './assets/Navbar';
import Hero from './assets/Hero';
import PropertyGrid from './assets/PropertyGrid';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <PropertyGrid />
    </div>
  );
}