import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { motion, useScroll } from "framer-motion"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 32) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })
  return (
    <>
    
    <header className={navbar ? "navbar active" : "navbar"}>
    <nav className={`${ isMenuOpen ? 'bg-white' : ''}`}>
    <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
      <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Logo />
        <div className="md:hidden">
            <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {
                    isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                        </svg>
                    )
                }
            </button>
        </div>
      </div>
      <div className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${ isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
          <li>
            <Link href="/projekter">
              <a
                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-teal-50 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-dark-800 dark:hover:bg-gray-700 dark:hover:text-dark-800 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projekter
              </a>
            </Link>
          </li>
          <li>
            <Link href="/om-mig">
              <a
                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-teal-50 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-dark-800 dark:hover:bg-gray-700 dark:hover:text-dark-800 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Om mig
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a
                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-teal-50 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-dark-800 dark:hover:bg-gray-700 dark:hover:text-dark-800 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/kontakt">
              <a
                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-teal-50 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-dark-800 dark:hover:bg-gray-700 dark:hover:text-dark-800 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Kontakt
              </a>
            </Link>
          </li>
        </ul>
          {/* </ul> */}
      </div>
    </div>
  </nav>



      {/* <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Logo />
            <div className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                          {
                              isMenuOpen ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <nav className="hidden md:block" aria-labelledby="header-navigation">
            <h2 className="sr-only" id="header-navigation">Navigation</h2>
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link href="/projekter">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Projekter
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/om-mig">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Om mig
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Kontakt
                  </a>
                </Link>
              </li>
            </ul>
            </nav>
          </div>
        </div>
      </div> */}
    </header>
    </>
  );
}

 
export default Navbar;