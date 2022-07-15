import { useRef } from 'react';

export default function Hero({ hero }) {
  const heroContainer = useRef('.hero');
  const stagger = useRef('stagger');
  console.log(stagger);
  return (
    <section>
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
      <div className="absolute top-0 rounded-full left-1/4 w-128 h-128 mix-blend-multiply filter blur-xl opacity-70 animate-blob blob-1"></div>
      <div className="absolute top-0 rounded-full left-37 w-128 h-128 mix-blend-multiply filter blur-xl opacity-70 animate-blob blob-2"></div>
      <div className="absolute top-0 rounded-full left-1/2 w-128 h-128 mix-blend-multiply filter blur-xl opacity-70 animate-blob blob-3"></div>
      <div className="flex w-full mx-auto text-left">
        <div className="relative inline-flex items-center mx-auto align-middle">
          <div className="text-center" ref={stagger}>
            <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-800 md:text-5xl lg:text-6xl lg:max-w-4xl">
              {hero.heading}
            </h1>
            <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-700">
              {hero.heroText}
            </p>
            <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
              <div className="mt-3 rounded-lg sm:mt-0">
                <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get bundle</button>
              </div>
              <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                <button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">See features</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="intro">
        <div className="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
          <img className="object-cover object-center w-full rounded-xl" alt="hero" src="https://source.unsplash.com/random/?city,night" />
        </div>
      </section>
    </div>
  </section>
  );
}