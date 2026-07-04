import { useEffect, useState } from 'react'
import { CartIcon, ForkIcon } from './icons'

const LINKS = [
  { id: 'top', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ cartCount, onOpenCart }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')

  // scroll-spy: highlight the link for the section in view
  useEffect(() => {
    const ids = LINKS.map((l) => l.id)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const go = (e, id) => {
    setOpen(false)
    if (id === 'top') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-[60] bg-espresso/95 backdrop-blur border-b border-white/10">
      <div className="container-site flex items-center gap-6 h-[72px]">
        {/* logo */}
        <a href="#top" onClick={(e) => go(e, 'top')} className="flex items-center gap-2 text-cream">
          <span className="text-gold grid place-items-center"><ForkIcon /></span>
          <span className="font-display font-black text-[1.45rem]">Bella&nbsp;Pasta</span>
        </a>

        {/* desktop nav */}
        <nav className="hidden md:flex mx-auto gap-1" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => go(e, l.id)}
              className={`px-[.9rem] py-2 rounded-full text-[.95rem] font-medium transition-colors
                ${active === l.id ? 'text-gold' : 'text-[#e9ddca] hover:text-white'}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* actions */}
        <div className="flex items-center gap-3 ml-auto md:ml-0">
          <button onClick={onOpenCart} aria-label="Open cart"
                  className="relative text-cream hover:text-gold p-1.5 grid place-items-center">
            <CartIcon />
            <span className={`absolute -top-1 -right-1.5 min-w-[18px] h-[18px] px-1 grid place-items-center
              rounded-full bg-tomato text-white text-[.7rem] font-bold leading-none transition-transform
              ${cartCount > 0 ? 'scale-100' : 'scale-0'}`}>
              {cartCount}
            </span>
          </button>

          <a href="#menu" className="hidden sm:inline-flex btn btn-solid py-2.5 px-[1.15rem] text-[.88rem]">
            Order Online
          </a>

          {/* hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu" aria-expanded={open}
            className="md:hidden flex flex-col gap-[5px] p-1.5"
          >
            <span className={`w-6 h-[2.5px] bg-cream rounded transition-transform ${open ? 'translate-y-[7.5px] rotate-45' : ''}`} />
            <span className={`w-6 h-[2.5px] bg-cream rounded transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-[2.5px] bg-cream rounded transition-transform ${open ? '-translate-y-[7.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <nav
        className={`md:hidden overflow-hidden bg-espresso border-b border-white/10 transition-[max-height] duration-300
          ${open ? 'max-h-80' : 'max-h-0'}`}
        aria-label="Mobile"
      >
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={(e) => go(e, l.id)}
            className={`block px-6 py-[.9rem] text-[#e9ddca] hover:bg-white/5
              ${active === l.id ? 'text-gold bg-white/5' : ''}`}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
