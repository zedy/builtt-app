/* eslint-disable import/no-extraneous-dependencies */
// libs
import { HashRouter, Route, Routes } from 'react-router-dom';

// components
import Home from './modules/home/Home';
import NotFound from './modules/error/404';

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
