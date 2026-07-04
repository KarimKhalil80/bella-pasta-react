import { useEffect } from 'react'
import { MENU } from '../data/menu'
import { FoodImg } from './icons'

const find = (id) => MENU.find((m) => m.id === id)

export default function CartDrawer({ open, onClose, cart, changeQty, removeItem, clearCart, checkout }) {
  const total = cart.reduce((s, c) => s + find(c.id).price * c.qty, 0)

  // close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <>
      {/* overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-espresso/50 backdrop-blur-[2px] z-[90] transition
          ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      />

      {/* drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[min(400px,100%)] bg-paper z-[100] flex flex-col
          shadow-[-20px_0_60px_-20px_rgba(0,0,0,.4)] transition-transform duration-300
          ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!open}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
          <h2 className="font-display text-[1.5rem]">Your Cart</h2>
          <button onClick={onClose} aria-label="Close cart" className="text-muted hover:text-tomato text-lg p-1">✕</button>
        </div>

        <div className="cart-body flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="text-center text-muted py-12">
              Your cart is empty.<br />Add a dish from the menu to get started.
            </div>
          ) : (
            cart.map((line) => {
              const m = find(line.id)
              return (
                <div key={line.id} className="flex gap-3.5 py-3.5 border-b border-black/10">
                  <div className="w-[60px] h-[60px] rounded-xl shrink-0 food-gradient overflow-hidden">
                    <FoodImg src={m.img} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[.95rem] leading-tight">{m.name}</div>
                    <div className="text-muted text-[.85rem] mt-0.5">${m.price.toFixed(2)} each</div>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => changeQty(line.id, -1)} aria-label="Decrease quantity"
                              className="w-[26px] h-[26px] rounded-lg border-[1.5px] border-black/10 bg-white
                                         hover:border-tomato hover:text-tomato grid place-items-center leading-none">−</button>
                      <span className="min-w-[22px] text-center font-semibold">{line.qty}</span>
                      <button onClick={() => changeQty(line.id, 1)} aria-label="Increase quantity"
                              className="w-[26px] h-[26px] rounded-lg border-[1.5px] border-black/10 bg-white
                                         hover:border-tomato hover:text-tomato grid place-items-center leading-none">+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <span className="font-display font-bold">${(m.price * line.qty).toFixed(2)}</span>
                    <button onClick={() => removeItem(line.id)}
                            className="text-muted hover:text-tomato text-[.8rem] underline">Remove</button>
                  </div>
                </div>
              )
            })
          )}
        </div>

        <div className="border-t border-black/10 px-6 py-5 bg-white">
          <div className="flex justify-between items-center mb-4">
            <span className="text-muted font-semibold">Total</span>
            <strong className="font-display text-[1.6rem]">${total.toFixed(2)}</strong>
          </div>
          <div className="flex gap-3">
            <button onClick={clearCart} className="btn btn-ghost flex-1">Clear cart</button>
            <button onClick={checkout} className="btn btn-solid flex-1">Checkout</button>
          </div>
        </div>
      </aside>
    </>
  )
}
