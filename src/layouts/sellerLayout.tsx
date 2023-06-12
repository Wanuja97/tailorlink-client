import SellerNavbar from '../components/seller/SellerNavbar';

type SellerLayoutProps = {
    children: React.ReactNode,
}
export default function SellerLayout({ children }:SellerLayoutProps) : JSX.Element {
  return (
    <>
      <div className='w-screen flex flex-row'>
      <SellerNavbar />
      <main className='relative top-0 left-64 w-calc-100vw-minus-16rem'>{children}</main>
      </div>
      {/* ml-64 max-auto max-w-screen-xl */}
    </>
  )
}