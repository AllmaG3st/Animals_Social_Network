import { FETCH_USER_FAILURE, FETCH_USER_PENDING, FETCH_USER_SUCCESS } from "../actions/userActions";


const initialState = {
   pending: true,
   user: [],
   error: null,
   usersChain: [],
};

export const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_USER_PENDING:
         return {
            ...state,
            pending: true,
         };
      case FETCH_USER_SUCCESS:

         let userChainPayload = state.usersChain;
         const payload = action.payload;

         userChainPayload.push({ name: `${payload.prefix} ${payload.name} ${payload.lastName}`, id: action.payload.id });

         return {
            ...state,
            pending: false,
            user: action.payload,
            usersChain: userChainPayload,
         }
      case FETCH_USER_FAILURE:
         return {
            ...state,
            pending: false,
            error: action.payload,
         }
      default:
         return state
   }
}