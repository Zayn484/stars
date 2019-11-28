import React, { Component, Fragment } from "react";
import { Switch } from "react-router";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { configureStore } from "./store/configure-store";
import Login from './components/login';
import SearchPlanet from './components/searchPlanet';
import Utils from './utils';

const { isAuthenticated } = new Utils();

const history = createBrowserHistory();

const store = configureStore();

const Routes = () => (
    <Provider store={store}>
    <Router history={history}>
    <Switch>
          <Route exact path="/" component={Login} /> : 
          <Route path="/planets" component={SearchPlanet} />
          }
    </Switch>
    </Router>
    </Provider>
)

// const Routes = () => (
//     <Provider store={store}>
//     <Router history={history}>
//                 <Switch>
//                 <Route exact path={'/'} render={()=><Login/>}/>
//                 {/* <Route exact path={'/planets'} render={()=><SearchPlanet/>}/>                     */}
//                  <PrivateRoute exact path={'/planets'} component={SearchPlanet}/>
//                  {/* <Route  render={()=><h1>Opps 404Error!</h1>}/> */}
//                 </Switch>
//                 </Router>
//     </Provider>
// )


export default Routes;