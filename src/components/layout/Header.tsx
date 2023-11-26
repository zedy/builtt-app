import { Link } from 'react-router-dom';
import { useStore } from '@/store';

// components
import LogoComponent from '@/components/logo/Logo';
import { LOGO_SIZE_SM } from '@/utils/consts';
import { Cart, Profile } from '@/utils/icons';
import LanguageSwitcher from './nav/LanguageSwitcher';

function Header() {
  const cart = useStore((store) => store.cart);

  const goToProfile = () => {
    console.log('click');
  };

  const getCartCounterLeft = () => {
    if (cart.length > 9) {
      return 'left-[5px]';
    }

    return 'left-[8px]';
  };

  return (
    <header className="w-full h-16 relative bg-zinc-100 flex justify-between items-center px-5 sm:px-[70px]">
      <div className="flex">
        <LogoComponent size={LOGO_SIZE_SM} />
        <LanguageSwitcher />
      </div>
      <div className="flex">
        <Link to="/cart" className="relative">
          <Cart w={23} h={23} c="#000" />
          <div
            className={`${getCartCounterLeft()} absolute top-[9px] text-center text-black text-xs font-normal font-['Arial'] leading-3`}
          >
            {cart.length}
          </div>
        </Link>
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
