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
        if (response.data.data == "unauthorized") {
          validLogin(false);
        } else {
          validLogin(true);
          $scope.$emit('loggedInUser', response.data.data);
          $rootScope.$emit('fetchData', response.data.data);
          // clearLoginForm();
          $state.go('index');
        }
      });
  }

  // function clearLoginForm() {
  //   self.loginForm = {email: '', password: ''};
  // }

  function logout() {
    // console.log("Frontend Logout");
    $http.delete('/sessions')
      .then(function(response) {
        // console.log(response);
        $scope.$emit('loggedOutUser');
        $state.go('index');
      });
  }

  // Citation: Adapted from Unit 3 Meme Project
  // https://github.com/matt-martinez/meme-app/blob/master/public/scripts/app.js
  function validLogin(valid) {
    if(!valid) {
      $(".loginError").css("display", "block");
    } else {
      $(".loginError").css("display", "none");
    }
  }

  // self.clearLoginForm = clearLoginForm;
  self.validLogin = validLogin;
  self.logout = logout;
  self.login = login;
  self.signup = signup;
}
