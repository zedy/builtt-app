import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App';
import './index.css';
import ReactQueryProvider from './context/reactQuery';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <WrappedApp />
    </ReactQueryProvider>
  </React.StrictMode>
);
