import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Research from '@/components/Research';
import Training from '@/components/Training';
import EventsNews from '@/components/EventsNews';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Research />
        <Training />
        <EventsNews />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
