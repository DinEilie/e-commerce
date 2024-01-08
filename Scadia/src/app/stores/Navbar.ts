import { create } from 'zustand';

type NavbarType = {
  showClothing: boolean;
  showBags: boolean;
  showShoes: boolean;
  showCamping: boolean;
  setShowClothing: (arg: boolean) => void;
  setShowBags: (arg: boolean) => void;
  setShowShoes: (arg: boolean) => void;
  setShowCamping: (arg: boolean) => void;
};

export const useNavbarStore = create<NavbarType>((set) => ({
  showClothing: false,
  showBags: false,
  showShoes: false,
  showCamping: false,
  setShowClothing: (arg: boolean) => set({ showClothing: arg }),
  setShowBags: (arg: boolean) => set({ showBags: arg }),
  setShowShoes: (arg: boolean) => set({ showShoes: arg }),
  setShowCamping: (arg: boolean) => set({ showCamping: arg }),
}));
