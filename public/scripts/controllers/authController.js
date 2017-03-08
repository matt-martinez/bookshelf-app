function AuthController($http, $state, $scope, $rootScope) {
  var self = this;

  function signup(userPass) {
    console.log("Frontend Sign Up");
    $http.post('/users', userPass)
      .then(function(response) {
      // $state.go('index');
    });
  }

}
