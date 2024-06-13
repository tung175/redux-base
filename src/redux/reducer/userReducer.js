import {
  CREATE_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  DELETE_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "../action/types";

const INITIAL_STATE = {
  listUsers: [],
  isLoading: false,
  isError: false,
  isCreating: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        listUsers: action.payload,
        isLoading: false,
        isError: false,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case CREATE_USER_REQUEST:
      return {
        ...state,
        isCreating: true,
        isError: false,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isCreating: false,
        isError: false,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        isCreating: false,
        isError: true,
      };
    case DELETE_USER_REQUEST:
      return {
        ...state,
        isCreating: true,
        isError: false,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isCreating: false,
        isError: false,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        isCreating: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default userReducer;
