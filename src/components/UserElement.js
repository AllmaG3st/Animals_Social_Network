import React from 'react'
import { Link } from 'react-router-dom'

const UserElement = ({ user, url }) => {

   return (
      <Link to={`user/${user.id}`} >
         <div className="ui card">
            {/* // TODO Remove Link */}
            <img src={url} alt={user.title} />
            <div className="content">
               <p className="header" to={`user/${user.id}`}>{user.prefix} {user.name} {user.lastName}</p>
               <div className="meta">
                  <p>{user.title}</p>
               </div>
            </div>
         </div>
      </Link>
   )
}

export default UserElement
