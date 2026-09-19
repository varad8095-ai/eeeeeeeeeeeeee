import { Boxes, Package, Wrench, Settings2 } from 'lucide-react';
import { navigateTo } from '@/router';

const options = [
  { icon: Boxes, label: 'Vanilla' },
  { icon: Package, label: 'Modpacks' },
  { icon: Wrench, label: 'Forge' },
  { icon: Settings2, label: 'Paper' },
  { icon: Package, label: 'Spigot' },
  { icon: Settings2, label: 'Mohist' },
];

export default function ServerCreation() {
  return (
    <section className="relative py-20 md:py-28 mesh-bg overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Get started in minutes</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white text-balance leading-tight">Create your Minecraft server today</h2>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed text-pretty">
              Everyone can create their own Minecraft server. Change your server configuration, switch
              versions anytime, or install plugins and mods whenever you want with our Minecraft hosting.
              Your server hosted by RapixaCloud has lots of exclusive features.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {options.map((o) => (
                <div key={o.label} className="flex items-center gap-2 px-4 py-2.5 rounded-full glass text-slate-200 text-sm font-medium hover:border-violet-500/30 transition-colors">
                  <o.icon className="w-4 h-4 text-purple-400" />{o.label}
                </div>
              ))}
            </div>

            <button onClick={() => navigateTo('/pricing')} className="inline-flex mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-purple-400 to-violet-600 text-slate-950 font-semibold hover:shadow-glow transition-all hover:scale-105">Launch your server now</button>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/20 to-violet-600/10 rounded-3xl blur-2xl" />
            <img src="/images/2c48edaaf014235eb0d6d68cccb313af.png" alt="RapixaCloud server" className="absolute -top-16 right-4 z-10 w-28 h-28 object-contain animate-float" />
            <div className="relative glass rounded-3xl p-8 animate-float">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-3 text-xs text-slate-400 font-mono">rapixacloud-panel</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div>
                    <p className="text-sm font-medium text-white">Server Status</p>
                    <p className="text-xs text-slate-500">Running on node-eu-01</p>
                  </div>
                  <span className="flex items-center gap-2 text-sm text-purple-400 font-medium"><span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />Online</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[{ label: 'CPU', value: '12%' }, { label: 'RAM', value: '2.1 GB' }, { label: 'Players', value: '18/50' }].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                      <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                      <p className="text-sm font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <p className="text-xs text-slate-500 mb-2 font-mono">Server console</p>
                  <div className="space-y-1.5 font-mono text-xs">
                    <p className="text-slate-400">[12:04:01] <span className="text-purple-400">Server started in 1.2s</span></p>
                    <p className="text-slate-400">[12:04:15] <span className="text-slate-300">Player Steve joined</span></p>
                    <p className="text-slate-400">[12:04:22] <span className="text-slate-300">Loading world spawn...</span></p>
                    <p className="text-slate-400">[12:05:01] <span className="text-purple-400">Done! 18 players online</span></p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 rounded-lg bg-violet-500/20 border border-violet-500/30 text-purple-300 text-sm font-medium hover:bg-violet-500/30 transition-colors">Restart</button>
                  <button className="flex-1 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-700 transition-colors">Settings</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
