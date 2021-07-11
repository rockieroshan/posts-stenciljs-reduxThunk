import { Component, getAssetPath, h, Prop } from '@stencil/core';
import { IPost } from '../../store/state-types';

@Component({
  tag: 'app-card',
  styleUrl: 'card.scss',
  assetsDirs: ['assets'],
  shadow: true,
})


export class Card {
  @Prop() cardDetails: IPost;
  pencil: string = 'pencil.png';

  render() {
    const { title, description, id } = this.cardDetails

    const redirectionEdition = (): void => {
      window.location.href = `edit/${id}`
    };

    return (
      <div class="card">
        <div class='titleWithIcon'>
          <div class='title'>{title}</div>
          <img class='pencilIcon' onClick={redirectionEdition.bind(this)} src={getAssetPath(`../assets/icon/${this.pencil}`)} alt="Pencil icon" />
        </div>
        <div class='description'>{description}</div>
      </div>
    );
  }
}
