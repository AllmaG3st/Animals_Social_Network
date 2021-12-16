import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import User from '../components/User/User';
import { fetchUser } from '../services/fetchUser';
import { fetchUserFriends } from '../services/fetchUserFriends';
import { getUserFriendsListState } from '../store/selectors/userFriendsSelector';
import { getUsersChainState, getUserState } from '../store/selectors/userSelector';

const Details = () => {

   const [pageNumber, setPageNumber] = useState(1);

   const { userId } = useParams();
   const dispatch = useDispatch();
   const { pending, user, error } = useSelector(getUserState);
   const usersChain = useSelector(getUsersChainState);

   const friendsList = useSelector(getUserFriendsListState);

   useEffect(() => {
      dispatch(fetchUser(userId));
      dispatch(fetchUserFriends(userId, pageNumber));
   }, [dispatch, userId, pageNumber]);

   const url = `${user.imageUrl}/${Math.trunc(Math.random() * 10 + 1)}`;

   const checkScroll = () => {

      //Setting timeout to avoid to much requests to server

      setTimeout(() => {
         window.onscroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= Math.max(document.body.scrollHeight, document.documentElement.offsetHeight)) {
               setPageNumber(pageNumber + 1);
            }
         }
      }, 500)

   }
   checkScroll();

   if (error) return <div>Error {error}</div>;
   if (pending) return <div>Pending</div>

   return (
      <div className='user-wrapper'>
         <User user={user} friends={friendsList} usersChain={usersChain} userId={userId} url={url} />
      </div>
   )
}

export default Details
