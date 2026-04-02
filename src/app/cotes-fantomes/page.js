"use client";

import React, { useState } from 'react';
import PitchModal from '../../components/PitchModal';

export default function CotesFantomes() {
  const [hoverKey, setHoverKey] = useState(null);

  const Tooltip = ({ id, cote, text, children }) => (
    <span 
      className="relative inline-block cursor-help group"
      onMouseEnter={() => setHoverKey(id)}
      onMouseLeave={() => setHoverKey(null)}
    >
      <span className="border-b-2 border-red-500/50 border-dotted text-red-100 group-hover:text-white transition-colors">{children}</span>
      
      {/* Floating Winamax Tooltip */}
      {hoverKey === id && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] bg-zinc-900 border border-red-500/30 text-white rounded-lg shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-2 duration-200 overflow-hidden">
          <span className="block bg-red-600 text-center text-[10px] font-black uppercase tracking-widest py-1">Winamax</span>
          <span className="block p-3">
            <span className="block text-xs text-zinc-300 mb-2 leading-tight">{text}</span>
            <button className="w-full bg-white/10 hover:bg-white/20 border border-white/5 font-bold text-white py-1.5 rounded text-sm transition-colors flex justify-between px-3 items-center">
              <span>Cote</span>
              <span className="text-yellow-400 font-black">{cote}</span>
            </button>
          </span>
          {/* Arrow */}
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 border-b border-r border-red-500/30 rotate-45" />
        </span>
      )}
    </span>
  );

  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] text-zinc-900 font-serif relative">
      <PitchModal 
        title="Les Cotes Fantômes"
        adn="Le futur de l'affiliation : zéro bannière pub. L'intégration se fait via de discrets liens contextuels insérés sémantiquement dans le contenu."
        why="L'utilisateur est devenu aveugle aux bannières ('Banner Blindness'). Attraper son attention au moment exact où il lit le mot-clé génère un taux de conversion massif."
        swot={{
          s: ["Intégration la plus 'native' possible", "Zéro pollution visuelle pour le média", "Taux de clic (CTR) décuplé par le contexte"],
          w: ["Discrétion qui peut limiter le volume global d'impressions publicitaires par article"],
          o: ["Scan IA des articles affiliés pour poser les tags automatiquement sur les mots chauds"],
          t: ["Certains médias stricts refusent la modification de leur texte éditorial"]
        }}
      />

      <div className="max-w-2xl mx-auto py-24 px-6 relative">
        <p className="font-sans text-xs font-bold text-red-600 uppercase tracking-widest mb-6 border-b-2 border-red-600 inline-block pb-1">Analyse Tactique</p>
        
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
          Pourquoi la France a toutes les cartes en main pour dominer l'Europe.
        </h1>
        
        <div className="font-sans flex items-center justify-between border-y border-zinc-200 py-4 mb-10 text-sm text-zinc-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-200 rounded-full" />
            <div>
              <p className="font-bold text-zinc-800">Par Rédacteur Expert</p>
              <p>Publié il y a 2 heures</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full border border-zinc-200 flex justify-center items-center">🔗</div>
          </div>
        </div>

        <div className="prose prose-lg text-zinc-700 leading-relaxed font-serif">
          <p className="mb-6">
            La dynamique s'inverse. Après des mois d'incertitudes, l'Équipe de France retrouve enfin son identité de jeu. Et au cœur de cette renaissance, un homme concentre toutes les attentions.
          </p>
          <p className="mb-6">
            <Tooltip id="mbappe" cote="3.50" text="Mbappé marque le premier but ce soir ?">
              Kylian Mbappé
            </Tooltip> semble avoir retrouvé son explosivité sur les premiers mètres. Hier à l'entraînement, il a enchaîné les frappes avec une précision chirurgicale, un signal fort envoyé avant le choc de ce soir.
          </p>
          <p className="mb-6">
            Mais la vraie surprise pourrait venir du flanc droit. Le coach devrait tenter un coup de poker offensif pour déstabiliser un bloc défensif adverse réputé très bas. Ce schéma pourrait ouvrir la porte à de nombreuses opportunités sur <Tooltip id="cf" cote="12.00" text="La France marque sur coup franc direct ?">coup franc direct</Tooltip> à l'entrée de la surface.
          </p>
          <p className="mb-6">
            Dans ce contexte, s'attendre à <Tooltip id="score" cote="8.50" text="Score exact France 3 - 0 ?">une victoire éclatante</Tooltip> n'est plus une simple utopie de supporter, mais bien l'issue la plus logique d'un système enfin maîtrisé.
          </p>
        </div>

      </div>
    </div>
  );
}
