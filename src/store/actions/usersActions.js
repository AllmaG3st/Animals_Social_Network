export const FETCH_USERS_PENDING = '[USERS] FETCH_PENDING';
export const FETCH_USERS_SUCCESS = '[USERS] FETCH_SUCCESS';
export const FETCH_USERS_FAILURE = '[USERS] FETCH_FAILURE';
export const UPDATE_USERS_PAGE = '[USERS] UPDATE_PAGE';

export const fetchUsersPending = () => {
   return {
      type: FETCH_USERS_PENDING
   };
};

export const fetchUsersSuccess = (users) => {
   return {
      type: FETCH_USERS_SUCCESS,
      payload: users
   };
};

export const fetchUsersFailure = (error) => {
   return {
      type: FETCH_USERS_FAILURE,
      payload: error
   };
};