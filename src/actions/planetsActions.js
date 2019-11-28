import { createAction } from 'redux-actions';

export const GET_PLANETS = 'GET_PLANETS';
export const getPlanets = createAction(GET_PLANETS);

export const GET_PLANETS_REQUEST = 'GET_PLANETS_REQUEST';
export const getPlanetsRequest = createAction(GET_PLANETS_REQUEST);

export const GET_PLANETS_SUCCESS = 'GET_PLANETS_SUCCESS';
export const getPlanetsSuccess = createAction(GET_PLANETS_SUCCESS);

export const GET_PLANETS_FAILURE = 'GET_PLANETS_FAILURE';
export const getPlanetsFailure = createAction(GET_PLANETS_FAILURE);

