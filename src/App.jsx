import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';

const App = () => {
  return (
    <>
      <NavBar />
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default App;
