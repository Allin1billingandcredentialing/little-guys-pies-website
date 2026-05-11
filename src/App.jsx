import React, { useMemo, useState } from 'react';

const pies = [
  ['Sweet Potato Pie', 'Creamy sweet potatoes, warm spices, and a flaky crust.'],
  ['Chess Pie', 'Rich, custardy, sweet, and baked with a hint of vanilla.'],
  ['Pecan Pie', 'Toasted pecans with gooey caramel-style filling.'],
  ['Apple Pie', 'Sliced apples tossed in cinnamon and brown sugar.'],
];

const sizes = [
  ['2 inch Mini Pies - 4 Pack', 12],
  ['3 inch Mini Pies - 4 Pack', 16],
  ['4 inch Mini Pies - 4 Pack', 20],
  ['5 inch Mini Pies - 4 Pack', 24],
];

export default function App() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', pie: 'Sweet Potato Pie', size: sizes[0][0], quantity: 1, pickupDate: '', notes: ''
  });

  const total = useMemo(() => {
    const size = sizes.find((item) => item[0] === form.size);
    return (size ? size[1] : 0) * Number(form.quantity || 1);
  }, [form.size, form.quantity]);

  const body = encodeURIComponent(`Hello Little Guy's Pies,\n\nI would like to place an order.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nPie Flavor: ${form.pie}\nSize: ${form.size}\nQuantity: ${form.quantity}\nPickup/Event Date: ${form.pickupDate}\nEstimated Total: $${total.toFixed(2)}\nNotes: ${form.notes}`);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="bg-white border-b border-slate-300 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-full bg-blue-900 text-white flex items-center justify-center text-3xl">👨🏾‍🍳</div>
            <div>
              <h1 className="text-xl font-black">Little Guy's Pies</h1>
              <p className="text-xs font-bold tracking-widest text-blue-700 uppercase">Big Flavor from a Little Pie!</p>
            </div>
          </div>
          <a href="#order" className="bg-blue-900 text-white px-5 py-3 rounded-full font-bold">Order Pies</a>
        </div>
      </header>

      <main>
        <section className="max-w-6xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="inline-block bg-white px-4 py-2 rounded-full text-blue-900 font-bold shadow">Homemade mini pies in Louisville, KY</p>
            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-tight">Big homemade flavor in every little pie.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">Classic Southern-style pies baked with love, buttery crust, and rich fillings.</p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <a href="#order" className="bg-blue-900 text-white px-7 py-4 rounded-full font-bold shadow">Start an Order</a>
              <a href="tel:5023565939" className="bg-white border-2 border-blue-900 text-blue-900 px-7 py-4 rounded-full font-bold">Call Us</a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-950 via-slate-800 to-blue-600 text-white p-8 rounded-3xl shadow-2xl">
            <div className="text-6xl mb-6">🥧</div>
            <h3 className="text-4xl font-black">Order mini pies by the 4-pack</h3>
            <p className="mt-4 text-slate-200">Sweet Potato • Chess • Pecan • Apple</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {sizes.map(([label, price]) => <div key={label} className="bg-white/15 p-4 rounded-2xl"><p>{label}</p><p className="text-2xl font-black">${price}</p></div>)}
            </div>
          </div>
        </section>

        <section id="menu" className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-black text-center">Our Classic Homemade Pies</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {pies.map(([name, desc]) => <div key={name} className="bg-slate-100 border border-slate-300 rounded-3xl p-6 shadow"><div className="text-3xl">🥧</div><h3 className="mt-4 text-2xl font-black">{name}</h3><p className="mt-3 text-slate-700">{desc}</p></div>)}
            </div>
          </div>
        </section>

        <section id="order" className="py-16">
          <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-black uppercase tracking-widest text-blue-700">Order Online</p>
              <h2 className="mt-3 text-4xl font-black">Request your pies</h2>
              <p className="mt-5 text-lg text-slate-700">Fill out the order request below. The email button opens a prepared order email.</p>
              <div className="mt-8 bg-white border border-slate-300 rounded-3xl p-6 shadow">
                <p className="font-bold text-blue-700 uppercase tracking-widest">Estimated Total</p>
                <p className="mt-2 text-5xl font-black">${total.toFixed(2)}</p>
              </div>
            </div>
            <form className="bg-white border border-slate-300 rounded-3xl p-6 shadow-xl">
              <div className="grid gap-4">
                <input className="border border-slate-300 bg-slate-100 rounded-2xl px-4 py-3" placeholder="Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                <input className="border border-slate-300 bg-slate-100 rounded-2xl px-4 py-3" placeholder="Phone" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
                <input className="border border-slate-300 bg-slate-100 rounded-2xl px-4 py-3" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                <select className="border border-slate-300 bg-slate-100 rounded-2xl px-4 py-3" value={form.pie} onChange={(e) => setForm({...form, pie: e.target.value})}>{pies.map(([name]) => <option key={name}>{name}</option>)}<option>Custom / Seasonal Flavor</option></select>
                <select className="border border-slate-300 bg-slate-100 rounded-2xl px-4 py-3" value={form.size} onChange={(e) => setForm({...form, size: e.target.value})}>{sizes.map(([label]) => <option key={label}>{label}</option>)}</select>
                <input type="number" min="1" className="border border-slate-300 bg-slate-100 rounded-2xl px-4 py-3" value={form.quantity} onChange={(e) => setForm({...form, quantity: Number(e.target.value)})} />
                <input type="date" className="border border-slate-300 bg-slate-100 rounded-2xl px-4 py-3" value={form.pickupDate} onChange={(e) => setForm({...form, pickupDate: e.target.value})} />
                <textarea className="border border-slate-300 bg-slate-100 rounded-2xl px-4 py-3" placeholder="Notes or custom request" value={form.notes} onChange={(e) => setForm({...form, notes: e.target.value})} />
                <a className="bg-blue-900 text-white text-center rounded-full px-7 py-4 font-bold" href={`mailto:littleguyspies@gmail.com?subject=New Pie Order Request&body=${body}`}>Submit Order Request</a>
              </div>
            </form>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl">
              <h2 className="text-4xl font-black">Online Payments</h2>
              <p className="mt-4 text-slate-200">Replace these placeholders with real Stripe, Square, or PayPal links.</p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {paymentLinks.map((item) => <a key={item.name} href={item.href} className="bg-white text-slate-900 rounded-3xl p-6 text-center"><div className="text-3xl">💳</div><h3 className="mt-3 text-xl font-black">{item.name}</h3><p className="mt-2 text-slate-600">{item.note}</p></a>)}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-2">
          <div><LogoMark /><p className="mt-4 text-slate-300">Homemade mini pies baked with love in Louisville, Kentucky.</p></div>
          <div className="grid gap-3"><a href="tel:5023565939">Office: (502) 356-5939</a><a href="tel:5028263373">Cell: (502) 826-3373</a><a href="mailto:littleguyspies@gmail.com">littleguyspies@gmail.com</a><p>Louisville, Kentucky</p></div>
        </div>
      </footer>
    </div>
  );
}
