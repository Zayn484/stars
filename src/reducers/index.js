import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { planetReducer } from './planetReducer';

const appReducer = combineReducers({
  login: loginReducer,
  planets: planetReducer
});

const rootReducer = (state, action) => appReducer(state, action);

export { rootReducer };
