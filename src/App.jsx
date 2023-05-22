import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './assets/components/Navbar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
