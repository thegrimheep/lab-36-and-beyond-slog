'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');
angular.module('BeerLog', [uiRouter])
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
      template: '<h1> BEER! </h1>',
    },
  ];
  routes.forEach(route => $stateProvider.state(route));
}]);

require('./service/admin-service.js');

require('./container/admin');
require('./container/dashboard');

require('./component/login');
require('./component/layout');
