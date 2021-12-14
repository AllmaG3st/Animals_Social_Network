import axios from "axios"

const instance = axios.create({
   baseURL: 'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user'
});

export const appAPI = {
   getUsers() {
      return instance.get('/1/20');
   },
   getCurrentUser(userId) {
      return instance.get(`/${userId}`)
   },
   getUserFriends(userId) {
      return instance.get(`/${userId}/friends/1/20`)
   }
};