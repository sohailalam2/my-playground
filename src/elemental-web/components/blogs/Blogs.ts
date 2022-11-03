/* eslint-disable no-magic-numbers, no-console */
import { ElementalComponent } from '@sohailalam2/elemental-web';

import {
  BlogPostState,
  BlogDescription,
  BlogLikeCount,
  BlogPostComponent,
  BlogTitle,
  BlogUrl,
} from '@/elemental-web/components/blog-post';

export class Blogs extends ElementalComponent<BlogPostState[]> {
  protected connectedCallback() {
    super.connectedCallback();
    this.registerEventListeners([
      { name: 'button-clicked', handler: this.onButtonClicked.bind(this), isCustomEvent: true },
    ]);
  }

  protected render(): string {
    if (Array.isArray(this.$state) && this.$state.length > 0) {
      const span = document.createElement('span');

      this.$state.forEach(data => span.appendChild(new BlogPostComponent({ state: data })));

      return span.innerHTML;
    }

    return '<p>No Blogs Yet!</p>';
  }

  private onButtonClicked(e: Event) {
    const blogs = Array.isArray(this.$state) ? this.$state : [];
    const nextBlogId = blogs.length + 1;

    const title = BlogTitle.from(`Blog #${nextBlogId}`);
    const description = BlogDescription.from((e as CustomEvent).detail);
    const likes = BlogLikeCount.from(Math.ceil(Math.random() * 100));
    const link = BlogUrl.from(`/blogs/${nextBlogId}`);

    blogs.push({ title, description, likes, link });
    this.updateState(blogs);
  }
}
