import "bootstrap/dist/js/bootstrap";

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("trix");
require("@rails/actiontext");
require("local-time").start();
require("selectize");
require("channels");
require("controllers");

import TurbolinksProgressBar from "utils/turbolinks_progress_bar";
TurbolinksProgressBar.start();
