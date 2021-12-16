import React from 'react'

const PersonalInfo = ({ user }) => {
   return (
      <div className='personal-info eight wide column'>
         <fieldset>
            <legend>Info</legend>
            <div className='header'>{user.prefix} {user.name} {user.lastName}</div>
            <i>{user.title}</i>

            <div className='additional-info' >
               <div><p className='info-type'>Email:</p> {user.email}</div>
               <div><p className='info-type'>Ip Address:</p> {user.ip}</div>
               <div><p className='info-type'>Job Area:</p> {user.jobArea}</div>
               <div><p className='info-type'>Job Type:</p> {user.jobType}</div>
            </div>
         </fieldset>
      </div>
   )
}

export default PersonalInfo
