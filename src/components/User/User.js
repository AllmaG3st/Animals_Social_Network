import React from 'react'
import Address from './Address';
import PersonalInfo from './PersonalInfo';

const User = ({ user }) => {

   return (
      <div className='ui grid'>

         <img className='four wide column image' src={user.imageUrl} alt={user.title} />

         <PersonalInfo user={user} />

         <Address company={user.company} address={user.address} />

         <div className='users-chain'>
            {/* //TODO ADD USERS CHAIN */}
         </div>
         <div className='friends-list' >
            <h2>Friends:</h2>
            {/* //TODO add Friends */}
         </div>
      </div>

   )
}

export default User
