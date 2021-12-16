export const FETCH_USER_FRIENDS_PENDING = '[FRIENDS] FETCH_PENDING';
export const FETCH_USER_FRIENDS_SUCCESS = '[FRIENDS] FETCH_SUCCESS';
export const FETCH_USER_FRIENDS_FAILURE = '[FRIENDS] FETCH_FAILURE';

export const fetchUserFriendsPending = () => {
   return {
      type: FETCH_USER_FRIENDS_PENDING
   };
};

export const fetchUserFriendsSuccess = (friends, userId) => {
   return {
      type: FETCH_USER_FRIENDS_SUCCESS,
      payload: friends,
      userId
   };
};

export const fetchUserFriendsFailure = (error) => {
   return {
      type: FETCH_USER_FRIENDS_FAILURE,
      payload: error
   };
};
