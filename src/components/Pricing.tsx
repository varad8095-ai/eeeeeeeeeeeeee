import { Check } from 'lucide-react';

const plans = [
  { name: 'Starter', price: '3.99', description: 'A simple home for small communities.', specs: ['2 GB DDR4 RAM', '2 vCPU cores', '20 GB NVMe storage', 'DDoS protection'], featured: false },
  { name: 'Performance', price: '7.99', description: 'The perfect balance for growing servers.', specs: ['6 GB DDR4 RAM', '4 vCPU cores', '60 GB NVMe storage', 'Priority support', 'Daily backups'], featured: true },
  { name: 'Pro', price: '14.99', description: 'Maximum power for ambitious worlds.', specs: ['12 GB DDR4 RAM', '8 vCPU cores', '120 GB NVMe storage', 'Priority support', 'Daily backups', 'Advanced monitoring'], featured: false },
];

export default function Pricing() {
  return (
    <section className="relative py-20 md:py-28 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-3xl p-8 border transition-all hover:-translate-y-1 ${plan.featured ? 'bg-gradient-to-b from-violet-500/15 to-slate-900/80 border-purple-400/50 shadow-glow' : 'bg-slate-900/60 border-slate-800 hover:border-violet-500/30'}`}>
              {plan.featured && <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-purple-400 text-slate-950 text-xs font-bold uppercase tracking-wider">Most popular</span>}
              <h2 className="text-2xl font-semibold text-white font-display">{plan.name}</h2>
              <p className="mt-3 text-slate-400 min-h-12">{plan.description}</p>
              <div className="mt-7 flex items-end gap-1"><span className="text-5xl font-bold text-white font-display">${plan.price}</span><span className="text-slate-500 mb-2">/month</span></div>
              <a href="#" className={`mt-8 block text-center py-3.5 rounded-full font-semibold transition-all ${plan.featured ? 'bg-purple-400 text-slate-950 hover:bg-purple-300' : 'bg-white text-slate-950 hover:bg-purple-200'}`}>Choose {plan.name}</a>
              <div className="mt-8 pt-7 border-t border-white/10 space-y-4">
                {plan.specs.map((spec) => <div key={spec} className="flex items-center gap-3 text-sm text-slate-300"><Check className="w-4 h-4 text-purple-400" />{spec}</div>)}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-500">All plans include instant setup, a powerful control panel, and flexible cancellation.</p>
      </div>
    </section>
  );
}
