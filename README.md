# Login-Registration-System

This project is a login and registration system built using React and Node.js for the Internship assignment at Elansol Technologies Private Limited.

## Project Overview

The project includes the following components:

1. **Frontend**: Built with React.js, utilizing React forms, React-Bootstrap components for UI, and React Router for navigation.
2. **Backend**: Implemented in Node.js, with APIs for user registration and login, using MongoDB for storing user information.
3. **Authentication**: JWT (JSON Web Token) is used for authentication. User information and JWT tokens are stored securely in local storage.

## Features Implemented

- **Registration Form**: Allows users to register with their Name, Date of Birth, Email, and Password.
- **Login Form**: Allows registered users to log in securely.
- **Protected Route**: After successful login, users can access a protected page displaying a static table.
- **Persistence**: User information and JWT tokens are stored in the browser's local storage for a seamless user experience.

## Setup Instructions

### Prerequisites

- Node.js installed locally.
- MongoDB database instance set up (local or cloud-based).

### Steps to Run

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd <project_directory>

2. **Install dependencies:**:
   ```bash
   npm install

3. **Set up Environment variables**:
   ```bash
   PORT=<port_number>
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret_key>

4. **Start the backend server**
   ```bash
   nodemon server.js

5. **Start the frontend server**
   ```bash
   npm run dev

6. Access the application:
Open your browser and navigate to http://localhost:3000 (or your specified port).



