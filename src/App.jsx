import { useState } from 'react'

import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl bg-slate-400 text-center py-2'>Redux First Project</h1>
     <Home></Home>
    </>
  )
}

export default App
