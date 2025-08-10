import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (name: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (name: string) => {
    const currentItems = get().items;
    const existingItem = currentItems.find(item => item.name === name);
    
    if (existingItem) {
      set({
        items: currentItems.map(item =>
          item.name === name 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      });
    } else {
      const newItem: CartItem = {
        id: `${Date.now()}-${Math.random()}`,
        name,
        quantity: 1
      };
      set({
        items: [...currentItems, newItem]
      });
    }
  },
  
  removeItem: (id: string) => {
    set({
      items: get().items.filter(item => item.id !== id)
    });
  },
  
  updateQuantity: (id: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeItem(id);
      return;
    }
    
    set({
      items: get().items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    });
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  }
}));