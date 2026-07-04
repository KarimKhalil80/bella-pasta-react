import { useState } from 'react'

/* Image that hides itself if it fails to load, revealing the gradient behind it */
export function FoodImg({ src, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}

export const CartIcon = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

export const PlusIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
       strokeWidth="2.4" strokeLinecap="round" {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const ForkIcon = (p) => (
  <svg viewBox="0 0 32 32" width="30" height="30" fill="none" {...p}>
    <path d="M6 26c0-7 4-12 10-12s10 5 10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 14V5M12 7l4-3 4 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 26h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const Facebook = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" /></svg>
)
export const Instagram = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
)
export const XIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}><path d="M18 2h3l-7.5 8.6L22 22h-6.4l-5-6.6L4.8 22H1.8l8-9.2L2 2h6.6l4.5 6 5-6Zm-1.1 18h1.7L7.2 3.8H5.4L16.9 20Z" /></svg>
)
export const TikTok = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}><path d="M16 3c.3 2.3 1.7 3.9 4 4.1v2.7c-1.4 0-2.7-.4-4-1.1v6.4a5.8 5.8 0 1 1-5.8-5.8c.3 0 .6 0 .9.1v2.9a3 3 0 1 0 2 2.8V3H16Z" /></svg>
)
