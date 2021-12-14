import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Address from './Address';
import PersonalInfo from './PersonalInfo';
import UsersList from './UsersList';

const User = ({ currentUser, displayUser, userFriends, }) => {
   const [links, setLinks] = useState([]);

   useEffect(() => {
      displayUser(userId);
      links.push(`${window.location.href}`);
   }, [])
   const company = currentUser.company;
   const address = currentUser.address;
   const { userId } = useParams();
   // console.log(currentUser);
   // console.log(window.location.href);
   // console.log(userFriends);
   // const links = [];
   // console.log(links);

   return (
      <div className='user-wrapper' >
         <div className='ui grid'>

            <img className='four wide column image' src={currentUser.imageUrl} alt={currentUser.title} />
            <PersonalInfo currentUser={currentUser} />
            <Address company={company} address={address} />

         </div>
         {/* <div>
            <Link to={links}><div>Hello</div></Link>
         </div> */}
         <h2>
            Friends:
         </h2>
         <UsersList usersList={userFriends} />
      </div>




   )
}

export default User
