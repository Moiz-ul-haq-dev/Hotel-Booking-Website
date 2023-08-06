import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<HomePage />} />
          <Route path='/About' element = {<AboutUsPage />} />
          <Route path="/Contact" element = {<ContactUsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
