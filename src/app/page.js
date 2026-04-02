"use client";

import Link from 'next/link';

export default function HubShowcase() {
  const widgets = [
    {
      id: 'simulateur',
      title: 'Simulateur de Destins',
      description: 'Simulation interactive de scénarios de groupes pour voir le parcours cible.',
      icon: '🌍',
      color: 'from-blue-600 to-indigo-900',
      link: '/simulateur'
    },
    {
      id: 'sueur',
      title: 'L\'Indice de Sueur Froide',
      description: 'Baromètre live contextuel mesurant la tension d\'une rencontre.',
      icon: '🥵',
      color: 'from-orange-500 to-red-600',
      link: '/sueur-froide'
    },
    {
      id: 'duel',
      title: 'Choisis ton Camp',
      description: 'Dilemme communautaire opposant deux scénarios improbables.',
      icon: '⚔️',
      color: 'from-purple-600 to-pink-600',
      link: '/choisis-ton-camp'
    },
    {
      id: 'archive',
      title: 'L\'Archive du Turfu',
      description: 'Scrollytelling brand studio comparant les stars actuelles aux légendes.',
      icon: '📜',
      color: 'from-emerald-600 to-teal-900',
      link: '/archive-du-turfu'
    },
    {
      id: 'une-future',
      title: 'La Une du Futur',
      description: 'Générateur de Une de journal virale basée sur le scénario fou de l\'utilisateur.',
      icon: '📰',
      color: 'from-cyan-600 to-blue-900',
      link: '/une-du-futur'
    },
    {
      id: 'cotes-fantomes',
      title: 'Les Cotes Fantômes',
      description: 'Intégration "native" de cotes dissimulées directement dans l\'article éditorial.',
      icon: '👻',
      color: 'from-zinc-500 to-zinc-800',
      link: '/cotes-fantomes'
    },
    {
      id: 'thermo-clim',
      title: 'Thermomètre de la Clim',
      description: 'Analyse en temps réel de la tension sociale Twitter pour parier sur le pire.',
      icon: '❄️',
      color: 'from-sky-500 to-blue-800',
      link: '/thermometre-clim'
    },
    {
      id: 'pari-ennemi',
      title: 'Le Pari de ton Ennemi',
      description: 'Psychologie inversée : afficher les paris adverses pour stimuler l\'orgueil.',
      icon: '😈',
      color: 'from-red-700 to-red-950',
      link: '/pari-ennemi'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black">
      <div className="max-w-6xl mx-auto">
        <header className="mb-14 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 blur-[120px] pointer-events-none rounded-full" />
          <span className="inline-block bg-red-600 text-white px-4 py-1.5 font-black italic uppercase text-lg tracking-wider rounded shadow-lg mb-6">Winamax</span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-md">Showcase B2B</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Aperçu des 8 modules interactifs exclusifs conçus pour un engagement maximal chez les partenaires médias. 
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {widgets.map((widget) => (
            <Link key={widget.id} href={widget.link} className="group relative block overflow-hidden rounded-3xl p-0.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${widget.color} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative bg-zinc-950/90 backdrop-blur-xl rounded-[22px] h-full p-6 flex flex-col justify-between border border-white/5 transition-colors group-hover:bg-zinc-950/80">
                <div className="mb-6 flex justify-between items-start">
                  <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner border border-white/5">
                    {widget.icon}
                  </div>
                  <div className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-2 tracking-wide leading-tight">{widget.title}</h2>
                  <p className="text-zinc-400 leading-relaxed text-xs">{widget.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <footer className="mt-24 text-center border-t border-white/10 pt-8 pb-12">
          <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono mb-3">Développé avec Next.js 16 • Turbo</p>
          <p className="text-sm font-bold text-zinc-400 tracking-wider">© {new Date().getFullYear()} Jourdechance SAS</p>
        </footer>
      </div>
    </div>
  );
}
