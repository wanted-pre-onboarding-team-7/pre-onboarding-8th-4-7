import { combineReducers } from "redux";
import comments from "./comment";
import pagination from "./pagination";
const rootReducer = combineReducers({
   comments,
   pagination
})

export default rootReducer