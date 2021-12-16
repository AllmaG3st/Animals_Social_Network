import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '../components/List';
import { fetchUsers } from '../services/fetchUsers';
import { getUsersListState, getUsersState } from '../store/selectors/usersSelector';




const Home = () => {

   const [pageNumber, setPageNumber] = useState(1);

   const dispatch = useDispatch();

   const { pending, error, page } = useSelector(getUsersState);
   const list = useSelector(getUsersListState);

   useEffect(() => {
      dispatch(fetchUsers(pageNumber));
   }, [dispatch, pageNumber])


   const checkScroll = () => {

      //Setting timeout to avoid to much requests to server

      setTimeout(() => {
         window.onscroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= Math.max(document.body.scrollHeight, document.documentElement.offsetHeight)) {
               setPageNumber(pageNumber + 1);
            }
         }
      }, 500)

   }
   checkScroll();

   if (error) return <div>Error {error}</div>;
   if (pending) return <div>Pending</div>

   console.log(list);
   return <List users={list} />
}

export default Home
