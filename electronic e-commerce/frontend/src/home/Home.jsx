import React from 'react'
import './Home.css'
import Nav from '../components/nav/Nav'
import Banner from '../components/Banner'
import ProductSlider from '../ProductSlider/ProductSlider'
import BannerSection from '../banner/BannerSection'
import ProductList from '../components/products/ProductList'




function Home() {
  return (
    <div>
     <Nav/>
     <Banner/>
     <ProductSlider/>
     <BannerSection/>

     <section className='homeProducts'>
      <div className='container-fluid'>
        <h2>Popular Products</h2>

       <ProductList/>
      


      </div>
     </section>


     
    </div>
  )
}

export default Home
