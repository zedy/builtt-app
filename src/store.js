import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const store = (set) => ({
  user: null,
  loginUser: (userData) => set({ user: userData }),
  logoutUser: () => set({ user: null }),
});

const useStore = create(persist(devtools(store), { name: 'store' }));

export default useStore;
