import React from 'react';
import List from '../List';
import Address from './Address';
import PersonalInfo from './PersonalInfo';
import UsersChain from './UsersChain';

const User = ({ user, friends, usersChain, userId }) => {

   return (
      <div className='ui grid'>

         <img className='four wide column image' src={`${user.imageUrl}?v=${userId}`} alt={user.title} />

         <PersonalInfo user={user} />

         <Address company={user.company} address={user.address} />

         <UsersChain usersChain={usersChain} />


         <div className='friends-list' >
            <h2>Friends:</h2>
            <List users={friends} />
         </div>
      </div>

   )
}

export default User
