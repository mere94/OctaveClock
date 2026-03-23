/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Download, Share2, Copy, Check, X } from 'lucide-react';

export default function App() {
  const [time, setTime] = useState(new Date());
  const [showEmbedModal, setShowEmbedModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const embedCode = `<iframe src="https://mere94.github.io/octaveclock/" width="100%" height="400" frameborder="0" style="border-radius: 12px; overflow: hidden; border: 1px solid #1e293b;"></iframe>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  
  const secondsSinceMidnight = hours * 3600 + minutes * 60 + seconds;
  const secondsIn8HourCycle = secondsSinceMidnight % (8 * 3600);
  
  const currentTick = Math.floor(secondsIn8HourCycle / 450);
  
  // Avanza di 1/90 di tacca ogni 5 secondi (450s / 5s = 90 intervalli per tacca)
  const current5SecInterval = Math.floor(secondsIn8HourCycle / 5);
  const rotationDegrees = current5SecInterval * (360 / (64 * 90));

  const topLabel = hours >= 16 ? "16" : hours >= 8 ? "08" : "00";

  const renderTicks = () => {
    const ticks = [];
    for (let i = 0; i < 64; i++) {
      const angle = i * (360 / 64);
      const isMajor = i % 8 === 0; 
      const isHalfHour = i % 8 === 4;
      ticks.push(
        <line
          key={i}
          x1="50"
          y1={isMajor ? "4" : isHalfHour ? "5" : "8"}
          x2="50"
          y2={isMajor ? "16" : "12"}
          stroke={isMajor ? "#94a3b8" : isHalfHour ? "#64748b" : "#334155"}
          strokeWidth={isMajor ? "0.8" : isHalfHour ? "0.6" : "0.3"}
          strokeDasharray={isHalfHour ? "1, 1" : "none"}
          transform={`rotate(${angle} 50 50)`}
        />
      );
    }
    return ticks;
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 overflow-hidden relative">
      
      {/* Title */}
      <div className="absolute top-6 right-8 select-none z-20">
        <h1 className="text-xl font-bold tracking-widest text-slate-300 drop-shadow-sm">
          <span className="text-blue-500">Octave</span>Clock
        </h1>
      </div>

      <div className="relative w-full max-w-[85vmin] aspect-square">
        {/* Outer glow */}
        <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl relative z-10">
          {/* Clock background */}
          <circle cx="50" cy="50" r="48" fill="#020617" stroke="#1e293b" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="42" fill="none" stroke="#0f172a" strokeWidth="0.5" />
          
          {/* Ticks */}
          {renderTicks()}
          
          {/* Top Label Window */}
          <rect x="43" y="21" width="14" height="14" rx="1.5" fill="#0f172a" stroke="#94a3b8" strokeWidth="0.5" />
          <text x="50" y="27.5" fill="#3b82f6" fontSize="9" fontFamily="system-ui" textAnchor="middle" dominantBaseline="central" className="font-bold" style={{ filter: 'drop-shadow(0 0 2px rgba(59, 130, 246, 0.8))' }}>
            {topLabel}
          </text>
          
          {/* Hand */}
          <g 
            transform={`rotate(${rotationDegrees} 50 50)`} 
            className="transition-transform duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          >
            <line x1="50" y1="50" x2="50" y2="4" stroke="#3b82f6" strokeWidth="0.4" />
            {/* Hand glow */}
            <line x1="50" y1="50" x2="50" y2="4" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.3" />
          </g>
          
          {/* Center */}
          <circle cx="50" cy="50" r="3" fill="#020617" stroke="#3b82f6" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="1" fill="#3b82f6" />
        </svg>
      </div>

      {/* Download Executable Button (Hidden in Electron) */}
      {!/electron/i.test(navigator.userAgent) && (
        <a
          href="https://github.com/mere94/octaveclock/releases/latest/download/OctaveClock.exe"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 right-6 flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full transition-all shadow-lg border border-slate-800 hover:border-slate-700 text-sm font-medium group"
          title="Scarica OctaveClock per Windows (.exe)"
        >
          <Download size={18} className="text-blue-500 group-hover:scale-110 transition-transform" />
          <span>Scarica .exe</span>
        </a>
      )}

      {/* Embed Button (Hidden in Electron) */}
      {!/electron/i.test(navigator.userAgent) && (
        <button
          onClick={() => setShowEmbedModal(true)}
          className="absolute bottom-6 left-6 flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full transition-all shadow-lg border border-slate-800 hover:border-slate-700 text-sm font-medium group"
          title="Incorpora su Notion o altri siti"
        >
          <Share2 size={18} className="text-emerald-500 group-hover:scale-110 transition-transform" />
          <span>Embed</span>
        </button>
      )}

      {/* Embed Modal */}
      {showEmbedModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
            <button 
              onClick={() => setShowEmbedModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <Share2 size={18} className="text-emerald-500" />
              Incorpora OctaveClock
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Copia questo codice per inserire l'orologio su Notion, siti web o blog. Notion supporta nativamente i link diretti, ma puoi usare questo iframe per siti custom.
            </p>
            <div className="relative">
              <pre className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 overflow-x-auto whitespace-pre-wrap">
                {embedCode}
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors"
                title="Copia codice"
              >
                {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
            </div>
            {/* Notion direct link helper */}
            <div className="mt-4 pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-500 mb-2">Per Notion, puoi incollare direttamente questo link e selezionare "Create embed":</p>
              <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-lg p-2">
                <code className="text-xs text-slate-300 flex-1 overflow-hidden text-ellipsis">https://mere94.github.io/octaveclock/</code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("https://mere94.github.io/octaveclock/");
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 transition-colors"
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
