import { useState } from 'react'
import logo from '../assets/logo-text.png'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      
      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="mx-auto hidden h-16 max-w-7xl items-center justify-between px-6 md:flex lg:px-8">
        
        {/* Logo */}
        <a href="#"><img src={logo} alt="DevStack" className="h-8 w-auto" />
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center gap-7 text-sm text-slate-600">
          <li>
            <a href="#" className="text-[#EB388C] transition hover:text-[#EB388C]">
              Home
            </a>
          </li>

          <li>
            <a href="#technologies" className="transition hover:text-[#EB388C]">
              Technologies
            </a>
          </li>

          <li>
            <a href="#projects" className="transition hover:text-[#EB388C]">
              Projects
            </a>
          </li>

          <li>
            <a href="#about" className="transition hover:text-[#EB388C]">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="transition hover:text-[#EB388C]">
              Contact
            </a>
          </li>
        </ul>

        {/* Sign In / Sign Up */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-slate-700 transition hover:text-[#EB388C]">
            Sign In
          </button>

          <button className="rounded-full bg-[#EB388C] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#d62d7d]">
            Sign Up
          </button>
        </div>
      </div>


      {/* MOBILE NAVBAR ================= */}
      <div className="relative flex h-16 items-center justify-between px-3 md:hidden">

        {/* LEFT - Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="flex h-9 w-9 items-center justify-center rounded-md text-slate-700 transition hover:bg-slate-100"
        >
          {menuOpen ? (
            /* Close icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>


        {/* CENTER - Logo */}
        <a
          href="#"
          className="absolute left-1/2 -translate-x-1/2"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="DevStack"
            className="h-7 w-auto max-w-[105px]"
          />
        </a>


        {/* RIGHT - Sign In / Sign Up */}
        <div className="flex items-center gap-1.5">
          <button className="whitespace-nowrap px-1 text-[11px] font-medium text-slate-700 sm:text-xs">
            Sign In
          </button>

          <button className="whitespace-nowrap rounded-full bg-[#EB388C] px-2.5 py-1.5 text-[11px] font-medium text-white transition hover:bg-[#d62d7d] sm:px-3 sm:text-xs">
            Sign Up
          </button>
        </div>
      </div>


      {/* ================= MOBILE HAMBURGER MENU ================= */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-5 shadow-md md:hidden">
          <ul className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            
            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-[#EB388C] hover:bg-pink-50"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 transition hover:bg-slate-50 hover:text-[#EB388C]"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 transition hover:bg-slate-50 hover:text-[#EB388C]"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 transition hover:bg-slate-50 hover:text-[#EB388C]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 transition hover:bg-slate-50 hover:text-[#EB388C]"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  )
}

export default Nav