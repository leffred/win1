"use client";

import React, { useState, useEffect } from 'react';

const teams = {
  groupA: [
    { id: 'fra', name: 'France', strength: 0.85, flag: '🇫🇷' },
    { id: 'mar', name: 'Maroc', strength: 0.60, flag: '🇲🇦' }
  ],
  groupB: [
    { id: 'bra', name: 'Brésil', strength: 0.88, flag: '🇧🇷' },
    { id: 'usa', name: 'USA', strength: 0.55, flag: '🇺🇸' }
  ]
};

export default function SimulatorWidget() {
  const [results, setResults] = useState({ groupA: 'fra', groupB: 'bra' });
  const [prob, setProb] = useState(12.4);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    setIsUpdating(true);
    const timeout = setTimeout(() => {
      const newProb = (Math.random() * (15 - 2) + 2).toFixed(1);
      setProb(newProb);
      setIsUpdating(false);
    }, 400); // 400ms simulate calculating odds
    return () => clearTimeout(timeout);
  }, [results]);

  const toggleWinner = (group, teamId) => {
    if (results[group] !== teamId) {
      setResults(prev => ({ ...prev, [group]: teamId }));
    }
  };

  const getTeamName = (group, id) => teams[group].find(t => t.id === id)?.name;
  const getTeamFlag = (group, id) => teams[group].find(t => t.id === id)?.flag;

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-transparent sm:bg-black/40 p-4 font-sans">
      <div className="w-full max-w-md bg-gradient-to-b from-zinc-900 to-black text-white p-6 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden backdrop-blur-md">
        
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-red-600/20 blur-[60px] pointer-events-none rounded-full" />

        {/* Header Winamax */}
        <div className="relative flex justify-between items-center mb-8 pb-4 border-b border-white/10">
          <span className="bg-red-600 px-3 py-1 font-black italic uppercase text-sm tracking-wide rounded shadow-md shadow-red-600/20">Winamax</span>
          <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-medium font-mono">Destins • CDM 2026</h2>
        </div>

        {/* Group Selection */}
        <div className="space-y-5 relative">
          {Object.entries(teams).map(([group, list]) => (
            <div key={group} className="bg-zinc-800/40 p-1.5 rounded-xl border border-white/5 shadow-inner">
              <div className="flex px-3 pb-2 pt-2 items-center justify-between">
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{group === 'groupA' ? 'Groupe A' : 'Groupe B'}</p>
                <p className="text-[10px] text-zinc-500 font-medium">Vainqueur</p>
              </div>
              <div className="flex gap-2">
                {list.map(team => {
                  const isSelected = results[group] === team.id;
                  return (
                    <button
                      key={team.id}
                      onClick={() => toggleWinner(group, team.id)}
                      className={`relative flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform outline-none focus:ring-2 focus:ring-red-500/50 ${
                        isSelected 
                          ? 'bg-red-600 text-white font-bold shadow-[0_0_20px_rgba(220,38,38,0.4)] scale-[1.02]' 
                          : 'bg-zinc-800/80 text-zinc-400 hover:bg-zinc-700/80 hover:text-zinc-200'
                      }`}
                    >
                      <span className="text-xl drop-shadow-md">{team.flag}</span>
                      <span>{team.name}</span>
                      {isSelected && (
                        <div className="absolute inset-0 border border-white/20 rounded-lg pointer-events-none" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Projection Bracket */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center relative">
          <p className="text-xs text-zinc-400/80 uppercase tracking-widest font-medium mb-4">Affiche des 8èmes</p>
          <div className="flex justify-center items-center gap-6 mt-2 relative">
            
            <div className="flex flex-col items-center gap-1 z-10">
              <span className="text-3xl drop-shadow-lg">{getTeamFlag('groupA', results.groupA)}</span>
              <span className="font-bold text-lg">{getTeamName('groupA', results.groupA)}</span>
            </div>
            
            <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 border border-white/10 shadow-xl">
              <span className="text-red-500 font-black italic text-sm">VS</span>
            </div>
            
            <div className="flex flex-col items-center gap-1 z-10">
              <span className="text-3xl drop-shadow-lg">{getTeamFlag('groupB', results.groupB)}</span>
              <span className="font-bold text-lg">{getTeamName('groupB', results.groupB)}</span>
            </div>

            {/* Connecting lines for bracket effect */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent -z-10" />
          </div>
        </div>

        {/* CTA Winamax */}
        <div className="mt-8 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 p-5 rounded-xl flex flex-col items-center shadow-lg relative overflow-hidden group hover:border-red-500/30 transition-colors duration-500">
          <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <p className="text-xs uppercase text-zinc-400 tracking-wider font-semibold z-10">La cote Winamax</p>
          <div className="mt-1 h-12 flex items-center justify-center z-10">
            <span className={`text-4xl font-black text-white ${isUpdating ? 'animate-pulse opacity-50 blur-[2px]' : 'opacity-100 blur-0'} transition-all duration-300`}>
              {prob}
            </span>
          </div>
          <button className="relative overflow-hidden mt-4 w-full bg-red-600 hover:bg-red-500 text-white font-black py-3.5 rounded-lg uppercase tracking-wide transition-all transform active:scale-95 shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] hover:-translate-y-0.5 z-10">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Parier sur cette affiche
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
