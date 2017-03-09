angular.module('BookshelfApp')
  .directive('book', book);

  function book() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: "/partials/_bookView.html"
    };
  }
