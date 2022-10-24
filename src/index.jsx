import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Root from './routes/root.jsx';
import ErrorPage from './error-page.jsx';
import MVP from './routes/mvp.jsx';
import SDC from './routes/sdc.jsx';
import BlueOcean from './routes/blueOcean.jsx';
import Photography from './routes/photography.jsx';
import '../public/index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'mvp',
        element: <MVP />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'sdc',
        element: <SDC />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'BlueOcean',
        element: <BlueOcean />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'Photography',
        element: <Photography />,
        errorElement: <ErrorPage />,
      },
    ]
  },
]);

  const root = createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
