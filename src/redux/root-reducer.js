import { combineReducers } from "redux";

import usersReducer from "./users/users.reducer";
import activeUsersReducer from "./activeUsers/activeUsers.reducer";
const rootReducer = combineReducers({
  users: usersReducer,
  activeUsers: activeUsersReducer,
});

export default rootReducer;
