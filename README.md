# Tuner App

A web application for managing a collection of songs. This project includes both a backend API and a frontend interface.

## Project Setup

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v14.x or later)
- npm (v6.x or later)

### Backend Setup

1. **Clone the backend repository**:
    ```sh
    git clone https://github.com/CSAN7690/backend-tuner-app.git
    cd backend-tuner-app
    ```

2. **Install backend dependencies**:
    ```sh
    npm install
    ```

3. **Run the backend server**:
    ```sh
    npm start
    ```

The backend server should now be running at `http://localhost:3001`.

### Frontend Setup

1. **Clone the frontend repository**:
    ```sh
    git clone <your-frontend-repository-url>
    cd tuner-front-end
    ```

2. **Install frontend dependencies**:
    ```sh
    npm install
    ```


The frontend should now be running at `http://localhost:5173`.

## Testing the API with Postman

1. **Verify the backend server is running**:
    Ensure your backend server is running at `http://localhost:3001`.

2. **Check all songs**:
    - Method: GET
    - URL: `http://localhost:3001/songs`
    - Response: Should return a list of all songs.

3. **Check a single song**:
    - Method: GET
    - URL: `http://localhost:3001/songs/:id` (replace `:id` with a valid song ID)
    - Response: Should return the details of the specified song.

4. **Add a new song**:
    - Method: POST
    - URL: `http://localhost:3001/songs`
    - Body (JSON):
      ```json
      {
          "name": "Lying From You",
          "artist": "Linkin Park",
          "album": "Meteora",
          "duration": {
              "minutes": 2,
              "seconds": 55
          },
          "is_favorite": true
      }
      ```
    - Response: Should return the newly created song.

5. **Update an existing song**:
    - Method: PUT
    - URL: `http://localhost:3001/songs/:id` (replace `:id` with a valid song ID)
    - Body (JSON):
      ```json
      {
          "name": "Separate Ways",
          "artist": "Journey",
          "album": "Frontiers",
          "duration": {
              "minutes": 4,
              "seconds": 26
          },
          "is_favorite": true
      }
      ```
    - Response: Should return the updated song.

6. **Delete a song**:
    - Method: DELETE
    - URL: `http://localhost:3001/songs/:id` (replace `:id` with a valid song ID)
    - Response: Should return a success message.

## Viewing the Site

1. **Verify the frontend server is running**:
    Ensure your frontend server is running at `http://localhost:5173`.

2. **Navigate to the site**:
    Open your browser and go to `http://localhost:5173`.

3. **Interact with the application**:
    - View the list of songs at `http://localhost:5173/songs`.
    - Add a new song at `http://localhost:5173/songs/new`.
    - View the details of a song by clicking on its name.
    - Edit a song by clicking the "Edit" button on the song's detail page.
    - Delete a song by clicking the "Delete" button on the song's detail page.

## Project Structure

- **Backend**: [backend-tuner-app](https://github.com/CSAN7690/backend-tuner-app)
  - Express server with CRUD operations for songs.
- **Frontend**: `tuner-front-end`
  - React application with routes for listing, viewing, adding, editing, and deleting songs.
