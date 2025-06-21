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

# Captains Endpoints Documentation

This document describes the `/captains` endpoints available in the backend of the Uber-clone project.

## Endpoints

### POST /captains/register

- **Description:** Register a new captain.
- **Required Data:**
  - `fullName.firstName`: String (minimum 3 characters)
  - `fullName.lastName`: String (minimum 3 characters)
  - `email`: A valid email address
  - `password`: String (minimum 6 characters)
  - `vechile.color`: String (minimum 3 characters)
  - `vechile.plate`: String (minimum 3 characters)
  - `vechile.capacity`: Number (minimum 1)
  - `vechile.vechileType`: String (one of `car`, `motorcycle`, `auto`)
- **Responses:**
  - **201 Created:** Captain is registered successfully. Returns captain details and an authentication token.
  - **400 Bad Request:**
    - Validation errors (e.g., missing or invalid fields).
    - If the captain already exists.

**Request Example:**

```http
POST /captains/register HTTP/1.1
Content-Type: application/json

{
    "fullName": {
        "firstName": "Jane",
        "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "password": "password123",
    "vechile": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vechileType": "car"
    }
}
```

**Response Example (Success - 201 Created):**

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
    "captain": {
        "id": "67890",
        "fullName": {
            "firstName": "Jane",
            "lastName": "Doe"
        },
        "email": "jane.doe@example.com",
        "vechile": {
            "color": "Red",
            "plate": "XYZ123",
            "capacity": 4,
            "vechileType": "car"
        }
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```

---

### POST /captains/login

- **Description:** Login an existing captain.
- **Required Data:**
  - `email`: A valid email address
  - `password`: String (minimum 6 characters)
- **Responses:**
  - **200 OK:** Login successful. Returns captain details and an authentication token (also sets a cookie named `token`).
  - **400 Bad Request:** Validation errors.
  - **401 Unauthorized:** Invalid email or password.

**Request Example:**

```http
POST /captains/login HTTP/1.1
Content-Type: application/json

{
    "email": "jane.doe@example.com",
    "password": "password123"
}
```

**Response Example (Success - 200 OK):**

```http
HTTP/1.1 200 OK
Content-Type: application/json
Set-Cookie: token=eyJhbGciOiJIUzI1NiIsInR5...; HttpOnly

{
    "captain": {
        "id": "67890",
        "fullName": {
            "firstName": "Jane",
            "lastName": "Doe"
        },
        "email": "jane.doe@example.com",
        "vechile": {
            "color": "Red",
            "plate": "XYZ123",
            "capacity": 4,
            "vechileType": "car"
        }
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```

---

### GET /captains/logout

- **Description:** Logout the authenticated captain.
- **Authentication:** Requires a valid token (provided as a cookie `token` or in the Authorization header as a Bearer token).
- **Responses:**
  - **200 OK:** Captain is logged out successfully. The token is blacklisted and the cookie is cleared.
  - **401 Unauthorized:** Token is missing, invalid, or blacklisted.

**Request Example:**

```http
GET /captains/logout HTTP/1.1
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

### GET /captains/profile

- **Description:** Retrieve the logged-in captain's profile.
- **Authentication:** Requires a valid token (provided as a cookie `token` or in the Authorization header as a Bearer token).
- **Responses:**
  - **200 OK:** Returns the captain's profile information.
  - **401 Unauthorized:** Token is missing, invalid, or blacklisted.

**Request Example:**

```http
GET /captains/profile HTTP/1.1
Cookie: token=eyJhbGciOiJIUzI1NiIsInR5...
```

**Response Example (Success - 200 OK):**

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "67890",
    "fullName": {
        "firstName": "Jane",
        "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "vechile": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vechileType": "car"
    }
}
```

# Ride Endpoints Documentation

This document describes the `/ride` endpoints available in the backend of the Uber-clone project.

## Endpoints

### POST /ride/create

- **Description:** Create a new ride request.
- **Required Data:**
  - `pickup`: String (minimum 3 characters) - Pickup address
  - `destination`: String (minimum 3 characters) - Destination address
  - `vehicleType`: String (one of `auto`, `car`, `moto`) - Type of vehicle
- **Authentication:** Requires a valid user token.
- **Responses:**
  - **201 Created:** Ride created successfully. Returns ride details.
  - **400 Bad Request:** Validation errors (e.g., missing or invalid fields).

**Request Example:**

```http
POST /ride/create HTTP/1.1
Content-Type: application/json
Authorization: Bearer <token>

{
    "pickup": "123 Main St",
    "destination": "456 Elm St",
    "vehicleType": "car"
}
```

**Response Example (Success - 201 Created):**

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
    "user": "12345",
    "pickup": "123 Main St",
    "destination": "456 Elm St",
    "fare": 100,
    "status": "pending",
    "otp": "123456"
}
```

---

### GET /ride/get-fare

- **Description:** Calculate the fare for a ride based on pickup and destination.
- **Required Query Parameters:**
  - `pickup`: String (minimum 3 characters) - Pickup address
  - `destination`: String (minimum 3 characters) - Destination address
- **Authentication:** Requires a valid user token.
- **Responses:**
  - **200 OK:** Returns the calculated fare.
  - **400 Bad Request:** Validation errors (e.g., missing or invalid fields).

**Request Example:**

```http
GET /ride/get-fare?pickup=123%20Main%20St&destination=456%20Elm%20St HTTP/1.1
Authorization: Bearer <token>
```

**Response Example (Success - 200 OK):**

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "auto": 50,
    "car": 100,
    "moto": 30
}
```

---

### POST /ride/confirm

- **Description:** Confirm a ride request by a captain.
- **Required Data:**
  - `rideId`: MongoDB ObjectId - ID of the ride to confirm
- **Authentication:** Requires a valid captain token.
- **Responses:**
  - **200 OK:** Ride confirmed successfully. Returns ride details.
  - **400 Bad Request:** Validation errors (e.g., missing or invalid fields).

**Request Example:**

```http
POST /ride/confirm HTTP/1.1
Content-Type: application/json
Authorization: Bearer <token>

{
    "rideId": "60d21b4667d0d8992e610c85"
}
```

**Response Example (Success - 200 OK):**

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "user": {
        "id": "12345",
        "fullName": {
            "firstName": "John",
            "lastName": "Doe"
        }
    },
    "captain": {
        "id": "67890",
        "fullName": {
            "firstName": "Jane",
            "lastName": "Doe"
        }
    },
    "pickup": "123 Main St",
    "destination": "456 Elm St",
    "fare": 100,
    "status": "accepted"
}
```

---

### GET /ride/start-ride

- **Description:** Start a ride after verifying the OTP.
- **Required Query Parameters:**
  - `rideId`: MongoDB ObjectId - ID of the ride to start
  - `otp`: String (6 characters) - OTP for ride verification
- **Authentication:** Requires a valid captain token.
- **Responses:**
  - **200 OK:** Ride started successfully. Returns ride details.
  - **400 Bad Request:** Validation errors (e.g., missing or invalid fields).

**Request Example:**

```http
GET /ride/start-ride?rideId=60d21b4667d0d8992e610c85&otp=123456 HTTP/1.1
Authorization: Bearer <token>
```

**Response Example (Success - 200 OK):**

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "user": {
        "id": "12345",
        "fullName": {
            "firstName": "John",
            "lastName": "Doe"
        }
    },
    "captain": {
        "id": "67890",
        "fullName": {
            "firstName": "Jane",
            "lastName": "Doe"
        }
    },
    "pickup": "123 Main St",
    "destination": "456 Elm St",
    "fare": 100,
    "status": "ongoing"
}
```

---

### POST /ride/end-ride

- **Description:** End an ongoing ride.
- **Required Data:**
  - `rideId`: MongoDB ObjectId - ID of the ride to end
- **Authentication:** Requires a valid captain token.
- **Responses:**
  - **200 OK:** Ride ended successfully. Returns ride details.
  - **400 Bad Request:** Validation errors (e.g., missing or invalid fields).

**Request Example:**

```http
POST /ride/end-ride HTTP/1.1
Content-Type: application/json
Authorization: Bearer <token>

{
    "rideId": "60d21b4667d0d8992e610c85"
}
```

**Response Example (Success - 200 OK):**

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "user": {
        "id": "12345",
        "fullName": {
            "firstName": "John",
            "lastName": "Doe"
        }
    },
    "captain": {
        "id": "67890",
        "fullName": {
            "firstName": "Jane",
            "lastName": "Doe"
        }
    },
    "pickup": "123 Main St",
    "destination": "456 Elm St",
    "fare": 100,
    "status": "completed"
}
```

---

# Maps Endpoints Documentation

This document describes the `/maps` endpoints available in the backend of the Uber-clone project.

## Endpoints

### GET /maps/get-coordinates

- **Description:** Get the latitude and longitude of a given address.
- **Required Query Parameters:**
  - `address`: String (minimum 3 characters) - Address to fetch coordinates for
- **Authentication:** Requires a valid user token.
- **Responses:**
  - **200 OK:** Returns the coordinates of the address.
  - **400 Bad Request:** Validation errors (e.g., missing or invalid fields).

**Request Example:**

```http
GET /maps/get-coordinates?address=123%20Main%20St HTTP/1.1
Authorization: Bearer <token>
```

**Response Example (Success - 200 OK):**

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "ltd": 37.7749,
    "lng": -122.4194
}
```

---

### GET /maps/get-distance-time

- **Description:** Get the distance and estimated time between two locations.
- **Required Query Parameters:**
  - `origin`: String (minimum 3 characters) - Starting location
  - `destination`: String (minimum 3 characters) - Ending location
- **Authentication:** Requires a valid user token.
- **Responses:**
  - **200 OK:** Returns the distance and estimated time.
  - **400 Bad Request:** Validation errors (e.g., missing or invalid fields).

**Request Example:**

```http
GET /maps/get-distance-time?origin=123%20Main%20St&destination=456%20Elm%20St HTTP/1.1
Authorization: Bearer <token>
```

**Response Example (Success - 200 OK):**

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "distance": {
        "value": 5000,
        "text": "5 km"
    },
    "duration": {
        "value": 600,
        "text": "10 mins"
    }
}
```

---

### GET /maps/get-suggestions

- **Description:** Get autocomplete suggestions for an address input.
- **Required Query Parameters:**
  - `input`: String (minimum 3 characters) - Input string for suggestions
- **Authentication:** Requires a valid user token.
- **Responses:**
  - **200 OK:** Returns a list of suggestions.
  - **400 Bad Request:** Validation errors (e.g., missing or invalid fields).

**Request Example:**

```http
GET /maps/get-suggestions?input=Main HTTP/1.1
Authorization: Bearer <token>
```

**Response Example (Success - 200 OK):**

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
    "123 Main St, San Francisco, CA",
    "Main St, Los Angeles, CA",
    "Main St, New York, NY"
]
```