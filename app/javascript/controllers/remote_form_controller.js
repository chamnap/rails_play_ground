import TurbolinksProgressBar from "utils/turbolinks_progress_bar";
import { Controller } from "stimulus";

export default class extends Controller {
  initialize() {
    this.element.setAttribute("data-type",   "html");
    this.element.setAttribute("data-action", this.dataAction);
  }

  get dataAction() {
    let actions = [
      "ajax:beforeSend->remote-form#onBeforeSend",
      "ajax:send->remote-form#onSend",
      "ajax:complete->remote-form#onComplete",
      "ajax:error->remote-form#onError"
    ]

    return actions.join(" ");
  }

  // Events
  onBeforeSend() {
    TurbolinksProgressBar.progressWillShow();
  }

  onSend() {
    TurbolinksProgressBar.progressShowing();
  }

  onComplete() {
    TurbolinksProgressBar.progressDidComplete();
  }

  onError(event) {
    let [data, status, xhr] = event.detail;

    // Update the form to show the field errors
    event.target.innerHTML = xhr.response;
  }
}
