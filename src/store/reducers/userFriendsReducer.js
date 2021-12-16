import { FETCH_USER_FRIENDS_FAILURE, FETCH_USER_FRIENDS_PENDING, FETCH_USER_FRIENDS_SUCCESS } from "../actions/userFriendsActions";



const initialState = {
   pendingFr: true,
   friends: [],
   errorFr: null
};

export const userFriendsReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_USER_FRIENDS_PENDING:
         return {
            ...state,
            pending: true
         };
      case FETCH_USER_FRIENDS_SUCCESS:
         return {
            ...state,
            pending: false,
            friends: action.payload,
         }
      case FETCH_USER_FRIENDS_FAILURE:
         return {
            ...state,
            pending: false,
            error: action.payload
         }
      default:
         return state;
   };
};