import Turbolinks from "turbolinks";

class TurbolinksProgressBar {
  start() {
    this.progressBar = Turbolinks.controller.adapter.progressBar;
    this._bindEvents();
  }

  progressWillShow() {
    this.progressBar.show();
    this.progressBar.setValue(0.3);
  }

  progressShowing() {
    this.progressBar.setValue(0.5);
  }

  progressDidComplete() {
    this.progressBar.setValue(1);
    this.progressBar.hide();
  }

  // private
  _bindEvents() {
    document.addEventListener("turbolinks:visit",          this.progressWillShow.bind(this));
    document.addEventListener("turbolinks:request-start",  this.progressShowing.bind(this));
    document.addEventListener("turbolinks:request-end",    this.progressDidComplete.bind(this));
    document.addEventListener("turbolinks:load",           this.progressDidComplete.bind(this));
  }
}

export default new TurbolinksProgressBar;
