angular.module('BookshelfApp', ['ui.router'])
  .config(AppRouter)

  function AppRouter($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '/partials/home.html',
      controller: 'BookController as books'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/partials/signup.html',
      controller: 'AuthController as auth'
    })
    .state('book-grid', {
      url: '/book-grid',
      templateUrl: '/partials/book-grid.html',
      controller: 'BookController as books'
    })
  }
