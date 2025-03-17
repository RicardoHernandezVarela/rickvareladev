import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useSanityDataStore = create(
  devtools((set: any, get: any) => ({
    sanityData: {},
    isUpdating: false,

    insertSanityData: async (key: string, value: any) => {
      if (get().isUpdating) return;

      set({ isUpdating: true });

      await new Promise((resolve) => setTimeout(resolve, 100));

      set((state: any) => ({
        sanityData: { ...state.sanityData, [key]: value },
        isUpdating: false,
      }));
    },
  }))
);

export default useSanityDataStore;
