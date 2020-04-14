import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});
//when an action is dispatched by redux, it will be handed to all of the reducers/
//if the reducer works with said action's type, the redux store that holds the state will have
//that value modified.

//In this case, if an action of FETCH_POSTS is called, it will be handled by the postsReducer reducer.
//From there it will modify the 'posts' state of the redux store.
