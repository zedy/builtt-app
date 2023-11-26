// libs
import { memo } from 'react';

// components
import { ProductObject } from '@/utils/firebase/firebase.utils';
import ProductImage from './ProductImage';
import WithLink from '@/components/elements/withLink';

function ProductItem(props: ProductObject) {
  const { title, image, price, id } = props;

  return (
    <div className="product-item w-full">
      <WithLink id={id}>
        <ProductImage altText={title.sr} image={image} />
      </WithLink>
      <WithLink id={id}>
        <div className="w-full text-gray-900 text-lg font-bold font-['Arial'] leading-normal mt-3">
          {title.sr}
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
  );
}

export default memo(ProductItem);
