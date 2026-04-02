"use client";

import React, { useState } from 'react';
import PitchModal from '../../components/PitchModal';
import { Swords, Check } from 'lucide-react';

export default function ChoisisTonCamp() {
  const [voted, setVoted] = useState(null);

  const scenarios = [
    {
      id: 'a',
      title: 'Triplé de Mbappé MAIS match nul à la fin',
      cote: 12.0,
      color: 'blue',
      bgVoted: 'bg-blue-600',
      bgDefault: 'bg-blue-900/40 hover:bg-blue-800/60',
      percent: 68
    },
    {
      id: 'b',
      title: 'Victoire 1-0 éclatée à la 94ème sur CSC',
      cote: 5.5,
      color: 'red',
      bgVoted: 'bg-red-600',
      bgDefault: 'bg-red-900/40 hover:bg-red-800/60',
      percent: 32
    }
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-transparent sm:bg-black/40 p-4 font-sans relative">
      <PitchModal 
        title="Choisis Ton Camp"
        adn="Divertissement, débat et interactivité. Transformer l'opinion du lecteur en cote."
        why="L'éducation douce au pari. L'utilisateur interagit pour donner son avis, et la récompense visuelle est associée à une cote Winamax."
        swot={{
          s: ["Engagement extrêmement fort (Sondage = clic facile)", "Format exportable sur Twitter/Telegram/Discord"],
          w: ["Nécessite une bonne rédaction éditoriale pour accrocher l'utilisateur"],
          o: ["S'intègre dans tous les formats éditoriaux 'Chauds' (Avant-match)"],
          t: ["Risque de cannibalisation si trop de sondages sur la même page"]
        }}
      />
      
      <div className="w-full max-w-lg bg-zinc-950 text-white p-6 md:p-8 rounded-[24px] border border-zinc-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-zinc-900 rounded-full border border-white/10 mb-4 shadow-inner">
            <Swords className="text-zinc-400" size={24} />
          </div>
          <h2 className="text-2xl font-black mb-2 uppercase tracking-tight">Pour ce soir, tu préfères ?</h2>
          <p className="text-zinc-500 text-sm">Fais ton choix pour voir l'avis de la communauté.</p>
        </div>

        <div className="flex flex-col gap-4 relative z-10">
          {scenarios.map((scen) => {
            const isSelected = voted === scen.id;
            const isVotedState = voted !== null;
            
            return (
              <button
                key={scen.id}
                onClick={() => !voted && setVoted(scen.id)}
                disabled={isVotedState}
                className={`relative overflow-hidden w-full rounded-2xl p-6 text-left transition-all duration-500 border border-white/5 
                  ${isVotedState 
                    ? isSelected ? scen.bgVoted : 'bg-zinc-900/50 opacity-60'
                    : scen.bgDefault
                  }
                `}
              >
                {/* Jauge de remplissage si voté */}
                {isVotedState && (
                  <div 
                    className="absolute inset-0 bg-white/10 transition-all duration-1000 ease-in-out" 
                    style={{ width: `${scen.percent}%` }}
                  />
                )}

                <div className="relative z-10 flex justify-between items-center gap-4">
                  <div className="flex-1">
                    <h3 className={`font-bold text-lg md:text-xl leading-tight mb-2 ${isSelected ? 'text-white' : 'text-zinc-200'}`}>
                      {scen.title}
                    </h3>
                    {!isVotedState && (
                      <span className="inline-flex bg-black/40 px-2 py-1 rounded text-sm font-black text-yellow-400">
                        Cote : {scen.cote}
                      </span>
                    )}
                  </div>
                  
                  {isVotedState ? (
                    <div className="text-right flex flex-col items-end justify-center">
                      <span className="text-3xl font-black">{scen.percent}%</span>
                      {isSelected && <Check className="text-white mt-1" size={20} />}
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0">
                      <div className="w-4 h-4 rounded-full bg-transparent group-hover:bg-white/50" />
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {voted && (
          <div className="mt-8 animate-in slide-in-from-bottom pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-zinc-400 mb-3">Tu y crois vraiment ?</p>
            <button className="bg-red-600 hover:bg-red-500 text-white font-black py-3 px-8 rounded-full uppercase tracking-wide transition-all hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
              Valider ce pari (Cote {scenarios.find(s => s.id === voted).cote})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
