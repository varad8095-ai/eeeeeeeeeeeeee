import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ServerCreation from '@/components/ServerCreation';
import GlobalNetwork from '@/components/GlobalNetwork';
import ControlPanel from '@/components/ControlPanel';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ServerCreation />
      <GlobalNetwork />
      <ControlPanel />
      <Reviews />
    </>
  );
}
