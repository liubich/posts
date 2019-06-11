import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduser from './reducers/reducer';

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    reduser,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
}
