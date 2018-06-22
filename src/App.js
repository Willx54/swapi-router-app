import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import swapiAppReducer from './store/reducer';
import swapiAppSaga from './api/sagas';
import HomePageContainer from './container/HomePageContainer/HomePageContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  swapiAppReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(swapiAppSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <HomePageContainer/>
        </Router>  
      </Provider>
    );
  }
}

export default App;
