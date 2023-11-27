import { Outlet } from 'react-router-dom';
import Breadcrumbs from '@/components/elements/Breadcrumbs';

function Main() {
  return (
    <main className="w-full h-full flex justify-center">
      <div className="xs:w-[calc(100%-1rem)] md:w-[calc(100%-5rem)] xl:w-[calc(100%-15rem)] max-w-[1680px]">
        <Breadcrumbs />
        <Outlet />
      </div>
    </main>
  );
}

export default Main;
