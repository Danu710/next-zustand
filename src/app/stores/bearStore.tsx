import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

type Store = {
  bears: number;
  size: string;
  color: string;
  increasePopulation: () => void;
  removeAllBears: () => void;
  reset: () => void;
};

export const UseStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        size: 'small',
        color: 'red',
        increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 }),
        reset: () => set({ bears: 0, size: 'small', color: 'red' }),
      }),
      {
        name: 'bearStore',
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(
              ([key]) => !['size', 'color'].includes(key)
            )
          ),
      }
    ),
    { enabled: true, name: 'Bear Store' }
  )
);
