import React, { useEffect, useState } from 'react';
import { appAPI } from './api/api';
import UsersList from './components/UsersList';
import 'semantic-ui-css/semantic.min.css';
import './css/App.css';



const App = () => {

   const [users, setUsers] = useState([]);

   useEffect(() => {
      //do search
      const getUsers = async () => {
         const { data } = await appAPI.getUsers();
         setUsers(data.list);
         console.log(users);
      };
      getUsers();
   }, [])

   return (

      <div className='ui container wrapper'>
         <UsersList users={users} />
      </div>
   )
}

export default App
