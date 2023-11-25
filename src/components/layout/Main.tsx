import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <main className="w-full h-full flex justify-center">
      <div className="w-full max-w-6xl">
        <Outlet />
      </div>
    </main>
  );
}

export default Main;
