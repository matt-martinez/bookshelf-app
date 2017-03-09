function AuthController($http, $state, $scope, $rootScope) {
  var self = this;

  function signup(userPass) {
    // console.log("Frontend Sign Up");
    $http.post('/users', userPass)
      .then(function(response) {
      // console.log(response);
      $state.go('index');
      });
  }

  function login(userPass) {
    // console.log("Frontend Login");
    $http.post('/sessions/login', userPass)
      .then(function(response) {
        // console.log(response.data.data);
        $scope.$emit('loggedInUser', response.data.data);
        $rootScope.$emit('fetchData', response.data.data);
        $state.go('index');
      });
  }

  function logout() {
    // console.log("Frontend Logout");
    $http.delete('/sessions')
      .then(function(response) {
        // console.log(response);
        $scope.$emit('loggedOutUser');
        $state.go('index');
      });
  }

  self.logout = logout;
  self.login = login;
  self.signup = signup;
}
