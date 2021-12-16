import { FETCH_USER_FAILURE, FETCH_USER_PENDING, FETCH_USER_SUCCESS } from "../actions/userActions";


const initialState = {
   pending: true,
   user: [],
   error: null
};

export const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_USER_PENDING:
         return {
            ...state,
            pending: true,
         };
      case FETCH_USER_SUCCESS:
         return {
            ...state,
            pending: false,
            user: action.payload,
         }
      case FETCH_USER_FAILURE:
         return {
            ...state,
            pending: false,
            user: action.payload,
         }
      default:
         return state
   }
}