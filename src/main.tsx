import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import Home from './routes/Home.tsx'

const router = createBrowserRouter([
  {
    // Colocar o componente principal que vai receber os componentes secundários
    path: "/",
    element: <App />,
      // Configuração de cada page
    children: [
      {
        path: "/",
        element: <Home />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
