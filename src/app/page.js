
import React from 'react'

import TopFilter from './components/TopFilter'

import HeroSlider from './components/HeroSlider'

import Landing from './pages/Landing'
import Header from './components/Header'

function page() {
  return (
    <div>
      <Header/>
      <HeroSlider/>
 <div className='container mx-auto px-4'>
      <TopFilter />
      <Landing />

    </div>
    </div>
   
  )
}

export default page
