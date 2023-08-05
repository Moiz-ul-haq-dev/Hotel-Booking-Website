import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<HomePage />} />
          <Route path='/About' element = {<AboutPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App