import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import Preloader from '../components/common/Preloader';
import User from '../components/User/User';
import { fetchUser } from '../services/fetchUser';
import { fetchUserFriends } from '../services/fetchUserFriends';
import { getUserFriendsListState, getUserFriendsPaginationState } from '../store/selectors/userFriendsSelector';
import { getUsersChainState, getUserState } from '../store/selectors/userSelector';
import { USERS_PER_PAGE } from '../utils/constants';

const Details = () => {

   const [pageNumber, setPageNumber] = useState(1);

   const dispatch = useDispatch();
   const location = useLocation();
   const { userId } = useParams();

   const { pending, user, error } = useSelector(getUserState);
   const usersChain = useSelector(getUsersChainState);
   const friendsList = useSelector(getUserFriendsListState);
   const pagination = useSelector(getUserFriendsPaginationState);

   //Scrolling to top on each URL update

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location]);

   useEffect(() => {
      dispatch(fetchUser(userId));
      dispatch(fetchUserFriends(userId, pageNumber));

   }, [dispatch, userId, pageNumber]);

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

   return (
      <div className='user-wrapper'>
         <User user={user} friends={friendsList} usersChain={usersChain} userId={userId} />
         {pending && <Preloader />}
      </div>
   )
}

export default Details
