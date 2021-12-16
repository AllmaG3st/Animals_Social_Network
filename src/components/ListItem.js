import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ user }) => {

   const url = `${user.imageUrl}/${user.id}`;

   return (
      <div className='four wide column'>
         <Link to={`/user/${user.id}`}>
            <div className='ui card'>
               <img src={url} alt={user.title} />
               <div className='content' >
                  <p className='header'>{user.prefix} {user.name} {user.lastName}</p>
                  <div className='meta'>
                     <p>{user.title}</p>
                  </div>
               </div>
            </div>
         </Link>
      </div>
   )
}

export default ListItem
