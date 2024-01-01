# Backend Aligntogether

## Authentication Endpoints

### Auth Routes (authRoutes.js)

#### POST /api/auth/register

- **Request Method:** POST
- **URL Path:** `/api/auth/register`
- **Request Body Format:**

  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```

- **Response Format:**

  - Successful
    ```json
    {
      "name": "string",
      "email": "string",
      "token": "string"
    }
    ```
  - Error

    ```json
    {
      "error": "string"
    }
    ```

#### POST /api/auth/login

- **Request Method:** POST
- **URL Path:** `/api/auth/login`
- **Request Body Format:**

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

- **Response Format:**

  - Successful
    ````json
    {
    "id": "string",
    "name": "string",
    "email": "string",
    "token": "string"
    }
        ```
    ````
  - Error

    ```json
    {
      "error": "string"
    }
    ```

## Note-Taking Endpoints

### Note Routes (todoRoutes.js)

#### POST /api/todo

- **Request Method:** POST
- **URL Path:** `/api/todo`
- **Authentication Required**
- **Request Body Format:**

  ```json
  {
    "title": "string",
    "content": "string"
  }
  ```

- **Response Format:**

  - Successful: Created Todo object
  - Error

    ```json
    {
      "error": "string"
    }
    ```

#### GET /api/todo/

- **Request Method:** GET
- **URL Path:** `/api/todo`
- **Authentication Required**

- **Response Format:** Array of Todo objects

#### GET /api/todo/:id

- **Request Method:** GET
- **URL Path:** `/api/todo/:id`
- **Authentication Required**

- **Response Format:** Single Todo object

#### PUT /api/todo/:id

- **Request Method:** PUT
- **URL Path:** `/api/todo/:id`
- **Authentication Required**
- **Request Body Format:**

  ```json
  {
    "title": "string",
    "content": "string"
  }
  ```

- **Response Format:**

  - Successful: Updated Todo object
  - Error

    ```json
    {
      "error": "string"
    }
    ```

#### DELETE /api/todo/:id

- **Request Method:** DELETE
- **URL Path:** `/api/todo/:id`
- **Authentication Required**
- **Response Format:**

  - Successful:

    ```json
    {
      "message": "Todo deleted successfully"
    }
    ```

  - Error

    ```json
    {
      "error": "string"
    }
    ```

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.

## Usage

To use this project:

1. Start the server using `npm start`.
2. Ensure you have the necessary authentication tokens for authorized routes.
3. Use the provided endpoints as described above.

## Screenshot:
