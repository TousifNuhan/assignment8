import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Roott from './components/Roott/Roott';
import Home from './components/Home/Home';
import Listed from './components/Listed/Listed';
import Pages from './components/Pages/Pages';
import ErrorElement from './components/ErrorElement/ErrorElement';
import BookDetails from './components/BookDetails/BookDetails';
import DemoBook from './components/DemoBook/DemoBook';
import About from './components/About/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roott></Roott>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listedBooks",
        element: <Listed></Listed>,
        loader: () => fetch('/books.json')
      },
      {
        path: "/pagesToRead",
        element: <Pages></Pages>,
        loader: () => fetch('/books.json')
      },
      {
        path: "/demoBook",
        element: <DemoBook></DemoBook>,
      },
      {
        path: "/about",
        element:<About></About>,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
