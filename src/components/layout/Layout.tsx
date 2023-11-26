// libs
import { Suspense } from 'react';

// components
import Header from './Header';
import Main from './Main';
import { LoadingPage } from '../elements/Loading.component';

function Layout() {
  return (
    <div className="w-full">
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <Main />
      </Suspense>
    </div>
  );
}

export default Layout;
