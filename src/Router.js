import React from 'react'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
  </Routes>
)
}

export default Router

