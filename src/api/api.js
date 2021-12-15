import axios from "axios"

const instance = axios.create({
   baseURL: 'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user'
});

export const API = {
   getUsers(pageNumber, USERS_PER_PAGE) {
      return instance.get(`/${pageNumber}/${USERS_PER_PAGE}`);
   },
   getCurrentUser(userId, USERS_PER_PAGE) {
      return instance.get(`/${userId}`)
   },
   getUserFriends(userId, pageNumber, USERS_PER_PAGE) {
      console.log(pageNumber)
      return instance.get(`/${userId}/friends/${pageNumber}/${USERS_PER_PAGE}`)
   }
};