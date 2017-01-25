import { combineReducers } from 'redux';
import operatorReducer from './reducer_operator';

const rootReducer = combineReducers({
  sumValue: operatorReducer,
  val1: operatorReducer,
  val1: operatorReducer,
  result: operatorReducer
});

export default rootReducer;
