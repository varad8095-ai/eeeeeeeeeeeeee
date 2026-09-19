interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 mesh-bg overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[480px] h-[260px] bg-violet-500/15 rounded-full blur-[120px]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">{eyebrow}</span>
        <h1 className="mt-5 text-5xl md:text-7xl font-bold text-white text-balance leading-[1.05]">{title}</h1>
        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed text-pretty">{description}</p>
      </div>
    </section>
  );
}
