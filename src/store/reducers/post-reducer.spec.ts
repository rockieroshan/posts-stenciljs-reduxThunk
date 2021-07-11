import { PostsActionTypes } from "../action-types";
import { initialState, PostsReducer } from "./post-reducer";

describe('PostsReducer', () => {
  it('should handle BEGIN_BOOKMARKS_DOWNLOAD', () => {
    expect(
      PostsReducer(initialState, {
        type: PostsActionTypes.BEGIN_POSTS_DOWNLOAD,
        payload: false,
      })
    ).toEqual({
      posts: [],
      error: undefined,
      loading: false,
      currentPost: undefined,
    });
  });

  it('should handle BOOKMARKS_DOWNLOAD_OK', () => {
    expect(
      PostsReducer({ ...initialState, loading: false, error: undefined }, {
        type: PostsActionTypes.POSTS_DOWNLOAD_OK,
        payload: [{
          "title": "Google",
          "description": "Munich",
          "id": 6
        }],
      })
    ).toEqual({
      posts: [{
        "title": "Google",
        "description": "Munich",
        "id": 6
      }],
      error: undefined,
      loading: false,
      currentPost: undefined,
    });
  });

  it('should handle BOOKMARKS_DOWNLOAD_ERROR', () => {
    expect(
      PostsReducer(initialState, {
        type: PostsActionTypes.POSTS_DOWNLOAD_ERROR,
        payload: true,
      })
    ).toEqual({
      posts: [],
      error: true,
      loading: false,
      currentPost: undefined,
    });
  })

  it('should handle RETRIEVE_POST_EDIT ', () => {
    expect(
      PostsReducer(initialState, {
        type: PostsActionTypes.RETRIEVE_POST_EDIT,
        payload: [{
          "title": "Google",
          "description": "Munich",
          "id": 6
        }],
      })
    ).toEqual({
      posts: [],
      error: undefined,
      loading: false,
      currentPost: [{
        "title": "Google",
        "description": "Munich",
        "id": 6
      }],
    });
  })

  it('should handle POST_EDITED_OK ', () => {
    expect(
      PostsReducer(initialState, {
        type: PostsActionTypes.POST_EDITED_OK,
        payload: [{
          "title": "Google",
          "description": "Munich",
          "id": 6
        }],
      })
    ).toEqual({
      posts: [],
      error: undefined,
      loading: false,
      currentPost: undefined,
    });
  })

  it('should handle POST_EDITED_ERROR', () => {
    expect(
      PostsReducer(initialState, {
        type: PostsActionTypes.POST_EDITED_ERROR,
        payload: true,
      })
    ).toEqual({
      posts: [],
      error: true,
      loading: false,
      currentPost: undefined,
    });
  })
})
