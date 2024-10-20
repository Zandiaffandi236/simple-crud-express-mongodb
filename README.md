# Simple CRUD API with Express and MongoDB

A simple exploration project implementing CRUD features using the Express framework and MongoDB.

## Features

- Create new data
- Retrieve all data
- Retrieve data by ID
- Update data by ID
- Delete data by ID

## Installation and Setup

1. **Clone the Repository**  
   First, fork or pull the repository from GitHub:

   ```bash
   git clone https://github.com/Zandiaffandi236/simple-crud-express-mongodb.git
   ```

2. **Install Dependencies**  
   Run the following command in your terminal to install all required packages:

   ```bash
   npm install
   ```

3. **Database Setup**  
   Ensure you have an account on [MongoDB Atlas](https://mongodb.com/atlas), and create a new database.

4. **Configure Environment Variables**  
   After creating your MongoDB database, place your connection URL in the `.env` file by renaming the `.env.example` to `.env` and updating the `MONGODB_CONN_URL` variable.

5. **Run the API**  
   Once everything is configured, start the server by running:
   ```bash
   npm run prod
   ```

## Usage

You can test the API using tools like [Postman](https://www.postman.com/) or by building your own frontend to consume the API endpoints.

## Technology Stack

- **Express.js**: A minimal and flexible Node.js web application framework for building APIs.
- **MongoDB**: A NoSQL database used to store and retrieve data.

## Project Structure

- **`controllers/`**: Contains files to handle API logic.
- **`models/`**: Contains Mongoose schemas for MongoDB.
- **`routes/`**: Defines the API routes.
- **`.env.example`**: Provides an example of the required environment variables.
- **`index.js`**: The main server file for creating and running the server.
- **`package.json`** and **`package-lock.json`**: Define project dependencies.

## Project Status

This project is part of my portfolio and an exploration into the above tech stack. It's not intended for further contributions or development at this time.

## Acknowledgments

This project was created based on a tutorial from [freeCodeCamp.org](https://www.youtube.com/freecodecamp).

## Contact

- **Email**: marzandi.leta@gmail.com
- **LinkedIn**: [Marzandi Zahran Affandi Leta](https://www.linkedin.com/in/marzandi-zahran-affandi-leta-5b69a9175/)
