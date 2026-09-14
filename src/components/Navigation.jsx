import { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { site } from '../data/site';

const LINKS = [{ label: 'Work', to: '/work' }, { label: 'About', to: '/about' }, { label: 'Contact', to: '/contact' }];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const toggle = useRef(null);
  const panel = useRef(null);
  const light = pathname === '/work';

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    const media = window.matchMedia('(min-width: 768px)');
    const close = () => { if (media.matches) setOpen(false); };
    media.addEventListener('change', close);
    return () => { window.removeEventListener('scroll', update); media.removeEventListener('change', close); };
  }, []);
  useEffect(() => {
    if (!open) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const background = [document.querySelector('main'), document.querySelector('footer')].filter(Boolean);
    background.forEach(el => { el.inert = true; });
    panel.current?.querySelector('a')?.focus();
    const keyboard = e => {
      if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
      if (e.key === 'Tab') {
        const items = [...document.querySelectorAll('[data-menu-focus]')];
        const current = items.indexOf(document.activeElement);
        e.preventDefault();
        items[(current + (e.shiftKey ? -1 : 1) + items.length) % items.length]?.focus();
      }
    };
    document.addEventListener('keydown', keyboard);
    return () => {
      document.body.style.overflow = oldOverflow;
      background.forEach(el => { el.inert = false; });
      document.removeEventListener('keydown', keyboard);
    };
  }, [open]);
  const closeMenu = () => { setOpen(false); toggle.current?.focus(); };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${open ? 'border-white/10 bg-navy text-white' : light ? 'border-navy/10 bg-[#f7f8f5]/95 text-navy' : `text-white ${scrolled ? 'border-white/10 bg-navy/95' : 'border-transparent bg-navy'}`}`}>
        <nav aria-label="Main navigation" className="site-container flex h-20 items-center justify-between gap-6">
          <Link to="/" onClick={() => setOpen(false)} aria-label={`${site.name} — home`} data-menu-focus={open ? '' : undefined} className="flex min-h-11 min-w-11 items-center"><img src={light && !open ? '/ra-logo-black.png' : '/ra-logo.webp'} alt="" width="40" height="34" className="h-8 w-auto" /></Link>
          <div className="hidden items-center gap-8 md:flex">{LINKS.map(link => <NavLink key={link.to} to={link.to} className={({ isActive }) => `inline-flex min-h-11 items-center border-b-2 text-sm font-medium transition-colors ${isActive ? 'border-current' : 'border-transparent opacity-75 hover:opacity-100'}`}>{link.label}</NavLink>)}</div>
          <Link to="/contact" className={`hidden min-h-11 items-center gap-2 rounded-md px-5 text-sm font-semibold md:inline-flex ${light ? 'bg-navy text-white' : 'bg-white text-navy'}`}>Let’s talk <ArrowUpRight size={16} /></Link>
          <button ref={toggle} onClick={() => open ? closeMenu() : setOpen(true)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" data-menu-focus={open ? '' : undefined} className="flex h-11 w-11 items-center justify-center rounded-md md:hidden">{open ? <X size={24} /> : <Menu size={24} />}</button>
        </nav>
      </header>
      {open && <nav ref={panel} id="mobile-menu" aria-label="Mobile navigation" className="fixed inset-0 z-40 flex flex-col justify-center gap-7 overflow-y-auto bg-navy px-8 pb-12 pt-24 text-white md:hidden">{LINKS.map(link => <NavLink key={link.to} to={link.to} data-menu-focus onClick={() => setOpen(false)} className={({ isActive }) => `flex items-center justify-between border-b border-white/15 py-4 font-display text-5xl uppercase ${isActive ? 'text-sage' : ''}`}>{link.label}<ArrowUpRight size={28} /></NavLink>)}<p className="mt-4 text-sm text-taupe">Software engineering. Thoughtfully built.</p></nav>}
    </>
  );
}
