
Tech Stack
Frontend
React (with hooks)

Axios for API requests

CSS (vanilla CSS or Tailwind - based on your preference)

Backend
Node.js with Express

MongoDB as the database

Mongoose for MongoDB object modeling

CORS, dotenv, and other essential middlewares

How to Run the Application
Prerequisites
Node.js and npm installed

MongoDB running locally or MongoDB Atlas connection string

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/todo-app.git
cd todo-app
2. Set Up the Backend
bash
Copy
Edit
cd backend
npm install
Create a .env file in the backend directory:
ini
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/todosdb
Run the backend server
bash
Copy
Edit
npm start
3. Set Up the Frontend
bash
Copy
Edit
cd ../frontend
npm install
Start the React app
bash
Copy
Edit
npm start
The app should now be running at http://localhost:3000

