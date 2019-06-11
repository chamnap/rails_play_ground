// <select
//    data-controller="selectize"
// >
import { Controller } from 'stimulus';

export default class extends Controller {
  connect() {
    this.$element.selectize();
  }

  disconnect() {
    this.$element[0].selectize.destroy();
  }

  get $element() {
    return $(this.element);
  }
}
