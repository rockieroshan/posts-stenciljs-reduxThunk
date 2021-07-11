import { PostsActionTypes } from "../action-types";
import { IPost } from "../state-types";

const downloadPosts = () => ({
  type: PostsActionTypes.BEGIN_POSTS_DOWNLOAD,
  payload: true,
});

const downloadPostsOk = (posts: IPost[]) => ({
  type: PostsActionTypes.POSTS_DOWNLOAD_OK,
  payload: posts,
});

const downloadPostsError = () => ({
  type: PostsActionTypes.POSTS_DOWNLOAD_ERROR,
  payload: true,
});

export const downloadPostsAction = () => async dispatch => dispatch(downloadPosts());

export const downloadPostsOkAction = (posts: IPost[]) => async dispatch => dispatch(downloadPostsOk(posts));

export const downloadPostsErrorAction = () => async dispatch => dispatch(downloadPostsError());

const retrievePostAction = (post: IPost) => ({
  type: PostsActionTypes.RETRIEVE_POST_EDIT,
  payload: post,
});

const editPost = (post: IPost) => ({
  type: PostsActionTypes.BEGIN_EDIT_POST,
  post
});

const editPostOk = (post: IPost) => ({
  type: PostsActionTypes.POST_EDITED_OK,
  payload: post
});

const editPostError = () => ({
  type: PostsActionTypes.POST_EDITED_ERROR,
  payload: true,
});

export const retrievePostEditAction = (post: IPost) => async dispatch => dispatch(retrievePostAction(post));

export const editPostAction = (post: IPost) => async dispatch => dispatch(editPost(post));

export const editPostOkAction = (post: IPost) => async dispatch => dispatch(editPostOk(post));

export const editPostErrorAction = () => async dispatch => dispatch(editPostError());
