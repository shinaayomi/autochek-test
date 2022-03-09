import React from 'react';
import './App.css';
import Pages from './page/Pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <div className="">
      <Provider store={store}>
      <Router>
      <Switch>
          <Route exact path="/">
          <Pages />
          </Route>          
        </Switch>
      </Router>
      </Provider>
                  
    </div>
  );
}

export default App;
