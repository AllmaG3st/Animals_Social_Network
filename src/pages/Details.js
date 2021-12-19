import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'

import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { fetchUser } from '../services/fetchUser';
import { fetchUserFriends } from '../services/fetchUserFriends';
import { getUserFriendsListState, getUserFriendsPaginationState } from '../store/selectors/userFriendsSelector';
import { getUsersChainState, getUserState } from '../store/selectors/userSelector';

import Error from '../components/common/Error';
import Preloader from '../components/common/Preloader';
import User from '../components/user/User';

const Details = () => {

   const dispatch = useDispatch();
   const location = useLocation();
   const { userId } = useParams();

   const { pending, user, error } = useSelector(getUserState);
   const usersChain = useSelector(getUsersChainState);
   const friendsList = useSelector(getUserFriendsListState);
   const [pageNumber, infiniteScroll, setPageNumber] = useInfiniteScroll();
   const pagination = useSelector(getUserFriendsPaginationState);

   let nextPage = pagination?.nextPage || pagination?.pagination?.nextPage;

   //Fetching user and portion of users Friends

   useEffect(() => {
      setTimeout(() => {
         dispatch(fetchUser(userId));
         dispatch(fetchUserFriends(userId, pageNumber));
      })

   }, [dispatch, userId, pageNumber]);

   //Updating pageNumber on userId Change

   useEffect(() => {
      setPageNumber(1);
   }, [userId, setPageNumber]);

   //Scrolling to top on each URL update

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location]);

   //Checking if next page exists and fetching new portion friends if so

   nextPage && infiniteScroll();

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
