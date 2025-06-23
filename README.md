# Uber Clone Project

A full-stack MERN application that replicates core Uber functionalities, featuring real-time location tracking, ride management, and payment integration.

## 🚀 Features

### User Features

- User authentication (register/login)
- Request rides with location selection
- Real-time fare calculation
- Track ride status and captain location
- View ride history
- Rate and review captains

### Captain Features

- Captain authentication (register/login)
- Accept/reject ride requests
- Real-time navigation
- Manage ride status
- View earnings and statistics
- Update availability status

## 🛠️ Tech Stack

### Backend

- Node.js + Express
- MongoDB with Mongoose
- Socket.IO for real-time updates
- JWT for authentication
- Google Maps API integration
- Payment gateway integration

### Frontend

- React + Vite
- Redux for state management
- Socket.IO client
- Google Maps React components
- Tailwind CSS for styling
- React Router for navigation

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/mostafa3ssa/uber-clone.git
cd Uber-clone
```

2. Install backend dependencies

```bash
cd Backend
npm install
```

3. Install frontend dependencies

```bash
cd frontend
npm install
```

4. Set up environment variables

Create `.env` files in both backend and frontend directories:

Backend `.env`:

```env
PORT=server_port_number
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GOOGLE_MAPS_API=your_google_maps_api_key
```

Frontend `.env`:

```env
VITE_API_URL=your_vite_api_url
VITE_GOOGLE_MAPS_API=your_google_maps_api_key
```

## 🚀 Running the Application

1. Start the backend server

```bash
cd Backend
npm run dev
```

2. Start the frontend development server

```bash
cd frontend
npm run dev
```

## 📚 API Documentation

### User Endpoints

- POST `/users/register` - Register new user
- POST `/users/login` - User login
- GET `/users/logout` - User logout
- GET `/users/profile` - Get user profile

### Captain Endpoints

- POST `/captains/register` - Register new captain
- POST `/captains/login` - Captain login
- GET `/captains/logout` - Captain logout
- GET `/captains/profile` - Get captain profile

### Ride Endpoints

- POST `/ride/create` - Create new ride request
- GET `/ride/get-fare` - Calculate ride fare
- POST `/ride/confirm` - Confirm ride
- GET `/ride/start-ride` - Start ride with OTP
- POST `/ride/end-ride` - End ride

### Maps Endpoints

- GET `/maps/get-coordinates` - Get coordinates from address
- GET `/maps/get-distance-time` - Get distance and time
- GET `/maps/get-suggestions` - Get address suggestions

## 🗂️ Project Structure

```
uber-clone/
├── Backend/
│   ├── controllers/     # Request handlers
│   ├── models/          # Database schemas
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── middlewares/     # Custom middlewares
│   └── db/              # Database connection
└── frontend/
    ├── src/
    │   ├── components/  # Reusable components
    │   ├── pages/       # Page components
    │   ├── context/     # Context files
    │   └── assets/      # Some of used images
    └── public/          # Static files
```

## 👥 Authors

- Mostafa Essa - [GitHub Profile](https://github.com/mostafa3ssa)

## 🙏 Acknowledgments

- Hat tip to Uber for inspiration
- Google Maps API documentation
- MongoDB documentation
- React and Node.js communities
