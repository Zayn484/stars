import { call, takeLatest, put, select } from "redux-saga/effects";
import {
  GET_PLANETS,
  getPlanetsRequest,
  getPlanetsSuccess,
  getPlanetsFailure
} from "../actions/planetsActions";
import HttpHelper from "../utils/httpHelper";
import { BASE_URL } from '../config';

const { getRequest } = new HttpHelper();

function* getPlanets() {
  try {
    let pageNo = 1;
    
    const payloadData = {
      url: `https://swapi.co/api/planets/?page=${pageNo}`,
    };

    let planets = [];

    yield put(getPlanetsRequest());

    let results = yield call(getRequest, payloadData);
        
    while(results.data && results.data.next != null) {
  
        pageNo = pageNo + 1;

        planets = [ ...planets, ...results.data.results ];
         results = yield call(getRequest, {url: `https://swapi.co/api/planets/?page=${pageNo}`});        
      }
      
    if(planets.length) { 
      yield put(getPlanetsSuccess(planets));
    } else {
      yield put(getPlanetsFailure());
    }
  } catch (error) {
    yield put(getPlanetsFailure());
  }
}

function* planetsSagas() {
  yield [
    takeLatest(GET_PLANETS, getPlanets)
  ];
}

export default planetsSagas;
