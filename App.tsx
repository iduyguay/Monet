
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIPoetry from './components/AIPoetry';
import CartDrawer from './components/CartDrawer';
import { PRODUCTS } from './constants';
import { Category, CartItem, Product } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return activeCategory 
      ? PRODUCTS.filter(p => p.category === activeCategory)
      : PRODUCTS;
  }, [activeCategory]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        cartCount={cart.reduce((acc, curr) => acc + curr.quantity, 0)}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      />

      <Hero />

      {/* Product Grid Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-normal text-[#5a544f] serif mb-4">
              {activeCategory || 'The Collection'}
            </h2>
            <p className="text-[#8a8279] font-light tracking-wide max-w-md">
              Artifacts of refined utility, chosen for their ability to balance form and presence.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] tracking-widest text-[#8a8279] uppercase">Filter by:</span>
            <select 
              className="bg-transparent text-[11px] tracking-widest uppercase text-[#5a544f] border-b border-[#dcd7cf] py-1 outline-none cursor-pointer"
              onChange={(e) => setActiveCategory(e.target.value as Category || null)}
              value={activeCategory || ''}
            >
              <option value="">All</option>
              {Object.values(Category).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-[#f0eee9] soft-glow mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                <button 
                  onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-[#f8f5f0]/90 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-[#5a544f] rounded-full opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-[#5a544f] hover:text-[#f8f5f0]"
                >
                  Add to Collection
                </button>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-normal text-[#5a544f] serif tracking-tight">{product.name}</h3>
                  <span className="text-sm text-[#8a8279]">${product.price}</span>
                </div>
                <p className="text-[11px] text-[#a7b49e] uppercase tracking-[0.2em] font-medium">{product.category}</p>
                <p className="text-sm text-[#8a8279] font-light leading-relaxed mt-2 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AIPoetry />

      {/* Footer */}
      <footer className="bg-[#f0eee9] pt-24 pb-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-4xl font-normal text-[#5a544f] serif italic mb-8">Monet</h2>
              <p className="text-[#8a8279] font-light leading-relaxed max-w-sm">
                A sanctuary for the discerning. We believe that life should be lived with intention, surrounded by beauty that whispers rather than shouts.
              </p>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#5a544f] font-medium mb-6">Contact</h4>
              <ul className="text-sm text-[#8a8279] space-y-4 font-light">
                <li><a href="#" className="hover:text-[#5a544f] transition-colors">Studio</a></li>
                <li><a href="#" className="hover:text-[#5a544f] transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-[#5a544f] transition-colors">Care</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#5a544f] font-medium mb-6">Social</h4>
              <ul className="text-sm text-[#8a8279] space-y-4 font-light">
                <li><a href="#" className="hover:text-[#5a544f] transition-colors">Journal</a></li>
                <li><a href="#" className="hover:text-[#5a544f] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[#5a544f] transition-colors">Pinterest</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#e8e2d8] gap-4">
            <p className="text-[10px] uppercase tracking-widest text-[#8a8279]">
              &copy; 2024 Monet Studio. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest text-[#8a8279]">
              <a href="#" className="hover:text-[#5a544f]">Privacy</a>
              <a href="#" className="hover:text-[#5a544f]">Terms</a>
              <a href="#" className="hover:text-[#5a544f]">Sustainability</a>
            </div>
          </div>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default App;
