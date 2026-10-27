# Movie Streaming Application

A web-based movie streaming application that allows users to explore movies and web series, search for entertainment content, view movie details, and watch videos through a simple and user-friendly interface.

---

## 1. Project Overview

The Movie Streaming Application is designed to provide a convenient platform for discovering and watching entertainment content online.

Users can browse available movies and web series, explore their descriptions, view posters, search for specific titles, and access video playback when a valid video source is available.

The application uses a frontend for user interaction, a backend for processing requests, and a database for storing movie information and other application data.

---

## 2. Problem Statement

Finding and exploring entertainment content can be inconvenient when information about movies, genres, descriptions, and video availability is spread across different platforms.

This application aims to simplify the process by providing a single platform where users can explore movies and web series, search for their preferred content, view relevant details, and access available videos.

The main objective is to develop a simple, organized, and responsive application that improves the experience of discovering and watching entertainment content.

---

## 3. Project Objectives

The primary objectives of this project are:

- To develop an interactive movie browsing interface.
- To display movie titles, posters, descriptions, and other details.
- To provide search functionality for finding specific movies.
- To organize entertainment content by genre and type.
- To store movie information in a database.
- To create REST APIs for communication between the frontend and backend.
- To implement user registration and login as part of the authentication module.
- To provide video playback when a valid and accessible video source is configured.
- To develop a responsive interface for different screen sizes.
- To create a maintainable project structure that supports future improvements.

---

## 4. Technologies Used

### 4.1 Frontend Technologies

**React.js**

React.js is used to build the user interface using reusable components. It helps organize the application into sections such as the navigation bar, movie cards, search bar, and movie details page.

**HTML**

HTML provides the basic structure of the web application, including page sections, forms, buttons, and content containers.

**CSS**

CSS is used to style the application, including layouts, spacing, colors, typography, responsive designs, and movie card appearances.

**JavaScript**

JavaScript handles interactive functionality, user actions, data processing, and communication with backend APIs.

### 4.2 Backend Technologies

**Node.js**

Node.js provides the JavaScript runtime environment used to execute backend code and handle server-side operations.

**Express.js**

Express.js is a web framework for Node.js. It is used to define API routes, process HTTP requests, validate input, and send responses to the frontend.

### 4.3 Database Technology

**MongoDB**

MongoDB is a NoSQL database that stores application information in document format. It can store movie details, descriptions, genres, poster URLs, release years, and other information.

**Mongoose**

Mongoose is used to define data schemas, interact with MongoDB, validate document fields, and perform database operations.

### 4.4 Development Tools

**Visual Studio Code**

Used to write, edit, and manage project files.

**Git**

Used for version control and tracking code changes.

**GitHub**

Used to host the project repository and maintain a remote copy of the source code.

---

## 5. System Architecture

The application follows a client-server architecture.

```text
User
  |
  v
React Frontend
  |
  | HTTP Requests
  v
Express.js REST API
  |
  v
Node.js Backend
  |
  v
Mongoose
  |
  v
MongoDB Database
```

### How the System Works

1. The user interacts with the frontend.
2. The frontend sends HTTP requests to the backend API.
3. Express.js receives the requests and calls the appropriate application logic.
4. The backend uses Mongoose to read or modify information in MongoDB.
5. The backend sends a JSON response to the frontend.
6. The frontend displays the retrieved information to the user.

Video playback is a separate process that requires a valid video URL or a configured streaming service.

---

## 6. Application Features

### 6.1 Movie Browsing

Users can browse available movies and web series from a central interface.

The application can display information such as titles, posters, descriptions, release years, and genres.

### 6.2 Movie Details

Each movie can contain detailed information, including:

- Title
- Description
- Content type
- Genre
- Release year
- Maturity rating
- Duration
- Poster image
- Background image
- Trailer URL
- Video URL

### 6.3 Search Functionality

The search feature allows users to find content by entering a movie or series title.

The backend can process search queries and return matching records from MongoDB.

### 6.4 Genre-Based Filtering

Movies can be organized by genres such as action, comedy, drama, thriller, and science fiction.

This makes it easier for users to discover content based on their interests.

### 6.5 Featured and Trending Content

The database supports fields for identifying featured and trending content.

These fields can be used to display selected titles in dedicated sections of the homepage.

### 6.6 User Authentication

The application can support user registration and login.

The authentication module can be extended to use password hashing, token-based authentication, and protected routes.

### 6.7 Video Playback

The application can provide video playback through an integrated player when a valid video source is configured.

Actual streaming functionality depends on the availability of hosted video files or a suitable streaming service.

---

## 7. Database Design

The application uses MongoDB to store movie information.

### Movie Collection

The Movie model defines the structure of movie and series documents.

| Field | Description |
|---|---|
| `title` | Name of the movie or series |
| `description` | Summary of the content |
| `type` | Movie or series |
| `genre` | List of associated genres |
| `releaseYear` | Year of release |
| `maturityRating` | Content age rating |
| `duration` | Duration in minutes, when applicable |
| `posterUrl` | URL of the poster image |
| `backdropUrl` | URL of the background image |
| `trailerUrl` | URL of the trailer |
| `videoUrl` | URL of the video source |
| `featured` | Indicates featured content |
| `trending` | Indicates trending content |
| `createdAt` | Document creation timestamp |
| `updatedAt` | Last update timestamp |

Mongoose manages the document schema and timestamps.

Additional collections can be introduced for users, profiles, watchlists, and viewing history as those modules are implemented.

---

## 8. Project Folder Structure

The project is organized into separate frontend and backend sections.

```text
END_term(be)/
|
|-- backend/
|   |
|   |-- controllers/
|   |   |-- movieController.js
|   |
|   |-- models/
|   |   |-- Movie.js
|   |
|   |-- routes/
|   |   |-- movieRoutes.js
|   |
|   |-- server.js
|   |-- package.json
|   |-- package-lock.json
|   |-- .env
|
|-- frontend/
|   |
|   |-- src/
|   |-- public/
|   |-- package.json
|
|-- .gitignore
|-- README.md
```

*Note: The frontend structure is illustrative. Update it to match the actual files created in your project.*

### Explanation of Backend Folders

**models/**

Contains Mongoose schemas that define how data is stored in MongoDB.

**controllers/**

Contains functions that process API requests, interact with the database, and return responses.

**routes/**

Defines API endpoints and connects each endpoint to its corresponding controller function.

**server.js**

Initializes the Express application, configures middleware, connects to MongoDB, registers routes, and starts the server.

**.env**

Stores configuration values such as the server port and database connection string. This file should remain private and must not be uploaded to GitHub.

---

## 9. Backend API Endpoints

The movie API is organized under `/api/movies`.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/movies` | Retrieve movies |
| GET | `/api/movies/:id` | Retrieve a movie by ID |
| POST | `/api/movies` | Add a movie to the database |

### Search and Filtering Examples

Retrieve all movies:

```http
GET /api/movies
```

Search by title:

```http
GET /api/movies?search=batman
```

Filter by genre:

```http
GET /api/movies?genre=Action
```

Retrieve trending content:

```http
GET /api/movies?trending=true
```

Retrieve featured content:

```http
GET /api/movies?featured=true
```

Filter by content type:

```http
GET /api/movies?type=series
```

### Example API Response

```json
{
  "success": true,
  "count": 1,
  "movies": [
    {
      "_id": "exampleMovieId",
      "title": "Example Movie",
      "description": "An example movie description.",
      "type": "movie",
      "genre": ["Action"],
      "releaseYear": 2026,
      "featured": true,
      "trending": false
    }
  ]
}
```

The response is illustrative. Actual responses depend on the records stored in the database.

**Important:** The `POST /api/movies` endpoint should be protected with appropriate administrator authentication before public deployment.

---

## 10. Installation and Setup

### Prerequisites

Before running the project, ensure the following are available:

- Node.js and npm
- MongoDB Atlas account or a working MongoDB instance
- Git
- Visual Studio Code
- A GitHub account

### Step 1: Clone the Repository

```bash
git clone https://github.com/harshalarbat/END_Term-Backend-.git
```

Navigate into the project folder:

```bash
cd END_Term-Backend-
```

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5173
MONGO_URI=your_mongodb_connection_string
```

Replace the example database configuration with your actual MongoDB connection string.

Keep the `.env` file private. Do not publish database credentials or secrets.

### Step 4: Start the Backend

Run:

```bash
npm run dev
```

If the project does not define a development script, use the script available in `package.json`, or run:

```bash
node server.js
```

### Step 5: Test the API

If the server starts on port `5173`, visit:

```text
http://localhost:5173/api/movies
```

A successful request should return a JSON response. If the database contains no movie records, the API may return an empty list.

### Step 6: Start the Frontend

If a frontend has been created, open another terminal, navigate to its directory, and install its dependencies:

```bash
cd frontend
npm install
npm run dev
```

Use the local URL printed by the frontend development server.

---

## 11. Environment Configuration

Environment variables allow the application to use different settings in development and production.

| Variable | Purpose |
|---|---|
| `PORT` | Port used by the backend server |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret used for signing authentication tokens, if JWT authentication is implemented |

Never commit real passwords, API keys, database credentials, or JWT secrets to version control.

A `.gitignore` file should contain entries such as:

```text
node_modules/
.env
.DS_Store
```

For deployment, configure the required environment variables through the hosting provider's settings.

---

## 12. Testing

The application can be tested at several levels.

### API Testing

Use a browser for GET requests and a tool such as Postman for requests that require a JSON body.

### Database Testing

Verify that movie records are saved correctly in MongoDB and can be retrieved through the API.

### Frontend Testing

Check navigation, search, movie cards, responsive layouts, loading states, and error handling.

### Authentication Testing

Once authentication is implemented, test successful registration, login, invalid credentials, and access to protected routes.

---

## 13. Deployment

To make the application available online, the frontend and backend must be deployed and configured correctly.

### Backend Deployment

The Node.js and Express application can be hosted on a compatible platform.

The deployment configuration should include:

- A valid MongoDB connection string
- Environment variables
- The correct server startup command
- A production-ready configuration
- Appropriate CORS settings

### Frontend Deployment

The React frontend can be deployed on a static hosting platform.

Configure the frontend to call the deployed backend URL instead of `localhost`.

### Database Deployment

MongoDB Atlas can provide a cloud database accessible by the deployed backend, subject to its network and database-user settings.

### Production Considerations

Before making the application public:

- Protect write endpoints with authentication and authorization.
- Validate and sanitize incoming data.
- Configure CORS for the intended frontend origin.
- Use HTTPS.
- Store secrets securely.
- Avoid exposing restricted video URLs.
- Use legally authorized video content.

---

## 14. Security Considerations

Security is important for any application that accepts user input or stores personal information.

Recommended measures include:

- Hash passwords with a suitable password-hashing library.
- Use secure authentication and authorization.
- Validate request bodies before database operations.
- Avoid exposing database credentials.
- Restrict administrative operations.
- Configure CORS appropriately.
- Handle errors without revealing sensitive information.
- Use rate limiting and appropriate security middleware.
- Keep dependencies updated.

The current development setup should be reviewed and secured before public deployment.

---

## 15. Limitations

The functionality available in the application depends on which modules have been implemented.

- Movie listings require records to be available in the database.
- Poster images and trailers require valid media URLs.
- Video playback requires a supported and accessible video source.
- Authentication features require their routes, models, and security logic to be implemented.
- Online deployment requires production configuration and environment variables.

---

## 16. Future Enhancements

Potential improvements include:

- User registration and login
- Multiple user profiles
- Watchlists and favourites
- Viewing history
- Continue-watching functionality
- Recommendations based on viewing preferences
- Pagination and advanced search
- Ratings and reviews
- Administrative content management
- Responsive video player controls
- Subtitles and playback-quality selection
- Secure integration with a video-hosting or streaming service

---

## 17. Learning Outcomes

This project provides practical experience in:

- Developing full-stack web applications
- Building RESTful APIs using Express.js
- Creating reusable frontend components with React
- Connecting a backend to MongoDB
- Defining database schemas with Mongoose
- Handling HTTP requests and JSON responses
- Organizing code using models, controllers, and routes
- Managing source code with Git and GitHub
- Configuring environment variables
- Preparing applications for deployment

---

## 18. Conclusion

The Movie Streaming Application demonstrates how frontend technologies, backend APIs, and database systems can work together to create an entertainment platform.

Its modular structure supports the addition of new features, including authentication, personalized watchlists, content discovery, and video playback.

The project also provides a foundation for learning full-stack development, database integration, API design, and deployment.

---

## 19. Repository

**GitHub Repository:**  
https://github.com/harshalarbat/END_Term-Backend-

---

## 20. License

Choose an appropriate license before distributing the project. If you intend to make the source code available for reuse, consider adding a license file that clearly describes the permitted uses.

Only use movie posters, videos, trailers, and other media that you have permission to distribute or display.
