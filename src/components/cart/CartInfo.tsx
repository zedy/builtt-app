// libs
import toast from 'react-hot-toast';
import { get } from 'lodash';

// components
import { Order, useStore } from '@/store';
import { parsePriceWithDecimal } from '@/utils/helpers';
import Button from '@/components/elements/Button.component';
import WithLink from '../elements/withLink';
import { TRANSLATIONS } from '@/utils/consts';

function CartInfo() {
  const currentUser = useStore((store) => store.currentUser);
  const cart = useStore((store) => store.cart);
  const lang = useStore((store) => store.currentLanguage);
  const module = get(TRANSLATIONS, '/cart');

  const totalPrice = cart
    .map((item: Order) => item.price * item.count)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 1);

  const handlePay = () => {
    toast.success(get(module.info.payed, lang));
  };

  return (
    <div className="bg-neutral-100 p-6 w-full lg:w-1/3 mt-5 lg:mt-0 lg:ml-14 min-w-[350px]">
      <h4 className="text-black text-xl font-bold leading-normal mb-7">
        {get(module.info.h4, lang)}
      </h4>
      <div>
        <div className="flex justify-between mb-3">
          <span className="text-black text-xl font-normal leading-7">
            {get(module.info.row1, lang)}
          </span>
          <div className="flex align-top">
            <span className="mr-1 text-black text-xl font-normal leading-normal">
              {parsePriceWithDecimal(totalPrice)}
            </span>
            <span className="text-right text-black text-xs font-normal leading-3 tracking-tight">
              RSD
            </span>
          </div>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-black text-xl font-normal leading-7">
            {get(module.info.row2, lang)}
          </span>
          <div className="flex align-top">
            <span className="mr-1 text-black text-lg font-normal leading-normal">
              0{/* -{parsePriceWithDecimal(12222)} */}
            </span>
            <span className="text-right text-black text-xs font-normal leading-3 tracking-tight">
              RSD
            </span>
          </div>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-black text-lg font-normal leading-7">
            {get(module.info.row3a, lang)} Daily Express *
          </span>
          <div className="flex align-top">
            <span className="mr-1 text-black text-lg font-normal leading-normal">
              {get(module.info.row3b, lang)}
            </span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-neutral-400 mb-4" />
        <div className="flex justify-between mb-3">
          <span className="text-black text-lg font-normal leading-7">
            {get(module.info.row4, lang)}
          </span>
          <div className="flex align-top">
            <span className="mr-1 text-black text-lg font-normal leading-normal">
              {parsePriceWithDecimal(totalPrice)}
            </span>
            <span className="text-right text-black text-xs font-normal leading-3 tracking-tight">
              RSD
            </span>
          </div>
        </div>
        <div className="text-black text-xs font-normal leading-3 tracking-tight">
          {get(module.info.row5, lang)}
        </div>
        <div className="w-full mt-8">
          {!currentUser ? (
            <WithLink href="/login">
              <Button type="button">
                {get(module.info.buttonNoAuth, lang)}
              </Button>
            </WithLink>
          ) : (
            <Button onClick={handlePay} type="button">
              {get(module.info.buttonAuth, lang)}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartInfo;
