// components
import { Order, useStore } from '@/store';
import CartList from './CartList';
import CartInfo from './CartInfo';

function CartPage() {
  const products = useStore((store) => store.products);
  const cart: Order[] = useStore((store) => store.cart);

  return (
    <div className="w-full flex flex-col lg:flex-row align-top">
      <CartList />
      <CartInfo />
    </div>
  );
}

export default CartPage;
