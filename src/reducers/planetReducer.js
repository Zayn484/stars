import { 
       GET_PLANETS,
       GET_PLANETS_REQUEST,
       GET_PLANETS_SUCCESS,
       GET_PLANETS_FAILURE
       } from '../actions/planetsActions';

const initialState = {
   isLoading: false,
   planetsList: []
};

const planetReducer = (state = initialState, { type, payload}) => {
  switch (type) {    
    case GET_PLANETS_REQUEST: {
      return {
        ...state, 
        isLoading: true,
      };
    }
     
    case GET_PLANETS_SUCCESS: {      
      return {
        ...state, 
        isLoading: false,
        planetsList: payload
      };
    }

    case GET_PLANETS_FAILURE: {
      return {
        ...state, 
        isLoading: false,
      };
    }

    default:
    return state;
  }
};

export { planetReducer };
