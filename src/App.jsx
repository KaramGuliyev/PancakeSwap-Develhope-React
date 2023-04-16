import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Swap from './Pages/Swap'
import { loadScript } from './utils'
import IfoPage from './Pages/IfoPage'
import Competition from './Pages/competition'
function App() {
  useEffect(() => {
    // load header footer script
    var script = loadScript('scripts/header-footer.js')

    return () => {
      // unload js after component unloads
      document.head.removeChild(script)
    }
  }, [])

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/swap" element={<Swap />} />
      <Route exact path="/ifo" element={<IfoPage />} />
      <Route exact path="/competition" element= {<Competition />} />
    </Routes>
  )
}

export default App
