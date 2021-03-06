function BookController($scope, $http, $state, $stateParams) {
  var self = this;
  self.savedBooks = [];

  $scope.$on('loginData', function(event, currentUser) {
    getUserBooks(currentUser)
  });

  // User Books
  function getUserBooks(currentUser) {
    // console.log("FrontEnd Book Show");
    $http.get(`/users/${currentUser._id}/books`)
      .then(function(response) {
        // console.log(response.data.currentUser.bookList);
        self.savedBooks = response.data.currentUser.bookList;
      });
  }

// Create
  self.newBook = {title: '', author: '', genre: '', pageCount: '', status: ''};
  function addBook(currentUser) {
    // console.log("FrontEnd Book Create");
    $http.post(`/users/${currentUser._id}/books`, self.newBook)
      .then(function(response) {
        // console.log(response);
        getUserBooks(currentUser);
        self.newBook = {title: '', author: '', genre: '', pageCount: '', status: ''};
      });
  }

  // Update
  self.updatedBook = {title: '', author: '', genre: '', pageCount: '', status: ''};
  function editBook(currentUser, id) {
    // console.log("FrontEnd Book Edit");
    $http.put(`/users/${currentUser._id}/books/${id}`, self.updatedBook)
      .then(function(response) {
        // console.log(response);
        getUserBooks(currentUser);
        self.updatedBook = {title: '', author: '', genre: '', pageCount: '', status: ''};
      });
  }

  // Delete
  function deleteBook(currentUser, id) {
    // console.log("FrontEnd Book Delete");
    $http.delete(`/users/${currentUser._id}/books/${id}`)
      .then(function(response) {
        getUserBooks(currentUser);
      });
  }

  self.deleteBook = deleteBook;
  self.editBook = editBook;
  self.addBook = addBook;
  self.getUserBooks = getUserBooks;
}
