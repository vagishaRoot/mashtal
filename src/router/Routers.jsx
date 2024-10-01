import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import HomePage from "../pages/HomePage"
import AboutUs from '../pages/AboutUs'
import Page404 from '../pages/Page404'
import Footer from '../components/Footer'
import LiveStreaming from '../pages/LiveStreaming'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" exact element={<><Header /><HomePage /><Footer /></>} />
        <Route path="/about_us" exact element={<><Header /><AboutUs /><Footer /></>} />
        <Route path="/live_streaming" exact element={<><Header /><LiveStreaming /><Footer /></>} />
        <Route path="/*"  element={<><Page404 /></>} />
    </Routes>
  )
}

export default Routers