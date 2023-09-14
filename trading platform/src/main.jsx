// Assignment 1: Group 140
//Robert Hurley: 2107384
//Hayden Whiteford
//Andrew Moutsos 

// This component represents the entry point of the app and is rendered into the root div of index.html

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import '/src/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

