'use strict';

const angular = require('angular');
const ngMarked = require('angular-marked');
const uiRouter = require('angular-ui-router');
const ngClipboard = require('angular-clipboard');
const ngAnimate = require('angular-animate');
const ngTouch = require('angular-touch');

angular.module('BeerLog', [uiRouter, ngMarked, ngClipboard.name, 'ngTouch', 'ngAnimate'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/home');

  let routes = [
    {
      name: 'home',
      url: '/home',
      template: '<home> </home>',
    },
    {
      name: 'homepage',
      url: '/home/:id',
      template: '<home> </home>',
    },
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

require('./filter/nav-filter');
require('./filter/page-searchbar-filter');

require('./container/home');
require('./container/admin');
require('./container/dashboard');

require('./component/login');
require('./component/layout');
require('./component/navbar');
require('./component/page-editor');
require('./component/page-select');
require('./component/page-searchbar');
