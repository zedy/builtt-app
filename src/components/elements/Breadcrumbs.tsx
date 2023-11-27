// libs
import { useLocation } from 'react-router-dom';
import { get, toInteger } from 'lodash';

// components
import { useStore } from '@/store';
import { TRANSLATIONS } from '@/utils/consts';
import { ProductObject } from '@/utils/firebase/firebase.utils';

function Breadcrumbs() {
  const location = useLocation();
  const cart = useStore((store) => store.products);
  const lang = useStore((store) => store.currentLanguage);
  const localT = get(TRANSLATIONS, location.pathname);
  const products = useStore((store) => store.products);

  const getTitle = () => {
    // check if product page
    if (location.pathname.includes('/product/')) {
      const id: number = toInteger(location.pathname.replace('/product/', ''));
      const matchingProduct = products.find(
        (item: ProductObject) => item.id === id
      );

      const title = get(matchingProduct, `title.${lang}`);

      return title || 'This article does not exist';
    }

    return 'Unknown';
  };

  return (
    <div className="m mt-12 mb-10 flex items-baseline">
      <h1 className="text-gray-900 text-xl font-bold leading-normal tracking-tight">
        {localT ? localT.h1[lang] : getTitle()}
      </h1>
      {location.pathname === '/' && (
        <span className="opacity-50 text-black text-base font-normal leading-snug ml-2">
          {cart.length} {localT.count[lang]}
        </span>
      )}
    </div>
  );
}

export default Breadcrumbs;
