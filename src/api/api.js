import axios from "axios"

export const appAPI = {
   getUsers() {
      return axios.get('http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/20');
   }
};