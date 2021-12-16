import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Preloader from '../components/common/Preloader';
import List from '../components/List';
import { fetchUsers } from '../services/fetchUsers';
import { getUsersListState, getUsersPaginationState, getUsersState } from '../store/selectors/usersSelector';

const Home = () => {

   const [pageNumber, setPageNumber] = useState(1);

   const dispatch = useDispatch();

   const { pending, error, page } = useSelector(getUsersState);
   const list = useSelector(getUsersListState);
   const pagination = useSelector(getUsersPaginationState);

   let nextPage = pagination?.nextPage || pagination?.pagination?.nextPage;
   console.log(nextPage);

   useEffect(() => {
      dispatch(fetchUsers(pageNumber));
   }, [dispatch, pageNumber])

   const checkScroll = () => {

      //Setting timeout to avoid to much requests to server
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

   if (error) return <div>Error {error}</div>;

   return (
      <>
         <List users={list} />
         {pending && <Preloader />}
      </>
   )
}

export default Home
