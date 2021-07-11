import { Component, h, State } from '@stencil/core';
import { store } from '@stencil/redux';
import { IPost, IPostState } from '../../store/state-types';
import { retrievePosts } from '../../store/thunk';

@Component({
  tag: 'app-posts',
  styleUrl: 'posts.scss',
  shadow: true,
})

export class Posts {
  @State() posts: IPost[];
  @State() currentPost: IPost;
  @State() currentPage: number = 1;
  @State() postsPerPage: number = 10;
  retrievePosts: () => void;

  componentWillLoad() {
    const { mapDispatchToProps, mapStateToProps } = store;
    mapStateToProps(this, ({ PostsReducer }: { PostsReducer: IPostState }) => {
      const { posts, currentPost } = PostsReducer;
      return {
        posts,
        currentPost
      }
    })

    mapDispatchToProps(this, {
      retrievePosts
    })
    this.retrievePosts();

  }

  render() {
    const indexOfLastPost = this.currentPage * this.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.postsPerPage;
    const currentPosts = this.posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber: number) => this.currentPage = pageNumber;

    return (
      <div class='postPaginatorWrapper'>
        <div class='postPaginator'>
          <div class='posts'>
            {currentPosts.map(post => <app-card cardDetails={post} />)}

          </div>
        </div>
        <div class='paginator'>
          {currentPosts && <app-pagination postsPerPage={this.postsPerPage} totalPosts={this.posts.length} paginate={paginate} />}
        </div>
      </div>
    );
  }
}
