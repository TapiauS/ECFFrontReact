import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import {Index} from "./routes/Index.jsx";
import ErrorPage from "./error-page";
import Root , { loader as rootLoader } from "./routes/Root.jsx";
import Gameboard from './routes/Gameboard.jsx';
import { Borrow } from './routes/Borrow';
import {SearchResult} from './routes/SearchResult'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage />,
    loader: rootLoader,
    children:[
      {
        path:"/",
        element:<Index />,

      },
      {
        path:"borrow",
        element:<Borrow />,
      },
      {
        path:"boardgame",
        element:<Gameboard />
      },
      {
        path: "card/:cardId",
        loader: rootLoader,
        element: <SearchResult />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
