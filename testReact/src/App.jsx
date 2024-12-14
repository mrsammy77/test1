
import React from 'react'

import { Route, Routes } from 'react-router'
import Home from './Component/Home/Home'
import Contect from './Component/Contect/Contect'
import Productha from './Component/Productha/Productha'

import { Swiper, SwiperSlide } from 'swiper/react';




const App = () => {
  return (


<>

<div>
  <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="Contect" element={<Contect/>}/>
    <Route path ="Product" element={<Productha/>}/>
  </Routes>
</div>

    <div>
     
    </div>
</>
  )
}

export default App
