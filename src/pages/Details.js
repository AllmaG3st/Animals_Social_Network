import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import User from '../components/User/User';
import { fetchUser } from '../services/fetchUser';
import { getUserState } from '../store/selectors/userSelector';

const Details = () => {

   const { userId } = useParams();
   const dispatch = useDispatch();
   const { pending, user, error } = useSelector(getUserState);

   useEffect(() => {
      dispatch(fetchUser(userId));
   }, [dispatch, userId]);

   console.log(user);

   if (error) return <div>Error {error}</div>;
   if (pending) return <div>Pending</div>


   return (
      <div className='user-wrapper'>
         <User user={user} />
      </div>
   )
}

export default Details
