'use strict';

require('angular').module('BeerLog')
.component('pageEditor', {
  template: require('./page-editor.html'),
  bindings: {
    page: '<',
    handleSubmit: '<',
  },
});
