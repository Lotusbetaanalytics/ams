import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userClockinReducer,
  userClockOutReducer,
  userRegisterReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  userRegistration: userRegisterReducer,
  userClockin: userClockinReducer,
  userClockout: userClockOutReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
