import { useStore } from '@/store';

// components
import LogoComponent from '@/components/logo/Logo';
import { LOGO_SIZE_SM } from '@/utils/consts';
import { Cart, Profile } from '@/utils/icons';

function Header() {
  const cart = useStore((store) => store.cart);
  const cartCounter = 1;

  const goToCheckout = () => {
    console.log('click');
  };

  const goToProfile = () => {
    console.log('click');
  };

  const getCartCounterLeft = () => {
    if (cartCounter > 9) {
      return 'left-[4px]';
    }

    return 'left-[8px]';
  };

  return (
    <header className="w-full h-16 relative bg-zinc-100 flex justify-between items-center px-5 sm:px-[70px]">
      <LogoComponent size={LOGO_SIZE_SM} />
      <div className="flex">
        <button onClick={goToCheckout} type="button" className="relative">
          <Cart w={23} h={23} c="#000" />
          <div
            className={`${getCartCounterLeft()} absolute top-[9px] text-center text-black text-xs font-normal font-['Arial'] leading-3`}
          >
            {cart.length}
          </div>
        </button>
        <button
          onClick={goToProfile}
          className="ml-5 cursor-pointer"
          type="button"
        >
          <Profile w={24} h={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
