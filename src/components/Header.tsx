import { useEffect, useState } from 'react';
import { Cloud, Menu, X } from 'lucide-react';
import { navigateTo, type Route } from '@/router';

const navLinks: { label: string; href: Route }[] = [
  { label: 'Home', href: '/' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (r: Route) => {
    navigateTo(r);
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 glass' : 'py-5 bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => go('/')} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center shadow-glow transition-transform group-hover:scale-110">
            <Cloud className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-bold text-white tracking-tight font-display">RapixaCloud</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => go(link.href)} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2">Sign in</a>
          <button onClick={() => go('/pricing')} className="text-sm font-semibold text-slate-950 bg-white hover:bg-purple-200 px-5 py-2.5 rounded-full transition-all hover:shadow-glow">Get started</button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-4 mx-6 glass rounded-2xl p-6 flex flex-col gap-4 animate-fade-up">
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => go(link.href)} className="text-left text-base font-medium text-slate-200 hover:text-white transition-colors">{link.label}</button>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <a href="#" className="text-base font-medium text-slate-200">Sign in</a>
          <button onClick={() => go('/pricing')} className="text-center text-base font-semibold text-slate-950 bg-white px-5 py-3 rounded-full">Get started</button>
        </div>
      )}
    </header>
  );
}
