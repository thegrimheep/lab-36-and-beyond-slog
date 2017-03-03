'use strict';

// require('./_page-searchbar.scss');

require('angular').module('BeerLog')
.component('pageSearchbar', {
  template: require('./page-searchbar.html'),
  bindings: {
    pages: '<',
    handleSelect: '<',
    searchTerm: '=',
  },
});
