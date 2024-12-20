import React from 'react';
import FloatingNav from './components/layout/Navbar/FloatingNav';
import Hero from './components/home/Hero/Hero';
import Features from './components/home/Features/Features';

function App() {
  return (
    <div className="min-h-screen">
      <FloatingNav />
      <Hero />
      <Features />
      {/* Add other components here */}
    </div>
  );
}

export default App;