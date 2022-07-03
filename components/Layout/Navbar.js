import Link from 'next/link'
// import Image from 'next/image'
import Logo from './Logo'
const Navbar = () => {
  return (
    // <nav>
    //   <div className="logo">
    //     Logo
    //   </div>
    //   <Link href="/"><a>Home</a></Link>
    //   <Link href="/blog"><a>Blog</a></Link>
    // </nav>
    <header class="bg-white">
      <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <Logo />
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <nav class="hidden md:block" aria-labelledby="header-navigation">
              <h2 class="sr-only" id="header-navigation">Header navigation</h2>

              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <Link href="/projekter">
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Projekter
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/om-mig">
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Om mig
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt">
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
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