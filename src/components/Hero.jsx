import { FoodImg } from './icons'

export default function Hero() {
  return (
    <section id="top" className="relative bg-espresso text-cream overflow-hidden pt-10 md:pt-16 pb-24">
      {/* warm glow background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(60% 80% at 80% 20%, rgba(221,154,78,.22), transparent 60%),' +
            'radial-gradient(50% 60% at 10% 90%, rgba(192,57,43,.25), transparent 60%)',
        }}
        aria-hidden
      />
      <div className="container-site relative grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center">
        <div>
          <p className="eyebrow mb-1">Trattoria · Est. 2010</p>
          <h1 className="font-display font-black leading-[1.02] tracking-tight text-[clamp(2.6rem,6vw,4.6rem)]">
            Handmade pasta,<br />
            <em className="text-gold not-italic font-black italic">made with love.</em>
          </h1>
          <p className="max-w-[46ch] mt-5 mb-7 text-[#e6dac6] text-[1.06rem]">
            Fresh sheets rolled every morning, slow-simmered sauces, and recipes carried across
            three generations of our family in Naples. Pull up a chair.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href="#menu" className="btn btn-solid">View the Menu</a>
            <a href="#about" className="btn btn-ghost text-cream border-current hover:bg-cream hover:text-ink">Our Story</a>
          </div>
          <ul className="flex gap-8 mt-10 flex-wrap list-none">
            {[
              ['14+', 'pasta dishes'],
              ['100%', 'made in-house'],
              ['4.9★', 'guest rating'],
            ].map(([n, l]) => (
              <li key={l} className="flex flex-col">
                <strong className="font-display text-[1.8rem] text-white">{n}</strong>
                <span className="text-[#bbab97] text-[.85rem]">{l}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* plate */}
        <div className="relative grid place-items-center" aria-hidden>
          <div className="hero-plate relative w-[min(420px,90%)] aspect-square rounded-full overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,.7)]">
            <FoodImg
              src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900&q=80&auto=format&fit=crop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 bg-cream text-ink font-semibold text-[.88rem] px-[1.1rem] py-2 rounded-full shadow-warm whitespace-nowrap">
            Spaghetti alla Bolognese
          </div>
        </div>
      </div>

      <div className="wave-divider absolute -bottom-px inset-x-0" aria-hidden />
    </section>
  )
}
