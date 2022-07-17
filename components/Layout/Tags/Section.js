export default function Section({ children }) {
  return (
    <section className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
     {children}
    </section>
  );
}