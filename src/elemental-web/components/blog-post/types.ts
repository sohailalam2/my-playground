import { Exception, ValueObject } from '@sohailalam2/abu';

export class BlogTitle extends ValueObject {}

export class BlogDescription extends ValueObject {}

export class BlogLikeCount extends ValueObject<number> {}

export class InvalidBlogUrlException extends Exception {}

export class BlogUrl extends ValueObject {
  validate() {
    super.validate();
    if (!this.value.includes('/')) {
      throw new InvalidBlogUrlException(this.value);
    }
  }
}

export interface BlogPostState {
  title: BlogTitle;
  description: BlogDescription;
  link: BlogUrl;
  likes: BlogLikeCount;
}
