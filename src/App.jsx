import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import User from './Components/User'


const App = () => {
  return (
    <div>
      <nav className='p-5 flex justify-center gap-10'>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
