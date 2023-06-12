import React from 'react'
import { useRouter } from 'next/router';
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import Link from 'next/link'

import Image from 'next/image'
import Logout from './Logout';
// const navigation = [
//   { name: 'Dashboard', href: 'dashboard', current: true },
//   { name: 'Users', href: 'users', current: false },
//   { name: 'Pending Requests', href: 'pending-requests', current: false },
// ]

// function classNameNames(...classNamees: any[]) {
//   return classNamees.filter(Boolean).join(' ')
// }

function Navbar() {
  const router = useRouter();
  
  const logoutHandler = async () => {
    alert("adads")
    // <Logout/>
  };

  return (
    <div className="flex fixed top-0 left-0 h-screen w-64 flex-col justify-between border-e bg-cyan-950">
      <div className="px-4 py-6">
        <Image
          src="/images/logo.png"
          width={250}
          height={70}
          alt="TailorLink Logo"
          priority
        />

        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1 border-t pt-2">

          <Link href="/seller/dashboard/overview"
            className={`flex items-center gap-2 rounded-lg px-4 py-2  ${router.pathname === '/admin/dashboard' ? 'bg-gray-100 text-black' : 'text-white hover:bg-gray-100 hover:text-gray-700'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <span className="text-sm font-medium"> Dashboard </span>
          </Link>


          <Link href="/seller/dashboard/manage-products" prefetch={false}
            className={`flex items-center gap-2 rounded-lg px-4 py-2  ${router.pathname === '/admin/users' ? 'bg-gray-100 text-black' : 'text-white hover:bg-gray-100 hover:text-gray-700'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            <span className="text-sm font-medium">Manage Products</span>
          </Link>

          <Link href="/seller/dashboard/orders/sales-history" prefetch={false}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 ${router.pathname === '/admin/pending-requests' ? 'bg-gray-100 text-black' : 'text-white hover:bg-gray-100 hover:text-gray-700'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>

            <span className="text-sm font-medium"> Sales History </span>
          </Link>

          <Link href="/seller/dashboard/orders/pending-orders" prefetch={false}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 ${router.pathname === '/admin/add-new-admin' ? 'bg-gray-100 text-black' : 'text-white hover:bg-gray-100 hover:text-gray-700'}`}>
            <span className="sr-only">Pending Customize orders</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>

            <span className="text-sm font-medium"> Pending Customize orders </span>
          </Link>
          <Link href="/seller/dashboard/conversations" prefetch={false}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 ${router.pathname === '/admin/view-admins' ? 'bg-gray-100 text-black' : 'text-white hover:bg-gray-100 hover:text-gray-700'}`}>
            <span className="sr-only">Conversations</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>

            <span className="text-sm font-medium">Conversations</span>
          </Link>
          <Link href="/seller/dashboard/notifications" prefetch={false}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 ${router.pathname === '/admin/notifications' ? 'bg-gray-100 text-black' : 'text-white hover:bg-gray-100 hover:text-gray-700'}`}>
            <span className="sr-only">Notifications</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>

            <span className="text-sm font-medium"> Notifications </span>
          </Link>

          <button
           onClick={(e) => logoutHandler()}
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="sr-only">Logout</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>

            <span className="text-sm font-medium"> Logout </span>
          </button>
        </nav>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <Link href="/admin/profile" className="flex items-center gap-2 bg-cyan-950 p-4">
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-white text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>
              <span>Super Admin</span>
            </p>
          </div>
        </Link>
      </div>
    </div>

  )
}

export default Navbar