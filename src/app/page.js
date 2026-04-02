"use client";

import Link from 'next/link';

export default function HubShowcase() {
  const widgets = [
    {
      id: 'simulateur',
      title: 'Simulateur de Destins',
      description: 'L\'utilisateur simule les scénarios de groupes pour voir le parcours potentiel de son équipe.',
      icon: '🌍',
      color: 'from-blue-600 to-indigo-900',
      link: '/simulateur'
    },
    {
      id: 'sueur',
      title: 'L\'Indice de Sueur Froide',
      description: 'Un baromètre live/pré-match mesurant la tension d\'une rencontre.',
      icon: '🥵',
      color: 'from-orange-500 to-red-600',
      link: '/sueur-froide'
    },
    {
      id: 'duel',
      title: 'Choisis ton Camp',
      description: 'Module interactif opposant deux scénarios improbables pour engager la communauté.',
      icon: '⚔️',
      color: 'from-purple-600 to-pink-600',
      link: '/choisis-ton-camp'
    },
    {
      id: 'archive',
      title: 'L\'Archive du Turfu',
      description: 'Contenu premium scrollytelling comparant les stars de 2026 aux légendes.',
      icon: '📜',
      color: 'from-emerald-600 to-teal-900',
      link: '/archive-du-turfu'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/20 blur-[100px] pointer-events-none rounded-full" />
          <span className="inline-block bg-red-600 text-white px-4 py-1.5 font-black italic uppercase text-lg tracking-wider rounded shadow-lg mb-6">Winamax</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight drop-shadow-md">Showcase B2B</h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg leading-relaxed">
            Aperçu des modules interactifs conçus pour l'intégration chez les partenaires médias. 
            Cliquez sur un widget pour tester l'expérience utilisateur.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {widgets.map((widget) => (
            <Link key={widget.id} href={widget.link} className="group relative block overflow-hidden rounded-2xl p-0.5 transition-transform hover:-translate-y-1 hover:shadow-2xl">
              {/* Animated border gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${widget.color} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative bg-zinc-950/90 backdrop-blur-xl rounded-[15px] h-full p-8 flex flex-col justify-between border border-white/5 transition-colors group-hover:bg-zinc-950/80">
                <div className="mb-8 flex justify-between items-start">
                  <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-inner border border-white/5">
                    {widget.icon}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-3 tracking-wide">{widget.title}</h2>
                  <p className="text-zinc-400 leading-relaxed text-sm">{widget.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <footer className="mt-20 text-center border-t border-white/10 pt-8">
          <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono">MVP Développé avec Next.js 16</p>
        </footer>
      </div>
    </div>
  );
}
