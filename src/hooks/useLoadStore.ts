import { create } from 'zustand'

interface LoadStore {
  loading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useLoadStore = create<LoadStore>((set) => ({
  loading: true,
  setIsLoading: (loading: boolean) => set({ loading: loading }),
}))