import React from 'react';

// importing components
import CustomerNavbar from '@/components/customer/CustomerNavbar';
import Carousel from '@/components/sections/landing-page/Carousel';
import CustomizeOrder from '@/components/sections/landing-page/CustomizeOrder';
import Categories from '@/components/sections/landing-page/Categories';
import TopProducts from '@/components/sections/landing-page/TopProducts';
import TopSellers from '@/components/sections/landing-page/TopSellers';
import Brands from '@/components/sections/landing-page/Brands';
import Footer from '@/components/sections/common/Footer';

export default function Home() {
  return (
    <>
      <CustomerNavbar/>
      <Carousel/>
      <CustomizeOrder/>
      <Categories/>
      <TopProducts/>
      <TopSellers/>
      <Brands/>
      <Footer/>
    </>
  )
}
