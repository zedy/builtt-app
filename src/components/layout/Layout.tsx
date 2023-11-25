// libs
import { Suspense } from 'react';

// components
import Header from './Header';
import Main from './Main';

function Layout() {
  return (
    <div className="w-full">
      <Header />
      <Suspense fallback="Loading ...">
        <Main />
      </Suspense>
    </div>
  );
}

export default Layout;
