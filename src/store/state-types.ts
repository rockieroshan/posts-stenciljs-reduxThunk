import { PostsActionTypes } from "./action-types";

export type ACTIONTYPE = {
  type: PostsActionTypes;
  payload?: IPost | IPost[] | boolean;
  post?: IPost;
};

export interface IPostState {
  readonly loading: boolean;
  readonly posts?: IPost[];
  readonly error?: boolean;
  readonly currentPost?: IPost;
}

export interface IPost {
  title: string;
  description: string;
  id?: number;
}
