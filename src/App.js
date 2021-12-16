import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

import 'semantic-ui-css/semantic.min.css';



const App = () => {
   return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route path='/' exact element={<Home />} />
               <Route path='/:userId' element={<Details />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App
