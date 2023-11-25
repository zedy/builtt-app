import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <main className="w-full">
      <Outlet />
    </main>
  );
}

export default Main;
