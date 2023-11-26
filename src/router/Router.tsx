// libs
import { createBrowserRouter } from 'react-router-dom';

// components
import NotFound from '@/components/error/404';
import HomePage from '@/components/home/HomePage';
import ProductsPage from '@/components/products/ProductsPage.tsx';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import PublicRoute from '@/components/auth/PublicRoute';
import Layout from '@/components/layout/Layout';
import CartPage from '@/components/cart/CartPage';

const BrowserRouter = createBrowserRouter([
  {
    path: '/login',
    element: (
      <PublicRoute>
        <HomePage />
      </PublicRoute>
    ),
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: <ProductsPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default BrowserRouter;