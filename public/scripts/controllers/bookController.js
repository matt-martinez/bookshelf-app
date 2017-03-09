function BookController($scope, $http, $state, $stateParams) {
  var self = this;
  self.savedBooks = [];

  $scope.$on('loginData', function(event, currentUser) {
    getUserBooks(currentUser)
  });
  // Index

  // User Books
  function getUserBooks(currentUser) {
    console.log("FrontEnd Book Show");
    $http.get(`/users/${currentUser._id}/books`)
      .then(function(response) {
        console.log(response.data.currentUser.bookList);
        self.savedBooks = response.data.currentUser.bookList;
      });
  }

  self.newBook = {title: '', author: '', genre: '', pageCount: '', status: ''};
  // Create
  function addBook(currentUser) {
    console.log("FrontEnd Book Create");
    $http.post(`/users/${currentUser._id}/books`, self.newBook)
      .then(function(response) {
        console.log(response);
        getUserBooks(currentUser);
        self.newBook = {title: '', author: '', genre: '', pageCount: '', status: ''};
      });
  }

  // Update
  function editBook(currentUser, id) {
    console.log("FrontEnd Book Edit");
    console.log(currentUser.bookList);
    console.log(id);
    // console.log(currentUser.bookList.data._id);
    self.updatedBook = {
      title: self.updatedBook.title,
      author: self.updatedBook.author,
      genre: self.updatedBook.genre,
      pageCount: self.updatedBook.pageCount,
      status: self.updatedBook.status
    }
    $http.put(`/users/${currentUser._id}/books/${id}`, self.updatedBook)
      .then(function(response) {
        console.log(response);
        getUserBooks(currentUser);
      });
  }

  // Delete


  self.editBook = editBook;
  self.addBook = addBook;
  self.getUserBooks = getUserBooks;
}
