import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { fetchUsers } from '../services/fetchUsers';
import { getUsersListState, getUsersPaginationState, getUsersState } from '../store/selectors/usersSelector';

import Error from '../components/common/Error';
import Preloader from '../components/common/Preloader';
import List from '../components/List';


const Home = () => {

   const dispatch = useDispatch();

   const { pending, error } = useSelector(getUsersState);
   const [pageNumber, infiniteScroll] = useInfiniteScroll();
   const list = useSelector(getUsersListState);

   const pagination = useSelector(getUsersPaginationState);

   let nextPage = pagination?.nextPage || pagination?.pagination?.nextPage;

   // Fetching portion of users

   useEffect(() => {
      dispatch(fetchUsers(pageNumber));
   }, [dispatch, pageNumber])

   //Checking if next page exists and fetching new portion of users if so

   nextPage && infiniteScroll();

   //Checking for errors and displaying if one exists;

   if (error) return <Error error={error} />;

   return (
      <>
         <List users={list} />
         {pending && <Preloader />}
      </>
   )
}

export default Home
