# Bookshelf Tracker, a MEAN Stack App
## App Title: The Bookcase

## Heroku Link: https://the-bookcase.herokuapp.com/#/

## Project Summary
The bookcase is a MEAN stack app that allows users to easily keep track of their books. This app consists of two models: a user model and a book model. Users can sign up for an account and enter the various books that they have read, are in the process of reading, wish to get rid of, etc. Once a user adds the book, it is then sorted under the appropriate category. A user can easily edit and delete their book, and even move books to different columns/categories via the edit form.

## User Stories
As a user, I want to be able to:
- Sign up for an account
  - I will need a model that holds my:
    - Name
    - Username
    - Email
    - Password
- Securely login to my account
- Only have access to my account
- Create a new book and customize it using the following fields
  - Title
  - Author
  - Genre
  - Page Count
  - Status (By choosing one of the following)
    - Read/Keep
    - Read/Donate
    - In Progress
    - Haven't Read
    - Won't Read
- See my created book displayed in a column based on book status
- Have the option to edit my book's details
- Fluidly move my book from one column to another
- Delete my book if I would like

## Wireframes
### Main Page:
![Main Page](/public/images/Bookcase1.jpg)

## ERDs
User
- Name
- Username
- Email
- Password
- Book List

Books
- Title
- Author
- Genre
- Page Count
- Status
  - Read/Keep
  - Read/Donate
  - In Progress
  - Haven't Read
  - Won't Read

Javascript Objects
var user = {
  Name: String,
  Username: String,
  Email: String,
  Password: String
  bookList: [bookSchema]
}
<!-- http://stackoverflow.com/questions/28566996/how-create-a-field-in-mongodb-schema-with-pre-defined-values-and-make-the-user -->
var book = {
  Title: String,
  Author: String,
  Genre: String,
  Page Count: Integer,
  Status: {type: String, statusValues: ["Read/Keep", "Read/Donate", "In Progress", "Haven't Read", "Won't Read"]}
}

## Technical Specs
### Technologies Used
HTML5
CSS3
Javascript
Angular.js
Node.js
Express.js
MongoDB
Mongoose
Pure.CSS

### Required Packages
bCrypt
Body Parser
Express
Express-Session
Mongoose
Morgan

## MVP Goals
- User Model: Sign Up, Login, Logout
- Book Model: Full CRUD - Create, Read, Update, Delete
- Organize books into columns based on status value
- 1-2 partials with Angular if, show, hide directives

## Reach Goals
- Authorization (Met)
- Implement CSS Framework (Met)
- Find a drag and drop feature for columns

## Project Challenges and Unresolved Issues
The larger challenge of this project stemmed from my efforts to make my code more DRY. Since I was organizing books into columns based on status values, I needed a way to effectively make this happen. I chose to use Angular filters rather than making separate calls to my back-end controllers or using functions. The result of this approach left me with a huge chunk of code in my main partial that was repeated five times, one for each filter.

To simplify my code, I learned how to create custom directives with Angular. This enabled me to cut down my working code by a couple hundred lines and move my largest chunk into its own directive file. I was then able to use a single book element that I created as a placeholder and run my filter off of that. For reference, this occurred in my home partial and my book view partial. Learning how to use custom directives was a great lesson, one that I have already started implementing in my other work.

## Conclusion
This project was incredibly fun. While I used only two models, I was able to learn quite a bit after I met my MVP goals. The two biggest tools were Angular custom directives and the Pure.CSS framework. I especially enjoyed the latter as I find the abstract nature of CSS engaging and a way for me to express my creativity. Moving forward, I would like to make this app fully mobile responsive so users can keep track of their books from any device. I would also like to find a reliable drag and drop feature to improve the UX.
