import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import MediaCard from './components/MediaCard'
import DataTable from './components/DataTable'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <br /><br /><br /><br />
<Routes>
  <Route path="/" element={<MediaCard/>}/>
  <Route path="/t" element={<DataTable/>}/>
  <Route path="/s" element={<StateBasics/>}/>
  <Route path="/c" element={<Counter/>}/>
</Routes>
      {/* <DataTable/> */}
      {/* <MediaCard/> */}
    </>
  )
}

export default App
