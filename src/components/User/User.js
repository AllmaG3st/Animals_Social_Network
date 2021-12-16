import React from 'react'
import { Link } from 'react-router-dom';
import List from '../List';
import Address from './Address';
import PersonalInfo from './PersonalInfo';

const User = ({ user, friends, usersChain, userId }) => {
   console.log(user);
   console.log(usersChain);

   const userPath = usersChain.map((u, i) => {
      return (
         <span key={i}>
            {i > 0 && '>'}
            <Link to={`/user/${userId}`}>{u}</Link>
         </span>
      )
   })
   return (
      <div className='ui grid'>

         <img className='four wide column image' src={user.imageUrl} alt={user.title} />

         <PersonalInfo user={user} />

         <Address company={user.company} address={user.address} />

         <div className='users-chain'>
            {userPath}
         </div>
         <div className='friends-list' >
            <h2>Friends:</h2>
            <List users={friends} />
         </div>
      </div>

   )
}

export default User
