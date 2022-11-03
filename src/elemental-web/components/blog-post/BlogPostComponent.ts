import { ElementalComponent } from '@sohailalam2/elemental-web';

import { BlogPostState } from './types';

export class BlogPostComponent extends ElementalComponent<BlogPostState> {
  render(): string {
    if (this.$state) {
      return `
      <h2>${this.$state.title.value} (likes: ${this.$state.likes.value})</h2>
      <p>${this.$state.description.value}</p>
      <a href="${this.$state.link.value}">Learn More</a>
      `;
    }

    return `<span></span>`;
  }
}
