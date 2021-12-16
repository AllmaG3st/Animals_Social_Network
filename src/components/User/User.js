import React from 'react'
import List from '../List';
import Address from './Address';
import PersonalInfo from './PersonalInfo';

const User = ({ user, friends }) => {

   return (
      <div className='ui grid'>

         <img className='four wide column image' src={user.imageUrl} alt={user.title} />

         <PersonalInfo user={user} />

         <Address company={user.company} address={user.address} />

         <div className='users-chain'>
            Here would be users chain
         </div>
         <div className='friends-list' >
            <h2>Friends:</h2>
            <List users={friends} />
         </div>
      </div>

   )
}

export default User
