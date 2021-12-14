import React, { useEffect, useState } from 'react';
import { appAPI } from '../api/api';
import UsersList from './UsersList';
import 'semantic-ui-css/semantic.min.css';
import './css/style.css';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import User from './User';



const App = () => {

   const [usersList, setUsersList] = useState([]);
   // const [currentUserId, setCurrentUserId] = useState('');
   const [currentUser, setCurrentUser] = useState([]);
   const [userFriends, setUserFriends] = useState([]);

   useEffect(() => {
      //Fetch Users
      const getUsers = async () => {
         const { data } = await appAPI.getUsers();
         setUsersList(data.list);
      };
      getUsers();
   }, []);

   const displayUser = async (userId) => {
      //Set Current 
      const { data: curUs } = await appAPI.getCurrentUser(userId);
      const { data: friends } = await appAPI.getUserFriends(userId);
      setCurrentUser(curUs);
      setUserFriends(friends.list);
   }

   return (

      <div className='ui container wrapper'>
         <BrowserRouter >
            <Routes>
               <Route path='/' exact element={<UsersList usersList={usersList} />} />
               <Route path={`/user/:userId`} element={<User currentUser={currentUser} displayUser={displayUser} userFriends={userFriends} />} />
            </Routes>
         </BrowserRouter>

      </div>
   )
}

export default App
