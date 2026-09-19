import { Globe } from 'lucide-react';

const locations = [
  { city: 'Frankfurt', flag: 'DE', ping: '12ms' },
  { city: 'London', flag: 'UK', ping: '18ms' },
  { city: 'New York', flag: 'US', ping: '25ms' },
  { city: 'Singapore', flag: 'SG', ping: '31ms' },
  { city: 'Mumbai', flag: 'IN', ping: '22ms' },
  { city: 'Sydney', flag: 'AU', ping: '38ms' },
];

export default function GlobalNetwork() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Globe className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-slate-300">Global low latency network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            Choose a location with <span className="gradient-text">low ping</span>
            <br />and fast network speeds
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto text-pretty">
            Our globally distributed infrastructure means you always get the lowest possible latency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc) => (
            <div
              key={loc.city}
              className="group flex items-center justify-between p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/30 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-violet-500/20 to-violet-600/20 border border-violet-500/20 flex items-center justify-center text-sm font-bold text-purple-300">
                  {loc.flag}
                </div>
                <div>
                  <p className="text-base font-semibold text-white">{loc.city}</p>
                  <p className="text-sm text-slate-500">Premium network</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-purple-400 font-display">{loc.ping}</p>
                <p className="text-xs text-slate-500">avg latency</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
