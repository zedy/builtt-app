// libs
import { useLocation } from 'react-router-dom';
import { get } from 'lodash';

// components
import { useStore } from '@/store';
import { TRANSLATIONS } from '@/utils/consts';

function Breadcrumbs() {
  const location = useLocation();
  const cart = useStore((store) => store.products);
  const lang = useStore((store) => store.currentLanguage);
  const module = get(TRANSLATIONS, location.pathname);

  return (
    <div className="m mt-12 mb-10 flex items-baseline">
      <h1 className="text-gray-900 text-xl font-bold font-['Arial'] leading-normal tracking-tight">
        {module.h1[lang]}
      </h1>
      {location.pathname === '/' && (
        <span className="opacity-50 text-black text-base font-normal font-['Arial'] leading-snug ml-2">
          {cart.length} {module.count[lang]}
        </span>
      )}
    </div>
  );
}

export default Breadcrumbs;
