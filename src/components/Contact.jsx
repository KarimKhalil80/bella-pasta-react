import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [note, setNote] = useState({ text: '', error: false })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    if (!form.name.trim() || !validEmail || !form.message.trim()) {
      setNote({ text: 'Please add your name, a valid email, and a message.', error: true })
      return
    }
    setNote({ text: `Grazie, ${form.name.trim().split(' ')[0]}! We'll be in touch shortly.`, error: false })
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-paper">
      <div className="container-site">
        <header className="text-center max-w-[620px] mx-auto mb-11">
          <p className="eyebrow">Come say hello</p>
          <h2 className="section-title">Find Us &amp; Book</h2>
          <p className="text-muted mt-3">Walk in, or send a note and we'll hold a table.</p>
        </header>

        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-7">
          <div className="rounded-[18px] overflow-hidden border border-black/10 shadow-warm min-h-[380px]">
            <iframe
              title="Map to Bella Pasta in Little Italy, New York"
              src="https://maps.google.com/maps?q=Little%20Italy%2C%20Manhattan%2C%20New%20York&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              className="w-full h-full min-h-[380px] border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <form onSubmit={submit} noValidate
                className="bg-white border border-black/10 rounded-[18px] p-7 shadow-warm">
            {[
              { id: 'name', label: 'Name', type: 'text', ph: 'Maria Rossi' },
              { id: 'email', label: 'Email', type: 'email', ph: 'maria@email.com' },
            ].map((f) => (
              <div key={f.id} className="mb-[1.1rem]">
                <label htmlFor={f.id} className="block font-semibold text-[.9rem] mb-1.5">{f.label}</label>
                <input
                  id={f.id} name={f.id} type={f.type} value={form[f.id]} onChange={update} placeholder={f.ph}
                  className="w-full px-[.95rem] py-3 border-[1.5px] border-black/10 rounded-xl bg-paper
                             text-[.95rem] outline-none focus:border-tomato focus:bg-white transition"
                />
              </div>
            ))}
            <div className="mb-[1.1rem]">
              <label htmlFor="message" className="block font-semibold text-[.9rem] mb-1.5">Message</label>
              <textarea
                id="message" name="message" rows="4" value={form.message} onChange={update}
                placeholder="Table for two on Friday at 7pm…"
                className="w-full px-[.95rem] py-3 border-[1.5px] border-black/10 rounded-xl bg-paper
                           text-[.95rem] outline-none focus:border-tomato focus:bg-white transition resize-y"
              />
            </div>
            <button type="submit" className="btn btn-solid w-full">Send message</button>
            {note.text && (
              <p className={`mt-3 text-[.9rem] font-semibold ${note.error ? 'text-tomato' : 'text-basil'}`}>
                {note.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
