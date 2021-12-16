import React from 'react';
import { Link } from 'react-router-dom';


const UsersChain = ({ usersChain }) => {

   const userPath = usersChain?.map((u, i) => {
      return (
         <span key={i}>
            {i > 0 && '>'}
            <Link to={`/user/${u.id}`}>{u.name}</Link>
         </span>
      )
   });

   return (
      <div className='users-chain'>
         {userPath}
      </div>
   )
}

export default UsersChain
