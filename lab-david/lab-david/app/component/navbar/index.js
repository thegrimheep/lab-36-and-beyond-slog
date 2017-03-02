'use strict';

require('angular').module('BeerLog')
.component('navbar', {
  template: require('./navbar.html'),
  bindings: {
    pages: '<',
  },
});
