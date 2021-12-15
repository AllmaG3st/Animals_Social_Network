import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { API } from '../api/api';
import UsersList from './UsersList';
import User from './User';
import { USERS_PER_PAGE } from '../utils/constants';
import 'semantic-ui-css/semantic.min.css';
import './css/style.css';

const App = () => {


   const [usersList, setUsersList] = useState([]);
   const [hasMore, setHasMore] = useState(true);
   // const [currentUserId, setCurrentUserId] = useState('');
   const [currentUser, setCurrentUser] = useState([]);
   const [userFriends, setUserFriends] = useState([]);
   const [pageNumber, setPageNumber] = useState(1);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      //Fetch Users
      const getUsers = async (pageNumber) => {
         if (hasMore) {
            const { data } = await API.getUsers(pageNumber, USERS_PER_PAGE);
            setUsersList([...new Set([...usersList, ...data.list])]);

            // checking is there is more users to load

            setHasMore(data.pagination.total > pageNumber * USERS_PER_PAGE);
         }
         setLoading(false);
      };
      getUsers(pageNumber);
   }, [pageNumber]);

   const displayUser = async (userId, pageNumber) => {
      if (hasMore) {
         const { data: curUs } = await API.getCurrentUser(userId, USERS_PER_PAGE);
         const { data: friends } = await API.getUserFriends(userId, pageNumber, USERS_PER_PAGE);
         setCurrentUser(curUs);
         setUserFriends([...new Set([...userFriends, ...friends.list])]);

         // checking is there is more users to load

         setHasMore(friends.pagination.total > pageNumber * USERS_PER_PAGE);
      }
      setLoading(false);
   }



   const scrollTo = () => {
      setPageNumber(pageNumber + 1);
      setLoading(true);
   }

   const checkScroll = () => {

      //Setting timeout to avoid to much requests to server

      setTimeout(() => {
         window.onscroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= Math.max(document.body.scrollHeight, document.documentElement.offsetHeight) && hasMore) {
               scrollTo();
            }
         }
      }, 500)

   }
   checkScroll();

   return (

      <div className='ui container wrapper'>
         <BrowserRouter >
            <Routes>
               <Route path='/' exact element={<UsersList usersList={usersList} loading={loading} />} />
               <Route path={`/user/:userId`} element={<User currentUser={currentUser} displayUser={displayUser} userFriends={userFriends} pageNumber={pageNumber} checkScroll={checkScroll} loading={loading} setPageNumber={setPageNumber} />} />
            </Routes>
         </BrowserRouter>

      </div>
   )
}

export default App
