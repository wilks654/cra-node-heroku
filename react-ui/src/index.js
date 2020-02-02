import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


import {BrowserRouter, Route} from 'react-router-dom';

import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import reducer from './reducers';

let middleware = [];

middleware.push(thunk);

if (process.env.NODE_ENV !== 'production') {
  //import { createLogger } from 'redux-logger';
  //middleware.push(createLogger());
}

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, reducer)

let store = createStore(
    persistedReducer,
    applyMiddleware(...middleware)
  )

let persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter> 
      </PersistGate>
    </ Provider>,
    document.getElementById('root')
  )

  /** 
   * 
   * 
  */