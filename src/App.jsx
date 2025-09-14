import React from 'react';
import Header from './components/Common/Header';
import Home from './components/Home/Home';
import BrandCarousel from './components/Products/BrandCarousel';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';

export default function App() {
  return (
    <>
      <Header />
      <Home/>
      <BrandCarousel/>
      <Reviews/>
      <Contact/>
    </>
  );
}
