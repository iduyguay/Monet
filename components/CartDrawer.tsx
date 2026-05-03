
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-[#5a544f]/20 backdrop-blur-sm z-50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#f8f5f0] z-50 transform transition-transform duration-700 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} shadow-2xl`}>
        <div className="p-10 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-normal text-[#5a544f] serif">Your Curation</h2>
            <button onClick={onClose} className="text-[#8a8279] hover:text-[#5a544f] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto pr-4">
            {items.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#8a8279] font-light italic">Your space is currently empty.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="w-24 h-32 overflow-hidden rounded-sm bg-[#e8e2d8]">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex-grow py-2">
                      <h3 className="text-sm font-normal text-[#5a544f] tracking-wide">{item.name}</h3>
                      <p className="text-[11px] text-[#8a8279] uppercase tracking-widest mt-1">Qty: {item.quantity}</p>
                      <p className="text-sm text-[#5a544f] mt-4">${item.price}</p>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-[10px] text-[#8a8279] uppercase tracking-widest mt-2 hover:text-[#5a544f] transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-auto pt-8 border-t border-[#e8e2d8]">
            <div className="flex justify-between items-center mb-8">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8a8279]">Subtotal</span>
              <span className="text-xl text-[#5a544f] serif">${total}</span>
            </div>
            <button className="w-full py-5 bg-[#5a544f] text-[#f8f5f0] text-xs uppercase tracking-[0.3em] font-light rounded-full hover:bg-[#4a443f] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed">
              Proceed to checkout
            </button>
            <p className="text-center text-[10px] text-[#8a8279] mt-6 tracking-widest leading-loose">
              COMPLIMENTARY SHIPPING ON ALL DOMESTIC ORDERS.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
