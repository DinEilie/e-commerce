import { create } from 'zustand';
import { ProductType } from '../types/product';
import { ProductSizeType } from '../types/productSize';
type ProductStoreType = {
  product: ProductType | undefined;
  isFetched: boolean;
  selectedSize: ProductSizeType;
  selectedAmount: number;
  setProduct: (arg: ProductType | undefined) => void;
  setIsFetched: (arg: boolean) => void;
  setSelectedSize: (arg: ProductSizeType) => void;
  getCurrentAmount: () => number;
  increaseSelectedAmount: () => void;
  decreaseSelectedAmount: () => void;
  clampSelectedAmount: () => void;
  resetStore: () => void;
};

export const useProductStore = create<ProductStoreType>((set, get) => ({
  product: undefined,
  isFetched: false,
  selectedSize: 'none',
  selectedAmount: 1,
  setProduct: (arg: ProductType | undefined) => set({ product: arg }),
  setIsFetched: (arg: boolean) => set({ isFetched: arg }),
  setSelectedSize: (arg: ProductSizeType) => set({ selectedSize: arg }),
  getCurrentAmount: (): number => {
    switch (get().selectedSize) {
      case 'none':
        return get().product?.productQuantity ?? -1;
      case 'S':
        return get().product?.productSmallQuantity ?? -1;
      case 'M':
        return get().product?.productMediumQuantity ?? -1;
      case 'L':
        return get().product?.productLargeQuantity ?? -1;
      case 'XL':
        return get().product?.productXLargeQuantity ?? -1;
    }
  },
  increaseSelectedAmount: () =>
    set((state) => ({ selectedAmount: Math.min(state.selectedAmount + 1, state.getCurrentAmount()) })),
  decreaseSelectedAmount: () => set((state) => ({ selectedAmount: Math.max(state.selectedAmount - 1, 1) })),
  clampSelectedAmount: () =>
    set((state) => ({ selectedAmount: Math.min(state.selectedAmount, state.getCurrentAmount()) })),
  resetStore: () => set({ product: undefined, isFetched: false, selectedSize: 'none', selectedAmount: 1 }),
}));
