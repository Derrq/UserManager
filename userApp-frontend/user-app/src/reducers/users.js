import {
    CREATE_USER,
    RETRIEVE_USERS,
    RETRIEVE_USER_BY_ID,
    UPDATE_USER,
    DELETE_USER,
    DELETE_ALL_USERS
  } from "../actions/type";
  const initialState = [];

  function userReducer(users = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case CREATE_USER:
        return [...users, payload];
      case RETRIEVE_USERS:
        return payload;
      case RETRIEVE_USER_BY_ID:
        // console.log("Payload from reducer : " + payload)
        return payload;
      case UPDATE_USER:
        return users.map((user) => {
          if (user.id === payload.id) {
            return {
              ...user,
              ...payload,
            };
          } else {
            return user;
          }
        });
      case DELETE_USER:
        return users.filter(({ id }) => id !== payload.id);
      case DELETE_ALL_USERS:
        return [];
      default:
        return users;
    }
  };
  export default userReducer;