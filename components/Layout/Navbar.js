import Link from 'next/link'
import Logo from './Logo'

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Logo />
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <nav className="hidden md:block" aria-labelledby="header-navigation">
              <h2 className="sr-only" id="header-navigation">Header navigation</h2>

              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link href="/projekter">
                    <a
                      className="text-gray-800 transition hover:text-gray-800/75"
                      href="/"
                    >
                      Projekter
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/om-mig">
                    <a
                      className="text-gray-800 transition hover:text-gray-800/75"
                      href="/"
                    >
                      Om mig
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a
                      className="text-gray-800 transition hover:text-gray-800/75"
                      href="/"
                    >
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt">
                    <a
                      className="text-gray-800 transition hover:text-gray-800/75"
                      href="/"
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