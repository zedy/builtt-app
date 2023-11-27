// libs
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { User as AuthUser } from 'firebase/auth';
import { Toaster } from 'react-hot-toast';

// components
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  User,
} from './utils/firebase/firebase.utils';
import { useStore } from './store';
import Router from './router/Router';

function App() {
  const loginUser = useStore((store) => store.loginUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user: AuthUser) => {
      let userData = null;

      if (user) {
        userData = (await createUserDocumentFromAuth(user)) || null;
      }

      loginUser(userData as User);
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App w-screen h-screen overflow-x-hidden font-nunito">
      <RouterProvider router={Router} />
      <Toaster />
    </div>
  );
}

export default App;
