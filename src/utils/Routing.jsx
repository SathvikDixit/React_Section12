import React from 'react'
import Home from '../Components/Home'
import About from '../Components/About'
import User from '../Components/User'
import { Routes, Route } from'react-router-dom'
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default Routing
