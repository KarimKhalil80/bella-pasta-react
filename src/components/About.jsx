import { FoodImg } from './icons'

const POINTS = [
  'Sauces made fresh, never from a jar',
  'Dough rolled in-house daily',
  'Family-owned, locally sourced',
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-espresso text-cream">
      <div className="container-site grid lg:grid-cols-[.9fr_1.1fr] gap-12 items-center">
        <div className="relative rounded-[18px] overflow-hidden aspect-[4/5] max-w-[420px] mx-auto food-gradient shadow-warm">
          <FoodImg
            src="https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&q=80&auto=format&fit=crop"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-tomato text-white rounded-2xl px-4 py-2.5 text-center leading-tight shadow-warm">
            <strong className="block text-[.72rem] tracking-widest uppercase opacity-85">Since</strong>
            <span className="font-display text-[1.5rem] font-bold">2010</span>
          </div>
        </div>

        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="section-title text-white text-left">A little family kitchen that grew up</h2>
          <p className="text-[#e6dac6] mt-4 max-w-[54ch]">
            Bella Pasta started in 2010 as a four-table room on a side street, run by Rosa and her two
            sons. Rosa brought one rule from her mother's kitchen in Naples:{' '}
            <em>make the pasta by hand, every day, no shortcuts.</em>
          </p>
          <p className="text-[#e6dac6] mt-4 max-w-[54ch]">
            Fifteen years later the rule hasn't changed. We still roll our sheets each morning, simmer
            our marinara low and slow, and finish every plate at the pass. The dining room is bigger
            now, but the welcome is exactly the same.
          </p>
          <ul className="mt-6 grid gap-2.5 list-none">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[#f0e6d4] font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
