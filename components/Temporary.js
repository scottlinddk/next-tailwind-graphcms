import Image from 'next/image'
import Link from 'next/link'
import Section from '/components/Layout/Tags/Section';
import Span from '/components/Layout/Tags/Span';


export default function Temporary({ hero }) {

  return (
    <section id="kontakt">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="relative">
                  <Image className="object-cover object-center mx-auto rounded-lg shadow-2xl" 
                    alt="Scott Memoji" 
                    src="/assets/memoji.png" 
                    height={300}
                    width={300}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <h2 className="mb-8 max-w-4xl text-1xl font-bold leading-none tracking-tighter text-neutral-800 md:text-4xl lg:text-5xl lg:max-w-3xl">Her kommer der et portfolio site..</h2>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-500">Mens du venter kan du tage en tur forbi min LinkedIn eller Github for at se lidt af hvad jeg har lavet indtil videre.</p>
            <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
              <div className="mt-3 rounded-lg sm:mt-0">
                <button className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <a href="https://www.linkedin.com/in/scottlind/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </button>
              </div>
              <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                <button className="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  <a href="https://github.com/scottlinddk" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}