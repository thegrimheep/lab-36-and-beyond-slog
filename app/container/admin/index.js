'use strict';

require('angular').module('BeerLog')
.component('admin', {
  template: `
  <div class="admin">
  <login user="$ctrl.loginUser" handleSubmit="$ctrl.loginHandleSubmit"></login>
  </div>`,
  controller: ['$log', 'authService', '$location', AdminController ],
});

function AdminController($log, authService, $location) {
  this.$onInit = () => {
    authService.tokenFetch()
    .then(() => $location.path('/dashboard'));
    this.loginUser = {email: '', password: ''};
    this.loginHandleSubmit = (user) => {
      authService.login(user)
      .then(token => {
        $log.log('YES!!', token);
        this.loginUser = {email: '', password: ''};
        $location.path('/dashboard');
      })
      .catch($log.error);
    };
  };
}
