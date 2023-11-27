import { useState } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { useStore } from '@/store';

// components
import LogoComponent from '@/components/logo/Logo';
import { LOGO_SIZE_SM, TRANSLATIONS } from '@/utils/consts';
import { Cart, Login, Profile } from '@/utils/icons';
import LanguageSwitcher from './nav/LanguageSwitcher';
import WithLink from '../elements/withLink';
import { signOutUser } from '@/utils/firebase/firebase.utils';

function Header() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const cart = useStore((store) => store.cart);
  const lang = useStore((store) => store.currentLanguage);
  const resetStore = useStore((store) => store.resetStore);
  const currentUser = useStore((store) => store.currentUser);
  const global = get(TRANSLATIONS, 'global');

  const toggleDrawer = () => {
    setOpenDrawer((state) => !state);
  };

  const getCartCounterLeft = () => {
    return cart.length > 9 ? 'left-3' : 'left-4';
  };

  return (
    <header className="w-full h-16 relative bg-zinc-100 flex justify-center z-10">
      <div className="w-[calc(100%-1rem)] md:w-[calc(100%-5rem)] xl:w-[calc(100%-15rem)] flex justify-between items-center">
        <div className="flex">
          <Link to="/" className="relative">
            <LogoComponent size={LOGO_SIZE_SM} />
          </Link>
          <LanguageSwitcher />
        </div>
        <div className="flex relative">
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-zinc-200"
          >
            <Cart w={23} h={23} c="#000" />
            <div
              className={`${getCartCounterLeft()} absolute top-4 text-center text-black text-xs font-normal leading-3`}
            >
              {cart.length}
            </div>
          </Link>
          <button
            onClick={toggleDrawer}
            className="ml-1 rounded-full p-2 cursor-pointer hover:bg-zinc-200"
            type="button"
          >
            <Profile w={24} h={24} />
          </button>
          <div
            className={`${
              openDrawer ? 'block' : 'hidden'
            } absolute flex z-[1] bg-zinc-100 p-3 border-t-[1px] border-zinc-400 w-[140px] -left-12 top-[52px]`}
          >
            {currentUser ? (
              <div>
                <div className="text-bold mb-3">
                  {currentUser['displayName']}
                </div>
                <button
                  className="flex"
                  onClick={() => {
                    resetStore();
                    signOutUser();
                  }}
                  type="button"
                >
                  {get(global.header.logout, lang)}
                  <div className="ml-3">
                    <Login w={23} h={23} />
                  </div>
                </button>
              </div>
            ) : (
              <WithLink href="/login">
                <button className="flex" type="button">
                  <span className="mr-3">{get(global.header.login, lang)}</span>
                  <Login w={23} h={23} />
                </button>
              </WithLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
