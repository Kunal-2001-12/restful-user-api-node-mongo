# User API

## Description
This is a simple RESTful API for managing users. It allows you to perform CRUD operations (Create, Read, Update, Delete) on user data stored in a MongoDB database.

## Features
- Create a new user
- Retrieve all users
- Retrieve a specific user by ID
- Update a user's details
- Delete a user

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- express-validator (for input validation)

## Installation
1. Clone the repository:
   ```bash
   git clone < https://github.com/Kunalsur2001/User-API-with-MongoDB-and-Express.git >
   ```
2. Navigate to the project directory:
   ```bash
   cd user-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the MongoDB server:
   ```bash
   mongod
   ```
2. Start the application:
   ```bash
   nodemon app.js
   ```
3. The server will run on `http://localhost:3000`.

## API Endpoints
### Users
- **GET** `/users` - Retrieve all users
  - Example Response:
    ```json
    [
      {
        "_id": "68243e502b3ba2c82ae0378f",
        "name": "Kunal Sur Updated",
        "email": "kunalsur_updated@gmail.com",
        "age": 25,
        "createdAt": "2025-05-14T08:22:59.639Z"
      },
      {
        "_id": "68243edffa6c30c62120ceba",
        "name": "Ravi Kumar",
        "email": "ravi@gmail.com",
        "age": 27,
        "createdAt": "2025-05-14T06:57:35.211Z",
        "__v": 0
      },
      {
        "_id": "68244062fa6c30c62120cebf",
        "name": "Rohan Ram",
        "email": "Rohanram@gmail.com",
        "age": 27,
        "createdAt": "2025-05-14T07:04:02.562Z",
        "__v": 0
      },
      {
        "_id": "68244dcbe7f8e861923cc80d",
        "name": "Amit Roy",
        "email": "AmitABC@example.com",
        "age": 25,
        "createdAt": "2025-05-14T08:01:15.301Z",
        "__v": 0
      },
      {
        "_id": "68244f77e7f8e861923cc816",
        "name": "Neha Singh",
        "email": "nehasingh@example.com",
        "age": 23,
        "createdAt": "2025-05-14T08:08:23.392Z",
        "__v": 0
      }
    ]
    ```
- **GET** `/users/:id` - Retrieve a specific user by ID
- **POST** `/users` - Create a new user
  - Request Body:
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 25
    }
    ```
- **PUT** `/users/:id` - Update a user's details
  - Request Body:
    ```json
    {
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "age": 30
    }
    ```
- **DELETE** `/users/:id` - Delete a user by ID

## Validation Rules
- `name`: Must be a string and at least 3 characters long.
- `email`: Must be a valid email address.
- `age`: Must be a positive integer and at least 18.

## License
This project is licensed under the MIT License.
