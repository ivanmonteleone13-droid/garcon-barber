import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section id="hem" className="relative overflow-hidden bg-[var(--dark)] text-white">
      <div className="absolute -right-20 top-0 h-full w-1/3 skew-x-[-12deg] bg-[var(--secondary)]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-7xl uppercase leading-none tracking-tight sm:text-8xl lg:text-9xl">
            MODERN
          </h1>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-5xl uppercase text-[var(--secondary)] sm:text-6xl">
            BARBERSHOP
          </h2>
          <p className="mt-8 max-w-md text-lg text-white/75">{business.description}</p>
          <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer"
            className="mt-10 inline-block bg-[var(--secondary)] px-12 py-4 font-[family-name:var(--font-heading)] text-2xl uppercase tracking-wider text-white">
            Boka nu
          </a>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--secondary)]" aria-hidden />
            <div className="relative bg-[var(--primary)] p-12 text-center">
              <span className="text-8xl" aria-hidden>💈</span>
              <p className="mt-4 font-[family-name:var(--font-heading)] text-3xl uppercase">{business.rating}★</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
