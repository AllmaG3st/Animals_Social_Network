import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Preloader from '../components/common/Preloader';
import List from '../components/List';
import { fetchUsers } from '../services/fetchUsers';
import { getUsersListState, getUsersPaginationState, getUsersState } from '../store/selectors/usersSelector';
import { USERS_PER_PAGE } from '../utils/constants';

const Home = () => {

   const [pageNumber, setPageNumber] = useState(89);
   const [hasMore, setHasMore] = useState(true);

   const dispatch = useDispatch();

   const { pending, error, page } = useSelector(getUsersState);
   const list = useSelector(getUsersListState);
   const pagination = useSelector(getUsersPaginationState);


   useEffect(() => {
      dispatch(fetchUsers(pageNumber));
   }, [dispatch, pageNumber])


   // const width = (document.documentElement.clientWidth);
   // const gridStructure = width > 915 ? 'four' : 'eight';

   const checkScroll = () => {

      //Setting timeout to avoid to much requests to server
      setTimeout(() => {
         setHasMore(pagination?.total > pageNumber * USERS_PER_PAGE);
         window.onscroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= Math.max(document.body.scrollHeight, document.documentElement.offsetHeight) && hasMore) {
               setPageNumber(pageNumber + 1);
            }
         }
      }, 500)

   }
   checkScroll();

   if (error) return <div>Error {error}</div>;

   return (
      <>
         <List users={list} />
         {pending && <Preloader />}
      </>
   )
}

export default Home
