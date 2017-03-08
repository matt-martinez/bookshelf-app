function HomeController($scope, $http) {
  var self = this;

  $scope.$on('loggedInUser', function(event, data) {
    self.currentUser = data;
    $scope.$broadcast('loginData', self.currentUser);
  });

  $scope.$on('loggedOutUser', function(event, data) {
    self.currentUser = null;
  });
}
