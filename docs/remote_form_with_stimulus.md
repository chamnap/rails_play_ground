# Remote Form with Stimulus

It was very much inspired by this [article](https://medium.com/parallel-thinking/stimulus-rails-remote-forms-ca5b3e2f02ed). I've made it further with turbolink and progressbar. The nice thing is that handling error when the validation is failed on the server side. Be sure to check out:

  1. [Rails controller](https://github.com/chamnap/rails_play_ground/blob/master/app/controllers/comments_controller.rb)
  2. [Rails view](https://github.com/chamnap/rails_play_ground/blob/master/app/views/comments/_form.html.slim)
  2. [Stimulus controller](https://github.com/chamnap/rails_play_ground/blob/master/app/javascript/controllers/remote_form_controller.js)

![alt text](https://github.com/chamnap/rails_play_ground/blob/master/docs/screenshots/remote_form.gif "Remote Form with Stimulus")

## References

  1. https://medium.com/parallel-thinking/stimulus-rails-remote-forms-ca5b3e2f02ed
  2. https://pspdfkit.com/blog/2018/introduction-to-stimulus-js/
  3. https://discourse.stimulusjs.org/t/listening-to-jquery-events-on-stimulus-actions-like-ajax-success/573
  4. https://discourse.stimulusjs.org/t/stimulus-and-rails-ujs/587
  5. https://discourse.stimulusjs.org/t/correct-way-to-append-html-from-server/300
  6. https://discourse.stimulusjs.org/t/programatically-submit-a-remote-form/492
