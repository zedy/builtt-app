// libs
import { memo, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import toast from 'react-hot-toast';

// components
import { get } from 'lodash';
import { useStore } from '@/store';
import { ProductObject } from '@/utils/firebase/firebase.utils';
import ProductImage from './ProductImage';
import WithLink from '@/components/elements/withLink';
import { Cart, Dash, Plus } from '@/utils/icons';
import { TRANSLATIONS } from '@/utils/consts';

// TODO
/**
 * Separate counter logic into separate component
 * Clean up
 * Add callback to fn
 */
function ProductItem(props: ProductObject) {
  const setCart = useStore((store) => store.setCart);
  const lang = useStore((store) => store.currentLanguage);
  const { width } = useWindowSize();
  const [counter, setCounter] = useState<number>(1);
  const [hover, setHover] = useState<boolean>(false);
  const { title, image, price, id, stock } = props;
  const module = get(TRANSLATIONS, 'global');

  const addToCart = () => {
    setCart({
      id,
      count: counter,
      price,
    });
  };

  const counterDecrease = () => {
    if (counter === 1) {
      return;
    }

    setCounter((state) => state - 1);
  };

  const counterIncrease = () => {
    if (counter === stock) {
      toast.dismiss();
      toast.error(get(module.maxStock, lang));
      return;
    }

    setCounter((state) => state + 1);
  };

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="product-item w-full"
    >
      <WithLink href={`/product/${id}`}>
        <ProductImage altText={get(title, lang)} image={image} hover={hover} />
      </WithLink>
      <div className="product-content relative z-50">
        <div className="product-actions relative w-full">
          <div
            className={`flex justify-center absolute left-0 transition-all duration-300 z-0 opacity-0 -bottom-8 ${
              hover || width < 1024 ? 'bottom-8 opacity-100 z-50' : ''
            }`}
          >
            <div className="flex bg-zinc-200 rounded-full h-9 justify-center items-center overflow-hidden">
              <button
                type="button"
                onClick={counterDecrease}
                className="px-3 h-full transition-all bg-transparent hover:bg-zinc-100"
              >
                <Dash w={15} h={15} />
              </button>
              <span className="px-3">{counter}</span>
              <button
                type="button"
                onClick={counterIncrease}
                className="px-3 h-full transition-all bg-transparent hover:bg-zinc-100"
              >
                <Plus w={15} h={15} />
              </button>
            </div>
            <button
              type="button"
              disabled={stock < 1}
              onClick={addToCart}
              className={`${
                stock > 0 ? 'bg-gray-900' : 'bg-gray-600 cursor-not-allowed'
              } rounded-full w-9 flex justify-center items-center ml-2`}
            >
              <Cart w={21} h={21} c="#fff" />
            </button>
          </div>
        </div>
        <div className="product-info bg-white">
          <WithLink href={`/product/${id}`}>
            <div className="w-full text-gray-900 text-lg font-bold font-['Arial'] leading-normal mt-3">
              {get(title, lang)}
            </div>
          </WithLink>
          <div className="w-20 h-8 justify-start items-start gap-1 inline-flex mt-3">
            <div className="text-black text-2xl font-normal font-['Arial'] leading-normal">
              {price}
            </div>
            <div className="text-black text-xs font-normal font-['Arial'] leading-none tracking-wide">
              RSD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProductItem);
