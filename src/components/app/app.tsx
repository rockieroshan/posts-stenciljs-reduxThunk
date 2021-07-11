import { Component, h } from '@stencil/core';
import configureStore from '../../store';
import { store } from '@stencil/redux';

@Component({
  tag: 'app-root',
  styleUrl: 'app.scss',
  shadow: true,
})

export class AppRoot {
  componentWillLoad() {
    store.setStore(configureStore({}));
  }

  render() {
    return (
      <div class='appRoot'>
        <div class='mainWrapper'>
          {/* <app-editPost /> */}
          <stencil-router id="router">
            <stencil-route
              url="/edit/:id"
              component="app-editcard"
              exact={true}
            />
            <stencil-route
              url="/"
              component="app-posts"
              exact={true}
            />
          </stencil-router>
        </div>
      </div>
    );
  }
}
