import { Cloud, Twitter, Github, Youtube } from 'lucide-react';
import { navigateTo } from '@/router';

const footerSections = [
  {
    title: 'Services',
    links: ['Minecraft Hosting', 'VPS Hosting', 'Game Servers', 'DDoS Protection'],
  },
  {
    title: 'Support',
    links: ['Knowledge Base', 'Status Page', 'Contact Us', 'Community'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Terms of Service', 'Privacy Policy', 'Refund Policy'],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-500/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <button onClick={() => navigateTo('/')} className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center">
                <Cloud className="w-5 h-5 text-slate-900" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-white tracking-tight font-display">RapixaCloud</span>
            </button>
            <p className="text-slate-400 leading-relaxed max-w-sm text-pretty">
              Reliable game and VPS hosting built for performance, security, and simplicity.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Twitter, Github, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-violet-500/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© Copyright 2026 RapixaCloud. All Rights Reserved.</p>
          <p className="text-sm text-slate-500">Built for gamers, by gamers.</p>
        </div>
      </div>
    </footer>
  );
}
