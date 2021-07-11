import { IPost } from './../state-types';
import axiosClient from '../config/index';

export async function retrievePostsDB() {
  return await axiosClient.get('/posts');
}

export async function editPostDB(post: IPost) {
  return await axiosClient.put(`/posts/${post.id}`, post);
}
