import { Outlet } from 'react-router-dom';
import Breadcrumbs from '@/components/elements/Breadcrumbs';

function Main() {
  return (
    <main className="w-full h-full flex justify-center">
      <div className="w-full max-w-6xl">
        <Breadcrumbs />
        <Outlet />
      </div>
    </main>
  );
}

export default Main;
