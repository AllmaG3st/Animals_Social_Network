import React from 'react'

const Error = ({ error }) => {
   return (
      <div className='ui negative message'>
         <div className='header'>
            {error}
         </div>
      </div>
   )
}

export default Error
