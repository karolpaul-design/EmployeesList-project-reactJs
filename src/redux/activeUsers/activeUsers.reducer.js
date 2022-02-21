import { ActiveUsersActionTypes } from "./activeUsers.types";

const INITIAL_STATE = {
  activeUsers: [],
};

const activeUsersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActiveUsersActionTypes.SET_ACTIVE_USERS:
      return {
        ...state,
        activeUsers: action.payload,
      };
    default:
      return state;
  }
};

export default activeUsersReducer;
