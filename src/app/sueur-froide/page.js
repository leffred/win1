"use client";

import React, { useState, useEffect } from 'react';
import PitchModal from '../../components/PitchModal';
import { Flame, Snowflake, AlertTriangle, TrendingUp } from 'lucide-react';

export default function SueurFroide() {
  const [tension, setTension] = useState(0);

  useEffect(() => {
    // Animation au chargement
    const timer = setTimeout(() => setTension(82), 500);
    return () => clearTimeout(timer);
  }, []);

  const getTensionConfig = (val) => {
    if (val < 30) return { label: 'Match Éclaté', color: 'text-zinc-500', bar: 'from-zinc-600 to-zinc-400', icon: <Snowflake /> };
    if (val < 60) return { label: 'Potentiel de Seum', color: 'text-yellow-500', bar: 'from-yellow-600 to-yellow-400', icon: <TrendingUp /> };
    if (val < 85) return { label: 'Risque de Clim\'', color: 'text-orange-500', bar: 'from-orange-600 to-red-500', icon: <AlertTriangle /> };
    return { label: 'Alerte Remontada !', color: 'text-red-500', bar: 'from-red-600 to-purple-600', icon: <Flame className="animate-pulse" /> };
  };

  const config = getTensionConfig(tension);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-transparent sm:bg-black/40 p-4 font-sans relative">
      <PitchModal 
        title="L'Indice de Sueur Froide"
        adn="Un insight d'expert vulgarisé sous un angle humoristique, utilisant la culture foot (Clim, Seum, Remontada)."
        why="Aider l'utilisateur à décider s'il faut regarder le match (ou parier dessus) en vendant l'émotion plutôt que les statistiques."
        swot={{
          s: ["Ton décalé qui parle directement aux jeunes et la commu X/Twitter", "Facilement intégrable en bannière live"],
          w: ["Sujet à l'interprétation (comment calculer le 'risque de clim' ?)", "Moins pertinent pour les matchs sans enjeu"],
          o: ["Sponsoring 'La minute sueur froide' par Winamax avant chaque grand match", "Virality forte sur les réseaux sociaux"],
          t: ["Peut devenir 'ringard' si les termes ne sont pas actualisés"]
        }}
      />
      
      <div className="w-full max-w-sm bg-zinc-950 text-white p-6 rounded-[24px] border border-zinc-800 shadow-2xl relative overflow-hidden backdrop-blur-xl group">
        {/* Glow ambient */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-orange-600/10 blur-[60px] pointer-events-none rounded-full" />
        
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold text-red-500 tracking-widest uppercase">Live • 78e min</span>
          </div>
          <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[10px] uppercase font-mono text-zinc-400">Data Winamax</span>
        </div>

        <div className="text-center mb-8 relative z-10">
          <h2 className="text-3xl font-black mb-1">France - Espagne</h2>
          <p className="text-zinc-500 text-sm font-medium">Les Bleus mènent 1-0... Mais la Roja pousse fort.</p>
        </div>

        <div className="relative mb-10 z-10">
          <div className="flex justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Tension Globale</span>
            <span className={`text-sm font-black ${config.color} flex items-center gap-1`}>
              {config.icon} {tension}%
            </span>
          </div>
          
          <div className="h-6 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5 relative">
            <div 
              className={`h-full bg-gradient-to-r ${config.bar} transition-all duration-1000 ease-out flex items-center justify-end px-2`}
              style={{ width: `${tension}%` }}
            >
              <div className="w-1.5 h-4 bg-white/40 rounded-full mix-blend-overlay" />
            </div>
            {/* Marques de repères */}
            <div className="absolute inset-0 flex justify-between px-1 items-center pointer-events-none">
              <div className="w-px h-2 bg-white/20" />
              <div className="w-px h-2 bg-white/20" />
              <div className="w-px h-2 bg-white/20" />
              <div className="w-px h-2 bg-white/20" />
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className={`text-xl font-black uppercase tracking-widest ${config.color} drop-shadow-md`}>
              {config.label}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/20 p-4 rounded-xl relative z-10 flex flex-col items-center">
          <p className="text-xs text-zinc-300 text-center mb-3">L'Espagne égalise dans le temps additionnel ?</p>
          <div className="text-2xl font-black text-white mb-3">Cote : 3.40</div>
          <button className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-4 rounded-lg flex justify-between items-center transition-all group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]">
            <span>Parier le Pire (ou le Meilleur)</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-80"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
        
      </div>
    </div>
  );
}
