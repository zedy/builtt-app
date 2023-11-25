// libs
import { useContext } from 'react';

// components
import { MenuContext } from '@/context/menuContext';
import Nav from './Nav';

type Props = {
  isOpen: boolean;
  position: 'left' | 'top';
};

const asideDefaultClasses =
  'absolute transition-all duration-300 bg-white z-20 h-full flex-col justify-start items-start inline-flex border-r border-r-zinc-100';

const positionValues = {
  top: {
    open: 'top-0',
    closed: '-top-[100%]',
  },
  left: {
    open: '-left-64',
    closed: 'left-0',
  },
};

function Aside({ position, isOpen }: Props) {
  return (
    <aside
      className={`${
        isOpen ? positionValues[position].open : positionValues[position].closed
      } ${
        position === 'left' ? 'w-64 max-lg:-left-64' : 'w-full lg:hidden'
      } ${asideDefaultClasses}`}
    >
      <Nav position={position} />
    </aside>
  );
}

function SideNav() {
  const { isOpen } = useContext(MenuContext);

  return (
    <>
      <Aside isOpen={isOpen} position="left" />
      <Aside isOpen={isOpen} position="top" />
    </>
  );
}

export default SideNav;
