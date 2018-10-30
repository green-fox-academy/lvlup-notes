
import { combineReducers } from 'redux';
import rocket from './rocket'
import hello from './hello'

const rootReducer = combineReducers({
  rocket,
  hello,
});
export default rootReducer;