import React from 'react'

const PersonalInfo = ({ currentUser }) => {
   return (
      <div className='personal-info eight wide column'>
         <fieldset>
            <legend>Info</legend>
            <div className='header'>{currentUser.prefix} {currentUser.name} {currentUser.lastName}</div>
            <i>{currentUser.title}</i>

            <div className='additional-info' >
               <div><p className='info-type'>Email:</p> {currentUser.email}</div>
               <div><p className='info-type'>Ip Address:</p> {currentUser.ip}</div>
               <div><p className='info-type'>Job Area:</p> {currentUser.jobArea}</div>
               <div><p className='info-type'>Job Type:</p> {currentUser.jobType}</div>
            </div>
         </fieldset>
      </div>
   )
}

export default PersonalInfo
