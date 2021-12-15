import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Address from './Address';
import Preloader from './common/Preloader';
import PersonalInfo from './PersonalInfo';
import UsersList from './UsersList';

const User = ({ currentUser, displayUser, userFriends, pageNumber, checkScroll, loading, setPageNumber }) => {
   const [links, setLinks] = useState([]);

   const { userId } = useParams();
   const currentLink = window.location.href;
   useEffect(() => {
      displayUser(userId, pageNumber);
   }, [pageNumber, userId]);

   useEffect(() => {
      setPageNumber(1);
      setLinks([...links, currentLink])
   }, [userId, currentLink]);

   checkScroll();

   const company = currentUser.company;
   const address = currentUser.address;

   const displayLinks = links?.map((e, i) => {
      return (
         <span key={i}>
            {i >= 1 && '>'}
            <Link to={`/user/${userId}`}>{currentUser.prefix} {currentUser.name} {currentUser.lastName}</Link>
         </span>
      )
   })

   return (
      <div className='user-wrapper' >
         <div className='ui grid'>

            <img className='four wide column image' src={currentUser.imageUrl} alt={currentUser.title} />
            <PersonalInfo currentUser={currentUser} />
            <Address company={company} address={address} />

         </div>
         <div className='users-chain'>
            {displayLinks}
         </div>
         <div className='friends-list'>
            <h2>
               Friends:
            </h2>
            <UsersList usersList={userFriends} />
            {loading && <Preloader />}
         </div>
      </div>
   )
}

export default User
