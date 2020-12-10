import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import myReducers from '../reducers';

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload : false
  }) : compose;

const configureStore = () => {
  const middleware = [thunk];
  const enhancers = [applyMiddleware(...middleware)];
  const store = createStore(myReducers, composeEnhancers(...enhancers));
  return store;
};

export default configureStore;