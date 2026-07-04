import { useEffect, useState } from 'react'

export default function Toast({ toast }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!toast) return
    setShow(true)
    const t = setTimeout(() => setShow(false), 2200)
    return () => clearTimeout(t)
  }, [toast])

  return (
    <div
      className={`fixed left-1/2 bottom-7 -translate-x-1/2 bg-ink text-cream px-5 py-3 rounded-full
        font-semibold text-[.9rem] z-[120] shadow-warm transition-transform duration-300
        ${show ? 'translate-y-0' : 'translate-y-[200%]'}`}
      role="status"
      aria-live="polite"
    >
      {toast?.text}
    </div>
  )
}
