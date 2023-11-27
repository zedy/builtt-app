// components
import { ProductObject } from '@/utils/firebase/firebase.utils';
import ProductItem from './ProductItem';

type Props = {
  products: ProductObject[];
};

function ProductsList({ products }: Props) {
  return (
    <div className="w-full grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
      {products.map((product: ProductObject) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductsList;
