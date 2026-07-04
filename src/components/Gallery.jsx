import { useEffect, useRef, useState } from 'react'
import { GALLERY } from '../data/menu'
import { FoodImg } from './icons'

export default function Gallery() {
  const [i, setI] = useState(0)
  const timer = useRef(null)
  const n = GALLERY.length

  const go = (idx) => setI((idx + n) % n)
  const next = () => go(i + 1)
  const prev = () => go(i - 1)

  const start = () => {
    stop()
    timer.current = setInterval(() => setI((p) => (p + 1) % n), 5000)
  }
  const stop = () => timer.current && clearInterval(timer.current)

  useEffect(() => {
    start()
    return stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-cream2 to-paper">
      <div className="container-site">
        <header className="text-center max-w-[620px] mx-auto mb-11">
          <p className="eyebrow">A peek inside</p>
          <h2 className="section-title">Gallery</h2>
          <p className="text-muted mt-3">Dishes from the pass and corners of the dining room.</p>
        </header>
      </div>

      <div
        className="relative w-[94%] max-w-[1100px] mx-auto overflow-hidden rounded-[18px] shadow-warm"
        onMouseEnter={stop}
        onMouseLeave={start}
      >
        <div className="slider-track flex" style={{ transform: `translateX(-${i * 100}%)` }}>
          {GALLERY.map((g, idx) => (
            <div key={idx} className="relative flex-[0_0_100%] aspect-[21/9] food-gradient overflow-hidden">
              <FoodImg src={g.img} className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 px-6 pt-10 pb-5 font-display text-[1.2rem] text-cream
                              bg-gradient-to-t from-espresso/85 to-transparent">
                {g.caption}
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => { prev(); start() }} aria-label="Previous slide"
                className="absolute top-1/2 -translate-y-1/2 left-3.5 w-11 h-11 rounded-full bg-cream/90 hover:bg-white
                           text-ink text-2xl grid place-items-center shadow-warm">‹</button>
        <button onClick={() => { next(); start() }} aria-label="Next slide"
                className="absolute top-1/2 -translate-y-1/2 right-3.5 w-11 h-11 rounded-full bg-cream/90 hover:bg-white
                           text-ink text-2xl grid place-items-center shadow-warm">›</button>

        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex gap-2">
          {GALLERY.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { go(idx); start() }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-[9px] rounded-full transition-all ${idx === i ? 'w-[26px] bg-gold' : 'w-[9px] bg-white/60'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
