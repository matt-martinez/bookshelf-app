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

  self.newBook = {title: '', author: '', genre: '', pageCount: '', status: ''};
  // Create
  function addBook(currentUser) {
    console.log("FrontEnd Book Create")
    self.newBook = {
      title: self.newBook.title,
      author: self.newBook.author,
      genre: self.newBook.genre,
      pageCount: self.newBook.pageCount,
      status: self.newBook.status
    }
    $http.post(`/users/${currentUser._id}/books`, self.newBook)
    .then(function(response) {
      console.log(response);
      getUserBooks(currentUser);
      self.newBook = {title: '', author: '', genre: '', pageCount: '', status: ''};
    });
  }

  // Update

  // Delete



  self.addBook = addBook;
  self.getUserBooks = getUserBooks;
}
