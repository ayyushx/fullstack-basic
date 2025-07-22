# 🎬 VidFlow - Advanced Backend

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express.js](https://img.shields.io/badge/Express.js-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)

A robust and scalable backend service for a modern video streaming platform, built with Node.js, Express, and MongoDB. This project serves as a complete backend solution, featuring user authentication, video management, and more, all built with professional-grade code structure and practices.

---

## ✨ About The Project

This project is a comprehensive backend API designed to power a full-featured application. It's built with a focus on clean code, scalability, and maintainability, using modern JavaScript features and industry-standard tools.

### Built With

* **[Node.js](https://nodejs.org/)**: A JavaScript runtime built on Chrome's V8 engine.
* **[Express.js](https://expressjs.com/)**: A minimal and flexible Node.js web application framework.
* **[MongoDB](https://www.mongodb.com/)**: A NoSQL database for storing application data.
* **[Mongoose](https://mongoosejs.com/)**: An elegant MongoDB object modeling tool for Node.js.
* **[JWT (JSON Web Tokens)](https://jwt.io/)**: For secure user authentication.
* **[Dotenv](https://github.com/motdotla/dotenv)**: For managing environment variables.

---

## 🚀 Features

* **🔒 Secure Authentication**: JWT-based user registration and login with hashed passwords and refresh tokens.
* **🔄 CRUD Operations**: Full support for creating, reading, updating, and deleting application resources.
* **☁️ File Uploads**: Integrated with cloud services like Cloudinary for robust media file handling.
* **🛡️ Advanced Error Handling**: A centralized, robust error handling mechanism for consistent API responses.
* **⚡ Async Management**: A clean utility to handle `async/await` logic gracefully without repetitive try-catch blocks.
* **📂 Professional Structure**: A clean and scalable directory layout that makes finding and adding code intuitive.

---

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/ayyushx/fullstack-basic.git]()

    ```
2.  **Navigate to the project directory**
    ```sh
    cd your-project-repo
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Create a `.env` file** in the root directory and add the following environment variables.

    ```env
    PORT=8000
    MONGODB_URI="mongodb://127.0.0.1:27017/your-db-name"
    CORS_ORIGIN="*"

    ACCESS_TOKEN_SECRET="your-access-token-secret"
    ACCESS_TOKEN_EXPIRY="1d"
    REFRESH_TOKEN_SECRET="your-refresh-token-secret"
    REFRESH_TOKEN_EXPIRY="10d"
    ```

5.  **Start the development server**
    ```sh
    npm run dev
    ```
    The server will start on `http://localhost:8000`.

---

## 📂 Project Structure

The project follows a modular and scalable structure to keep the codebase organized.

```
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
```

---

## ⚡️ API Endpoints

The API routes are defined in the `src/routes/` directory.

**User Routes (`/api/v1/users`)**

* `POST /register`: Register a new user.
* `POST /login`: Log in a user and get access/refresh tokens.
* `POST /logout`: Log out a user (requires authentication).
* `GET /current-user`: Get details of the currently logged-in user (requires authentication).

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License.

---

## 📧 Contact

Ayush Badoni - [LinkedIn](https://www.linkedin.com/in/ayyushx/)

Project Link: [https://github.com/ayyushx/fullstack-basic](https://github.com/ayyushx/fullstack-basic)
