"use client";

import React, { useEffect, useState } from 'react';
import PitchModal from '../../components/PitchModal';
import { History, TrendingUp, ChevronDown } from 'lucide-react';

export default function ArchiveDuTurfu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-zinc-950 min-h-screen text-zinc-300 font-sans relative">
      <PitchModal 
        title="L'Archive du Turfu"
        adn="Contenu premium 'Long Form' / Scrollytelling. Valoriser l'intelligence du lecteur via la data sportive."
        why="Légitimer l'expertise data de Winamax au coeur d'un éditorial de très haute qualité (Brand Studio)."
        swot={{
          s: ["Qualité perçue extrêmement élevée (Premium)", "Contenu Evergreen (qui ne périme pas après le match)"],
          w: ["Coût/Temps de production du contenu éditorial plus long"],
          o: ["Déclinaisons infinies : Les plus grands 10, Les Tireurs de CF, Les murs défensifs..."],
          t: ["Besoin que l'affilié ait la capacité technique d'intégrer un format pleine largeur"]
        }}
      />

      {/* Hero Section */}
      <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase border border-white/20 mb-6 backdrop-blur-md">
            <History size={14} className="text-zinc-400" /> Archives Winamax x SoFoot
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 drop-shadow-2xl">
            L'Héritage <span className="text-red-600 block md:inline">des Précoces</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            1958 - 2026. Séparés par 68 ans, Pelé et Lamine Yamal ont redéfini la notion de jeunesse. 
            Mais que disent vraiment les chiffres de ces deux anomalies statistiques ?
          </p>
        </div>

        <div className={`absolute bottom-10 z-20 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100 flex flex-col items-center animate-bounce'}`}>
          <span className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Décoder l'histoire</span>
          <ChevronDown className="text-zinc-400" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative max-w-5xl mx-auto px-6 py-24">
        
        {/* Ligne temporelle centrale */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          
          {/* O Rei (Pelé) */}
          <div className="space-y-8 md:text-right">
            <div>
              <h2 className="text-4xl font-black text-yellow-500 uppercase">Pelé</h2>
              <p className="font-mono text-zinc-500 uppercase tracking-widest mt-1">Coupe du Monde 1958</p>
            </div>
            
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 backdrop-blur-md hover:bg-zinc-900/80 transition-colors">
              <div className="text-5xl font-black text-white mb-2">17<span className="text-xl text-zinc-500 font-medium">ans</span></div>
              <p className="text-sm text-zinc-400">Âge lors du premier sacre mondial. Impliqué dans 6 buts (en seulement 4 matchs disputés).</p>
            </div>

            <div className="inline-block bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-xl text-left md:text-right">
              <p className="text-xs uppercase text-zinc-500 tracking-wider mb-1">Cote Rétro (Estimée)</p>
              <p className="text-xl font-black text-yellow-500">Un but en finale : 4.50</p>
            </div>
          </div>

          {/* Yamal */}
          <div className="space-y-8 mt-16 md:mt-48">
            <div>
              <h2 className="text-4xl font-black text-blue-500 uppercase">Lamine Yamal</h2>
              <p className="font-mono text-zinc-500 uppercase tracking-widest mt-1">Génération 2026</p>
            </div>
            
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 backdrop-blur-md hover:bg-zinc-900/80 transition-colors">
              <div className="text-5xl font-black text-white mb-2">18<span className="text-xl text-zinc-500 font-medium">ans</span></div>
              <p className="text-sm text-zinc-400">Records de précocité pulvérisés en club et en sélection. Une vision de jeu déjà historique.</p>
            </div>

            <div className="inline-block bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl">
               <p className="text-xs uppercase text-zinc-500 tracking-wider mb-1">Projection Winamax</p>
               <p className="text-xl font-black text-blue-400">Meilleur Joueur CDM 2026 : 8.50</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-t from-red-950/20 to-zinc-950 py-32 px-6 text-center border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <TrendingUp className="mx-auto text-red-500 mb-6" size={48} strokeWidth={1} />
          <h3 className="text-3xl font-black text-white mb-4">L'Histoire s'écrit maintenant.</h3>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Pensez-vous qu'une nouvelle anomalie est en train de naître sous nos yeux ? 
            Découvrez la sélection de paris <span className="font-bold text-white">"La Relève"</span> préparée par nos traders.
          </p>
          <button className="bg-red-600 hover:bg-red-500 px-8 py-4 rounded-full text-white font-black uppercase tracking-widest shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all hover:scale-105">
            Voir les Cotes Héritage
          </button>
        </div>
      </div>
    </div>
  );
}
