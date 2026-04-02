"use client";

import React, { useState } from 'react';
import { Info, X, Target, Zap, ShieldAlert, Rocket } from 'lucide-react';

export default function PitchModal({ title, adn, why, swot, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-4 right-4 z-50 w-8 h-8 md:w-10 md:h-10 bg-zinc-800/80 backdrop-blur border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700/80 transition-all hover:scale-110 shadow-lg"
        title="Aide à la décision / Pitch Client"
      >
        <Info size={18} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)}
          />
          
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200">
            
            <div className="sticky top-0 bg-zinc-900/90 backdrop-blur-md px-6 py-4 border-b border-white/5 flex justify-between items-center z-10">
              <h3 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
                <span className="text-red-500">Business Case :</span> {title}
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-8 font-sans text-sm md:text-base">
              
              {/* L'ADN */}
              <section>
                <h4 className="flex items-center gap-2 font-bold text-zinc-200 mb-3 uppercase text-xs tracking-widest border-b border-white/5 pb-2">
                  <Target size={16} className="text-red-500" /> L'ADN du Module
                </h4>
                <p className="text-zinc-400 leading-relaxed pl-6">{adn}</p>
              </section>

              {/* Le Pourquoi */}
              <section>
                <h4 className="flex items-center gap-2 font-bold text-zinc-200 mb-3 uppercase text-xs tracking-widest border-b border-white/5 pb-2">
                  <Zap size={16} className="text-yellow-500" /> Pourquoi le faire ?
                </h4>
                <p className="text-zinc-400 leading-relaxed pl-6">{why}</p>
              </section>

              {/* SWOT */}
              <section className="bg-zinc-800/30 rounded-xl p-5 border border-white/5">
                <h4 className="flex items-center gap-2 font-bold text-white mb-4 uppercase text-xs tracking-widest">
                  <ShieldAlert size={16} className="text-blue-500" /> Analyse SWOT
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-950/30 p-4 rounded-lg border border-emerald-500/20">
                    <h5 className="font-bold text-emerald-500 mb-2 text-xs uppercase tracking-wide">Forces (Strengths)</h5>
                    <ul className="list-disc list-inside text-zinc-300 space-y-1 text-sm">
                      {swot.s.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="bg-red-950/30 p-4 rounded-lg border border-red-500/20">
                    <h5 className="font-bold text-red-500 mb-2 text-xs uppercase tracking-wide">Faiblesses (Weaknesses)</h5>
                    <ul className="list-disc list-inside text-zinc-300 space-y-1 text-sm">
                      {swot.w.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="bg-blue-950/30 p-4 rounded-lg border border-blue-500/20">
                    <h5 className="font-bold text-blue-500 mb-2 text-xs uppercase tracking-wide">Opportunités (Opportunities)</h5>
                    <ul className="list-disc list-inside text-zinc-300 space-y-1 text-sm">
                      {swot.o.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="bg-orange-950/30 p-4 rounded-lg border border-orange-500/20">
                    <h5 className="font-bold text-orange-500 mb-2 text-xs uppercase tracking-wide">Menaces (Threats)</h5>
                    <ul className="list-disc list-inside text-zinc-300 space-y-1 text-sm">
                      {swot.t.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Scalabilité */}
              <section className="bg-red-600/10 p-4 rounded-xl border border-red-600/20">
                <h4 className="flex items-center gap-2 font-bold text-red-500 mb-2 uppercase text-xs tracking-widest">
                  <Rocket size={16} /> Modèle d'Intégration Standard
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Conçu en "Lightweight React Component", déployable via une simple iframes `{'<iframe>'}` chez vos affiliés média, 
                  sans aucun impact négatif sur leur SEO ou leur temps de chargement.
                </p>
              </section>

              {/* Custom Additional Content */}
              {children && (
                <div className="mt-8 space-y-8">
                  {children}
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}
