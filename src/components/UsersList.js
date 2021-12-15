import React from 'react'
import Preloader from './common/Preloader';
import UserElement from './UserElement'

const UsersList = ({ usersList, loading }) => {

   const renderUsers = usersList?.map(user => {

      const randomizer = Math.trunc(Math.random() * 10 + 1);
      const url = `${user.imageUrl}/${randomizer}`;

      return (
         <div key={user.id} className='four wide column'>
            <UserElement user={user} url={url} />
         </div>
      )
   })

   return (
      <div className=' ui grid'>
         {renderUsers}
         {loading && <Preloader />}
      </div>
   )
}

export default UsersList
