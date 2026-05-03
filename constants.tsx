
import { Product, Category } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Linen Veil',
    category: Category.HOME,
    price: 185,
    image: 'https://images.unsplash.com/photo-1594913785162-e6785b493bd2?auto=format&fit=crop&q=80&w=800',
    description: 'A drape of morning mist. Woven from sustainably sourced European flax.'
  },
  {
    id: '2',
    name: 'Stone Solace Vase',
    category: Category.OBJECTS,
    price: 95,
    image: 'https://images.unsplash.com/photo-1578500484748-485268443224?auto=format&fit=crop&q=80&w=800',
    description: 'Honest textures found in the silence of high cliffs.'
  },
  {
    id: '3',
    name: 'Sage Mist Candle',
    category: Category.FRAGRANCE,
    price: 52,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800',
    description: 'Notes of wild herbs and soft rainfall in a hidden valley.'
  },
  {
    id: '4',
    name: 'Ceramic Ritual Set',
    category: Category.LIFESTYLE,
    price: 140,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    description: 'Hand-thrown bowls that invite a slower rhythm to your day.'
  },
  {
    id: '5',
    name: 'Tethered Hourglass',
    category: Category.OBJECTS,
    price: 78,
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800',
    description: 'Fine sand measuring the weight of light and silence.'
  },
  {
    id: '6',
    name: 'Ivory Throw',
    category: Category.HOME,
    price: 210,
    image: 'https://images.unsplash.com/photo-1584108658518-ff53410c5504?auto=format&fit=crop&q=80&w=800',
    description: 'The softest embrace of alpaca wool, colored by natural clay.'
  }
];

export const COLORS = {
  bg: '#f8f5f0',
  card: '#fcfaf7',
  accent: '#a7b49e', // Muted sage
  rose: '#dcc6c6',  // Dusty rose
  text: '#5a544f',
  textLight: '#8a8279'
};
