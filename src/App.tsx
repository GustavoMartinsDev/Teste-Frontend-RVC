import React from 'react';
import './styles/global.scss'

import { BrowserRouter } from 'react-router-dom';
import Routs from './routes'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter >
    <Header />
    <Routs />
    </BrowserRouter>
  )
}

export default App;