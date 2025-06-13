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
import Accident from './Accident.jsx'
import Fainting from './Fainting.jsx'
import Allergy from './Allergy.jsx'
import Asthma from './Asthma.jsx'
import Drowning from './Drowning.jsx'
import Fracture from './Fracture.jsx'
import Hypothermia from './Hypothermia'
import ElectricShock from './Electric.jsx'
import Head from './Head.jsx'
import Heart from './Heart.jsx'
import Nosebleed from './Nosebleed.jsx'
import Poisoning from './Poisoning.jsx'
import Seizure from './Seizure.jsx'
import Sprain from './Sprain.jsx'
import Stroke from './Stroke.jsx'
import Heat from './Heat.jsx'

const router=createBrowserRouter([
  {path:'/', element:<App/>},
  {path:'/burns', element:<Burns/>},
  {path:'/bleeding',element:<Bleeding/>},
  {path:'/cpr',element:<CPR/>},
  {path:'/snakebite',element:<Snake/>},
  {path:'/dogbite',element:<Dog/>},
  {path:'/choking',element:<Choking/>},
  {path:'/accident',element:<Accident/>},
  {path:'/fainting',element:<Fainting/>},
  {path:'/allergy',element:<Allergy/>},
  {path:'/asthma',element: <Asthma/>},
  {path:'/drowning',element: <Drowning/>},
  {path: '/fracture',element: <Fracture/>},
  {path:'/hypothermia',element: <Hypothermia/>},
  {path: '/electric-shock',element: <ElectricShock/>},
  {path: '/head-injury',element: <Head/>},
  {path: '/heatstroke',element:<Heat/>},
  {path: '/heartstroke', element:<Heart/> },
  {path: '/nosebleed' ,element: <Nosebleed/>},
  {path: 'poisoning', element: <Poisoning/>},
  {path: '/seizure' , element: <Seizure/>},
  {path: '/sprain', element:<Sprain/>}
  ,{path: '/stroke', element: <Stroke/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
