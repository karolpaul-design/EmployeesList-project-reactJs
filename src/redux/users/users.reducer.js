import { UsersActionTypes } from "./users.types";

const INITIAL_STATE = {
  currentUsers: [],
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.SET_CURRENT_USERS:
      return {
        ...state,
        currentUsers: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
