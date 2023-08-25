import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import '/src/styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage.jsx';
() => {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/MyProfile' element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  ,
)

