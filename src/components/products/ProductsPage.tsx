// libs
import { useQuery } from '@tanstack/react-query';

// components
import { ProductObject, getProducts } from '@/utils/firebase/firebase.utils';
import ProductsList from './ProductsList';
import { useStore } from '@/store';
import ProductError from './ProductError';

function ProductsPage() {
  const setProducts = useStore((store) => store.setProducts);
  const products = useStore((store) => store.products);

  const { isError, data } = useQuery({
    queryFn: () => getProducts(),
    queryKey: ['products'],
    select: (items) => items.sort((a, b) => b.title.sr - a.title.sr),
    suspense: true,
    enabled: !(products && products.length > 0),
  }) as { data: ProductObject[] | undefined; isError: boolean };

  if (isError) return <ProductError />;

  if (data && data.length > 0) {
    setProducts(data);
  }

  return <ProductsList products={products} />;
}

export default ProductsPage;
