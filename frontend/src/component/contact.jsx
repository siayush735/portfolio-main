import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
 
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setForm({ name: '', email: '', message: '' });
        setStatus('sent');
        console.log(form);
      } else throw new Error('Network response not ok');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section data-aos="zoom-in" data-aos-delay="200" id="contact" className="flex flex-col justify-center items-center bg-black p-7">
      <h3 className="text-xl font-semibold text-white text-center">Contact</h3>
      <form data-aos="zoom-in" data-aos-delay="400" onSubmit={handleSubmit}  className="mt-4 grid gap-3 justify-center items-center p-5 ">
        <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} className="p-3 border rounded text-white" />
        <input name="email" type="email" placeholder="Your email" value={form.email} onChange={handleChange} className="p-3 border rounded text-white" />
        <textarea name="message" placeholder="Message" rows={5} value={form.message} onChange={handleChange} className="p-3 border rounded text-white" />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded" type='submit'>Send</button>
        {status === 'sent' && <span className="text-green-600 text-sm">Message sent!</span>}
        {status === 'error' && <span className="text-red-600 text-sm">Error — try again later.</span>}
      </form>
    </section>
  );
}
