"use client";

import React, { useState } from 'react';
import PitchModal from '../../components/PitchModal';
import { Sparkles, Loader2, Share2, Download } from 'lucide-react';

export default function UneDuFutur() {
  const [scenario, setScenario] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!scenario) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
    }, 2000); // Simulate AI Generation time
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-transparent sm:bg-black/80 p-4 font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[100px] pointer-events-none rounded-full" />

      <PitchModal 
        title="La Une du Futur"
        adn="Le summum de l'User Generated Content (UGC). Confier la création du contenu à l'utilisateur via l'intelligence artificielle pour maximiser sa fierté."
        why="Créer une boucle virale. L'utilisateur crée 'son' image historique et meurt d'envie de la partager sur X ou Instagram. Le bouton 'Parier' draine le trafic affilié vers Winamax."
        swot={{
          s: ["Viralité intrinsèque massive", "Hyper-personnalisation", "Exploite la hype de l'IA générative"],
          w: ["Dépendance à la modération (filtres anti-insultes nécessaires pour l'IA)"],
          o: ["Fonctionnalité parfaite pour les 'threads' Twitter", "Lien évident avec la 'Cote Demandée' sur Twitter"],
          t: ["Coût d'API de génération d'images à anticiper si succès massif"]
        }}
      />
      
      {!generated ? (
        <div className="w-full max-w-xl bg-zinc-950/80 backdrop-blur-2xl text-white p-8 md:p-10 rounded-[32px] border border-white/10 shadow-2xl relative z-10 transition-all">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-4 bg-zinc-900 rounded-full border border-white/5 shadow-inner mb-6 relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur animate-pulse" />
              <Sparkles className="text-cyan-400 relative z-10" size={28} />
            </div>
            <h2 className="text-4xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 tracking-tight">Le Multivers Winamax</h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Décris le scénario le plus improbable de tes rêves et l'IA génèrera la Une du journal de demain.
            </p>
          </div>

          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="relative">
              <textarea 
                value={scenario}
                onChange={(e) => setScenario(e.target.value)}
                placeholder="Ex: Doublé de Giroud (à 39 ans !) en finale contre le Brésil..."
                className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl p-5 text-white placeholder-zinc-600 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-medium"
              />
              <div className="absolute bottom-4 right-4 text-xs font-mono text-zinc-500">
                {scenario.length}/120
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isGenerating || !scenario}
              className={`w-full relative overflow-hidden bg-white text-black font-black py-4 px-6 rounded-xl flex justify-center items-center gap-3 transition-transform ${isGenerating || !scenario ? 'opacity-80 cursor-not-allowed' : 'hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]'}`}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="animate-spin text-black" />
                  Génération en cours...
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  Générer mon Multivers
                </>
              )}
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full max-w-md animate-in slide-in-from-bottom-8 fade-in duration-700 relative z-10">
          
          {/* La Fausse Une Générée */}
          <div className="bg-white rounded-t-lg overflow-hidden shadow-2xl relative border-8 border-white group">
            <div className="bg-red-700 text-white text-center py-2 font-black italic tracking-widest uppercase border-b-4 border-black">
              L'Équipe du Futur
            </div>
            <div className="relative h-64 md:h-80 w-full bg-[url('https://images.unsplash.com/photo-1522778119026-d64771473fa0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h1 className="text-white font-black text-3xl md:text-4xl uppercase leading-none tracking-tighter mb-2 drop-shadow-lg">
                  {scenario || "L'INCROYABLE EXPLOIT"}
                </h1>
                <p className="text-yellow-400 font-bold uppercase text-sm tracking-widest drop-shadow">
                  Le monde n'était pas prêt.
                </p>
              </div>
            </div>
          </div>

          {/* Bandeau d'action Winamax */}
          <div className="bg-zinc-900 border-x border-b border-zinc-800 rounded-b-lg p-5">
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-400 text-xs font-medium uppercase tracking-wider">Cote Initiale estimée</span>
              <span className="bg-yellow-500/10 text-yellow-500 font-black px-3 py-1 rounded text-xl border border-yellow-500/20">250.00</span>
            </div>
            
            <div className="flex gap-3">
              <button className="flex-1 bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-md uppercase text-sm transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                Parier sur l'histoire
              </button>
              <button className="w-12 h-12 bg-white/5 border border-white/10 hover:bg-white/10 rounded-md flex items-center justify-center text-white transition-colors" title="Partager sur X">
                <Share2 size={18} />
              </button>
              <button 
                onClick={() => {setGenerated(false); setScenario('');}}
                className="w-12 h-12 bg-white/5 border border-white/10 hover:bg-white/10 rounded-md flex items-center justify-center text-white transition-colors" 
                title="Refaire une Une"
              >
                <Download size={18} />
              </button>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}
