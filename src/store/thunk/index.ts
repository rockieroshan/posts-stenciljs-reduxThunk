import { IPost } from './../state-types';
import { displayToastMessage } from './../../components/view/notification/notification';
import { editPostDB, retrievePostsDB } from '../api-calls';
import { downloadPostsAction, downloadPostsErrorAction, downloadPostsOkAction, editPostErrorAction, editPostOkAction } from '../actions/posts-action';

export function retrievePosts() {
  return async dispatch => {
    await dispatch(downloadPostsAction());
    try {
      const { data } = await retrievePostsDB();
      await dispatch(downloadPostsOkAction(data))
    } catch (error) {
      dispatch(downloadPostsErrorAction());
      displayToastMessage('error', 'An error ocurred')
    }
  };
}

export function editPost(post: IPost) {
  return async dispatch => {
    try {
      await editPostDB(post);
      await dispatch(editPostOkAction(post));
    } catch (error) {
      await dispatch(editPostErrorAction());
      displayToastMessage('error', 'An error ocurred')
    }
  }
}
