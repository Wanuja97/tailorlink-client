import React from 'react';

// importing components
import CustomerNavbar from '@/components/customer/CustomerNavbar';
import CustomizeOrder from '@/components/sections/landing-page/CustomizeOrder';
import Categories from '@/components/sections/landing-page/Categories';
import TopProducts from '@/components/sections/landing-page/TopProducts';
import TopSellers from '@/components/sections/landing-page/TopSellers';
import Brands from '@/components/sections/landing-page/Brands';
import Footer from '@/components/sections/common/Footer';
import HeroSection from '@/components/sections/landing-page/HeroSection';
import CategoriesSidebar from '@/components/sections/common/CategoriesSidebar';
export default function Home() {
  return (
    <>
      <div className='fixed w-full z-10'>
        <CustomerNavbar />
      </div>
      <div className='p-4 sm:ml-64 relative top-20'>
        <div className=''>
          <CategoriesSidebar />
        </div>
        <HeroSection />
        <CustomizeOrder />
        <Categories />
        <TopProducts />
        <Brands />
        <Footer />
      </div>
    </>
  )
}
