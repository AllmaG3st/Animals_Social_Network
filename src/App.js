import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

import 'semantic-ui-css/semantic.min.css';
import './style.css'

const App = () => {
   return (
      <div className='ui container wrapper'>
         <HashRouter>
            <Routes>
               <Route path='/' exact element={<Home />} />
               <Route path='/user/:userId' element={<Details />} />
            </Routes>
         </HashRouter>
      </div>
   )
}

export default App
