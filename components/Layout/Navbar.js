import Link from 'next/link'
import Logo from './Logo'

const Navbar = () => {
  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Logo />
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <nav className="hidden md:block" aria-labelledby="header-navigation">
              <h2 className="sr-only" id="header-navigation">Navigation</h2>
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link href="/projekter">
                    <a
                      className="text-gray-800 transition hover:text-gray-800/75"
                    >
                      Projekter
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/om-mig">
                    <a
                      className="text-gray-800 transition hover:text-gray-800/75"
                    >
                      Om mig
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a
                      className="text-gray-800 transition hover:text-gray-800/75"
                    >
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt">
                    <a
                      className="text-gray-800 transition hover:text-gray-800/75"
                    >
                      Kontakt
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
 
export default Navbar;