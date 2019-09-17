var register = {
  templateUrl: './register.html',
  controller: 'RegisterController',
};
angular
  .module('components.auth')
  .component('register', register)
  .config(function ($stateProvider) {
    $stateProvider.state({
      name: 'auth.register',
      url: '/register',
      component: 'register',
    });
  });
