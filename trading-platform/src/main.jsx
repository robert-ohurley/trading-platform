import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import '/src/styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage.jsx';
import ForSalePage from './views/ForSale/ForSalePage'
import TransactionHistoryPage from './views/TransactionHistory/TransactionHistoryPage'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<LandingPage />}></Route> */}
        <Route path='/MyProfile' element={<App />}></Route>
        <Route path="/ForSale" element={<ForSalePage />} />
        <Route path="/TransactionHistory" element={<TransactionHistoryPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  ,
)

