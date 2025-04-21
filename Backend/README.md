# Users Endpoints Documentation

This document describes the `/users` endpoints available in the backend of the Uber-clone project.

## Endpoints

### POST /register
- **Description:** Register a new user.
- **Required Data:**
  - `fullName.firstName`: String (minimum 3 characters)
  - `fullName.lastName`: String (minimum 3 characters)
  - `email`: A valid email address
  - `password`: String (minimum 6 characters)
- **Responses:**
  - **201 Created:** User is registered successfully. Returns user details and an authentication token.
  - **400 Bad Request:** 
    - Validation errors (e.g., missing or invalid fields).
    - If the user already exists.

**Request Example:**
```http
POST /register HTTP/1.1
Content-Type: application/json

{
    "fullName": {
        "firstName": "John",
        "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}
```

**Response Example (Success - 201 Created):**
```http
HTTP/1.1 201 Created
Content-Type: application/json

{
    "user": {
        "id": "12345",
        "fullName": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "email": "john.doe@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```

---

### POST /login
- **Description:** Login an existing user.
- **Required Data:**
  - `email`: A valid email address
  - `password`: String (minimum 6 characters)
- **Responses:**
  - **200 OK:** Login successful. Returns user details and an authentication token (also sets a cookie named `token`).
  - **400 Bad Request:** Validation errors.
  - **401 Unauthorized:** Invalid email or password.

**Request Example:**
```http
POST /login HTTP/1.1
Content-Type: application/json

{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

**Response Example (Success - 200 OK):**
```http
HTTP/1.1 200 OK
Content-Type: application/json
Set-Cookie: token=eyJhbGciOiJIUzI1NiIsInR5...; HttpOnly

{
    "user": {
        "id": "12345",
        "fullName": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "email": "john.doe@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```

---

### GET /logout
- **Description:** Logout the authenticated user.
- **Authentication:** Requires a valid token (provided as a cookie `token` or in the Authorization header as a Bearer token).
- **Responses:**
  - **200 OK:** User is logged out successfully. The token is blacklisted and the cookie is cleared.
  - **401 Unauthorized:** Token is missing, invalid, or blacklisted.

**Request Example:**
```http
GET /logout HTTP/1.1
Cookie: token=eyJhbGciOiJIUzI1NiIsInR5...
```

**Response Example (Success - 200 OK):**
```http
HTTP/1.1 200 OK
Content-Type: application/json
Set-Cookie: token=; Max-Age=0

{
    "message": "Logged out successfully"
}
```

---

### GET /profile
- **Description:** Retrieve the logged-in user's profile.
- **Authentication:** Requires a valid token (provided as a cookie `token` or in the Authorization header as a Bearer token).
- **Responses:**
  - **200 OK:** Returns the user's profile information.
  - **401 Unauthorized:** Token is missing, invalid, or blacklisted.

**Request Example:**
```http
GET /profile HTTP/1.1
Cookie: token=eyJhbGciOiJIUzI1NiIsInR5...
```

**Response Example (Success - 200 OK):**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "12345",
    "fullName": {
        "firstName": "John",
        "lastName": "Doe"
    },
    "email": "john.doe@example.com"
}
```