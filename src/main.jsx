import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./error-page";
import Root from "./routes/Root.jsx";
import Gameboard from './routes/Gameboard.jsx';
import { Borrow } from './routes/Borrow';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage />,
  },
  {
    path: "boardgame",
    element: <Gameboard />,
    errorElement:<ErrorPage />
  },
  {
    path:"borrow",
    element:<Borrow />,
    errorElement:<ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
