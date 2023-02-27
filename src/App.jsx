import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'
import UpdateUser from './components/UpdateUser'

function App() {

  return (
    <div className="App">
      <nav>
        <p><Link to="/signup">SignUp</Link></p>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/user/:id" element={<UserDetails/>} />
        <Route path="/update/:id" element={<UpdateUser/>} />
        <Route path="*" element={<h1>404 Page not found!</h1>} />
      </Routes>
    </div>
  )
}

export default App
