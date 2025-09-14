import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";
import Root from './assets/Components/Root/Root.jsx';
import ErrorPage from './assets/Components/ErrorPage/ErrorPage.jsx';
import Home from './assets/Components/Home/Home.jsx';
import BookDetail from './assets/Components/BookDetail/BookDetail.jsx';
import ListedBookItem from './assets/Components/ListedBookItems/ListedBookItem.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/listedBook',
        element: <ListedBookItem></ListedBookItem>,
       loader: ()=> fetch('./booksData.json').then(res => res.json())
      },
      {
        path: '/book/:bookId',
        element:<BookDetail></BookDetail>,
        loader: ()=> fetch('./booksData.json').then(res => res.json())
      }
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
