import { useState } from 'react'

import './index.css'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Outlet />
    </>
  )
}

export default App
