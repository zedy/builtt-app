// libs
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components
import NotFound from '@/components/error/404';
import HomePage from '@/components/home/HomePage';
import ProductsPage from '@/components/products/ProductsPage.tsx';

function App() {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/products',
      element: <ProductsPage />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <div className="App w-screen h-screen">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
