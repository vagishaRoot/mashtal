import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import HomePage from "../pages/HomePage"
import AboutUs from '../pages/AboutUs'
import Page404 from '../pages/Page404'
import Footer from '../components/Footer'
import LiveStreaming from '../pages/LiveStreaming'
import Exhibition from '../pages/Exhibition'
import Contact from '../pages/Contact'
import Registration from '../pages/Registration'
import VideoLiveStreaming from '../pages/VideoLiveStreaming'
import StallBooking from '../pages/StallBooking'
import StoreList from '../pages/StoreList'
import BookStalls from '../pages/BookStalls'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" exact element={<><Header /><HomePage /><Footer /></>} />
        <Route path="/about_us" exact element={<><Header /><AboutUs /><Footer /></>} />
        <Route path="/exhibition" exact element={<><Header /><Exhibition /><Footer /></>} />
        <Route path="/live_streaming" exact element={<><Header /><LiveStreaming /><Footer /></>} />
        <Route path="/video_live_streaming" exact element={<><Header /><VideoLiveStreaming /><Footer /></>} />
        <Route path="/contact" exact element={<><Header /><Contact /><Footer /></>} />
        <Route path="/register" exact element={<><Header /><Registration /></>} />
        <Route path="/stall_booking" exact element={<><Header /><StallBooking /><Footer /></>} />
        <Route path="/store_list" exact element={<><Header /><StoreList /><Footer /></>} />
        <Route path="/book_stalls" exact element={<><Header /><BookStalls /><Footer /></>} />
        <Route path="/*"  element={<><Page404 /></>} />
    </Routes>
  )
}

export default Routers