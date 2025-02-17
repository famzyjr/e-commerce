import React from 'react'
import Hero from '../Components/hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/offers/Offers'
import NewCollections from '../Components/newcollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop