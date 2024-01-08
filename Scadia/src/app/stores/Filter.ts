import { create } from 'zustand';

type FilterType = {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (arg: number) => void;
  setMaxPrice: (arg: number) => void;
  showSmall: boolean;
  showMedium: boolean;
  showLarge: boolean;
  showXLarge: boolean;
  setShowSmall: (arg: boolean) => void;
  setShowMedium: (arg: boolean) => void;
  setShowLarge: (arg: boolean) => void;
  setShowXLarge: (arg: boolean) => void;
  setShowSizeAll: () => void;
  setShowSizeNone: () => void;
  showAdidas: boolean;
  showTheNorthFace: boolean;
  showPuma: boolean;
  showColumbia: boolean;
  showJackWolfskin: boolean;
  showGarmin: boolean;
  setShowAdidas: (arg: boolean) => void;
  setShowTheNorthFace: (arg: boolean) => void;
  setShowPuma: (arg: boolean) => void;
  setShowColumbia: (arg: boolean) => void;
  setShowJackWolfskin: (arg: boolean) => void;
  setShowGarmin: (arg: boolean) => void;
  setShowBrandAll: () => void;
  setShowBrandNone: () => void;
};

export const useFilterStore = create<FilterType>((set) => ({
  minPrice: 0,
  maxPrice: 1000,
  setMinPrice: (arg: number) => set({ minPrice: arg }),
  setMaxPrice: (arg: number) => set({ maxPrice: arg }),
  showSmall: true,
  showMedium: true,
  showLarge: true,
  showXLarge: true,
  setShowSmall: (arg: boolean) => set({ showSmall: arg }),
  setShowMedium: (arg: boolean) => set({ showMedium: arg }),
  setShowLarge: (arg: boolean) => set({ showLarge: arg }),
  setShowXLarge: (arg: boolean) => set({ showXLarge: arg }),
  setShowSizeAll: () => set({ showSmall: true, showMedium: true, showLarge: true, showXLarge: true }),
  setShowSizeNone: () => set({ showSmall: false, showMedium: false, showLarge: false, showXLarge: false }),
  showAdidas: true,
  showTheNorthFace: true,
  showPuma: true,
  showColumbia: true,
  showJackWolfskin: true,
  showGarmin: true,
  setShowAdidas: (arg: boolean) => set({ showAdidas: arg }),
  setShowTheNorthFace: (arg: boolean) => set({ showTheNorthFace: arg }),
  setShowPuma: (arg: boolean) => set({ showPuma: arg }),
  setShowColumbia: (arg: boolean) => set({ showColumbia: arg }),
  setShowJackWolfskin: (arg: boolean) => set({ showJackWolfskin: arg }),
  setShowGarmin: (arg: boolean) => set({ showGarmin: arg }),
  setShowBrandAll: () =>
    set({
      showAdidas: true,
      showTheNorthFace: true,
      showPuma: true,
      showColumbia: true,
      showJackWolfskin: true,
      showGarmin: true,
    }),
  setShowBrandNone: () =>
    set({
      showAdidas: false,
      showTheNorthFace: false,
      showPuma: false,
      showColumbia: false,
      showJackWolfskin: false,
      showGarmin: false,
    }),
}));
