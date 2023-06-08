import CustomerNavbar from '../components/customer/CustomerNavbar';

type CustomerLayoutProps = {
    children: React.ReactNode,
}
export default function CustomerLayout({ children }:CustomerLayoutProps) : JSX.Element {
  return (
    <>
      <div className='max-w-screen'>
      <CustomerNavbar />
      <main className=''>{children}</main>
      </div>
      {/* ml-64 max-auto max-w-screen-xl */}
    </>
  )
}