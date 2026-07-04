import { useState } from 'react'
import { MENU, CATEGORIES } from '../data/menu'
import { FoodImg, PlusIcon } from './icons'

export default function MenuSection({ onAdd }) {
  const [cat, setCat] = useState('All')
  const items = cat === 'All' ? MENU : MENU.filter((m) => m.cat === cat)

  return (
    <section id="menu" className="py-16 md:py-24 bg-paper">
      <div className="container-site">
        <header className="text-center max-w-[620px] mx-auto mb-11">
          <p className="eyebrow">Fresh from the kitchen</p>
          <h2 className="section-title">Our Menu</h2>
          <p className="text-muted mt-3">
            Click <strong>Add</strong> on anything you like — it drops straight into your cart.
          </p>
        </header>

        {/* filters */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`font-semibold text-[.9rem] px-[1.1rem] py-2 rounded-full border-[1.5px] transition
                ${cat === c
                  ? 'bg-ink text-cream border-ink'
                  : 'bg-white text-ink border-black/10 hover:border-tomato'}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((m) => (
            <article
              key={m.id}
              className="group bg-white rounded-[18px] overflow-hidden border border-black/10 flex flex-col
                         transition hover:-translate-y-1 hover:shadow-warm"
            >
              <div className="relative aspect-[16/11] food-gradient overflow-hidden">
                <span className="absolute top-2.5 left-2.5 z-10 bg-cream/90 text-ink text-[.72rem] font-bold
                                 uppercase tracking-wide px-2.5 py-1 rounded-full">
                  {m.cat}
                </span>
                <FoodImg src={m.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-[1.1rem] flex flex-col flex-1">
                <div className="flex justify-between items-baseline gap-2.5">
                  <h3 className="font-display font-bold text-[1.18rem] leading-tight">{m.name}</h3>
                  <span className="font-display font-bold text-tomato text-[1.15rem] whitespace-nowrap">
                    ${m.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-muted text-[.9rem] mt-1.5 mb-4 flex-1">{m.desc}</p>
                <button
                  onClick={() => onAdd(m.id)}
                  aria-label={`Add ${m.name} to cart`}
                  className="self-start inline-flex items-center gap-1.5 bg-basil hover:bg-basilDark text-white
                             font-semibold text-[.9rem] px-[1.1rem] py-2.5 rounded-full transition active:scale-95"
                >
                  <PlusIcon /> Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
