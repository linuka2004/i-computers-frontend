import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './components/test.jsx'
import HomePage from './pages/homePage.jsx'
import LoginPage from './pages/loginPage.jsx'
import RegisterPage from './pages/registerPage.jsx'
import AdminPage from './pages/adminPage.jsx'


function App() {
  

  return (

    <BrowserRouter>
    <div className="w-full h-screen bg-primary text-secondary">
        <Routes path="/">
            <Route path='/' element={<HomePage />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='/admin' element={<AdminPage />}/>
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
