import { Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import Header from './Components/Header'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default App
