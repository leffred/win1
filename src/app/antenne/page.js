"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, PlayCircle, MessageSquare, TrendingUp, Trophy, CalendarClock, Play, Share2, Heart, MessageCircle, Code, Server, Users, Info, Settings, X, TerminalSquare, Cpu, Network } from 'lucide-react';
import PitchModal from '@/components/PitchModal';

export default function AntenneWinamax() {
  const [activeTab, setActiveTab] = useState('feed');
  const [showTechModal, setShowTechModal] = useState(false);

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

      <button
        onClick={() => setShowTechModal(true)}
        className="absolute top-4 right-14 md:right-16 z-50 w-8 h-8 md:w-10 md:h-10 bg-zinc-800/80 backdrop-blur border border-white/10 rounded-full flex items-center justify-center text-sky-400/80 hover:text-sky-400 hover:bg-zinc-700/80 transition-all hover:scale-110 shadow-lg group"
        title="La Salle des Machines"
      >
        <Settings size={18} className="group-hover:animate-[spin_4s_linear_infinite]" />
      </button>

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
      >
        <section className="bg-amber-950/20 p-5 rounded-xl border border-amber-500/20">
          <h4 className="flex items-center gap-2 font-bold text-amber-500 mb-3 uppercase text-xs tracking-widest border-b border-amber-500/10 pb-2">
            <Trophy size={16} /> L'Innovation "Engagement" : La Ligue des Affiliés
          </h4>
          <p className="text-zinc-300 text-sm mb-3">C'est ici qu'on transforme le lecteur en membre de la "famille" Winamax.</p>
          <ul className="space-y-3 pl-4 border-l-2 border-amber-500/30">
            <li className="text-sm"><strong className="text-white">Le concept :</strong> Chaque site partenaire (So Foot, L'Équipe, Blog de supporters) possède sa propre Ligue de Pronostics Gratuits au sein du hub.</li>
            <li className="text-sm"><strong className="text-white">Mécanique :</strong> Un concours de pronos "sans argent" (juste pour l'honneur et des points).</li>
            <li className="text-sm"><strong className="text-white">Le Reward :</strong> Winamax offre des Freebets et des maillots aux 10 premiers de la ligue "So Foot".</li>
            <li className="text-sm text-amber-200 mt-2 p-2 bg-amber-500/10 rounded border border-amber-500/20">
              <strong className="text-amber-500">Le Drive-to-Bet magique :</strong> Sous chaque prono gratuit, on affiche : <em>"Tu es sûr de toi ? En vrai, ce prono te rapporterait 45€ sur Winamax. [Je parie pour de vrai]"</em>.
            </li>
          </ul>
        </section>

        <section className="bg-zinc-800/30 p-5 rounded-xl border border-white/5">
          <h4 className="flex items-center gap-2 font-bold text-white mb-3 uppercase text-xs tracking-widest border-b border-white/5 pb-2">
            <Code size={16} className="text-sky-400" /> Architecture Technique : Le "Plug & Play"
          </h4>
          <p className="text-zinc-300 text-sm mb-3 font-medium text-sky-200">L'argument massue : l'affilié n'a presque rien à faire.</p>
          <div className="grid gap-3">
            <div className="bg-black/40 p-3 rounded-lg border border-white/5">
              <strong className="text-white text-sm block mb-1 flex items-center gap-2"><Code size={14} className="text-sky-500"/> Architecture "Container"</strong>
              <span className="text-zinc-400 text-sm">On développe un module unique en React/Next.js. On change simplement le logo et la couleur primaire (ex: Vert pour l'Équipe, Bleu pour un autre) via une simple feuille de style.</span>
            </div>
            <div className="bg-black/40 p-3 rounded-lg border border-white/5">
              <strong className="text-white text-sm block mb-1 flex items-center gap-2"><Server size={14} className="text-sky-500"/> Centralisation & Hébergement</strong>
              <span className="text-zinc-400 text-sm">Vos équipes publient une seule fois sur un "Back-Office Winamax", et ça se déploie partout. L'Hébergement est géré par Winamax, l'affilié n'ajoute qu'un script : <code className="text-xs bg-black px-1 py-0.5 rounded text-sky-300">&lt;script src="winamax-fan-zone.js"&gt;&lt;/script&gt;</code>.</span>
            </div>
          </div>
        </section>

        <section className="bg-zinc-800/30 p-5 rounded-xl border border-white/5">
          <h4 className="flex items-center gap-2 font-bold text-white mb-3 uppercase text-xs tracking-widest border-b border-white/5 pb-2">
            <Users size={16} className="text-emerald-400" /> Pourquoi c'est la "Tueuse" de bannières ?
          </h4>
          <ul className="space-y-4">
            <li className="flex flex-col">
              <strong className="text-emerald-400 text-sm">Pour le Directeur Marketing (Propriété de l'audience)</strong>
              <span className="text-zinc-400 text-sm">Il achète une présence native. On ne "coupe" pas la lecture du fan, on l'enrichit. L'utilisateur reste 15 minutes sur l'espace Winamax.</span>
            </li>
            <li className="flex flex-col">
              <strong className="text-emerald-400 text-sm">Pour le Partenaire (Expertise)</strong>
              <span className="text-zinc-400 text-sm">Il récupère du contenu vidéo ultra-qualitatif (vos émissions) qu'il n'aurait pas les moyens de produire lui-même.</span>
            </li>
            <li className="flex flex-col">
              <strong className="text-emerald-400 text-sm">Pour l'utilisateur final</strong>
              <span className="text-zinc-400 text-sm">Il a tout au même endroit : Actu + Vidéo + Pronos + Fun. La préférence de marque se construit ici.</span>
            </li>
          </ul>
        </section>
      </PitchModal>

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
          
          {/* Tab: FEED SOCIAL & DATA (Le Mur des Émotions) */}
          {activeTab === 'feed' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-4">
                <h3 className="font-black text-xl flex items-center gap-2">
                  <MessageSquare className="text-yellow-500" size={20} /> 
                  Le Mur des Émotions
                  <div className="group relative inline-block ml-1">
                    <Info size={16} className="text-zinc-500 hover:text-yellow-400 cursor-pointer transition-colors" />
                    {/* Tooltip IA */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 bg-zinc-800 text-xs text-zinc-300 p-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 border border-white/10 pointer-events-none">
                      <strong className="text-white block mb-1 text-sm"><span className="text-yellow-500">🤖</span> Généré par IA</strong>
                      Contenu (memes, punchlines, tri des posts) rédigé et modéré en temps réel par notre IA avec un ton volontairement jeune, piquant et décalé.
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-800 rotate-45 border-r border-b border-white/10" />
                    </div>
                  </div>
                </h3>
                <p className="text-zinc-400 text-sm">L'alternative au forum, sans la galère de la modération. Agrégateur de dingueries #WinamaxSoFoot.</p>
              </div>

              {/* Feed Item 1: Stat IA Piquante */}
              <div className="p-4 bg-zinc-900/80 rounded-2xl border border-white/5 hover:bg-zinc-800/80 transition-colors shadow-inner">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-widest mb-2">
                  <span>🤖 IA WinaX</span>
                </div>
                <p className="text-zinc-200 text-sm italic font-medium">"Possession : 82%. Tirs cadrés : 0. Le fameux football possession qu'on aime tant. Réveillez-vous 😭"</p>
                <div className="flex gap-4 mt-3 text-zinc-500">
                  <button className="flex items-center gap-1.5 text-xs hover:text-red-400 transition-colors font-medium"><Heart size={14}/> 1.2k</button>
                  <button className="flex items-center gap-1.5 text-xs hover:text-white transition-colors font-medium"><MessageCircle size={14}/> 84</button>
                </div>
              </div>

              {/* Feed Item 2: Meme / Post */}
              <div className="p-4 bg-zinc-900/80 rounded-2xl border border-white/5 hover:bg-zinc-800/80 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center font-bold">@S</div>
                  <div>
                    <strong className="text-sm block">SoFootOfficiel</strong>
                    <span className="text-xs text-zinc-500">Il y a 2 min • Insta</span>
                  </div>
                </div>
                <p className="text-zinc-200 text-sm mb-3">Quand tu réalises que Upamecano a couru plus vite que Mbappé sur cette action 💀 #WinamaxSoFoot</p>
                <div className="w-full h-40 bg-zinc-800 rounded-xl relative overflow-hidden flex items-center justify-center border border-white/5">
                  <span className="text-4xl">🏃‍♂️💨</span>
                </div>
              </div>

              {/* Feed Item 3: Ticket Gagnant de fou */}
              <div className="p-4 bg-gradient-to-br from-emerald-950 to-zinc-900 rounded-2xl border border-emerald-500/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                  <TrendingUp size={100} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-widest mb-3 pb-2 border-b border-emerald-500/20">
                    <TrendingUp size={16} /> Le Ticket Extraterrestre
                  </div>
                  <p className="text-white font-bold mb-2 text-sm">Ce génie a validé une cote à 245.00 à la 92ème minute ! 😱</p>
                  <div className="bg-black/50 p-3 rounded-xl border border-emerald-500/10 font-mono text-sm text-emerald-200 shadow-inner">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-zinc-400 uppercase tracking-wider">Cote</span>
                      <span className="font-bold">245.00</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-zinc-400 uppercase tracking-wider">Mise</span> 
                      <span className="text-white">10 €</span>
                    </div>
                    <div className="w-full h-px bg-emerald-500/20 mb-2"></div>
                    <div className="flex justify-between items-end">
                      <span className="text-xs text-zinc-400 uppercase tracking-wider">Gains</span>
                      <span className="font-black text-2xl text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">2 450 €</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feed Item 4: Fan Zone Video Mock */}
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
                  <span className="text-xs font-black text-yellow-500 tracking-widest uppercase mb-1 drop-shadow">Fan Zone Live</span>
                  <h3 className="font-bold text-lg md:text-xl leading-tight mb-2">Explosion de joie à la Bastille !</h3>
                  <p className="text-sm text-zinc-400 line-clamp-2">L'ambiance est totalement irréelle après ce missile de l'extérieur de la surface.</p>
                  <div className="flex gap-4 mt-3 text-zinc-500">
                    <button className="flex items-center gap-1.5 text-xs hover:text-red-400 transition-colors font-medium"><Heart size={14}/> 12.4k</button>
                    <button className="flex items-center gap-1.5 text-xs hover:text-white transition-colors font-medium"><MessageCircle size={14}/> 456</button>
                  </div>
                </div>
              </div>

              {/* Feed Item 5: Un autre pari de fou (Perdu) */}
              <div className="p-4 bg-gradient-to-br from-red-950 to-zinc-900 rounded-2xl border border-red-500/20 relative overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-widest mb-3 pb-2 border-b border-red-500/20">
                    <TrendingUp size={16} className="rotate-180" /> La Clim du Jour
                  </div>
                  <p className="text-white font-bold mb-2 text-sm">Il a posé son loyer sur un doublé de Kanté : respect à ce fou furieux 🫡</p>
                  <div className="bg-black/50 p-3 rounded-xl border border-red-500/10 font-mono text-sm text-red-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-zinc-400 uppercase tracking-wider">Cote</span>
                      <span className="font-bold">80.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-zinc-400 uppercase tracking-wider">Mise en PLS</span> 
                      <span className="text-white font-bold">500 €</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Tab: AGENDA / PROGRAMME */}
          {activeTab === 'agenda' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 p-2 md:p-4">
              <div className="mb-8">
                <h3 className="font-black text-2xl flex items-center gap-3 tracking-tight">
                  <CalendarClock className="text-yellow-500" />
                  24h au cœur de l'Antenne
                </h3>
                <p className="text-zinc-400 mt-2 text-sm">Décalage horaire en Amérique du Nord oblige, les nuits seront blanches et les journées rythmées par l'attente du soir.</p>
              </div>
              
              <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-6 space-y-10 pb-4">
                
                {/* 08h30 */}
                <div className="relative pl-8 md:pl-10">
                  <div className="absolute w-4 h-4 bg-zinc-700 rounded-full -left-[9px] top-1.5 ring-4 ring-black border-2 border-zinc-900" />
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="text-yellow-500 font-mono font-black text-lg">08:30</span>
                    <span className="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider w-fit border border-zinc-700">Vidéo Short</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white">Le Réveil de l'Oncle Sam</h4>
                  <p className="text-zinc-400 text-sm mt-1 max-w-xl leading-relaxed">Un montage ultra-rapide (60s) des 3 moments les plus fous de la nuit (buts, fails, réactions de supporters). Fun et énergique pour les transports.</p>
                </div>

                {/* 11h00 */}
                <div className="relative pl-8 md:pl-10">
                  <div className="absolute w-4 h-4 bg-zinc-700 rounded-full -left-[9px] top-1.5 ring-4 ring-black border-2 border-black" />
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="text-zinc-400 font-mono font-black text-lg">11:00</span>
                    <span className="bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider w-fit border border-blue-500/20">Article Interactif</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white">L'Apéro Data</h4>
                  <p className="text-zinc-400 text-sm mt-1 max-w-xl leading-relaxed">L'analyse des cotes de l'EDF. Pourquoi le 2-0 est la cote la plus jouée ? Votez dans le mini-sondage : "D'accord avec les parieurs ?"</p>
                </div>

                {/* 15h00 */}
                <div className="relative pl-8 md:pl-10">
                  <div className="absolute w-4 h-4 bg-zinc-700 rounded-full -left-[9px] top-1.5 ring-4 ring-black border-2 border-black" />
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="text-zinc-400 font-mono font-black text-lg">15:00</span>
                    <span className="bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider w-fit border border-emerald-500/20">Storytelling</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white">L'Archive du Turfu</h4>
                  <p className="text-zinc-400 text-sm mt-1 max-w-xl leading-relaxed">Focus sur la star adverse. Comment on arrêtait ce joueur en 1998 vs aujourd'hui ? Croisement data et histoire.</p>
                </div>

                {/* 18h00 - HIGHLIGHT */}
                <div className="relative pl-8 md:pl-10 bg-zinc-900/60 p-5 rounded-2xl ml-2 md:ml-4 border border-red-900/30 shadow-2xl backdrop-blur-sm -scale-x-100">
                  <div className="scale-x-[-1]">
                    <div className="absolute w-5 h-5 bg-red-500 rounded-full -left-[45px] md:-left-[53px] top-6 ring-4 ring-black animate-pulse border-2 border-black shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <span className="text-red-500 font-mono font-black text-xl flex items-center gap-2">
                        18:00 <span className="bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded uppercase tracking-widest animate-pulse">Live</span>
                      </span>
                      <span className="bg-red-900/30 text-red-400 border border-red-500/30 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider w-fit">Flux Winamax TV</span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-black text-white">Le Live Arena</h4>
                    <p className="text-zinc-300 mt-2 max-w-xl leading-relaxed">L'émission phare en direct. Les présentateurs répondent aux questions posées directement via le module de l'affilié.</p>
                    <button className="mt-4 px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-sm font-black uppercase tracking-wider rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-red-600/20">
                      <Play size={18} fill="currentColor" /> Rejoindre le Direct
                    </button>
                  </div>
                </div>

                {/* 21h00 */}
                <div className="relative pl-8 md:pl-10">
                  <div className="absolute w-4 h-4 bg-sky-500 rounded-full -left-[9px] top-1.5 ring-4 ring-black shadow-[0_0_15px_rgba(14,165,233,0.6)] border-2 border-black" />
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="text-sky-400 font-mono font-black text-lg">21:00</span>
                    <span className="bg-sky-900/30 text-sky-400 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider w-fit border border-sky-500/20">Pendant le match</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white">Le Live-Score Émotionnel</h4>
                  <p className="text-zinc-400 text-sm mt-1 max-w-xl leading-relaxed">Une jauge de tension en temps réel. Plus il y a d'occasions, plus la jauge "Chaud/Clim" monte sur le site.</p>
                </div>

                {/* 01h00 */}
                <div className="relative pl-8 md:pl-10 opacity-70 hover:opacity-100 transition-opacity">
                  <div className="absolute w-4 h-4 bg-zinc-800 rounded-full -left-[9px] top-1.5 ring-4 ring-black border-2 border-zinc-900" />
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="text-zinc-500 font-mono font-black text-lg">01:00</span>
                    <span className="bg-zinc-800/80 text-zinc-400 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider w-fit border border-zinc-700">Social Proof</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold">Le Zap de la Zone</h4>
                  <p className="text-zinc-400 text-sm mt-1 max-w-xl leading-relaxed">Les meilleurs tweets et les plus gros tickets gagnants (ou perdants magnifiques) postés par la communauté.</p>
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
                    Le Jackpot des Affiliés
                  </span>
                  
                  <h3 className="text-4xl md:text-5xl font-black mb-3 text-white drop-shadow-lg tracking-tighter leading-none">La Ligue <br/><span className="text-amber-200">So Foot</span></h3>
                  <p className="text-amber-100/90 mb-8 max-w-md font-medium leading-relaxed drop-shadow">3 pronos gratuits chaque jour (Score, Buteur, Minute du but). Gagne le respect du forum et remporte des <strong className="text-white">Freebets</strong> et maillots officiels !</p>
                  
                  <div className="bg-zinc-950/80 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-2xl">
                    <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/5">
                      <span className="font-bold text-white tracking-wide">Prono Gratuit du Jour :</span>
                      <span className="text-xs font-black text-amber-500 bg-amber-500/10 px-2 py-1 rounded">Ferme dans 2h</span>
                    </div>
                    
                    <div className="flex flex-col gap-3 mb-5">
                      <div className="flex items-center justify-between bg-black/60 p-4 rounded-xl border border-white/5 shadow-inner">
                        <span className="text-sm font-bold text-zinc-400">Score Exact</span>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-lg">FRA</span>
                          <input type="number" defaultValue="2" className="w-12 h-12 bg-zinc-900 rounded-lg font-black text-center text-2xl outline-none focus:ring-2 focus:ring-amber-500 border border-zinc-800 transition-shadow" />
                          <span className="text-zinc-600 font-black text-xl">-</span>
                          <input type="number" defaultValue="1" className="w-12 h-12 bg-zinc-900 rounded-lg font-black text-center text-2xl outline-none focus:ring-2 focus:ring-amber-500 border border-zinc-800 transition-shadow" />
                          <span className="font-bold text-lg">ALL</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-black/60 px-4 py-3 rounded-xl border border-white/5 shadow-inner">
                        <span className="text-sm font-bold text-zinc-400">Buteur</span>
                        <select className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm font-bold text-white outline-none focus:ring-2 focus:ring-amber-500">
                          <option>K. Mbappé</option>
                          <option>A. Griezmann</option>
                          <option>O. Giroud</option>
                        </select>
                      </div>
                    </div>
                    
                    <button className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-black text-lg uppercase tracking-widest rounded-xl transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                       Valider mes 3 pronos gratuits
                    </button>
                    
                    {/* The Drive-To-Bet Magic */}
                    <div className="mt-5 pt-5 border-t border-white/10 text-center">
                      <p className="text-sm text-zinc-400 mb-3 font-bold">Ton prono gratuit est bon ? Transforme-le :</p>
                      <button className="text-sm md:text-base font-bold text-white flex flex-col md:flex-row items-center justify-center gap-2 w-full hover:bg-zinc-800/80 transition-colors bg-zinc-900 py-3 px-4 rounded-xl border border-zinc-800 group">
                        <span>Tu as confiance ? En vrai, ce ticket rapporte</span>
                        <span className="bg-red-600 text-white px-2 py-0.5 rounded font-black shadow-lg shadow-red-600/20 whitespace-nowrap">450 €</span>
                        <span className="text-zinc-500 hidden md:inline group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-between px-4 bg-zinc-900/50 py-3 rounded-xl border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold font-mono text-zinc-400 border border-zinc-700 text-sm">34e</div>
                  <div>
                    <h4 className="font-bold text-white">Classement Ligue SoFoot</h4>
                    <p className="text-xs text-zinc-400 mt-0.5"><span className="text-amber-500 font-bold">Devant la Rédac</span> (Polo: 78e)</p>
                  </div>
                </div>
                <button className="text-sm font-bold text-yellow-500 hover:text-yellow-400 uppercase tracking-widest">Voir tout</button>
              </div>
            </div>
          )}

        </div>

        {/* Section Articles de l'Éditeur */}
        <section className="mt-16 pt-8 border-t border-zinc-200/20 md:border-t-0">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-3">
              <span className="w-1.5 h-6 bg-red-600 rounded-full"></span>
              À la Une sur SoFoot
            </h3>
            <button className="text-sm font-bold text-zinc-400 hover:text-white transition-colors">Toute l'actu CDM &rarr;</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {/* Article 1 */}
            <a href="#" className="group block bg-zinc-900/50 hover:bg-zinc-800/80 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[16/9] bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-black/80 mix-blend-overlay opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded shadow-lg">Équipe de France</span>
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="font-bold text-base sm:text-lg leading-snug group-hover:text-red-400 transition-colors">Mbappé en 2026 : Le nouveau rôle tactique qui change tout</h4>
                <p className="text-xs text-zinc-500 mt-3 font-medium">Par l'équipe tactique • Il y a 2h</p>
              </div>
            </a>
            
            {/* Article 2 */}
            <a href="#" className="group block bg-zinc-900/50 hover:bg-zinc-800/80 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[16/9] bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-black/80 mix-blend-overlay opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <span className="absolute top-3 left-3 bg-zinc-700 text-white text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded shadow-lg">Analyse</span>
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="font-bold text-base sm:text-lg leading-snug group-hover:text-red-400 transition-colors">Pourquoi le Brésil n'est plus le favori naturel d'un mondial ?</h4>
                <p className="text-xs text-zinc-500 mt-3 font-medium">Par Romain B. • Il y a 4h</p>
              </div>
            </a>
            
            {/* Article 3 */}
            <a href="#" className="group block bg-zinc-900/50 hover:bg-zinc-800/80 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 sm:col-span-2 md:col-span-1">
              <div className="aspect-[16/9] bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/40 to-black/80 mix-blend-overlay opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <span className="absolute top-3 left-3 bg-zinc-700 text-white text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded shadow-lg">Coulisses</span>
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="font-bold text-base sm:text-lg leading-snug group-hover:text-red-400 transition-colors">Dans les secrets du camp de base XXL des Bleus à Los Angeles</h4>
                <p className="text-xs text-zinc-500 mt-3 font-medium">Par Envoyé Spécial • Il y a 6h</p>
              </div>
            </a>
          </div>
        </section>

      </main>

      {/* Tech Architecture Modal */}
      {showTechModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowTechModal(false)} />
          <div className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-zinc-800/50">
              <h3 className="text-xl font-black flex items-center gap-3">
                <Settings className="text-sky-500 animate-[spin_4s_linear_infinite]" size={24} />
                La Salle des Machines (Backend)
              </h3>
              <button onClick={() => setShowTechModal(false)} className="text-zinc-500 hover:text-white p-1 hover:bg-zinc-800 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="p-4 bg-sky-950/30 border border-sky-500/20 rounded-xl">
                <p className="text-sky-200 text-sm italic font-medium">
                  "L'objectif ? Que le développeur du partenaire médias n'ait rigoureusement rien à maintenir de son côté au milieu de la nuit."
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-950 p-4 rounded-xl border border-white/5 shadow-inner">
                  <h4 className="font-bold text-sky-400 mb-2 flex items-center gap-2"><Network size={16} /> Edge Network CDN</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">Déploiement mondial décentralisé (Next.js Edge). L'interface est servie statiquement et dynamiquement depuis le point le plus proche du lecteur.</p>
                </div>
                
                <div className="bg-zinc-950 p-4 rounded-xl border border-white/5 shadow-inner">
                  <h4 className="font-bold text-purple-400 mb-2 flex items-center gap-2"><Cpu size={16} /> WebSocket Live</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">Tunnel bidirectionnel sur Node.js/Socket.io. Synchronisation des cotes temps-réel, du live-score et de la jauge d'émotion en millisecondes.</p>
                </div>
                
                <div className="bg-zinc-950 p-4 rounded-xl border border-white/5 shadow-inner">
                  <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2"><TerminalSquare size={16} /> Generative AI Pipeline</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">Modèles LLM (Type OpenAI/Gemini) customisés en permanence. Agrégation, clustering NLP des sujets tendances, modération stricte anti-insulte et génération des "punchlines" du feed.</p>
                </div>
                
                <div className="bg-zinc-950 p-4 rounded-xl border border-white/5 shadow-inner">
                  <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2"><Server size={16} /> Microservices Affiliation</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">API REST sécurisée pur Gérer l'état JWT, le tracking des cookies FTD (First Time Depositor) sur site tiers, et l'attribution de Freebets via webhook asynchrone.</p>
                </div>
              </div>
              
              <div className="text-center pt-2">
                <span className="text-xs text-zinc-500 uppercase tracking-widest font-black">Powered by Winamax Dev Team</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- END OF WINAMAX WIDGET --- */}
      
    </div>
  );
}
