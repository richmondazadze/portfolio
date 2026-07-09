import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import Reveal from '../components/Reveal';
import { site } from '../data/site';

const INITIAL = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _captcha: 'false', _template: 'table' }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm(INITIAL);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-navy">
      <section className="px-8 pb-28 pt-40 md:px-12 md:pb-40 md:pt-48">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          {/* Left: intro + direct links */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs uppercase tracking-widest-xl text-sage">
                Contact
              </span>
            </Reveal>
            <Reveal style={{ transitionDelay: '80ms' }}>
              <h1 className="mt-6 font-display text-6xl uppercase leading-none tracking-tighter text-white sm:text-7xl md:text-8xl">
                Let&apos;s Talk
              </h1>
            </Reveal>
            <Reveal style={{ transitionDelay: '160ms' }}>
              <p className="mt-8 max-w-md text-base font-light leading-relaxed text-taupe">
                Have a project, a role, or an idea to discuss? Send a message or
                reach me directly — I&apos;ll get back to you.
              </p>
            </Reveal>

            <div className="mt-14 space-y-6">
              <Reveal>
                <a
                  href={`mailto:${site.email}`}
                  className="group block border-t border-white/10 pt-6"
                >
                  <span className="text-xs uppercase tracking-widest-xl text-taupe">
                    Email
                  </span>
                  <span className="mt-2 flex items-center justify-between text-lg text-white">
                    {site.email}
                    <ArrowUpRight
                      size={18}
                      className="text-sage transition-transform duration-500 ease-fluid group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </a>
              </Reveal>
              {[
                { label: 'LinkedIn', href: site.socials.linkedin },
                { label: 'GitHub', href: site.socials.github },
              ].map((s, i) => (
                <Reveal key={s.label} style={{ transitionDelay: `${(i + 1) * 80}ms` }}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block border-t border-white/10 pt-6"
                  >
                    <span className="text-xs uppercase tracking-widest-xl text-taupe">
                      Social
                    </span>
                    <span className="mt-2 flex items-center justify-between text-lg text-white">
                      {s.label}
                      <ArrowUpRight
                        size={18}
                        className="text-sage transition-transform duration-500 ease-fluid group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            {status === 'success' ? (
              <Reveal className="flex h-full min-h-[300px] flex-col items-start justify-center border border-white/10 p-10">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage text-navy">
                  <Check size={28} />
                </span>
                <h2 className="mt-8 font-display text-4xl uppercase tracking-tight text-white">
                  Message Sent
                </h2>
                <p className="mt-4 max-w-sm font-light leading-relaxed text-taupe">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-xs uppercase tracking-widest-xl text-sage underline underline-offset-8"
                >
                  Send another
                </button>
              </Reveal>
            ) : (
              <Reveal as="form" onSubmit={handleSubmit} className="space-y-10">
                <Field
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                <Field
                  label="Your Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <div>
                  <label className="text-xs uppercase tracking-widest-xl text-taupe">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-4 w-full resize-none border-b border-white/20 bg-transparent pb-3 text-lg text-white outline-none transition-colors duration-300 placeholder:text-white/30 focus:border-sage"
                    placeholder="Tell me about it…"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-beige">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex items-center gap-3 bg-white px-8 py-4 text-xs uppercase tracking-widest-xl text-navy transition-colors duration-500 ease-fluid hover:bg-sage disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-500 ease-fluid group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, value, onChange, type = 'text' }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest-xl text-taupe">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="mt-4 w-full border-b border-white/20 bg-transparent pb-3 text-lg text-white outline-none transition-colors duration-300 placeholder:text-white/30 focus:border-sage"
        placeholder="…"
      />
    </div>
  );
}
