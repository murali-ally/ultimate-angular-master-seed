var login = {
  templateUrl: './login.html',
  controller: 'LoginController',
};

angular
  .module('components.auth')
  .component('login', login)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state({
        name: 'auth',
        redirectTo: 'auth.login',
        url: '/auth',
        template: '<div ui-view></div>'
      });
    $stateProvider.state({
      name: 'auth.login',
      url: '/login',
      component: 'login'
    });

    $urlRouterProvider.otherwise('/auth/login');
  });
