import React from 'react'
import UserElement from './UserElement'

const UsersList = ({ users }) => {

   const renderUsers = users?.map(user => {
      return (
         <div key={user.id} className='four wide column'>
            <UserElement user={user} />
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
