# Bookshelf Tracker, a MEAN Stack App
## App Title:

## Heroku Link:

## Important Dates:
### Tuesday March 7th, 2017: Project Start

## User Stories
As a user, I want to be able to:
- Sign up for an account
  - I will need a model that holds my:
    - Name
    - Username
    - Email
    - Password
- Login to my account
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


## ERDs
User
- Name
- Username
- Email
- Password

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

## MVP Goals
- User Model: Sign Up, Login, Logout
- Book Model: Full CRUD - Create, Read, Update, Delete Books
- Organize books into columns based on status value
- 1-2 partials with Angular if, show, hide directives

## Reach Goals
- Authorization
- Implement CSS Framework (Skeleton?)
- Find a drag and drop feature for columns
