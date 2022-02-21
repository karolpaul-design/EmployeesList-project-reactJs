import { ActiveUsersActionTypes } from "./activeUsers.types";

export const setActiveUsers = (users) => ({
  type: ActiveUsersActionTypes.SET_ACTIVE_USERS,
  payload: users,
});
