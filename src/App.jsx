import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Toast from './components/Toast'
import { MENU } from './data/menu'

export default function App() {
  const [cart, setCart] = useState([]) // [{ id, qty }]
  const [cartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState(null)

  const find = (id) => MENU.find((m) => m.id === id)
  const showToast = (text) => setToast({ text, key: Date.now() })

  const addToCart = (id) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === id)
      if (existing) return prev.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c))
      return [...prev, { id, qty: 1 }]
    })
    showToast(`${find(id).name} added`)
  }

  const changeQty = (id, delta) =>
    setCart((prev) =>
      prev.map((c) => (c.id === id ? { ...c, qty: c.qty + delta } : c)).filter((c) => c.qty > 0)
    )

  const removeItem = (id) => setCart((prev) => prev.filter((c) => c.id !== id))
  const clearCart = () => setCart([])

  const cartCount = cart.reduce((n, c) => n + c.qty, 0)
  const cartTotal = cart.reduce((s, c) => s + find(c.id).price * c.qty, 0)

  const checkout = () => {
    if (cart.length === 0) { showToast('Your cart is empty'); return }
    showToast(`Order placed! Total $${cartTotal.toFixed(2)}`)
    clearCart()
    setCartOpen(false)
  }

  return (
    <>
      <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <MenuSection onAdd={addToCart} />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        changeQty={changeQty}
        removeItem={removeItem}
        clearCart={clearCart}
        checkout={checkout}
      />
      <Toast toast={toast} />
    </>
  )
}
