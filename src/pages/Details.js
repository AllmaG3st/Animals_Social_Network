import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import Error from '../components/common/Error';
import Preloader from '../components/common/Preloader';
import User from '../components/User/User';
import { fetchUser } from '../services/fetchUser';
import { fetchUserFriends } from '../services/fetchUserFriends';
import { getUserFriendsListState, getUserFriendsPaginationState } from '../store/selectors/userFriendsSelector';
import { getUsersChainState, getUserState } from '../store/selectors/userSelector';

const Details = () => {

   const [pageNumber, setPageNumber] = useState(1);

   const dispatch = useDispatch();
   const location = useLocation();
   const { userId } = useParams();

   const { pending, user, error } = useSelector(getUserState);
   const usersChain = useSelector(getUsersChainState);
   const friendsList = useSelector(getUserFriendsListState);
   const pagination = useSelector(getUserFriendsPaginationState);

   let nextPage = pagination?.nextPage || pagination?.pagination?.nextPage;

   //Scrolling to top on each URL update

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location]);

   //Fetching user and user Friends

   useEffect(() => {
      dispatch(fetchUser(userId));
      dispatch(fetchUserFriends(userId, pageNumber));
   }, [dispatch, userId, pageNumber]);

   //Updating pageNumber on userId Change

   useEffect(() => {
      setPageNumber(1);
   }, [userId]);

   // Infinite scroll

   const checkScroll = () => {

      //Setting timeout to avoid accidental requests to server

      setTimeout(() => {
         window.onscroll = () => {
            //Checking if user scrolled to the bottom and next page exists.

            if (window.innerHeight + document.documentElement.scrollTop >= Math.max(document.body.scrollHeight, document.documentElement.offsetHeight) && nextPage) {
               setPageNumber(pageNumber + 1);
            }
         }
      }, 500)

   }
   checkScroll();

   //Checking for errors and displaying if one exists;

   if (error) return <Error error={error} />;

   return (
      <div className='user-wrapper'>
         <User user={user} friends={friendsList} usersChain={usersChain} userId={userId} />
         {pending && <Preloader />}
      </div>
   )
}

export default Details
