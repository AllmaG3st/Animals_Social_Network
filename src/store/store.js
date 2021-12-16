import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { userFriendsReducer } from "./reducers/userFriendsReducer";
import { userReducer } from "./reducers/userReducer";
import { usersReducer } from "./reducers/usersReducer";



const middlewares = [thunk];

const reducers = combineReducers({
   users: usersReducer,
   user: userReducer,
   userFriends: userFriendsReducer,
});

const store = createStore(
   reducers,
   applyMiddleware(...middlewares),
);

export default store;