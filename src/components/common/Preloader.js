import React from 'react';
import preloader from '../../images/Spinner_Loading.svg';

const Preloader = () => {
   return (
      <div>
         <img src={preloader} alt='preloader' />
      </div>
   )
}

export default Preloader