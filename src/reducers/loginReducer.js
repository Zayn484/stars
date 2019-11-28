import { 
    LOGIN_AUTH_REQUEST,
    LOGIN_AUTH_SUCCESS,
    LOGIN_AUTH_FAILURE,
    GET_PRODUCT_BY_ID_REQUEST,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_FAILURE,
    UPDATE_PRODUCT_FIELDS,
    CLEAR_PRODUCTS_LIST   
  } from '../actions/loginActions';

const initialState = {
  isLoading: false,
  loginStatus: '',
  productsList: [],
  productDetailById: {},
  currentProductList: [],
  selectedProductAttr: {},
};

const loginReducer = (state = initialState, { type, payload}) => {
switch (type) {    
case LOGIN_AUTH_REQUEST: {
 return {
   ...state, 
   isLoading: false,
   loginStatus: ''
 };
}

case LOGIN_AUTH_SUCCESS: {
 return {
   ...state, 
   isLoading: false,
   loginStatus: 'success'
 };
}

case LOGIN_AUTH_FAILURE: {
 return {
   ...state, 
   isLoading: false,
   loginStatus: 'failure',
 };
}

default:
return state;
}
};

export { loginReducer };
