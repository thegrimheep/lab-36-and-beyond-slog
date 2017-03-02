'use strict';

require('angular').module('BeerLog')
.filter('navFilter', function(){
  return function(pages) {
    return pages.filter(p => p.showInNav);
  };
});
