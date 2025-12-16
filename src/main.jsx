import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Decoration from './Decoration.jsx'
import PageWeddingDecorations from './Pages/PageWeddingDecorations.jsx'
import MandapamDecorationPage from './Pages/MandapamDecorationPage.jsx'
import HaldiDecorationPage from './Pages/HaldiDecorationPage.jsx'
import PandiriDesignsPage from './Pages/PandiriDesignsPage.jsx'
import BirthdayPartysPage from './Pages/BirthdayPartysPage.jsx'

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
        path: "/mandapam-decoration",
        element: <MandapamDecorationPage />,
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
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
