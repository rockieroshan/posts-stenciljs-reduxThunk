import { Component, h, State } from '@stencil/core';
import { store } from '@stencil/redux';
import { editPostAction } from '../../store/actions/posts-action';
import { IPost, IPostState } from '../../store/state-types';
import { retrievePosts, editPost } from '../../store/thunk';
import { displayPopup } from '../view/notification/notification';

interface IFormValue {
  title: string; description: string;
}

@Component({
  tag: 'app-editcard',
  styleUrl: 'editCard.scss',
  shadow: true,
})


export class EditCard {
  postId: number = +window.location.pathname.split('/').slice(-1)[0];
  @State() formValue: IFormValue = { title: '', description: '' };
  @State() posts: IPost[];
  @State() currentPost: IPost;
  editPostAction: (post: IPost) => void
  editPost: (post: IPost) => void
  retrievePosts: () => void;

  componentWillLoad() {
    const { mapDispatchToProps, mapStateToProps } = store;

    mapStateToProps(this, ({ PostsReducer }: { PostsReducer: IPostState }) => {
      const { posts } = PostsReducer;
      this.currentPost = posts.filter(post => post.id === this.postId)[0];
      return {
        posts
      }
    })

    mapDispatchToProps(this, {
      retrievePosts,
      editPostAction,
      editPost
    });
    const postsReceived = new Promise((resolve) => {
      resolve(this.retrievePosts());
    });
    postsReceived.then(() => this.formValue = { ...this.currentPost })
  }

  handleChange = (e: Event): void => {
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement).value.trim();
    this.formValue = { ...this.formValue, [name]: value };
    this.enableButton()
  }

  handleCancel = (): void => {
    window.location.href = '/'
  }

  handleSave = (e: Event): void => {
    this.editPostAction(this.formValue);
    this.editPost(this.formValue);
    displayPopup('success', 'Edited!', 'The post has been Edited!').then(() => window.location.href = '/');
    e.preventDefault()
  }

  enableButton = (): boolean => {
    if (JSON.stringify(this.formValue) === JSON.stringify(this.currentPost)
      || this.formValue.description === ''
      || this.formValue.title === '') {
      return true
    }
    return false;
  }

  render() {

    return (
      <div class="card">
        <div class='title'>Edit fields</div>
        <div class='formWrapper'>
          <form class='form'>
            <input type='text' class='inputField' value={this.formValue.title} name='title' placeholder='Title' onInput={this.handleChange} />
            <textarea class='inputField' value={this.formValue.description} name='description' placeholder='Description' onInput={this.handleChange} />
          </form>
          <div class='btnWrapper'>
            <button onClick={this.handleCancel} class='btn'>Cancel</button>
            <button disabled={this.enableButton()} onClick={this.handleSave} class={this.enableButton() ? 'disableBtn' : 'activeBtn'}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}
