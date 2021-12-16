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
         return {
            ...state,
            pending: false,
            // users: [...state.users, ...action.payload]
            users: action.payload,
            page: state.page,
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