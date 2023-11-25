/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { User } from 'firebase/auth';

const storeObj = (set) => ({
  currentUser: null,
  loginUser: (user: User) =>
    set(
      (store) => ({
        ...store,
        currentUser: user,
      }),
      false,
      'user logged in'
    ),
  logoutUser: () =>
    set(
      (store) => ({
        ...store,
        currentUser: null,
      }),
      false,
      'user logged out'
    ),
});

// TODO: if prod then no devtools
export const useStore = create(persist(devtools(storeObj), { name: 'store' }));
