import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FactsBanner from '../components/FactsBanner';
import CarListing from '../components/CarListing';
import DownloadApp from '../components/DownloadApp';
import BottomBanner from '../components/BottomBanner';
import Footer from '../components/Footer';
import InfoBlocks from '../components/InfoBlocks';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <InfoBlocks />
        <CarListing />
        <FactsBanner />
        <DownloadApp />
        <BottomBanner />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;