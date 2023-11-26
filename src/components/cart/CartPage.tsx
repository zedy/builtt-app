// components
import { useStore } from '@/store';
import CartList from './CartList';
import CartInfo from './CartInfo';
import CartEmpty from './CartEmpty';

function CartPage() {
  const cart = useStore((store) => store.cart);

  return (
    <div className="w-full flex flex-col lg:flex-row align-top">
      {cart.length > 0 ? (
        <>
          <CartList />
          <CartInfo />
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}

export default CartPage;
