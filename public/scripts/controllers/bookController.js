function BookController($scope, $http, $state, $stateParams) {
  var self = this;
  self.savedBooks = [];

  $scope.$on('loginData', function(event, currentUser) {
    getUserBooks(currentUser)
  });
  // Index

  // User Books
  function getUserBooks(currentUser) {
    console.log("FrontEnd Book Show")
    $http.get(`/users/${currentUser._id}/books`)
      .then(function(response) {
        console.log(response.data.currentUser.bookList);
        self.savedBooks = response.data.currentUser.bookList;
      });
  }

  // Create

  // Update

  // Delete

  self.getUserBooks = getUserBooks;
}
