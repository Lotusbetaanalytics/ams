import Axios from "axios";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_CLOCKIN_SUCCESS,
  USER_CLOCKIN_REQUEST,
  USER_CLOCKIN_FAIL,
  USER_CLOCKOUT_FAIL,
  USER_CLOCKOUT_REQUEST,
  USER_CLOCKOUT_SUCCESS,
} from "../constants/userConstants";

export const registration =
  (firstName, lastName, identity, email, media1, media2) =>
  async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    try {
      const { data } = await Axios.post("/api/Attendance/register", {
        firstName,
        lastName,
        identity,
        email,
        media1,
        media2,
      });
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const clockin =
  (identity, latitude, media1, longitude) => async (dispatch) => {
    dispatch({
      type: USER_CLOCKIN_REQUEST,
    });
    try {
      const { data } = await Axios.post("/api/Attendance/clockin", {
        identity,
        latitude,
        media1,
        longitude,
      });
      dispatch({
        type: USER_CLOCKIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_CLOCKIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const clockout = (identity) => async (dispatch) => {
  dispatch({
    type: USER_CLOCKOUT_REQUEST,
  });
  try {
    const { data } = await Axios.post("/api/Attendance/clockout", {
      identity,
    });
    dispatch({
      type: USER_CLOCKOUT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_CLOCKOUT_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};
