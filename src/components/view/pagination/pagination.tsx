import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-pagination',
  styleUrl: 'pagination.scss',
  shadow: true,
})

export class Pagination {
  private pageNumbers = [];
  @Prop() postsPerPage: number;
  @Prop() totalPosts: number;
  @Prop() paginate: (number: number) => void;

  componentWillUpdate() {
    for (let i = 1; i <= Math.ceil(this.totalPosts / this.postsPerPage); i++) {
      if (this.pageNumbers.length < 10) this.pageNumbers.push(i);
    }
  }

  render() {
    return (
      <ul class='pagination'>
        {this.pageNumbers.map(number => (
          <li key={number} class='page-item'>
            <a onClick={() => this.paginate(number)} class='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
