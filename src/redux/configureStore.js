import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import myReducers from "../reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middleware = [thunk, sagaMiddleware];
  const enhancers = [applyMiddleware(...middleware)];
  const store = createStore(myReducers, composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
