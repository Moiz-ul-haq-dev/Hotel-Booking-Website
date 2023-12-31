import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage'
import LoginSignupPage from './pages/LoginSignupPage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import PaymentDone from './pages/PaymentDone'
import ShowAllRooms from './pages/ShowAllRooms'
import MailSentPage from './pages/MailSentPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<HomePage />} />
          <Route path='/About' element = {<AboutUsPage />} />
          <Route path="/Contact" element = {<ContactUsPage />} />
          <Route path='/LoginSignup' element = {<LoginSignupPage />} />
          <Route path='/dashboard/*' element = {<AdminDashboardPage />} />
          <Route path='/paymentDone' element = {<PaymentDone />} />
          <Route path='/mailSent' element = {<MailSentPage />} />
          <Route path='/showAllRooms' element = {<ShowAllRooms />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
