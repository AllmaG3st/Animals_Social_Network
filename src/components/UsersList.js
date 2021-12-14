import React from 'react'
import UserElement from './UserElement'

const UsersList = ({ usersList }) => {

   const renderUsers = usersList?.map(user => {
      const url = 'http://placeimg.com/640/480/animals';
      return (
         <div key={user.id} className='four wide column'>
            <UserElement user={user} url={url} />
         </div>
      )
   })

   return (
      <div className='ui grid'>
         {renderUsers}
      </div>
   )
}

export default UsersList
