import { Zap, Shield, Rocket } from 'lucide-react';
import { navigateTo } from '@/router';

const badges = [
  { icon: Zap, label: 'Instant Setup' },
  { icon: Shield, label: 'DDoS Protected' },
  { icon: Rocket, label: '4.9/5 Rated' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center mesh-bg overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-sm text-slate-300">Now with global low-latency network</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] mb-6 text-balance animate-fade-up">
          Fast Minecraft
          <br />
          <span className="gradient-text">Hosting</span> you deserve
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 text-pretty animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Launch your Minecraft server in seconds with SSD storage, DDoS protection, and a powerful
          control panel — no technical experience required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <button onClick={() => navigateTo('/how-it-works')} className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-400 to-violet-600 text-slate-950 font-semibold text-base hover:shadow-glow transition-all hover:scale-105">Create your server today</button>
          <button onClick={() => navigateTo('/pricing')} className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-medium text-base hover:bg-white/10 transition-all">Explore features</button>
        </div>

        <div className="relative max-w-2xl mx-auto mb-12 animate-float">
          <div className="absolute -inset-8 bg-violet-500/15 rounded-full blur-3xl" />
          <img src="/images/2c48edaaf014235eb0d6d68cccb313af.png" alt="RapixaCloud server" className="relative w-full max-w-md mx-auto h-44 object-contain" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-slate-400">
              <b.icon className="w-4 h-4 text-purple-400" /><span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
