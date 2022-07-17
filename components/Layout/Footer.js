import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
    
      <div className="flex justify-center px-4 py-12 mx-auto w-full">
        <div className="flex flex-wrap items-baseline lg:justify-center">
          <span className="mt-2 text-sm font-light text-gray-500">
              Copyright 2022 -
            <Link href="/" className="mx-2 text-grey-400 hover:text-teal-700" rel="noopener noreferrer">
              <a> Scott Lind</a>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};