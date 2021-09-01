import { createStore ,combineReducers,applyMiddleware} from 'redux';
import {mainReducer} from './reducers';
import thunk from 'redux-thunk';
const rootStore=combineReducers({mainReducer})
export const store = createStore(rootStore,applyMiddleware(thunk));