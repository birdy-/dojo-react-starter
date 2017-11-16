import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createRootReducer from '../reducers';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);

const configureStore = initialState => {
  const rootReducer = createRootReducer();

  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
};

export default configureStore;
