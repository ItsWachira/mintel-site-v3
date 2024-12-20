import Hero from '@/components/home/Hero/Hero';
import Features from '@/components/home/Features/Features';
import Solutions from '@/components/home/Solutions/Solutions';
import About from '@/components/home/About/About';
import Services from '@/components/home/Services/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Solutions />
      <About />
      <Services />
    </>
  );
}