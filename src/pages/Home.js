import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import List from '../components/List';
import { fetchUsers } from '../services/fetchUsers';
import { getUsersListState, getUsersState } from '../store/selectors/usersSelector';




const Home = () => {

   const dispatch = useDispatch();

   const { pending, error } = useSelector(getUsersState);
   const list = useSelector(getUsersListState);

   useEffect(() => {
      dispatch(fetchUsers());
   }, [dispatch])

   if (error) return <div>Error {error}</div>;
   if (pending) return <div>Pending</div>

   console.log(list);
   return <List users={list} />
}

export default Home
