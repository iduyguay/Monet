
import React, { useState, useEffect } from 'react';
import { geminiService } from '../services/geminiService';

const MOODS = [
  "Rainy afternoon in Giverny",
  "Dawn light on white linen",
  "Warm sand and coastal wind",
  "The silence of a stone garden"
];

const AIPoetry: React.FC = () => {
  const [mood, setMood] = useState(MOODS[0]);
  const [poetry, setPoetry] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPoetry = async (selectedMood: string) => {
    setLoading(true);
    const result = await geminiService.getPoeticCuration(selectedMood);
    setPoetry(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchPoetry(mood);
  }, []);

  return (
    <section className="py-24 px-8 bg-[#fcfaf7]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#a7b49e] mb-6 block font-medium">
          The Muse
        </span>
        <h2 className="text-3xl font-normal text-[#5a544f] serif italic mb-12">
          Curate by Atmosphere
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {MOODS.map((m) => (
            <button
              key={m}
              onClick={() => { setMood(m); fetchPoetry(m); }}
              className={`px-6 py-2 text-[11px] tracking-widest uppercase transition-all duration-500 rounded-full border ${
                mood === m 
                ? 'bg-[#5a544f] text-[#f8f5f0] border-[#5a544f]' 
                : 'bg-transparent text-[#8a8279] border-[#e8e2d8] hover:border-[#8a8279]'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <div className="relative p-12 bg-[#f8f5f0] rounded-3xl soft-glow border border-[#f0eee9] overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#a7b49e] opacity-20"></div>
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="w-1.5 h-1.5 bg-[#a7b49e] rounded-full mx-1 animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-1.5 h-1.5 bg-[#a7b49e] rounded-full mx-1 animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-1.5 h-1.5 bg-[#a7b49e] rounded-full mx-1 animate-bounce"></div>
            </div>
          ) : (
            <p className="text-xl md:text-2xl text-[#8a8279] font-light leading-relaxed italic transition-all duration-1000">
              "{poetry}"
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIPoetry;
