import { Exception, ValueObject } from '@sohailalam2/abu';

export class BlogTitle extends ValueObject {}

export class BlogDescription extends ValueObject {}

export class BlogLikeCount extends ValueObject<number> {}

export class InvalidBlogUrlException extends Exception<string> {}

export class BlogUrl extends ValueObject {
  validate() {
    super.validate();
    if (!this.valueOf().includes('/')) {
      throw new InvalidBlogUrlException(this.valueOf());
    }
  }
}

export interface BlogPostState {
  title: BlogTitle;
  description: BlogDescription;
  link: BlogUrl;
  likes: BlogLikeCount;
}
