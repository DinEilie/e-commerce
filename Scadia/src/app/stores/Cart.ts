import { create } from 'zustand';
import { CartType } from '../types/cart';
type CartStoreType = {
  cart: CartType[] | undefined;
  isFetched: boolean;
  totalAmounts: number;
  totalPrices: number;
  setCart: (arg: CartType[] | undefined) => void;
  setIsFetched: (arg: boolean) => void;
  setTotalAmounts: (arg: number) => void;
  setTotalPrices: (arg: number) => void;
  reset: () => void;
};
export const useCartStore = create<CartStoreType>((set) => ({
  cart: undefined,
  isFetched: false,
  totalAmounts: 0,
  totalPrices: 0,
  setCart: (arg: CartType[] | undefined) => set({ cart: arg }),
  setIsFetched: (arg: boolean) => set({ isFetched: arg }),
  setTotalAmounts: (arg: number) => set({ totalAmounts: arg }),
  setTotalPrices: (arg: number) => set({ totalPrices: arg }),
  reset: () => set({ cart: undefined, isFetched: false, totalAmounts: 0, totalPrices: 0 }),
}));
