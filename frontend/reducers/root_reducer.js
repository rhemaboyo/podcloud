import { combineReducers } from 'redux';
import benchesReducer from './benches_reducer';
import SessionReducer from './session_reducer';


const rootReducer = combineReducers({
  session: SessionReducer,
});


export default rootReducer;
