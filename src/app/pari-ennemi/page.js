"use client";

import React, { useState, useEffect } from 'react';
import PitchModal from '../../components/PitchModal';
import { Skull, TrendingDown, Target } from 'lucide-react';

export default function PariEnnemi() {
  const [enemyBets, setEnemyBets] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setEnemyBets(82), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-zinc-950 p-4 font-sans relative">
      <PitchModal 
        title="Le Pari de ton Ennemi"
        adn="La psychologie inversée et le levier identitaire. On ne vend pas un pari pour gagner de l'argent de façon rationnelle, on vend une défense de l'honneur."
        why="Piquer l'orgueil de l'utilisateur. Rien ne motive plus un fan français que de voir l'arrogance anglaise (ou l'inverse). La conversion est drivée par l'ego."
        swot={{
          s: ["Levier émotionnel ultra-puissant (Rivalité sportive)", "Design radical et très immersif"],
          w: ["Cible uniquement les matchs à très forte charge émotionnelle (ex: France-Argentine, PSG-OM)"],
          o: ["S'associer avec le ton provoquant historique des campagnes Winamax"],
          t: ["Frustration de l'utilisateur si son pari 'd'honneur' est perdant"]
        }}
      />

      <div className="w-full max-w-md bg-black text-white p-1 rounded-3xl relative overflow-hidden shadow-2xl">
        {/* Animated Warning Border */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-black to-red-900 opacity-50 animate-[pulse_3s_ease-in-out_infinite]" />
        
        <div className="relative bg-zinc-950 rounded-[22px] p-6 lg:p-8 border border-white/10 h-full backdrop-blur-xl">
          
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-red-950/50 border border-red-500/30 flex justify-center items-center backdrop-blur shadow-[0_0_30px_rgba(220,38,38,0.3)]">
              <Skull className="text-red-500" size={32} />
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-2 border-b-2 border-red-500/30 inline-block pb-1">Intelligence Adversaire</h2>
            <p className="text-2xl md:text-3xl font-black mt-2 leading-tight">
              Ce que les Anglais prévoient pour ce match :
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Target size={64} />
            </div>
            
            <p className="text-lg font-bold text-white mb-2">Victoire de H. Kane et de l'Angleterre</p>
            
            <div className="flex items-end gap-2 mb-3">
              <span className="text-4xl font-black text-red-500">
                {enemyBets}%
              </span>
              <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-1">de leurs mises</span>
            </div>

            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-red-600 transition-all duration-1000 ease-out"
                style={{ width: `${enemyBets}%` }}
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-zinc-400 text-sm mb-4 font-medium italic">Ils pensent vraiment que ça va être une balade...</p>
            <button className="w-full relative overflow-hidden group bg-white text-black font-black py-4 px-4 rounded-xl flex justify-center items-center transition-all hover:scale-[1.02] active:scale-[0.98]">
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Montre-leur qui est le patron (Cote 2.80)
              </span>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
