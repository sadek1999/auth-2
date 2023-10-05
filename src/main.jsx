import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Main from './components/Main.jsx';
import Singup from './components/Singup.jsx';
import SingIn from './components/SingIn.jsx';
import AuthProvider from './components/AuthProvider.jsx';
import Profile from './components/Profile.jsx';
import Private from './components/Private.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/singup',
        element:<Singup></Singup>
      },
      {
        path:"/singin",
        element:<SingIn></SingIn>
      },
      {
        path:'/profile',
        element:<Private><Profile></Profile></Private>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
