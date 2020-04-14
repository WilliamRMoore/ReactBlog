import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts()); //dispatching a function: Redux Thunk will see that this is a function and invoke it.

    // const userIds = _.uniq(_.map(getState().posts, "userId"));
    // userIds.forEach((id) => dispatch(fetchUser(id)));

    //another way to right this function.
    _.chain(getState().posts)
      .map("userId")
      .uniq()
      .forEach((id) => dispatch(fetchUser(id)))
      .value();
  };
};

//redux will look at this and see that it's return type is of a function, not an object.
//Redux will execute that function and then pass on it's resulting action object.
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};

// export const fetchUser = (id) => {
//   return (dispatch) => {
//     _fetchUser(id, dispatch);
//   };
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
