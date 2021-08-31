import {
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESET,
  USER_CLOCKIN_FAIL,
  USER_CLOCKIN_REQUEST,
  USER_CLOCKIN_RESET,
  USER_CLOCKIN_SUCCESS,
  USER_CLOCKOUT_FAIL,
  USER_CLOCKOUT_REQUEST,
  USER_CLOCKOUT_SUCCESS,
  USER_CLOCKOUT_RESET,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, register: action.payload, success: true };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

export const userClockinReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CLOCKIN_REQUEST:
      return { loading: true };
    case USER_CLOCKIN_SUCCESS:
      return {
        loading: false,
        clockin: action.payload.response,
        success: true,
      };
    case USER_CLOCKIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_CLOCKIN_RESET:
      return {};
    default:
      return state;
  }
};

export const userClockOutReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CLOCKOUT_REQUEST:
      return { loading: true };
    case USER_CLOCKOUT_SUCCESS:
      return {
        loading: false,
        success: true,
        clockout: action.payload.response,
      };
    case USER_CLOCKOUT_FAIL:
      return { loading: false, error: action.payload };
    case USER_CLOCKOUT_RESET:
      return {};
    default:
      return state;
  }
};
