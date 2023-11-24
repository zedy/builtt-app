// libs
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components
import NotFound from '@/modules/error/404';
import LoginPage from '@/modules/login/LoginPage';

function App() {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
