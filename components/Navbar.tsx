
import React, { useState, useEffect } from 'react';
import { Category } from '../types';

interface NavbarProps {
  activeCategory: Category | null;
  setActiveCategory: (cat: Category | null) => void;
  cartCount: number;
  toggleCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeCategory, setActiveCategory, cartCount, toggleCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ease-in-out px-8 py-6 ${isScrolled ? 'bg-[#f8f5f0]/90 backdrop-blur-md border-b border-[#e8e2d8]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex gap-8 text-[11px] tracking-[0.2em] uppercase font-light text-[#8a8279] hidden md:flex">
          {Object.values(Category).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`hover:text-[#5a544f] transition-colors ${activeCategory === cat ? 'text-[#5a544f] font-medium' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button 
          onClick={() => setActiveCategory(null)}
          className="absolute left-1/2 -translate-x-1/2 text-3xl font-normal tracking-widest text-[#5a544f] serif italic"
        >
          Monet
        </button>

        <div className="flex gap-8 items-center">
          <button 
            onClick={toggleCart}
            className="text-[11px] tracking-[0.2em] uppercase font-light text-[#8a8279] hover:text-[#5a544f] transition-colors flex items-center gap-2"
          >
            Cart ({cartCount})
          </button>
          <button className="md:hidden p-2 text-[#8a8279]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
