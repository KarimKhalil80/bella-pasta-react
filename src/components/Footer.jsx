import { Facebook, Instagram, XIcon, TikTok } from './icons'

const SOCIALS = [
  { Icon: Facebook, url: 'https://www.facebook.com', label: 'Facebook' },
  { Icon: Instagram, url: 'https://www.instagram.com', label: 'Instagram' },
  { Icon: XIcon, url: 'https://www.x.com', label: 'X' },
  { Icon: TikTok, url: 'https://www.tiktok.com', label: 'TikTok' },
]

const HOURS = [
  ['Mon – Thu', '11:30 – 22:00'],
  ['Fri – Sat', '11:30 – 23:30'],
  ['Sunday', '12:00 – 21:00'],
]

export default function Footer() {
  return (
    <footer className="bg-espresso2 text-[#d9cbb6]">
      <div className="container-site grid md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] gap-10 pt-14 pb-10">
        <div className="md:col-span-2 lg:col-span-1">
          <span className="font-display font-black text-[2rem] text-cream">Bella Pasta</span>
          <p className="mt-3 mb-5 max-w-[38ch] text-[.95rem] text-[#bdae98]">
            Handmade Italian pasta, served the way Nonna intended. 184 Mulberry St, Little Italy, New York.
          </p>
          <div className="flex gap-2.5">
            {SOCIALS.map(({ Icon, url, label }) => (
              <a
                key={label} href={url} target="_blank" rel="noopener noreferrer"
                aria-label={`Bella Pasta on ${label}`}
                className="w-10 h-10 rounded-full grid place-items-center bg-white/[.07] text-cream
                           hover:bg-tomato hover:text-white hover:-translate-y-0.5 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-cream text-[1.2rem] mb-4">Opening Hours</h3>
          <ul className="grid gap-2.5 text-[.93rem] list-none">
            {HOURS.map(([d, t]) => (
              <li key={d} className="flex justify-between gap-4 text-[#cbbca6]"><span>{d}</span><span>{t}</span></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-cream text-[1.2rem] mb-4">Visit</h3>
          <ul className="grid gap-2.5 text-[.93rem] list-none">
            <li>184 Mulberry St, New York</li>
            <li><a href="tel:+12125550148" className="hover:text-gold">(212) 555-0148</a></li>
            <li><a href="mailto:ciao@bellapasta.com" className="hover:text-gold">ciao@bellapasta.com</a></li>
            <li>Reservations welcome</li>
          </ul>
        </div>
      </div>

      <div className="container-site flex flex-col sm:flex-row justify-between gap-1.5 py-5
                      border-t border-white/10 text-[.85rem] text-[#9b8d78]">
        <p>© {new Date().getFullYear()} Bella Pasta · Made by hand in Little Italy</p>
        <p>Built with React + Tailwind CSS</p>
      </div>
    </footer>
  )
}
