angular.module('BookshelfApp', ['ui.router'])
  .config(AppRouter)

  function AppRouter($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '/partials/home.html'
    })
  }
