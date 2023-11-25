// libs
import { useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// components
import NotFound from '@/components/error/404';
import HomePage from '@/components/home/HomePage';
import ProductsPage from '@/components/products/ProductsPage.tsx';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase/firebase.utils';
import { useStore } from './store';
import ProtectedRoute from './components/auth/ProtectedRoute';
import PublicRoute from './components/auth/PublicRoute';

function App() {
  const loginUser = useStore((store) => store.loginUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      loginUser(user);
      return redirect('/products');
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Router = createBrowserRouter([
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
          <ProductsPage />
        </ProtectedRoute>
      ),
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <div className="App w-screen h-screen">
      <RouterProvider router={Router} />
      <Toaster />
    </div>
  );
}

export default App;
