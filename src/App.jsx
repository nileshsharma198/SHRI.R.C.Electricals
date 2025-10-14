import React from 'react';
import Header from './components/Common/Header';
import Home from './components/Home/Home';
import BrandCarousel from './components/Products/BrandCarousel';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import ProductsSection from './components/Products/ProductSection';
import Footer from './components/Common/Footer';
import FloatingButton from './components/Common/FloatingButton';

export default function App() {
  return (
    <>
      <Header />
      <Home/>
      <BrandCarousel/>
      <Reviews/>
      <Contact/>
      <ProductsSection/>
      <Reviews/>
      <Contact/>
      <Footer/>
      <FloatingButton/>
    </>
  );
}
