import { call, takeLatest, put, select } from "redux-saga/effects";
// import createHistory from 'history/createBrowserHistory';
import {
  LOGIN_AUTH,
  loginAuthRequest,
  loginAuthSuccess,
  loginAuthFailure
} from "../actions/loginActions";
import HttpHelper from "../utils/httpHelper";
import { BASE_URL } from '../config';

const { getRequest } = new HttpHelper();


function* loginAuth({ payload }) {
  try {
    console.log('payload received', payload);

    const payloadData = {
      url: `https://swapi.co/api/people/?search=${payload}`,
    };

    yield put(loginAuthRequest());

    const { data } = yield call(getRequest, payloadData);
  
    if(data.results.length) { 
      localStorage.setItem('user',JSON.stringify(data.results[0]));
      yield put(loginAuthSuccess());
    } else {
      yield put(loginAuthFailure());
    }
  } catch (error) {
    yield put(loginAuthFailure());
  }
}

function* loginSagas() {  
  yield [
    takeLatest(LOGIN_AUTH, loginAuth)
  ];
}

export default loginSagas;
