import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, LoaderCircle } from 'lucide-react';
import Reveal from '../components/Reveal';
import { site } from '../data/site';
import { sendContact } from '../lib/contact';

const INITIAL = { name: '', email: '', message: '' };
export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle');
  const success = useRef(null);
  const first = useRef(null);
  useEffect(() => { if (status === 'success') success.current?.focus(); }, [status]);
  const change = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const submit = async e => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try { await sendContact(form, site.email); setStatus('success'); setForm(INITIAL); }
    catch { setStatus('error'); }
  };
  return (
    <div className="contact-page page-space relative isolate">
      <div className="contact-ambient" aria-hidden="true" />
      <div className="site-container grid gap-x-16 gap-y-8 lg:grid-cols-2">
        <header className="contact-intro"><p className="eyebrow">Get in touch</p><h1 className="page-title"><span className="contact-title-mask"><span>Let’s talk.</span></span></h1><p className="page-description">Have a project, a role, or an idea in mind? I’d love to hear about it.</p></header>
        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          {status === 'success' ? <section className="contact-success rounded-xl border border-white/20 p-6 sm:p-10" aria-labelledby="success-title"><span className="contact-success-icon"><Check size={32} className="text-sage" /></span><h2 ref={success} tabIndex={-1} id="success-title" className="mt-6 font-display text-4xl uppercase focus:outline-none">Message sent.</h2><p className="mt-4 leading-relaxed text-taupe">Thanks for reaching out. I’ll get back to you soon.</p><button onClick={() => { setStatus('idle'); requestAnimationFrame(() => first.current?.focus()); }} className="button-secondary mt-8">Send another message</button></section> :
          <form onSubmit={submit} aria-busy={status === 'sending'} className="contact-form rounded-xl border border-white/15 bg-white/[.025] p-5 sm:p-8">
            <fieldset disabled={status === 'sending'} className="space-y-6 disabled:opacity-70">
              <legend className="sr-only">Send a message</legend>
              <div className="form-field"><label htmlFor="contact-name" className="form-label">Your name</label><input ref={first} id="contact-name" name="name" autoComplete="name" required maxLength={120} value={form.name} onChange={change} className="form-control" placeholder="Alex Morgan" /></div>
              <div className="form-field"><label htmlFor="contact-email" className="form-label">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={change} className="form-control" placeholder="alex@example.com" /></div>
              <div className="form-field"><label htmlFor="contact-message" className="form-label">Your message</label><textarea id="contact-message" name="message" required rows={5} maxLength={5000} value={form.message} onChange={change} className="form-control resize-y" placeholder="Tell me about your project or opportunity…" /></div>
              <p className="text-xs text-taupe">All fields are required.</p>
              {status === 'error' && <p role="alert" className="contact-error rounded-md border border-beige/30 p-3 text-sm leading-relaxed text-beige">Your message wasn’t sent. Your draft is still here—please try again or <a className="underline" href={`mailto:${site.email}`}>email me directly</a>.</p>}
              <button type="submit" className="contact-submit button-primary w-full disabled:opacity-60">{status === 'sending' ? <><LoaderCircle size={17} className="animate-spin" /> Sending…</> : <>Send message <ArrowUpRight size={17} /></>}</button>
            </fieldset>
            <p className="sr-only" role="status">{status === 'sending' ? 'Sending your message' : ''}</p>
          </form>}
        </div>
        <Reveal as="aside" delay={0.12} className="contact-direct min-w-0 lg:col-start-1 lg:row-start-2"><p className="text-sm text-taupe">Prefer to reach out directly?</p><a href={`mailto:${site.email}`} className="mt-3 inline-block max-w-full break-all text-base text-sage underline underline-offset-4 sm:text-lg">{site.email}</a><div className="mt-6 flex gap-6">{Object.entries(site.socials).map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-link capitalize">{label === 'linkedin' ? 'LinkedIn' : 'GitHub'} <ArrowUpRight size={16} /></a>)}</div></Reveal>
      </div>
    </div>
  );
}
