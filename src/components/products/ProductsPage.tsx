import { sortBy } from 'lodash';
import { useEffect, useState } from 'react';
import { ProductObject, getProducts } from '@/utils/firebase/firebase.utils';
import ProductItem from './ProductItem';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(sortBy(data, ['id']));
    }
    fetchData();
  }, []);

  return (
    <div className="w-full grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
      {products.map((product: ProductObject) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductsPage;
