import {
    CREATE_USER,
    RETRIEVE_USERS,
    RETRIEVE_USER_BY_ID,
    UPDATE_USER,
    DELETE_USER,
    DELETE_ALL_USERS
  } from "../actions/type";
  import UserDataService from "../services/user.service";

  export const createUser = (data) => async (dispatch) =>{
      try{
          const res = await UserDataService.create(data);
          res.data={
            "first_name": data.first_name,
            "last_name": data.last_name,
            "user_name": data.user_name,
            "date_of_birth": data.date_of_birth,
          }
          console.log(res.data);

          dispatch({
              type: CREATE_USER,
              payload: res.data,
          });
          return Promise.resolve(res.data);
      } catch(err){
          return Promise.reject(err);
      }
  };

  export const retrieveUsers = () => async (dispatch) => {
    try {
      const res = await UserDataService.getAll();
      dispatch({
        type: RETRIEVE_USERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const retrieveUserById = (id) => async (dispatch) => {
    try {
      const res = await UserDataService.get(id);
      dispatch({
        type: RETRIEVE_USER_BY_ID,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  };

  export const updateUser = (id, data) => async (dispatch) => {
    try {
      const res = await UserDataService.update(id, data);
      res.data={
        "first_name": data.first_name,
        "last_name": data.last_name,
        "user_name": data.user_name,
        "date_of_birth": data.date_of_birth,
      }
      dispatch({
        type: UPDATE_USER,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const deleteUser = (id) => async (dispatch) => {
    try {
      await UserDataService.delete(id);
      dispatch({
        type: DELETE_USER,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const deleteAllUsers = () => async (dispatch) => {
    try {
      const res = await UserDataService.deleteAll();
      dispatch({
        type: DELETE_ALL_USERS,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const findUsersByName = (name) => async (dispatch) => {
    try {
      const res = await UserDataService.findByName(name);
      dispatch({
        type: RETRIEVE_USERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };