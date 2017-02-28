import { combineReducers } from 'redux';
import appData from './dataReducer';
import personData from './personReducer';

const rootReducer = combineReducers({
  appData,
  personData,
});

export default rootReducer;
