/* eslint-disable no-console, no-magic-numbers */
import { hasValue } from '@sohailalam2/abu';
import { ElementalComponent } from '@sohailalam2/elemental-web';

import styles from './style.scss?inline';

export class ButtonCounter extends ElementalComponent<number> {
  protected connectedCallback() {
    super.connectedCallback();
    this.registerEventListeners([{ name: 'click', handler: this.onClick.bind(this) }]);
  }

  render() {
    return `
      <style media="screen">${styles}</style>
      <button>Click Me (${this.$state})</button>
    `;
  }

  onClick() {
    if (hasValue(this.$state)) {
      const count = this.$state + 1;

      this.updateState(count);
      this.raiseEvent('button-clicked', true, `You have clicked my button ${count} times`);
    }
  }
}
