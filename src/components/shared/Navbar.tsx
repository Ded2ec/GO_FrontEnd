import { useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { Transition } from '@headlessui/react'
import useOutsideClick from "./useOutsideClick"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const mobileMenuRef = useRef(null) // ref สำหรับเมนู mobile
  const moreMenuRef = useRef(null)   // ref สำหรับเมนูอื่นๆ (More)

  // ใช้ useOutsideClick สำหรับทั้งเมนู
  useOutsideClick(mobileMenuRef, () => setIsOpen(false)) 
  useOutsideClick(moreMenuRef, () => setIsActive(false))

  return (
    <nav className="bg-gray-800 fixed w-full z-20">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => { setIsOpen(!isOpen) }}
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="ml-3 text-xl">Movies App</span>
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink to="/" className={({ isActive }) => `text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-green-500' : ''}`}> หน้าหลัก </NavLink>
                <NavLink to="/about" className={({ isActive }) => `text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-green-500' : ''}`}> เกี่ยวกับเรา </NavLink>
                <NavLink to="/teams" className={({ isActive }) => `text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-green-500' : ''}`}> ทีมงาน </NavLink>
                <NavLink to="/projects" className={({ isActive }) => `text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-green-500' : ''}`}> โครงการ </NavLink>

                {/* More Menu */}
                <div className="relative" ref={moreMenuRef}>
                  <button
                    type="button"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 inline-flex rounded-md text-sm font-medium"
                    onClick={() => { setIsActive(!isActive) }}
                  >
                    <span>เมนูอื่นๆ</span>
                    <svg className={`ml-2 h-5 w-5 ${isActive ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    <svg className={`ml-2 h-5 w-5 ${!isActive ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <Transition
                    show={isActive}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1">
                    <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        {/* More Menu Content */}
                      </div>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <div className={`${isOpen ? 'sm:hidden block' : 'sm:hidden hidden'}`} ref={mobileMenuRef} id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <NavLink to="/" className={({ isActive }) => `text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-green-500' : ''}`}> Home </NavLink>
                <NavLink to="/about" className={({ isActive }) => `text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-green-500' : ''}`}> About </NavLink>
                <NavLink to="/teams" className={({ isActive }) => `text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-green-500' : ''}`}> Teams </NavLink>
                <NavLink to="/projects" className={({ isActive }) => `text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-green-500' : ''}`}> Projects </NavLink>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
