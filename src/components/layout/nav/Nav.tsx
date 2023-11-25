// libs
import { Link, useLocation } from 'react-router-dom';
import { memo, useContext, type ReactNode } from 'react';

// components
import {
  MenuIconHome,
  MenuIconBoxes,
  MenuIconCart,
  MenuIconProfile,
  MenuIconCog,
  MenuIconHelp,
  MenuIconLogout,
  LogoMain,
  CloseIcon,
} from '@/utils/Icons';
import { Active, Natural400 } from '@/utils/consts';
import NavVideo from './NavVideo';
import { MenuContext } from '@/context/menuContext';
import { MontiWidget } from '@/modules/trymonti/MontiStatus';

type LinkHeadingProps = {
  name: string;
};

type NavProps = {
  position: string;
};

interface LinkProps extends LinkHeadingProps {
  to: string;
  icon: (c: string) => ReactNode;
}

function LinkComponent({ to, name, icon }: LinkProps) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <div
      className={`w-full mb-2 flex border-r-4 ${
        isActive
          ? 'border-green-700 bg-pail-green'
          : 'border-transparent bg-transparent hover:bg-neutral-100'
      }`}
    >
      <Link
        to={to}
        className="w-full h-11 px-6 flex items-center gap-2.5 text-neutral-700 text-sm font-normal font-['Public Sans'] leading-snug"
      >
        <div className="w-3.5 h-3.5 relative">
          {icon(isActive ? Active : Natural400)}
        </div>
        <span
          className={`pt-1 text-sm font-normal font-['Public Sans'] leading-snug ${
            isActive ? 'text-green-700' : 'text-neutral-700'
          }`}
        >
          {name}
        </span>
      </Link>
    </div>
  );
}

function LinkHeading({ name }: LinkHeadingProps) {
  return (
    <div className="self-stretch h-11 px-6 py-3 bg-white flex-col justify-start items-start gap-2.5 flex">
      <div className="text-neutral-400 text-xs font-medium font-['Public Sans'] leading-tight">
        {name}
      </div>
    </div>
  );
}

function NavHeader({ position }: NavProps) {
  const { setIsOpen } = useContext(MenuContext);

  const handleMenuToggle = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div className="w-full lg:p-5 max-lg:p-6 items-center gap-3 flex justify-between">
      <div className="relative">{LogoMain(position === 'top' ? 118 : 84)}</div>
      {position === 'top' && (
        <button className="lg:hidden" type="button" onClick={handleMenuToggle}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
}

function NavMontiWidget({ position }: NavProps) {
  if (position === 'left') return <div />;
  return <MontiWidget />;
}

function Nav({ position }: NavProps) {
  return (
    <div className="self-stretch flex-col justify-start items-start gap-2 flex">
      <NavHeader position={position} />
      <NavMontiWidget position={position} />
      <LinkHeading name="Dashboard" />
      <LinkComponent to="/" name="Dashboard" icon={MenuIconHome} />
      <LinkHeading name="Products & Orders" />
      <LinkComponent to="/products" name="Products" icon={MenuIconCart} />
      <LinkComponent to="/orders" name="Orders" icon={MenuIconBoxes} />
      <LinkHeading name="Account" />
      <LinkComponent to="/account" name="Account" icon={MenuIconProfile} />
      <LinkComponent to="/settings" name="Settings" icon={MenuIconCog} />
      <LinkComponent to="/help" name="Help" icon={MenuIconHelp} />
      <LinkComponent to="/logout" name="Logout" icon={MenuIconLogout} />
      <NavVideo />
    </div>
  );
}

export default memo(Nav);
