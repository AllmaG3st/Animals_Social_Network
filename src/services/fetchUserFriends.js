import { fetchUserFriendsFailure, fetchUserFriendsPending, fetchUserFriendsSuccess } from "../store/actions/userFriendsActions"
import { API_URL, USERS_PER_PAGE } from "../utils/constants";

/**
 * @desc Fetching user friends
 * @param userId - ID of user, pageNumber - current Page number
 * @return function which is dispatching success or failure AC
 */

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