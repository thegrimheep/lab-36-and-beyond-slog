'use strict';

// require('./_page-searchbar.scss');

require('angular').module('BeerLog')
.component('pageSearchbar', {
  template: require('./page-search.html'),
  bindings: {
    pages: '<',
    handleSelect: '<',
    searchterm: '=',
  },
});
