export const FETCH_USER_PENDING = '[USER] FETCH_PENDING';
export const FETCH_USER_SUCCESS = '[USER] FETCH_SUCCESS';
export const FETCH_USER_FAILURE = '[USER] FETCH_FAILURE';

export const fetchUserPending = () => {
   return {
      type: FETCH_USER_PENDING
   };
};

export const fetchUserSuccess = (user) => {
   return {
      type: FETCH_USER_SUCCESS,
      payload: user
   }
};

export const fetchUserFailure = (error) => {
   return {
      type: FETCH_USER_FAILURE,
      payload: error
   }
};