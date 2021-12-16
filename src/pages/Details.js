import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchUsers } from '../services/fetchUsers';
import { getUserState } from '../store/selectors/userSelector';

const Details = () => {

   const { userId } = useParams();
   const dispatch = useDispatch();
   const { pending, user, error } = useSelector(getUserState);

   useEffect(() => {
      dispatch(fetchUsers(userId));
   }, [dispatch, userId]);

   console.log(user);

   return (
      <div>
         Home, ver gevige?
      </div>
   )
}

export default Details
