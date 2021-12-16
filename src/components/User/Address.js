import React from 'react'

const Address = ({ company, address }) => {
   return (
      <div className='four wide column'>
         <fieldset>
            <legend>Address</legend>
            <div className='header'>{company?.name} {company?.suffix}</div>

            <div className='additional-info'>
               <div><p className='info-type'>City:</p> {address?.city}</div>
               <div><p className='info-type'>Country:</p> {address?.country}</div>
               <div><p className='info-type'>State:</p> {address?.state}</div>
               <div><p className='info-type'>Street:</p> {address?.streetAddress}</div>
               <div><p className='info-type'>ZIP:</p> {address?.zipCode}</div>
            </div>
         </fieldset>
      </div>
   )
}

export default Address
