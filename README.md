# Movie Management Frontend

## Overview

This is the frontend part of a movie management application built with **React** and **Vite**. It allows users to view, search, and manage movies with a responsive design.

## Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Starting the Project](#starting-the-project)
-   [API Integration](#api-integration)
-   [Contributing](#contributing)
-   [License](#license)

## Features

-   User authentication
-   Search functionality for movies
-   Responsive design using Tailwind CSS

## Tech Stack

-   **Frontend Framework**: React
-   **Build Tool**: Vite
-   **CSS Framework**: Tailwind CSS

---

## Prerequisites

-   Node.js (version 14 or later)
-   npm or yarn

---

## Installation

1. Navigate to the frontend directory:

    ```bash
    cd your-frontend-directory
    Install dependencies:
    ```

Using npm:

bash
Kopier kode
npm install
Or using yarn:

bash
Kopier kode
yarn install
Starting the Project
To run the Vite development server, execute the following command:

Using npm:

bash
Kopier kode
npm run dev
Or using yarn:

bash
Kopier kode
yarn dev
Access your application in your browser at http://localhost:5173.

API Integration
This application communicates with the backend API to fetch movie data and handle user authentication. Ensure your backend server is running and accessible at http://localhost:8080.

API Endpoints Used
GET /api/v1/movie/all: Fetch all movies.
POST /api/v1/auth/login: User login.
Make sure to adjust API URLs in the code if your backend is hosted differently.

Contributing
We welcome contributions! Please follow these steps to contribute:

Fork the repository.
Create a new branch.
Make your changes and commit them.
Push your changes to your fork.
Create a pull request.
