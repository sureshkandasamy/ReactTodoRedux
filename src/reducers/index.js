import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import todos from "./todosReducer"

export default combineReducers({
  tweets,
  user,
  todos,
})