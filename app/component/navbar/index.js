'use strict';

require('angular').module('beerLog')
.component('navbar', {
  template: require('./navbar.html'),
  bindings: {
    pages: '<',
  },
});
