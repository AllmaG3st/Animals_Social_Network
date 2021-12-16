import { fetchUsersFailure, fetchUsersPending, fetchUsersSuccess } from "../store/actions/usersActions"
import { API_URL, USERS_PER_PAGE } from "../utils/constants";

// Fetching users array and dispatching success or failure

export const fetchUsers = () => {
   return (dispatch) => {
      dispatch(fetchUsersPending());
      fetch(`${API_URL}/user/1/${USERS_PER_PAGE}`)
         .then(res => res.json())
         .then(res => {
            dispatch(fetchUsersSuccess(res));
         })
         .catch(error => {
            dispatch(fetchUsersFailure(error));
         });
   };
};