import { ElementalComponent } from '@sohailalam2/elemental-web';

import { BlogPostState } from './types';

export class BlogPostComponent extends ElementalComponent<BlogPostState> {
  protected render(): string {
    return this.$state
      ? `
      <h2>${this.$state.title.value} (likes: ${this.$state.likes.value})</h2>
      <p>${this.$state.description.value}</p>
      <a href="${this.$state.link.value}">Learn More</a>
      `
      : `
      <span></span>`;
  }
}
