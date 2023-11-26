/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { User } from 'firebase/auth';
import { ProductObject } from './utils/firebase/firebase.utils';
import { deepCopyObj } from './utils/helpers';

export type Order = {
  id: number;
  count: number;
  price: number;
};

const storeObj = (set) => ({
  currentUser: null,
  currentLanguage: 'sr',
  langauges: [
    {
      key: 'sr',
      label: 'srb',
    },
    {
      key: 'en',
      label: 'eng',
    },
  ],
  switchLanguage: (language: string) =>
    set(
      (store) => ({
        ...store,
        currentLanguage: language,
      }),
      false,
      'user logged in'
    ),
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
  removeItemFromCart: (id: number) =>
    set(
      (store) => ({
        ...store,
        cart: [...store.cart.filter((item: Order) => item.id !== id)],
      }),
      false,
      'cart updated'
    ),
  updateItemCount: (id: number, action: string) =>
    set(
      (store) => ({
        ...store,
        cart: [
          ...store.cart.map((item: Order): Order => {
            if (item.id === id) {
              const copy: Order = deepCopyObj(item);

              if (action === 'inc') copy.count += 1;
              if (action === 'dec') copy.count -= 1;

              return copy;
            }

            return item;
          }),
        ],
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
