
# Techy Software - Full Stack Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Backend API Endpoints](#backend-api-endpoints)
- [Frontend Overview](#frontend-overview)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Introduction

**Techy Software** is a full-stack application built with Node.js, Express.js, MongoDB on the backend, and React.js with React Bootstrap on the frontend. This application is designed to empower businesses with innovative software solutions, providing services, products, and more.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Product Management**: Users can view a list of products offered.
- **Feedback System**: Users can submit feedback, which is stored and managed in the backend.
- **Responsive Design**: The application is fully responsive and works across all devices.
- **Social Media Links**: Users can follow the company on various social media platforms.

## Technologies Used

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

### Frontend:
- **React.js**
- **React Bootstrap**
- **React Router**
- **JWT for authentication**

### Other Tools:
- **bcrypt** for hashing passwords
- **jsonwebtoken** for managing authentication tokens
- **axios** for API requests
- **dotenv** for environment variables

## Project Structure

```
/backend
  ├── controllers
  ├── models
  ├── routes
  ├── server.js
  └── config
/frontend
  ├── src
  │   ├── components
  │   ├── assets
  │   ├── pages
  │   ├── App.js
  │   └── index.js
  ├── public
  └── package.json
```

## Installation and Setup

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Backend Setup

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and configure your environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```

## Backend API Endpoints

### Authentication
- **POST** `/api/auth/signup`: Register a new user.
- **POST** `/api/auth/login`: Login a user and receive a JWT token.

### Products
- **GET** `/api/products`: Retrieve a list of products.
- **POST** `/api/products`: Add a new product (requires authentication).
- **GET** `/api/products/:id`: Retrieve a product by ID.
- **DELETE** `/api/products/:id`: Delete a product by ID (requires authentication).

### Feedback
- **POST** `/api/feedback`: Submit feedback.
- **GET** `/api/feedback`: Retrieve all feedback.
- **GET** `/api/feedback/:id`: Retrieve feedback by ID.
- **DELETE** `/api/feedback/:id`: Delete feedback by ID.

### Users
- **GET** `/api/users/me`: Retrieve the logged-in user's profile (requires authentication).

All APIs are working and have been tested thoroughly.

## Frontend Overview

- The frontend is built using React.js with React Bootstrap for UI components.
- **React Router** is used for client-side routing.
- **Axios** is used for making API requests to the backend.
- **JWT Authentication**: Upon login, the JWT token is stored in `localStorage` and used for accessing protected routes and APIs.

### Navigation Bar
- The navigation bar is responsive and provides links to different sections of the home page, such as "About Us," "Services," "Products," "Team," "Feedback," and "Contact."

### Home Page
- **Hero Section**: A welcoming banner with a brief description of the company's mission.
- **Service, Contact, and About Cards**: Quick links to learn more about services, contact, and the company's background.
- **Products Section**: Displays the products offered.
- **Team Section**: Showcases the team members.
- **Feedback Form**: A form for users to submit feedback, which is stored in the backend.
- **Social Media Links**: Links to the company's social media profiles.

## Testing

- All API endpoints have been tested using **Postman** and work as expected.
- The frontend has been tested manually across different browsers and devices to ensure responsiveness and functionality.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

