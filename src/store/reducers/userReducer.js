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

         const userChainPayload = state.usersChain;
         const payload = action.payload;
         const fullName = [payload.prefix, payload.name, payload.lastName].join(' ');


         /**
            Checking if name of next user in chain is different
            Code may seem little dirty with this logic, but it resolves
            the problem of original sample.

            //! We are no loosing 1st user in chain after refresh
         */

         if (state.usersChain?.at(-1)?.name !== fullName) {
            userChainPayload.push({ name: fullName, id: action.payload.id });
         }
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