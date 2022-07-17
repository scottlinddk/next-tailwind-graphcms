import { useRef } from 'react';
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '/components/Layout/Tags/Section';
import Span from '/components/Layout/Tags/Span';


export default function Hero({ hero }) {
  const spanOne = hero.headingSpanOne;
  const spanTwo = hero.headingSpanTwo;
  const spanThree = hero.headingSpanThree;

  const banner = {
    animate: { 
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      }
    }
  }
  const letterAnimation = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0
    },
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1
    }
  }

  return (
    <Section>
       <div className="absolute top-0 rounded-full left-1/4 w-128 h-128 mix-blend-multiply filter blur-xl opacity-70 animate-blob blob-1"></div>
        <div className="absolute top-0 rounded-full left-37 w-128 h-128 mix-blend-multiply filter blur-xl opacity-70 animate-blob blob-2"></div>
        <div className="absolute top-0 rounded-full left-1/2 w-128 h-128 mix-blend-multiply filter blur-xl opacity-70 animate-blob blob-3"></div>
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <motion.h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-800 md:text-5xl lg:text-6xl lg:max-w-4xl"
              variants={banner}
              >
                <AnimatePresence>
                  <Span title={spanOne} />
                  <Span title={spanTwo} />
                  <Span title={spanThree} />
                </AnimatePresence>
              </motion.h1>
              <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-700">
                {hero.heroText}
              </p>
            </div>
          </div>
        </div>
        <section id="intro">
          <div className="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
            <Image className="object-cover object-center w-full rounded-xl h72" 
              src="https://source.unsplash.com/random/?city,night"
              alt="hero" 
              width={500}
              height={500}
            />
          </div>
        </section>
    </Section>
  );
}