import express from 'express';

// Create an Express application
const app = express();

// Routes
app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
});

// Define the port to run the server on
const PORT = 8000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
