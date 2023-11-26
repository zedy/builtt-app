// libs
import { find } from 'lodash';

// components
import { Order, useStore } from '@/store';
import CartItem from './CartItem';
import { ProductObject } from '@/utils/firebase/firebase.utils';

function CartList() {
  const products = useStore((store) => store.products);
  const cart: Order[] = useStore((store) => store.cart);

  return (
    <div className="cart w-full lg:w-2/3">
      {cart.map((item) => {
        const product = find(products, {
          id: item.id,
        });

        return <CartItem key={item.id} {...product} cart={item} />;
      })}
    </div>
  );
}

export default CartList;
