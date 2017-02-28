import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants';
import request from 'axios';

export function getUser() {
  return {
    type: FETCHING_DATA,
  };
}

export function getUserSuccess(userData) {
  return {
    type: FETCHING_DATA_SUCCESS,
    userData,
  };
}

export function getUserFailure() {
  return {
    type: FETCHING_DATA_FAILURE,
  };
}

export function fetchUser(user) {
  return (dispatch) => {
    dispatch(getUser());
    request.get(`https://api.github.com/users/${user}`)
      .then((userData) => {
        dispatch(getUserSuccess(userData));
      })
      .catch(err => console.log('err:', err));
  };
}
