Books API
This API allows users to perform CRUD operations on books.

Endpoints
GET /books
This endpoint returns a list of all books in the database. It also accepts query parameters for searching by title, published before, and published after.

GET /books/new
This endpoint returns a form for creating a new book.

POST /books
This endpoint creates a new book with the information provided in the request body.

GET /books/:id
This endpoint returns a specific book by its id.

GET /books/:id/edit
This endpoint returns a form for editing a specific book by its id.

PUT /books/:id
This endpoint updates a specific book by its id with the information provided in the request body.

DELETE /books/:id
This endpoint deletes a specific book by its id.

Dependencies
This API uses the following packages:

express
mongoose
It also requires a running instance of MongoDB.

Usage
Clone the repository.
Install the dependencies by running npm install in the project directory.
Start the API by running npm start.
Use the endpoints as described above to perform CRUD operations on books.
Authors API
This API allows users to perform CRUD operations on authors.

Endpoints
GET /authors
This endpoint returns a list of all authors in the database.

GET /authors/new
This endpoint returns a form for creating a new author.

POST /authors
This endpoint creates a new author with the information provided in the request body.

GET /authors/:id
This endpoint returns a specific author by its id.

GET /authors/:id/edit
This endpoint returns a form for editing a specific author by its id.

PUT /authors/:id
This endpoint updates a specific author by its id with the information provided in the request body.

DELETE /authors/:id
This endpoint deletes a specific author by its id.

Dependencies
This API uses the following packages:

express
mongoose
It also requires a running instance of MongoDB.

Usage
Clone the repository.
Install the dependencies by running npm install in the project directory.
Start the API by running npm start.
Use the endpoints as described above to perform CRUD operations on authors.
