import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import List from '../components/List';
import { fetchUsers } from '../services/fetchUsers';
import { getUserState } from '../store/selectors/userSelector';

const Details = () => {

   const { userId } = useParams();
   const dispatch = useDispatch();
   const { pending, user, error } = useSelector(getUserState);

   useEffect(() => {
      dispatch(fetchUsers(userId));
   }, [dispatch, userId]);

   if (error) return <div>Error {error}</div>;
   if (pending) return <div>Pending</div>

   return <List />
}

export default Details
