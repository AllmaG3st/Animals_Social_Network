import React from 'react'
import ListItem from './ListItem'

const List = ({ users }) => {


   console.log(users);

   const user = users?.map(u => <ListItem key={u.id} user={u} />)

   return (
      <div className='ui grid'>
         {user}
      </div>
   )
}

export default List
