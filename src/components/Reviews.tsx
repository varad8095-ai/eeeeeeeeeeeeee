import { Star } from 'lucide-react';

const reviews = [
  { title: 'Excellent service!', text: 'Setup was fast and the server has been rock solid ever since. Support answered every question within minutes.', author: 'Verified Buyer' },
  { title: 'Best performance', text: 'The dashboard is intuitive and performance has been excellent, even during peak hours with a full player count.', author: 'Verified Buyer' },
  { title: 'Amazing Support', text: 'Switched over from another host and immediately noticed the difference in latency and uptime. Highly recommend.', author: 'Verified Buyer' },
  { title: 'All recommendations!', text: 'Great value for the specs, and the DDoS protection has kept our server online through every attack we have seen.', author: 'Verified Buyer' },
];

export default function Reviews() {
  return (
    <section className="relative py-20 md:py-28 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-500/8 rounded-full blur-[150px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.title} className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/30 transition-all">
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-purple-400 fill-purple-400" />)}</div>
                <span className="text-xs font-medium text-slate-500 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700">{r.author}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 font-display">{r.title}</h3>
              <p className="text-slate-400 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
