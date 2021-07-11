import { IPost, IPostState } from './../state-types';
import { Reducer } from "redux";
import { ACTIONTYPE } from "../state-types";
import { PostsActionTypes } from '../action-types';

export const initialState: IPostState = {
  posts: [],
  error: undefined,
  loading: false,
  currentPost: undefined,
};

const reducer: Reducer<IPostState> = (
  state: IPostState = initialState,
  action: ACTIONTYPE
): IPostState => {
  const { type, payload, post } = action;
  const { posts, currentPost } = state;

  switch (type) {
    case PostsActionTypes.BEGIN_POSTS_DOWNLOAD:
    case PostsActionTypes.BEGIN_EDIT_POST:
      return {
        ...state,
        loading: payload as boolean,
        currentPost: post
      };

    case PostsActionTypes.POSTS_DOWNLOAD_ERROR:
    case PostsActionTypes.POST_EDITED_ERROR:
      return {
        ...state,
        loading: false,
        error: payload as boolean,
      };

    case PostsActionTypes.POSTS_DOWNLOAD_OK:
      return {
        ...state,
        loading: false,
        error: undefined,
        posts: payload as IPost[],
      };

    case PostsActionTypes.RETRIEVE_POST_EDIT:
      return {
        ...state,
        currentPost: payload as IPost,
      };

    case PostsActionTypes.POST_EDITED_OK:
      return {
        ...state,
        posts: posts?.map((post: IPost) =>
          post.id === (currentPost as IPost).id
            ? (post = currentPost as IPost)
            : post
        ),
        currentPost: undefined,
      };

    default:
      return state;
  }
};

export { reducer as PostsReducer };
