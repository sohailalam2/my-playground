/* eslint-disable no-console, no-magic-numbers */
import { hasValue } from '@sohailalam2/abu';
import { ElementalComponent } from '@sohailalam2/elemental-web';

import css from './style.css?inline';

export class ButtonCounter extends ElementalComponent<number> {
  protected connectedCallback() {
    super.connectedCallback();
    this.addEventHandlers([{ name: 'click', handler: this.onClick.bind(this) }]);
  }

  render() {
    return `
      <style media="screen">${css}</style>
      <button>Click Me (${this.$state})</button>
    `;
  }

  onClick() {
    if (hasValue(this.$state)) {
      const count = this.$state + 1;

      this.updateState(count);
      this.raiseEvent('button-clicked', `You have clicked my button ${count} times`);
    }
  }
}
