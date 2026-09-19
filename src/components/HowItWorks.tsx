import { Check, Cpu, HardDrive, Shield, Zap, MousePointerClick, Power, Users } from 'lucide-react';
import { navigateTo } from '@/router';

const steps = [
  { icon: MousePointerClick, title: 'Choose your plan', desc: 'Pick the RAM, CPU, and storage that fits your community. Upgrade or downgrade anytime — no contracts.' },
  { icon: Power, title: 'Instant deployment', desc: 'Your server is live within seconds of payment. No waiting, no setup fees, no technical configuration required.' },
  { icon: Users, title: 'Invite your friends', desc: 'Share your server IP and start playing. Manage players, install plugins, and customize everything from the panel.' },
];

const specs = [
  { icon: Cpu, title: 'Fast Processors', desc: 'High-clock-speed CPUs keep TPS high even with heavy redstone and mods.' },
  { icon: HardDrive, title: 'NVMe SSD Storage', desc: 'Lightning-fast read and write speeds for chunk loading and world saves.' },
  { icon: Shield, title: 'Enterprise DDoS Protection', desc: 'Global filtering PoPs absorb attacks before they ever reach your server.' },
  { icon: Zap, title: 'Sub-second startup', desc: 'Servers boot in under two seconds so you spend less time waiting.' },
];

export default function HowItWorks() {
  return (
    <div className="relative bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <section className="relative z-10 py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">How it works</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white text-balance">From zero to playing in <span className="gradient-text">under a minute</span></h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto text-pretty">No technical experience needed. Three simple steps and you are in the game.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {steps.map((step, i) => (
            <div key={step.title} className="relative p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/30 transition-all">
              <div className="absolute top-6 right-6 text-6xl font-bold text-slate-800 font-display select-none">{i + 1}</div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-600/20 border border-violet-500/20 flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 font-display">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Why RapixaCloud</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white text-balance">Hardware that keeps up</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {specs.map((spec) => (
            <div key={spec.title} className="group flex gap-5 p-7 rounded-2xl glass hover:border-violet-500/30 transition-all">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <spec.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 font-display">{spec.title}</h3>
                <p className="text-slate-400 leading-relaxed">{spec.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button onClick={() => navigateTo('/pricing')} className="inline-flex px-8 py-4 rounded-full bg-gradient-to-r from-purple-400 to-violet-600 text-slate-950 font-semibold hover:shadow-glow transition-all hover:scale-105">See pricing plans</button>
        </div>
      </section>
    </div>
  );
}
