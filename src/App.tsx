// libs
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components
import NotFound from '@/modules/error/404';
import Home from '@/modules/home/Home';

function App() {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
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
