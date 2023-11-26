// libs
import { memo, useState } from 'react';
import toast from 'react-hot-toast';
import { get } from 'lodash';

// components
import { Order, useStore } from '@/store';
import { ProductObject } from '@/utils/firebase/firebase.utils';
import WithLink from '@/components/elements/withLink';
import { Dash, Plus } from '@/utils/icons';
import { parsePriceWithDecimal } from '@/utils/helpers';
import { TRANSLATIONS } from '@/utils/consts';

type Props = {
  cart: Order;
} & ProductObject;

function CartItem(props: Props) {
  const { title, image, price, id, stock, cart } = props;
  const removeItemFromCart = useStore((store) => store.removeItemFromCart);
  const updateItemCount = useStore((store) => store.updateItemCount);
  const [counter, setCounter] = useState<number>(cart.count);
  const lang = useStore((store) => store.currentLanguage);
  const productPrice = cart.count * cart.price;
  const global = get(TRANSLATIONS, 'global');
  const local = get(TRANSLATIONS, '/cart');

  const counterDecrease = () => {
    if (counter === 1) {
      toast.error(get(global.minStock, lang));
      return;
    }

    setCounter((state) => state - 1);
    updateItemCount(id, 'dec');
  };

  const counterIncrease = () => {
    if (counter === stock) {
      toast.dismiss();
      toast.error(get(global.maxStock, lang));
    }

    setCounter((state) => state + 1);
    updateItemCount(id, 'inc');
  };

  return (
    <div className="cart-item w-full flex justify-between border-b-[1px] border-gray-900 py-5">
      <div className="product-details flex">
        <WithLink href={`/product/${id}`}>
          <img
            src={image.default}
            alt={get(title, lang)}
            className="w-full max-w-[183px] z-20 h-full transition-all ease-in-out"
          />
        </WithLink>
        <div className="product-info bg-white pl-9 flex flex-col justify-between">
          <div>
            <WithLink href={`/product/${id}`}>
              <div className="w-full text-gray-900 text-xl font-bold font-['Arial'] leading-normal pr-9">
                {get(title, lang)}
              </div>
            </WithLink>
            <div className="price-per-item">
              <p className="text-xs text-neutral-600 pt-2">
                {price} RSD {get(local.item.piece, lang)}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="h-8 justify-start items-start gap-1 inline-flex mt-3 md:hidden">
              <div className="text-black text-2xl font-normal font-['Arial'] leading-normal">
                {parsePriceWithDecimal(productPrice)}
              </div>
              <div className="text-black text-xs font-normal font-['Arial'] leading-none tracking-wide">
                RSD
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex bg-transparent rounded-full h-9 justify-center items-center border-[1px] border-gray-900 overflow-hidden">
                <button
                  type="button"
                  onClick={counterDecrease}
                  className="px-3 h-full transition-all bg-transparent hover:bg-zinc-200"
                >
                  <Dash w={15} h={15} />
                </button>
                <span className="px-3">{counter}</span>
                <button
                  type="button"
                  onClick={counterIncrease}
                  className="px-3 h-full transition-all bg-transparent hover:bg-zinc-200"
                >
                  <Plus w={15} h={15} />
                </button>
              </div>
              <button
                type="button"
                disabled={stock < 1}
                onClick={() => removeItemFromCart(id)}
                className="ml-9 pb-[2px] border-b-[1px] border-gray-900 transition-all duration-300 hover:text-gray-600 hover:border-gray-600"
              >
                {get(local.item.button, lang)}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-8 justify-start items-start gap-1 inline-flex">
        <div className="text-black text-2xl font-normal font-['Arial'] leading-normal">
          {parsePriceWithDecimal(productPrice)}
        </div>
        <div className="text-black text-xs font-normal font-['Arial'] leading-none tracking-wide">
          RSD
        </div>
      </div>
    </div>
  );
}

export default memo(CartItem);
