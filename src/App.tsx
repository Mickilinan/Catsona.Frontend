import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Quiz Page - Coming Soon!</h1></div>} />
      </Routes>
    </Router>
  )
}

export default App
