# Blog API Project (CRUD with Authentication)

A complete backend API for a blog platform built with Node.js, Express, and MongoDB. It provides full CRUD functionality for posts, secured by a JWT-based authentication system for users, and is organized using the MVC pattern.

**GitHub Repository:** [https://github.com/arjunmd/crud-api-v1.git](https://github.com/arjunmd05/crud-api-v1.git)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

---

## Features

- ✅ **Full CRUD for Posts:** Create, read, update, and delete blog posts.
- ✅ **Secure User Authentication:** User registration and login with hashed passwords.
- ✅ **JWT-Based Authorization:** Protected routes ensure only authenticated users can create posts, and only authors can edit or delete their own content.
- ✅ **MVC Architecture:** A clean and maintainable codebase organized by the Model-View-Controller pattern.

---

## Getting Started: Local Setup

To run this project on your local machine, follow these steps.

### Prerequisites

- Node.js & npm
- Git
- Postman or a similar API client

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/arjunmd05/crud-api-v1.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd crud-api-v1
    ```
3.  Install dependencies:
    ```sh
    npm install
    ```

### Configuration

1.  Create a `.env` file in the root directory.
2.  Add the following required variables:

    ```
    MONGO_URI=your_mongodb_atlas_connection_string
    JWT_SECRET=your_long_random_jwt_secret_key
    PORT=5001
    ```

### Running the Application

To start the server, run:
```sh
npm start
```
The server will be available at `http://localhost:5001`.

---

## API Endpoints Overview

### Authentication
- `POST /auth/register` - Register a new user.
- `POST /auth/login` - Login a user and receive a JWT.

### Posts
- `GET /api/posts` - Get all posts.
- `POST /api/posts` - Create a new post (Protected).
- `GET /api/posts/:id` - Get a single post by ID.
- `PUT /api/posts/:id` - Update a post (Protected, Author only).
- `DELETE /api/posts/:id` - Delete a post (Protected, Author only).
