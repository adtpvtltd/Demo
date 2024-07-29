import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Jewelry from './components/Jewelry'
import CategoryBar from './components/CategoryBar'
import TopCollection from './components/collection/Collection'
import PromoBanner from './components/PromoBanner'
import ServiceBar from './components/ServiceBar'
import CombinedComponent from './components/Carousal'
import Layout from './components/Layout'
import AdBanner from './components/Adbanner'
import Social from './components/Social'
import Footer from './components/Footer'
import Header from './components/Header'

function Home() {
  return (
    <>
    <Header/>
    <Navbar/>
    <CategoryBar/>
    <Banner/>
    <Jewelry/>
    <TopCollection/>
    <PromoBanner/>
    <ServiceBar/>
   <CombinedComponent/>
  <Layout/>
  <AdBanner/>
  <Social/>
  <Footer/>
    </>
  )
}

export default Home
