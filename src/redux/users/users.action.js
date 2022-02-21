import { UsersActionTypes } from "./users.types";

export const setCurrentUsers = (users) => ({
  type: UsersActionTypes.SET_CURRENT_USERS,
  payload: users,
});
