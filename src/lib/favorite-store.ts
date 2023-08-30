import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  favorites: number[];
};

type Actions = {
  like: (id: number) => void;
  unlike: (id: number) => void;
};

export const useFavoriteStore = create<State & Actions>()(
  // using persist middleware to persist the state in localStorage
  persist(
    (set) => ({
      favorites: [] as number[],
      like: (id) =>
        set((state) => ({
          favorites: [...state.favorites, id],
        })),
      unlike: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item !== id),
        })),
    }),
    {
      name: 'favorite-store',
    }
  )
);
