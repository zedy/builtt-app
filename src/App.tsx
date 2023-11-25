// libs
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components
import NotFound from '@/components/error/404';
import Home from '@/components/home/Home';

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
