import { combineReducers } from "redux";
import keanuReducer from './keanu/reducer'

const rootReducer = combineReducers({
  keanu: keanuReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;