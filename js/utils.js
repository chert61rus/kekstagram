'use strict';

(function () {
  var lastTimeout;
  window.utils = {
    CLASS_HIDDEN: 'hidden',
    ESCAPE_KEYCODE: 27,
    ENTER_KEYCODE: 13,
    DEBOUNCE_INTERVAL: 300,
    FILE_TYPES: ['gif', 'jpg', 'jpeg', 'png'],
    debounce: function (callback) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(callback, this.DEBOUNCE_INTERVAL);
    }
  };
})();
