import { create } from "zustand";
import { ProductType } from "../types/product";
type ProductStoreType = {
	product: ProductType | undefined;
	isFetched: boolean;
	setProduct: (arg: ProductType | undefined) => void;
	setIsFetched: (arg: boolean) => void;
};

export const useProductStore = create<ProductStoreType>((set) => ({
	product: undefined,
	isFetched: false,
	setProduct: (arg: ProductType | undefined) => set({ product: arg }),
	setIsFetched: (arg: boolean) => set({ isFetched: arg }),
}));
