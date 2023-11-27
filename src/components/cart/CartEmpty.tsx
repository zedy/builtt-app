// libs
import { get } from 'lodash';

// components
import { Cart, Expressionless } from '@/utils/icons';
import { TRANSLATIONS } from '@/utils/consts';
import { useStore } from '@/store';
import Button from '../elements/Button.component';
import WithLink from '../elements/withLink';

function CartEmpty() {
  const lang = useStore((store) => store.currentLanguage);
  const local = get(TRANSLATIONS, '/cart');

  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="relative flex flex-col items-center">
          <Cart w={250} h={250} c="#000" />
          <div className="absolute top-24 left-18 animate-bounce">
            <Expressionless w={120} h={120} />
          </div>
          <h2 className="w-full text-center text-3xl">
            {get(local.empty.h2, lang)}
          </h2>
          <div className="mt-9 w-full">
            <WithLink href="/">
              <Button type="button">{get(local.empty.button, lang)}</Button>
            </WithLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartEmpty;
