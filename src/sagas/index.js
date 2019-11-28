import { all } from 'redux-saga/effects';
import planetsSagas from './planetsSagas';
import loginSagas from './loginSagas';

const sagas = function* sagas() {
  yield all([loginSagas(), planetsSagas()]);
};

export { sagas };
