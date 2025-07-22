🎬 VidFlow - Advanced Backend
A robust and scalable backend service for a modern video streaming platform, built with Node.js, Express, and MongoDB. This project serves as a complete backend solution, featuring user authentication, video management, and more, all built with professional-grade code structure and practices.

✨ About The Project
This project is a comprehensive backend API designed to power a full-featured application. It's built with a focus on clean code, scalability, and maintainability, using modern JavaScript features and industry-standard tools.

Built With
Node.js: A JavaScript runtime built on Chrome's V8 engine.

Express.js: A minimal and flexible Node.js web application framework.

MongoDB: A NoSQL database for storing application data.

Mongoose: An elegant MongoDB object modeling tool for Node.js.

JWT (JSON Web Tokens): For secure user authentication.

Dotenv: For managing environment variables.

Prettier & ESLint: For code formatting and linting.

🚀 Features
Secure Authentication: JWT-based user registration and login with password hashing.

CRUD Operations: Full support for creating, reading, updating, and deleting resources.

File Uploads: Integration with cloud services (like Cloudinary) for handling media files.

Advanced Error Handling: A robust, centralized error handling mechanism.

Asynchronous Code Management: A utility to handle async/await logic gracefully.

Professional Project Structure: A clean and scalable directory layout.

🏁 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You need to have Node.js and npm installed on your machine.

npm

npm install npm@latest -g

Installation
Clone the repository

git clone https://github.com/ayyushx/fullstack-basic.git

Navigate to the project directory

cd your-project-repo

Install NPM packages

npm install

Create a .env file in the root directory and add the following environment variables. This file stores your secret keys and configuration.

PORT=8000
MONGODB_URI="mongodb://127.0.0.1:27017/your-db-name"
CORS_ORIGIN="*"

ACCESS_TOKEN_SECRET="your-access-token-secret"
ACCESS_TOKEN_EXPIRY="1d"
REFRESH_TOKEN_SECRET="your-refresh-token-secret"
REFRESH_TOKEN_EXPIRY="10d"

Start the development server

npm run dev

The server will start on http://localhost:8000.

📂 Project Structure
The project follows a modular and scalable structure to keep the codebase organized.

.
├── src/
│   ├── controllers/  # Logic for handling requests
│   ├── db/           # Database connection logic
│   ├── middlewares/  # Custom Express middlewares
│   ├── models/       # Mongoose data models
│   ├── routes/       # API route definitions
│   ├── utils/        # Utility functions (ApiError, asyncHandler, etc.)
│   ├── app.js        # Express app configuration
│   ├── index.js      # Application entry point
│   └── constants.js  # Project-wide constants
├── .env              # Environment variables
├── .gitignore
├── package.json
└── README.md

⚡️ API Endpoints
The API routes are defined in the src/routes/ directory.

Example: User Routes (/api/v1/users)

POST /register - Register a new user.

POST /login - Log in a user and get access/refresh tokens.

POST /logout - Log out a user (requires authentication).

GET /current-user - Get details of the currently logged-in user (requires authentication).

🛡️ Error Handling
This project uses a custom ApiError class located in src/utils/ApiError.js. This allows for consistent and descriptive error responses.

Example Error Response:

{
  "success": false,
  "message": "User with this email already exists",
  "errors": [
    "email: Email is already taken"
  ]
}

🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
Distributed under the MIT License. See LICENSE for more information.

📧 Contact
Your Name - Ayush Badoni - [LinkedIn](https://www.linkedin.com/in/ayyushx/)

Project Link: https://github.com/ayyushx/fullstack-basic