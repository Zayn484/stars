import { createAction } from 'redux-actions';

export const LOGIN_AUTH = 'LOGIN_AUTH';
export const loginAuth = createAction(LOGIN_AUTH);

export const LOGIN_AUTH_REQUEST = 'LOGIN_AUTH_REQUEST';
export const loginAuthRequest = createAction(LOGIN_AUTH_REQUEST);

export const LOGIN_AUTH_SUCCESS = 'LOGIN_AUTH_SUCCESS';
export const loginAuthSuccess = createAction(LOGIN_AUTH_SUCCESS);

export const LOGIN_AUTH_FAILURE = 'LOGIN_AUTH_FAILURE';
export const loginAuthFailure = createAction(LOGIN_AUTH_FAILURE);