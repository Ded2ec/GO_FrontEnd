import { useRef, useState } from "react"
import useOutsideClick from "./useOutsideClick"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTachometerAlt, faFilm, faFileVideo, faBars, faTimes, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"

function NavbarBack() {

  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef(null);
  useOutsideClick(ref, () => {
    setIsActive(false)
  });

  return (
    <>
      {/* Header for desktop size */}
      <header className="w-full items-center bg-white shadow-md py-2 px-6 hidden sm:flex">
        <div className="w-1/2" />
        <div ref={ref} className="relative w-1/2 flex justify-end">
          <button className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-2 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none" onClick={() => { setIsActive(!isActive) }}>
            <img src="../assets/images/avatar_sm.png" />
          </button>
          <div className={`${isActive ? 'block' : 'hidden'} absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16`}>
            <NavLink to="/account" className="block px-4 py-2 account-link hover:text-white">Account</NavLink>
            <NavLink to="/support" className="block px-4 py-2 account-link hover:text-white">Support</NavLink>
            <NavLink to="/login" className="block px-4 py-2 account-link hover:text-white">Sign Out</NavLink>
          </div>
        </div>
      </header>

      {/* Mobile Header & Nav */}
      <header className="w-full bg-sidebar py-5 shadow-md sm:hidden">
        <div className="flex items-center justify-between px-6">
          <NavLink to="/backend/dashboard" className="text-white text-2xl font-semibold uppercase hover:text-gray-300">Movies App</NavLink>
          <button className="text-white text-3xl focus:outline-none" onClick={() => { setIsOpen(!isOpen) }}>

            {
              isOpen ?
                <FontAwesomeIcon icon={faTimes} />
                :
                <FontAwesomeIcon icon={faBars} />
            }

          </button>
        </div>
        {/* Dropdown Nav */}
        <nav className={`${isOpen ? 'block' : 'hidden'} flex flex-col pt-4`}>

          <NavLink
            to="/backend/dashboard"
            className={({ isActive }) =>
              `flex items-center text-white py-4 pl-6 nav-item ${isActive ? 'active-nav-link' : ''}`
            }
          >
            <FontAwesomeIcon icon={faTachometerAlt} /> &nbsp; Dashboard
          </NavLink>

          <NavLink
            to="/backend/movies"
            className={({ isActive }) =>
              `flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item ${isActive ? 'active-nav-link' : ''}`
            }
          >
            <FontAwesomeIcon icon={faFilm} /> &nbsp; Movies
          </NavLink>

          <NavLink
            to="/backend/genres"
            className={({ isActive }) =>
              `flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item ${isActive ? 'active-nav-link' : ''}`
            }
          >
            <FontAwesomeIcon icon={faFileVideo} /> &nbsp; Genres
          </NavLink>

          <NavLink
            to="/backend/account"
            className={({ isActive }) =>
              `flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item ${isActive ? 'active-nav-link' : ''}`
            }
          >
            <FontAwesomeIcon icon={faUser} /> &nbsp; Account
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item ${isActive ? 'active-nav-link' : ''}`
            }
          >
            <FontAwesomeIcon icon={faSignOutAlt} /> &nbsp; Logout
          </NavLink>
        </nav>

      </header>

    </>
  )
}

export default NavbarBack