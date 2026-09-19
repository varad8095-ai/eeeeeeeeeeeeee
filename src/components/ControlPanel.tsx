import { Terminal, FolderTree, Plug, Settings2, ArrowRight } from 'lucide-react';
import { navigateTo } from '@/router';

const panelFeatures = [
  {
    icon: Terminal,
    title: 'Live Console',
    desc: 'View real-time server output and execute commands directly.',
  },
  {
    icon: FolderTree,
    title: 'File Manager',
    desc: 'Browse, upload, and edit server files without leaving your browser.',
  },
  {
    icon: Plug,
    title: 'One-Click Plugins',
    desc: 'Install plugins and mods from our curated library in seconds.',
  },
  {
    icon: Settings2,
    title: 'Easy Configuration',
    desc: 'Change settings, adjust player slots, and tweak performance with simple toggles.',
  },
];

export default function ControlPanel() {
  return (
    <section className="relative py-24 md:py-32 mesh-bg overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-5">
              {panelFeatures.map((f) => (
                <div
                  key={f.title}
                  className="group p-6 rounded-2xl glass hover:border-violet-500/30 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-violet-500/20 border border-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <f.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 font-display">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigateTo('/how-it-works')}
              className="inline-flex items-center gap-2 mt-8 text-purple-400 font-medium hover:gap-3 transition-all"
            >
              See the panel in action
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Powerful Control Panel</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white text-balance leading-tight">
              Manage your server in just a few clicks
            </h2>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed text-pretty">
              Our custom control panel makes it simple to manage your server. Install plugins, view live
              console output, manage files, and configure settings in just a few clicks — no technical
              experience required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
