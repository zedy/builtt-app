/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { User } from 'firebase/auth';
import { ProductObject } from './utils/firebase/firebase.utils';

type Order = {
  id: number;
  count: number;
};

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
  products: [],
  setProducts: (products: ProductObject[]) =>
    set(
      (store) => ({
        ...store,
        products,
      }),
      false,
      'products loaded'
    ),
  cart: [],
  setCart: (order: Order) =>
    set(
      (store) => ({
        ...store,
        cart: [...store.cart, order],
      }),
      false,
      'cart updated'
    ),
  clearCart: () =>
    set(
      (store) => ({
        ...store,
        cart: [],
      }),
      false,
      'cart cleared'
    ),
});

// TODO: if prod then no devtools
export const useStore = create(persist(devtools(storeObj), { name: 'store' }));
