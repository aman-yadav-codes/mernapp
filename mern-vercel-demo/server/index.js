const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

// CORS configuration to allow requests from your frontend
const corsOptions = {
    origin: 'https://mern-frontend-gold.vercel.app', // Replace with your frontend's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions)); // Apply CORS middleware to all routes

// Define routes
app.get("/api/home", (req, res) => {
    res.json({ message: "Welcome to the Home route!" });
});

app.get("/api/about", (req, res) => {
    res.json({ message: "This is the About route." });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; // For Vercel deployment
