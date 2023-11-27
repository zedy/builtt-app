/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ProductObject, User } from './utils/firebase/firebase.utils';
import { deepCopyObj } from './utils/helpers';

export type Order = {
  id: number;
  count: number;
  price: number;
};

type State = {
  currentUser: null | User;
  currentLanguage: string;
  products: [];
  cart: [];
};

// initial state
const initialState: State = {
  currentUser: null,
  currentLanguage: 'sr',
  products: [],
  cart: [],
};

// @ts-ignore
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
      (store: State) => ({
        ...store,
        currentLanguage: language,
      }),
      false,
      'user logged in'
    ),
  loginUser: (user: User | null) =>
    set(
      (store: State) => ({
        ...store,
        currentUser: user,
      }),
      false,
      'user logged in'
    ),
  logoutUser: () =>
    set(
      (store: State) => ({
        ...store,
        currentUser: null,
      }),
      false,
      'user logged out'
    ),
  products: [],
  setProducts: (products: ProductObject[]) =>
    set(
      (store: State) => ({
        ...store,
        products,
      }),
      false,
      'products loaded'
    ),
  cart: [],
  setCart: (order: Order) =>
    set(
      (store: State) => {
        // if we add the same item that's already in the cart, just increase cart count
        // by the number in the counter
        if (store.cart.find((item: Order) => item.id === order.id)) {
          const storeCopy: Order[] = deepCopyObj(store.cart);
          const newCart = storeCopy.map((cart: Order) => {
            const cartCopy = deepCopyObj(cart);

            if (cart.id === order.id) {
              cartCopy.count += order.count;
            }

            return cartCopy;
          });

          return {
            ...store,
            cart: [...newCart],
          };
        }

        return {
          ...store,
          cart: [...store.cart, order],
        };
      },
      false,
      'cart updated'
    ),
  removeItemFromCart: (id: number) =>
    set(
      (store: State) => ({
        ...store,
        cart: [...store.cart.filter((item: Order) => item.id !== id)],
      }),
      false,
      'cart updated'
    ),
  updateItemCount: (id: number, action: string) =>
    set(
      (store: State) => ({
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
      (store: State) => ({
        ...store,
        cart: [],
      }),
      false,
      'cart cleared'
    ),
  resetStore: () =>
    set(
      (store: State) => ({
        ...store,
        ...initialState,
      }),
      false,
      'cart cleared'
    ),
});

// TODO: if prod then no devtools
export const useStore = create(persist(devtools(storeObj), { name: 'store' }));
