/* eslint-disable no-console */
import { ElementalComponent } from '@sohailalam2/elemental-web';

import { Blogs } from '@/elemental-web/components/blogs';
import { BlogPostComponent } from '@/elemental-web/components/blog-post';
import { ButtonCounter } from '@/elemental-web/components/button-counter';
import { printOnDOM } from '@/app';

// -------------------------------------------------------
// Register All Elemental Components
// -------------------------------------------------------
ElementalComponent.register(Blogs);
ElementalComponent.register(BlogPostComponent);
ElementalComponent.register(ButtonCounter);

// -------------------------------------------------------
// Business Logics
// -------------------------------------------------------

printOnDOM(`
<div id="elemental-web-components">
  <button>Not Elemental Component Button</button>
  <br />
  <el-blogs></el-blogs>
  <br />
  <el-button-counter state="0"></el-button-counter>
  <br />
</div>
`);

document.addEventListener('button-clicked', e => {
  printOnDOM((e as CustomEvent).detail);
});
