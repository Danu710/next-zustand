import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type TFoodStoreState = {
  fish: number;
  // addOneFish: () => void;
  // removeOneFish: () => void;
  // removeAllFish: () => void;
};

// export const UseFoodStore = create<TFoodStoreState>()(
//   devtools(
//     persist(
//       (set) => ({
//         fish: 0,
//         addOneFish: () => set((state) => ({ fish: state.fish + 1 })),
//         removeOneFish: () => set((state) => ({ fish: state.fish - 1 })),
//         removeAllFish: () => set({ fish: 0 }),
//       }),

//       {
//         name: 'food-store',
//       }
//     ),
//     { enabled: true, name: 'Food Store' }
//   )
// );

const initialFoodValue = {
  fish: 0,
};

export const UseFoodStore = create<typeof initialFoodValue>()(
  devtools(
    persist(
      () => initialFoodValue,

      {
        name: 'food-store',
      }
    ),
    { enabled: true, name: 'Food Store' }
  )
);

export const addOneFish = () => {
  UseFoodStore.setState((state) => ({ fish: state.fish + 1 }));
};
export const removeOneFish = () => {
  UseFoodStore.setState((state) => ({ fish: state.fish - 1 }));
};
export const removeAllFish = () => {
  UseFoodStore.setState({ fish: 0 });
};

export const add5Fish = () => {
  UseFoodStore.setState((state) => ({ fish: state.fish + 5 }));
};
