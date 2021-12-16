import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { usersReducer } from "./reducers/usersReducer";



const middlewares = [thunk];

const reducers = combineReducers({
   users: usersReducer,
   user: userReducer,
});

const store = createStore(
   reducers,
   applyMiddleware(...middlewares),
);

export default store;