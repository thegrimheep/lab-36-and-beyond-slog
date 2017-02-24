'use strict';

const angular = require('angular');
const ngMarked = require('angular-marked');
const uiRouter = require('angular-ui-router');
angular.module('BeerLog', [uiRouter, ngMarked])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/admin');

  let routes = [
    {
      name: 'layout',
      url: '/layout',
      template: '<layout> </layout>',
    },
    {
      name: 'admin',
      url: '/admin',
      template: '<admin> </admin>',
    },
    {
      name: 'dashboard',
      url: '/dashboard',
      template: '<dashboard> </dashboard>',
    },
  ];
  routes.forEach(route => $stateProvider.state(route));
}]);

require('./service/page-service.js');
require('./service/admin-service.js');

require('./container/admin');
require('./container/dashboard');

require('./component/login');
require('./component/layout');
require('./component/page-editor');
require('./component/page-select');
