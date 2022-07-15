import { useRef } from 'react';

export default function Hero({ hero }) {
  const heroContainer = useRef('.hero');

  return (
    <section className="hero">
      <h1>
        {hero.heading}
      </h1>
    </section>
  );
}