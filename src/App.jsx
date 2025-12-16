
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Decoration from './Decoration.jsx';
import PageWeddingDecorations from './Pages/PageWeddingDecorations.jsx';
import NavBar from './components/NavBar.jsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Decoration />} />
        <Route path="/wedding-decorations" element={<PageWeddingDecorations />} />
      </Routes>
    </>
  );
};

export default App;

