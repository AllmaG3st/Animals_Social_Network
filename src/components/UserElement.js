import React from 'react'

const UserElement = ({ user }) => {
   return (

      <div class="ui card">
         <a class="image" href={`${user.id}`}>
            <img src={user.imageUrl} alt={user.title} />
         </a>
         <div class="content">
            <a class="header" href={`${user.id}`}>{user.prefix} {user.name} {user.lastName}</a>
            <div class="meta">
               <p>{user.title}</p>
            </div>
         </div>
      </div>

   )
}

export default UserElement
