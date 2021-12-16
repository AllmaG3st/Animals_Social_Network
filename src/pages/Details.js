import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import User from '../components/User/User';
import { fetchUser } from '../services/fetchUser';
import { fetchUserFriends } from '../services/fetchUserFriends';
import { getUserFriendsListState } from '../store/selectors/userFriendsSelector';
import { getUserState } from '../store/selectors/userSelector';

const Details = () => {

   const { userId } = useParams();
   const dispatch = useDispatch();
   const { pending, user, error } = useSelector(getUserState);
   const friendsList = useSelector(getUserFriendsListState);

   useEffect(() => {
      dispatch(fetchUser(userId));
      dispatch(fetchUserFriends(userId));
   }, [dispatch, userId]);

   if (error) return <div>Error {error}</div>;
   if (pending) return <div>Pending</div>

   return (
      <div className='user-wrapper'>
         <User user={user} friends={friendsList} />
      </div>
   )
}

export default Details
