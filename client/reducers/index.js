import { combineReducers } from 'redux';

import usersReducer from './usersReducer';


// combine reducers
const reducers = combineReducers({
  users: usersReducer,
});

// make the combined reducers available for import
export default reducers;