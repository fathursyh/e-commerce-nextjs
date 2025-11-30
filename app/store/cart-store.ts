import { persist, createJSONStorage } from "zustand/middleware";
import { api } from "../lib/axios";
import { create } from "zustand";

export type CartItem = {
  id: string | number;
  title: string;
  price: number;
  quantity: number;
  image?: string;
  variant?: string;
};

export type CartState = {
  items: CartItem[];
};

export type CartActions = {
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearCart: () => void;

  getTotalQty: () => number;
  getSubtotal: () => number;

  syncToServer: () => Promise<void>;
};

export type CartStore = CartState & CartActions;

export const initCartStore = (): CartState => ({
  items: [],
});

const cartInitState: CartState = {
  items: [],
};

export const createCartStore = (initState: CartState = cartInitState) =>
  create<CartStore>()(
    persist(
      (set, get) => ({
        ...initState,

        // actions
        addItem: (item) =>
          set((state) => {
            const existing = state.items.find((i) => i.id === item.id);
            if (existing) {
              return {
                items: state.items.map((i) =>
                  i.id === item.id
                    ? { ...i, quantity: i.quantity + 1 }
                    : i,
                ),
              };
            }
            return {
              items: [...state.items, { ...item, quantity: 1 }],
            };
          }),

        removeItem: (id) =>
          set((state) => ({
            items: state.items.filter((i) => i.id !== id),
          })),

        increaseQty: (id) =>
          set((state) => ({
            items: state.items.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
            ),
          })),

        decreaseQty: (id) =>
          set((state) => ({
            items: state.items
              .map((i) =>
                i.id === id
                  ? { ...i, quantity: i.quantity - 1 }
                  : i,
              )
              .filter((i) => i.quantity > 0),
          })),

        clearCart: () => set({ items: [] }),

        getTotalQty: () =>
          get().items.reduce((sum, item) => sum + item.quantity, 0),

        getSubtotal: () =>
          get().items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
          ),
        syncToServer: async () => {
          const items = get().items;
          try {
            await api.post("/cart/1", items);
          } catch (err) {
            console.error("Cart sync failed", err);
          }
        },
      }),
      {
        name: "user-cart",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          items: state.items,
        }),
        skipHydration: true,
      },
    ),
  );