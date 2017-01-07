import axios from 'axios';
import {
  SIGNUP_USER,
} from 'actions/ActionTypes.js';

function onSuccess(response, dispatch) {
  dispatch({ type: SIGNUP_USER });
}

function onError(error, dispatch) {
  console.log('error');
}

export default function signupUser(data) {
  const request = axios.post(`/users`, {
    user: data,
  });

  return (dispatch) => request
    .then(response => onSuccess(response, dispatch), error => onError(error, dispatch));
}
