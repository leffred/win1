"use client";

import React, { useState, useEffect } from 'react';
import PitchModal from '../../components/PitchModal';
import { Snowflake, Activity, RefreshCcw, ShieldCheck } from 'lucide-react';

export default function ThermometreClim() {
  const [climLevel, setClimLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setClimLevel(84), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-transparent sm:bg-black/90 p-4 font-sans relative">
      {/* Background FX */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-900/20 via-black to-black" />
      
      <PitchModal 
        title="Thermomètre de la Clim"
        adn="Le pari basé sur la Data Sociale. On ne vend plus l'expertise sportive, on vend le sentiment du web et la protection contre le 'seum'."
        why="L'utilisateur n'est plus seul face à son match, il est connecté au 'pouls' des réseaux. Le Cashout / Pari 'Safe' devient un achat compulsif de rassurance."
        swot={{
          s: ["Tonalité ultra native (Le Seum, La Clim, formats rois de Twitter)", "Ancre Winamax comme LA marque de la pop-culture foot"],
          w: ["Dépendance aux datas (Twitter API) pour être crédible"],
          o: ["Sponsorisation des émissions de débriefing (ex: L'Équipe du Soir) avec l'Indice Clim"],
          t: ["Le terme 'Clim' est fort, mais peut nécessiter une explication pour un public moins jeune"]
        }}
      />

      <div className="w-full max-w-sm bg-zinc-950/90 text-white p-6 rounded-3xl border border-sky-500/20 shadow-[0_0_50px_rgba(14,165,233,0.1)] relative overflow-hidden backdrop-blur-xl">
        
        {/* Header Social */}
        <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <Activity className="text-sky-400 animate-pulse" size={18} />
            <span className="text-[10px] font-black tracking-widest uppercase text-sky-400">Social Scan Live</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-zinc-500 font-mono">
            <RefreshCcw size={10} /> Mis à jour
          </div>
        </div>

        {/* Content */}
        <div className="text-center relative z-10 mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-sky-950 rounded-full border border-sky-500/30 mb-4 shadow-[0_0_20px_rgba(14,165,233,0.2)]">
            <Snowflake className="text-sky-400" size={32} />
          </div>
          <h2 className="text-2xl font-black mb-1">Risque de Clim'</h2>
          <p className="text-zinc-400 text-sm">France - Argentine</p>
        </div>

        {/* Gauge */}
        <div className="relative flex justify-center items-center mb-6">
          {/* Circular progress simulated with a large text for MVP simplicity and impact */}
          <div className="relative w-40 h-40 flex items-center justify-center bg-zinc-900 rounded-full border-4 border-zinc-800 shadow-inner">
            <div className="absolute inset-0 rounded-full border-4 border-sky-400 border-t-transparent border-l-transparent rotate-45 transition-all duration-1000 ease-out" 
                 style={{ transform: `rotate(${climLevel * 2.6}deg)` }} />
            <div className="text-center">
              <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-sky-300 to-blue-600 drop-shadow-md">
                {climLevel}%
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mb-8 px-2">
          <p className="text-sm font-medium text-zinc-300 bg-sky-950/30 border border-sky-900/50 p-3 rounded-lg leading-relaxed">
            L'algorithme détecte une confiance excessive chez les Bleus basées sur <span className="text-sky-400 font-bold">15 423 tweets</span> argentins très virulents.
          </p>
        </div>

        {/* CTA */}
        <button className="w-full relative overflow-hidden group bg-sky-600 hover:bg-sky-500 text-white font-black py-4 px-4 rounded-xl flex justify-center items-center gap-2 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)]">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          <ShieldCheck size={20} />
          <span>Assurer ma soirée (Cashout)</span>
        </button>
      </div>
    </div>
  );
}
