// libs
import { useEffect } from 'react';
import { RouterProvider, redirect } from 'react-router-dom';
import { User } from 'firebase/auth';
import { Toaster } from 'react-hot-toast';

// components
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase/firebase.utils';
import { useStore } from './store';
import Router from './router/Router';

function App() {
  const loginUser = useStore((store) => store.loginUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      loginUser(user);
      return redirect('/products');
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App w-screen h-screen">
      <RouterProvider router={Router} />
      <Toaster />
    </div>
  );
}

export default App;
