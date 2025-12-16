
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Decoration from './Decoration.jsx';
import PageWeddingDecorations from './Pages/PageWeddingDecorations.jsx';
import MandapamDecorationPage from './Pages/MandapamDecorationPage.jsx';
import HaldiDecorationPage from './Pages/HaldiDecorationPage.jsx';
import PandiriDesignsPage from './Pages/PandiriDesignsPage.jsx';
import BirthdayPartysPage from './Pages/BirthdayPartysPage.jsx';
import NavBar from './components/NavBar.jsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Decoration />} />
        <Route path="/wedding-decorations" element={<PageWeddingDecorations />} />
        <Route path="/mandapam-decoration" element={<MandapamDecorationPage />} />
        <Route path="/haldi-decoration" element={<HaldiDecorationPage />} />
        <Route path="/pandiri-designs" element={<PandiriDesignsPage />} />
        <Route path="/birthday-partys" element={<BirthdayPartysPage />} />
      </Routes>
    </>
  );
};

export default App;

