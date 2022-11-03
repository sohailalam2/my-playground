import { Exception, ValueObject } from '@sohailalam2/abu';
import { ElementalComponent } from '@sohailalam2/elemental-web';

import styles from './styles.scss?inline';
import template from './template.html?raw';

export class NavbarItemDataCanNotBeThisLarge extends Exception {}

export class NavbarItemData extends ValueObject {
  validate() {
    super.validate();
    const MAX_LENGTH = 15;

    if (this.value.length > MAX_LENGTH) {
      throw new NavbarItemDataCanNotBeThisLarge();
    }
  }
}

export interface NavBarMenu {
  start: NavbarItemData[];
  end: NavbarItemData[];
}

export class NavbarTemplateIsInvalidException extends Exception {}

export class Navbar extends ElementalComponent<NavBarMenu> {
  render(): string {
    if (!this.$template) {
      return `<p>No Template Found for Navbar</p>`;
    }

    const style = this.$root.querySelector('style');
    const start = this.$root.querySelector('.navbar-start');
    const end = this.$root.querySelector('.navbar-end');

    if (!style || !start || !end) {
      throw new NavbarTemplateIsInvalidException();
    }
    style.textContent = styles;

    (this.$state?.start ?? []).forEach(menu => this.appendItem(menu, start));
    (this.$state?.end ?? []).forEach(menu => this.appendItem(menu, end));

    return this.$root.innerHTML;
  }

  private appendItem(item: NavbarItemData, position: Element) {
    const a = document.createElement('a');

    a.className = 'navbar-item';
    a.textContent = item.value;

    position.appendChild(a);
  }
}

ElementalComponent.register(Navbar);
ElementalComponent.registerTemplate(Navbar, template);
