// components
import { Order, useStore } from '@/store';
import CartItem from './CartItem';
import { ProductObject } from '@/utils/firebase/firebase.utils';

function CartList() {
  const products = useStore((store) => store.products);
  const cart: Order[] = useStore((store) => store.cart);

  return (
    <div className="cart w-full lg:w-2/3">
      {cart.map((cartItem) => {
        const product: ProductObject = products.find(
          (item: ProductObject) => item.id === cartItem.id
        )!;

        return <CartItem key={cartItem.id} product={product} cart={cartItem} />;
      })}
    </div>
  );
}

export default CartList;
