import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import HomePage from './pages/HomePage.tsx';
import Articals from './pages/Articals.tsx';
import ArticaleA from './pages/ArticaleA.tsx';
import ArticaleB from './pages/ArticaleB.tsx';
import ArticaleC from './pages/ArticaleC.tsx';
import ArticaleD from './pages/ArticaleD.tsx';
import ArticaleE from './pages/ArticaleE.tsx';
import ArticaleF from './pages/ArticaleF.tsx';
import About from './pages/About.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'articals',
        element: <Articals />,
      },
      {
        path: '/articales/1',
        element: <ArticaleA />,
      },
      {
        path: 'articales/2',
        element: <ArticaleB />,
      },
      {
        path: 'articales/3',
        element: <ArticaleC />,
      },
      {
        path: 'articales/4',
        element: <ArticaleD />,
      },
      {
        path: 'articales/5',
        element: <ArticaleE />,
      },
      {
        path: 'articales/6',
        element: <ArticaleF />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
