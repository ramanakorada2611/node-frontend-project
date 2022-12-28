import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './../Pages/Home'
import { Bollywood } from './../Pages/Bollywood'
import { Hollywood } from './../Pages/Hollywood'
import { Technology } from './../Pages/Technology'
import {  Food  } from './../Pages/Food'
import { Fitness } from './../Pages/Fitness'
import { Notfound } from './../Pages/Notfound'
import Navigatepage from './Navigatepage'
export const Approuter = () => {
  return (
    <>
         <BrowserRouter>
          <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/Bollywood' element={<Bollywood/>}/>
           <Route path='/Hollywood' element ={<Hollywood/>}/>
           <Route path='/Technology' element={<Technology/>}/>
           <Route path='/Food' element ={<Food/>}/>
           <Route path='/Fitness' element={<Fitness/>}/>
           <Route path='/Navigatepage' element={<Navigatepage/>}/>
           <Route path='*' element ={<Notfound/>}/>
           </Routes>
         </BrowserRouter>
    </>
  )
}
