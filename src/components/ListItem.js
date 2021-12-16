import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ user }) => {
   return (
      <div className='four wide column'>
         <Link to={`/${user.id}`}>
            <div className='ui card'>
               <img src={user.imageUrl} alt={user.title} />
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
