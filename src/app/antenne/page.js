"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, PlayCircle, MessageSquare, TrendingUp, Trophy, CalendarClock, Play, Share2, Heart, MessageCircle } from 'lucide-react';
import PitchModal from '@/components/PitchModal';

export default function AntenneWinamax() {
  const [activeTab, setActiveTab] = useState('feed');

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans overflow-x-hidden selection:bg-yellow-500/30">
      
      {/* 
        This is the "Affiliate wrapper" context to show that Winamax is inside 
        a partner website (like Eurosport / SoFoot)
      */}
      <div className="bg-white text-black p-2 md:p-4 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between opacity-50">
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              <ArrowLeft size={20} />
            </Link>
            <div className="h-6 w-32 bg-zinc-200 rounded animate-pulse" />
          </div>
          <div className="hidden md:flex gap-4">
            <div className="h-4 w-16 bg-zinc-200 rounded" />
            <div className="h-4 w-16 bg-zinc-200 rounded" />
            <div className="h-4 w-16 bg-zinc-200 rounded" />
          </div>
        </div>
      </div>

      <PitchModal 
        title="La Box Digitale : L'Antenne Winamax"
        adn="Un hub immersif 'plug & play' hébergé par Winamax mais encapsulé sur les sites médias partenaires. C'est le point de rassemblement quotidien des audiences pendant un grand événement (CDM 2026)."
        why="Pour ne plus seulement acheter de l'espace publicitaire classique, mais distribuer l'expertise et la production de contenu Winamax (Winamax TV, Shorts, Data) directement là où se trouve l'audience, tout en s'appropriant le temps de cerveau disponible."
        swot={{
          s: ["Déploiement technique instantané (1 script JS).", "Valorise les lourds investissements de production de Winamax TV.", "Rétention et temps passé énormes."],
          w: ["Dépendance aux accords avec les publishers.", "Complexité de synchroniser le flux en live parfait."],
          o: ["Ouvrir 100 antennes sur 100 sites d'influenceurs ou médias différents avec le même effort.", "Créer des Ligues d'Affiliés génératrices de leads (FTD)."],
          t: ["Les médias peuvent refuser de perdre le contrôle éditorial de leur page.", "Régulation ARJEL sur la poussée agressive de cotes hors plateforme."]
        }}
      />

      {/* --- START OF WINAMAX WIDGET --- */}
      <main className="max-w-4xl mx-auto my-8 bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(202,138,4,0.15)] border border-yellow-900/30 relative">
        
        {/* Glow effect */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />

        {/* 1. Header Live */}
        <header className="bg-zinc-900 border-b border-white/5 p-4 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 z-40 backdrop-blur-xl bg-black/80">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-red-600 shadow-lg border border-white/10">
              <span className="text-white font-black text-xl italic tracking-tighter">W</span>
            </div>
            <div>
              <h1 className="font-black text-lg tracking-tight uppercase leading-none">L'Antenne</h1>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest">En Direct</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
            {/* Live Score Ticker */}
            <div className="flex items-center gap-3 bg-zinc-800/50 rounded-lg px-4 py-2 border border-white/5 whitespace-nowrap">
              <span className="text-sm font-bold opacity-70">FRA</span>
              <span className="text-lg font-black text-yellow-500">2 - 0</span>
              <span className="text-sm font-bold opacity-70">ALL</span>
              <div className="h-4 w-px bg-white/10 mx-1" />
              <div className="flex gap-1.5 text-xs font-mono font-bold">
                <span className="bg-zinc-700 px-1.5 py-0.5 rounded text-white hover:bg-yellow-600 transition-colors cursor-pointer border border-transparent hover:border-yellow-500/50">1.15</span>
                <span className="bg-zinc-700 px-1.5 py-0.5 rounded text-white hover:bg-yellow-600 transition-colors cursor-pointer border border-transparent hover:border-yellow-500/50">4.50</span>
                <span className="bg-zinc-700 px-1.5 py-0.5 rounded text-white hover:bg-yellow-600 transition-colors cursor-pointer border border-transparent hover:border-yellow-500/50">12.0</span>
              </div>
            </div>
          </div>
        </header>

        {/* 2. Main Stage (Video) */}
        <section className="relative aspect-[16/9] md:aspect-[21/9] bg-zinc-950 overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black mix-blend-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/20 via-transparent to-transparent opacity-50" />
          
          {/* Mock Video UI */}
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="flex justify-between items-start">
              <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-white border border-white/10 flex items-center gap-2">
                <TrendingUp size={14} className="text-yellow-500" />
                L'Émission du Soir
              </span>
              <span className="bg-red-600 text-white px-2 py-0.5 rounded text-xs font-black uppercase tracking-widest animate-pulse">Live</span>
            </div>
            
            <div className="text-center group-hover:scale-105 transition-transform duration-500 ease-out">
              <button className="w-16 h-16 md:w-20 md:h-20 bg-yellow-500/90 text-black rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(234,179,8,0.4)] backdrop-blur-sm border-2 border-yellow-400 group-hover:bg-yellow-400 transition-colors">
                <Play fill="currentColor" size={32} className="ml-1" />
              </button>
            </div>
            
            <div className="translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-black text-white drop-shadow-lg tracking-tight">Le Debrief d'Après-Match</h2>
              <p className="text-zinc-300 text-sm md:text-base font-light max-w-lg mt-1 drop-shadow">Walid et Polo décryptent la qualification de l'Équipe de France. Vos questions en direct.</p>
            </div>
          </div>
          
          {/* Progress Bar Mock */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-zinc-800">
            <div className="h-full bg-red-600 w-1/3 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
        </section>

        {/* 3. Navigation Tabs */}
        <div className="flex border-b border-white/5 px-2 bg-zinc-900/50 overflow-x-auto scrollbar-hide shrink-0">
          <button 
            onClick={() => setActiveTab('feed')}
            className={`whitespace-nowrap px-6 py-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors ${activeTab === 'feed' ? 'border-yellow-500 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
          >
            Le Feed Social
          </button>
          <button 
            onClick={() => setActiveTab('agenda')}
            className={`whitespace-nowrap px-6 py-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'agenda' ? 'border-yellow-500 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
          >
            Le Programme
          </button>
          <button 
            onClick={() => setActiveTab('ligue')}
            className={`whitespace-nowrap px-6 py-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'ligue' ? 'border-amber-500 text-amber-500' : 'border-transparent text-amber-900 hover:text-amber-700'}`}
          >
            <Trophy size={16} /> Ta Ligue
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 md:p-6 min-h-[400px]">
          
          {/* Tab: FEED SOCIAL & DATA */}
          {activeTab === 'feed' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              {/* Short Component */}
              <div className="flex gap-4 p-4 bg-zinc-900/80 rounded-2xl border border-white/5 hover:bg-zinc-800/80 transition-colors shadow-inner">
                <div className="w-24 h-32 md:w-32 md:h-40 bg-zinc-800 rounded-xl relative overflow-hidden flex-shrink-0 group cursor-pointer border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <PlayCircle size={24} className="absolute inset-0 m-auto z-20 text-white opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all" />
                  <div className="absolute bottom-2 left-2 z-20 flex items-center gap-1">
                    <div className="w-1.5 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-4 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '100ms' }} />
                    <div className="w-1.5 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-black text-yellow-500 tracking-widest uppercase mb-1 drop-shadow">Short Débrief</span>
                  <h3 className="font-bold text-lg md:text-xl leading-tight mb-2">"Il a cassé des reins toute la soirée..."</h3>
                  <p className="text-sm text-zinc-400 line-clamp-2">Le résumé express de la performance hors-norme du numéro 10 argentin en moins de 60 secondes.</p>
                  <div className="flex gap-4 mt-3 text-zinc-500">
                    <button className="flex items-center gap-1.5 text-xs hover:text-red-400 transition-colors font-medium"><Heart size={14}/> 4.2k</button>
                    <button className="flex items-center gap-1.5 text-xs hover:text-white transition-colors font-medium"><MessageCircle size={14}/> 128</button>
                  </div>
                </div>
              </div>

              {/* Poll / Thermometer Mock */}
              <div className="p-5 bg-gradient-to-br from-sky-950 to-zinc-950 rounded-2xl border border-sky-500/20 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <MessageSquare size={100} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-widest mb-4 border-b border-sky-500/20 pb-2">
                    <MessageSquare size={16} /> Le Thermomètre de la Mi-Temps
                  </div>
                  <h3 className="text-xl font-bold mb-4 leading-tight">Va-t-on assister à une masterclass ou une clim monumentale ce soir ?</h3>
                  <div className="space-y-3">
                    <div className="relative h-12 bg-zinc-900 rounded-xl overflow-hidden flex items-center px-4 cursor-pointer hover:border-white/20 border border-white/5 transition-colors group">
                      <div className="absolute inset-y-0 left-0 bg-blue-600/30 w-[78%] group-hover:bg-blue-600/40 transition-colors" />
                      <span className="relative z-10 font-bold">L'Équipe va retourner le match !</span>
                      <span className="relative z-10 ml-auto font-black text-blue-400 drop-shadow">78%</span>
                    </div>
                    <div className="relative h-12 bg-zinc-900 rounded-xl overflow-hidden flex items-center px-4 cursor-pointer hover:border-white/20 border border-white/5 transition-colors group">
                      <div className="absolute inset-y-0 left-0 bg-sky-400/20 w-[22%] group-hover:bg-sky-400/30 transition-colors" />
                      <span className="relative z-10 font-bold text-zinc-300">Clim totale assurée.</span>
                      <span className="relative z-10 ml-auto font-black text-sky-400 opacity-80">22%</span>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-xs text-zinc-500 font-mono tracking-wider">23,450 VOTES</span>
                    <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg text-sm font-black uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg">
                      Voir les cotes
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Tab: AGENDA / PROGRAMME */}
          {activeTab === 'agenda' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 p-2 md:p-4">
              <h3 className="font-black text-2xl mb-8 flex items-center gap-3 tracking-tight">
                <CalendarClock className="text-yellow-500" />
                24h dans l'Antenne
              </h3>
              
              <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-6 space-y-10 pb-4">
                
                {/* Event 1 */}
                <div className="relative pl-8 md:pl-10">
                  <div className="absolute w-4 h-4 bg-zinc-700 rounded-full -left-[9px] top-1.5 ring-4 ring-black border-2 border-zinc-900" />
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="text-yellow-500 font-mono font-black text-lg">08:30</span>
                    <span className="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider w-fit border border-zinc-700">Format Court</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white">Le Petit Déj' Débrief</h4>
                  <p className="text-zinc-400 text-sm mt-1 max-w-xl leading-relaxed">T'as dormi ? Voilà tout ce qu'il s'est passé cette nuit sur les pelouses américaines. 3 minutes chrono.</p>
                </div>

                {/* Event 2 */}
                <div className="relative pl-8 md:pl-10">
                  <div className="absolute w-4 h-4 bg-yellow-500 rounded-full -left-[9px] top-1.5 ring-4 ring-black shadow-[0_0_15px_rgba(234,179,8,0.6)] border-2 border-black" />
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="text-yellow-500 font-mono font-black text-lg">12:00</span>
                    <span className="bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider w-fit border border-blue-500/20">Data & Analyse</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white">L'Inside Scoop</h4>
                  <p className="text-zinc-400 text-sm mt-1 max-w-xl leading-relaxed">L'analyse mathématique et tactique du choc de 18h. Le savant fou, c'est toi.</p>
                </div>

                {/* Event 3 - HIGHLIGHT */}
                <div className="relative pl-8 md:pl-10 bg-zinc-900/60 p-5 rounded-2xl ml-2 md:ml-4 border border-red-900/30 shadow-2xl backdrop-blur-sm -scale-x-100">
                  <div className="scale-x-[-1]">
                    <div className="absolute w-5 h-5 bg-red-500 rounded-full -left-[45px] md:-left-[53px] top-6 ring-4 ring-black animate-pulse border-2 border-black shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <span className="text-red-500 font-mono font-black text-xl flex items-center gap-2">
                        17:00 <span className="bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded uppercase tracking-widest animate-pulse">Live</span>
                      </span>
                      <span className="bg-red-900/30 text-red-400 border border-red-500/30 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider w-fit">Plateau TV</span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-black text-white">Winamax TV Direct</h4>
                    <p className="text-zinc-300 mt-2 max-w-xl leading-relaxed">Émission spéciale Avant-Match. Pronos de dernière minute, tensions et bonne humeur.</p>
                    <button className="mt-4 px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-sm font-black uppercase tracking-wider rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-red-600/20">
                      <Play size={18} fill="currentColor" /> Rejoindre le Direct
                    </button>
                  </div>
                </div>

                {/* Event 4 */}
                <div className="relative pl-8 md:pl-10 opacity-70 hover:opacity-100 transition-opacity">
                  <div className="absolute w-4 h-4 bg-zinc-800 rounded-full -left-[9px] top-1.5 ring-4 ring-black border-2 border-zinc-900" />
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="text-zinc-500 font-mono font-black text-lg">23:00</span>
                    <span className="bg-zinc-800/80 text-zinc-400 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider w-fit border border-zinc-700">Communauté</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold">Le Thermomètre</h4>
                  <p className="text-zinc-400 text-sm mt-1 max-w-xl leading-relaxed">Bilan de la journée. C'était une masterclass ou une clim ? Votez et donnez votre avis en direct.</p>
                </div>

              </div>
            </div>
          )}

          {/* Tab: LA LIGUE DES AFFILIÉS */}
          {activeTab === 'ligue' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="bg-gradient-to-br from-amber-600 to-orange-950 p-6 md:p-8 rounded-3xl relative overflow-hidden group shadow-2xl border border-amber-500/20">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700 ease-out">
                  <Trophy size={200} />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-300/20 via-transparent to-transparent opacity-50" />
                
                <div className="relative z-10 w-full max-w-xl mx-auto md:mx-0">
                  <span className="bg-black/40 backdrop-blur-md text-white px-3 py-1 rounded border border-white/10 text-xs font-black uppercase tracking-widest mb-4 inline-block shadow-sm">
                    Gratuit • Compétition
                  </span>
                  
                  <h3 className="text-4xl md:text-5xl font-black mb-3 text-white drop-shadow-lg tracking-tighter leading-none">Ligue So Foot <br/><span className="text-amber-200">x Winamax</span></h3>
                  <p className="text-amber-100/90 mb-8 max-w-md font-medium leading-relaxed drop-shadow">Pronostique les scores exacts, gagne le respect du forum et remporte des <strong className="text-white">Freebets</strong> et maillots officiels chaque semaine.</p>
                  
                  <div className="bg-zinc-950/80 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-2xl">
                    <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/5">
                      <span className="font-bold text-white tracking-wide">Ton pronostic pour ce soir :</span>
                      <span className="text-xs font-black text-amber-500 bg-amber-500/10 px-2 py-1 rounded">Ferme dans 2h</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-black/60 p-4 rounded-xl border border-white/5 mb-5 shadow-inner">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-lg">FRA</span>
                        <input type="number" defaultValue="2" className="w-12 h-12 bg-zinc-900 rounded-lg font-black text-center text-2xl outline-none focus:ring-2 focus:ring-amber-500 border border-zinc-800 transition-shadow" />
                      </div>
                      <span className="text-zinc-600 font-black text-xl">-</span>
                      <div className="flex items-center gap-3">
                        <input type="number" defaultValue="1" className="w-12 h-12 bg-zinc-900 rounded-lg font-black text-center text-2xl outline-none focus:ring-2 focus:ring-amber-500 border border-zinc-800 transition-shadow" />
                        <span className="font-bold text-lg">ALL</span>
                      </div>
                    </div>
                    
                    <button className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-black text-lg uppercase tracking-widest rounded-xl transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                       Valider (Gratuit)
                    </button>
                    
                    {/* The Drive-To-Bet Magic */}
                    <div className="mt-5 pt-5 border-t border-white/10 text-center">
                      <p className="text-sm text-zinc-400 mb-3 uppercase tracking-widest font-bold">Le Twist Winamax</p>
                      <button className="text-sm md:text-base font-bold text-white flex flex-col md:flex-row items-center justify-center gap-2 w-full hover:bg-zinc-800/80 transition-colors bg-zinc-900 py-3 px-4 rounded-xl border border-zinc-800">
                        <span>En vrai, ce prono te rapporterait</span>
                        <span className="bg-red-600 text-white px-2 py-0.5 rounded font-black shadow-lg shadow-red-600/20 whitespace-nowrap">450 €</span>
                        <span className="text-zinc-500 hidden md:inline">&rarr;</span>
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-between px-4 bg-zinc-900/50 py-3 rounded-xl border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold font-mono text-zinc-400 border border-zinc-700">1K</div>
                  <div>
                    <h4 className="font-bold text-white">Classement Général</h4>
                    <p className="text-xs text-zinc-400 mt-0.5 font-mono">1,432 / 12,094 joueurs</p>
                  </div>
                </div>
                <button className="text-sm font-bold text-yellow-500 hover:text-yellow-400 uppercase tracking-widest">Voir tout</button>
              </div>
            </div>
          )}

        </div>
      </main>
      {/* --- END OF WINAMAX WIDGET --- */}
      
    </div>
  );
}
