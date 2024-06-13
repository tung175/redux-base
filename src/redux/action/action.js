import axios from "axios";
import {
  CREATE_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  DECREMENT,
  DELETE_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  INCREMENT,
} from "./types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const fetchAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUserRequest());
    try {
      let res = await axios.get("http://localhost:8080/users/all");
      dispatch(fetchUserSuccess(res.data));
    } catch (error) {
      dispatch(fetchUserError());
    }
  };
};

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};

export const fetchUserError = () => {
  return {
    type: FETCH_USER_ERROR,
  };
};

//CREATE USER

export const createAllUsers = (email, password, username) => {
  return async (dispatch, getState) => {
    dispatch(createUserRequest());
    try {
      let res = await axios.post("http://localhost:8080/users/create", {
        email,
        password,
        username,
      });
      if (res && res.data && res.data.errCode === 0) {
        dispatch(createUserSuccess());
        dispatch(fetchAllUsers())
      }
    } catch (error) {
      dispatch(createUserError());
    }
  };
};

export const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

export const createUserSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};

export const createUserError = () => {
  return {
    type: CREATE_USER_ERROR,
  };
};

//DELETE USER

export const deleteAUser = (id) => {
  return async (dispatch, getState) => {
    dispatch(createUserRequest());
    try {
      let res = await axios.post(`http://localhost:8080/users/delete/${id}`);
      if (res && res.data && res.data.errCode === 0) {
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUsers())
      }
    } catch (error) {
      dispatch(createUserError());
    }
  };
};

export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

export const deleteUserSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  };
};

export const deleteUserError = () => {
  return {
    type: DELETE_USER_ERROR,
  };
};
