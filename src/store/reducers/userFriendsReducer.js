import { FETCH_USER_FRIENDS_FAILURE, FETCH_USER_FRIENDS_PENDING, FETCH_USER_FRIENDS_SUCCESS } from "../actions/userFriendsActions";



const initialState = {
   pendingFr: true,
   friends: [],
   errorFr: null,
   userId: null,
};

export const userFriendsReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_USER_FRIENDS_PENDING:
         return {
            ...state,
            pending: true
         };
      case FETCH_USER_FRIENDS_SUCCESS:
         let payload = action.payload;

         //Checking if user was changed and nulling friends list if so.

         if (state.userId !== action.userId) {
            state.friends = [];
         }

         /*
            Checking if friends list exist.
            IF YES adding to current list new list.
            IF NO just passing whole response.
         */

         if (state.friends?.list) {
            payload = {
               pagination: action.payload,
               list: [...state.friends?.list, ...action.payload.list]
            }
         } else {
            payload = action.payload
         }
         return {
            ...state,
            pending: false,
            friends: payload,
            userId: action.userId,
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