import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from "./components/MainApp";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducerIndex';
import './index.css';

const store = createStore(reducer);

const App = () => (
  <Provider store ={store}>
        <MainApp />
  </Provider>
);
//in redux, every state exists as a store, or single object. The reducer creates this initial object
//reducer takes the state in an action and returns a new state
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
