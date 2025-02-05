# Netflix Clone Project

This is a Netflix Clone project built using the MERN stack (MongoDB, Express, React, Node.js). The project is divided into three main parts: `backend`, `frontend`, and `admin`.

## Project Structure

```
.env
.gitignore
admin/
    .env
    .gitignore
    eslint.config.js
    index.html
    package.json
    postcss.config.js
    README.md
    src/
        App.jsx
        Chart.jsx
        context/
        Featured.jsx
        firebase.js
        Header.jsx
        Home.jsx
        index.css
        LargeWidget.jsx
        lists/
        ...
    tailwind.config.js
    vite.config.js
backend/
    controllers/
    index.js
    models/
    routes/
    utils/
frontend/
    .env
    eslint.config.js
    index.html
    package.json
    postcss.config.js
    public/
    README.md
    src/
    tailwind.config.js
    vite.config.js
package.json
```

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/xjohnfit/MERN-Netflix-Clone.git
    cd netflix-clone
    ```

2. Install dependencies for the backend, frontend, and admin:
    ```sh
    npm install
    cd backend && npm install
    cd ../frontend && npm install
    cd ../admin && npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```env
    MONGO_URL=your_mongodb_connection_string
    PORT=5001
    CLIENT_URL=http://localhost:3000
    ADMIN_URL=http://localhost:3001
    ```

4. Create a `.env` file in the `admin` directory and add your Firebase configuration:
    ```env
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    ```

5. Create a `.env` file in the `frontend` directory and add your environment variables:
    ```env
    VITE_API_URL=http://localhost:5001/api
    ```

### Running the Project

To run the project, use the following command in the root directory:

```sh
npm run dev
```

This will start the backend server, frontend development server, and admin development server concurrently.

### Backend

The backend is built using Express and MongoDB. It handles authentication, user management, and movie data.

### Frontend

The frontend is built using React and Tailwind CSS. It provides the user interface for browsing and watching movies.

### Admin

The admin panel is built using React and Tailwind CSS. It allows administrators to manage movies, users, and other data.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.