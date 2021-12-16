import { fetchUserFailure, fetchUserPending, fetchUserSuccess } from "../store/actions/userActions"
import { API_URL } from "../utils/constants";


/**
 * @desc Fetching user detailed information
 * @param userId - ID of user
 * @return function which is dispatching success or failure AC
 */

export const fetchUser = (userId) => {
   return (dispatch) => {
      dispatch(fetchUserPending());
      fetch(`${API_URL}/user/${userId}`)
         .then(res => res.json())
         .then(res => {
            dispatch(fetchUserSuccess(res));
         })
         .catch(error => {
            dispatch(fetchUserFailure(error));
         });
   };
};