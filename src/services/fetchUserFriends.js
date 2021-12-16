import { fetchUserFriendsFailure, fetchUserFriendsPending, fetchUserFriendsSuccess } from "../store/actions/userFriendsActions"
import { API_URL, USERS_PER_PAGE } from "../utils/constants";

// Fetching user Friends array and dispatching success or failure

export const fetchUserFriends = (userId, pageNumber) => {
   return (dispatch) => {
      dispatch(fetchUserFriendsPending);
      fetch(`${API_URL}/user/${userId}/friends/${pageNumber}/${USERS_PER_PAGE}`)
         .then(res => res.json())
         .then(res => {
            dispatch(fetchUserFriendsSuccess(res, userId))
         })
         .catch(error => {
            dispatch(fetchUserFriendsFailure(error));
         });
   };
};