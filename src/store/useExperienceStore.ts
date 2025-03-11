import { create } from "zustand";

const useExperienceStore = create((set) => ({
  experience: null,
  setExperience: (exp: any) => set({ experience: exp }),
}));

export default useExperienceStore;
