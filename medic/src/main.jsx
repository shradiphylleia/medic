import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './index.css'


import App from './App.jsx'
import Burns from './Burns.jsx'
import Bleeding from './Bleeding.jsx'
import CPR from './CPR.jsx'
import Snake from './Snake.jsx'
import Dog from './Dog.jsx'
import Choking from './Choking.jsx'
import Accident from './Accident.jsx';


const router=createBrowserRouter([
  {path:'/', element:<App/>},
  {path:'/burns', element:<Burns/>},
  {path:'/bleeding',element:<Bleeding/>},
  {path:'/cpr',element:<CPR/>},
  {path:'/snakebite',element:<Snake/>},
  {path:'/dogbite',element:<Dog/>},
  {path:'/choking',element:<Choking/>},
  {path:'/accident',element:<Accident/>}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
