import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Decoration from './Decoration.jsx'
import PageWeddingDecorations from './pages/PageWeddingDecorations.jsx';

import HaldiDecorationPage from './pages/HaldiDecorationPage.jsx';
import PandiriDesignsPage from './pages/PandiriDesignsPage.jsx';
import BirthdayPartysPage from './pages/BirthdayPartysPage.jsx';
import CradleCeremony from "./pages/CradleCeremony.jsx";
import BabyShowerPage from "./pages/BabyShowerPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Decoration />,
      },
      {
        path: "/wedding-decorations",
        element: <PageWeddingDecorations />,
      },
      {
        path: "/Cradle-Ceremony",
        element: <CradleCeremony />,
      },
      {
        path: "/haldi-decoration",
        element: <HaldiDecorationPage />,
      },
      {
        path: "/pandiri-designs",
        element: <PandiriDesignsPage />,
      },
      {
        path: "/birthday-partys",
        element: <BirthdayPartysPage />,
      },
      {
        path: "/baby-shower",
        element: <BabyShowerPage />,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
