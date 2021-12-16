import { FETCH_USERS_FAILURE, FETCH_USERS_PENDING, FETCH_USERS_SUCCESS } from "../actions/usersActions"

const initialState = {
   pending: true,
   users: [],
   error: null,
   page: 1,
}

export const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_USERS_PENDING:
         return {
            ...state,
            pending: true,
         }
      case FETCH_USERS_SUCCESS:
         let payload = action.payload;
         if (state.users?.list) {
            payload = {
               pagination: action.payload,
               list: [...state.users?.list, ...action.payload.list]
            }
         } else {
            payload = action.payload
         }
         return {
            ...state,
            pending: false,
            users: payload,
         }
      case FETCH_USERS_FAILURE:
         return {
            ...state,
            pending: false,
            error: action.payload
         }
      default:
         return state
   }
}