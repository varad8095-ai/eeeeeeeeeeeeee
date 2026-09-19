import { HardDrive, Shield, Zap, Star, Cpu, Headphones } from 'lucide-react';

const features = [
  {
    icon: HardDrive,
    title: 'SSD Storage',
    desc: 'Our game servers utilize the latest and fastest SSD technology available.',
  },
  {
    icon: Shield,
    title: 'DDoS Protection',
    desc: 'All game servers are protected from a range of DDoS attacks via global filtering PoPs.',
  },
  {
    icon: Zap,
    title: 'Instant Setup',
    desc: 'Your game server will be setup in seconds after payment, truly rapid.',
  },
  {
    icon: Star,
    title: 'Highly Reviewed',
    desc: 'We are rated 4.9/5 on Trustpilot, making us one of the best hosting solutions.',
  },
  {
    icon: Cpu,
    title: 'Fast Processors',
    desc: 'No contracts, no lock-in. You always have the option to cancel whenever you want.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Our game servers run on our Pterodactyl Panel, built around making your life easier.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">The features you deserve</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white text-balance">
            Everything you need to <span className="gradient-text">play without limits</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto text-pretty">
            There are many benefits to our hosting. Here are some of the highlights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/0 to-violet-600/0 group-hover:from-violet-500/5 group-hover:to-violet-600/5 transition-all duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-600/20 border border-violet-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6 text-purple-400" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-display">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
