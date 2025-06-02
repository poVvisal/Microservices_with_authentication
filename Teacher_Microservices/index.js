const express = require('express'); // Import Express
const app = express(); // Initialize Express app

// API to add an assignment (POST request)
app.post('/addassignment', (req, res) => {
    res.send('<html><body>INSIDE TEACHER ADD ASSIGNMENT API..</body></html>');
}); // [cite: 36]

// API to search for a student (GET request)
app.get('/searchstudent', (req, res) => {
    res.send('<html><body>INSIDE TEACHER SEARCH STUDENT API..</body></html>');
}); // [cite: 36]

// API to remove an assignment (DELETE request)
app.delete('/removeassignment', (req, res) => {
    res.send('<html><body>INSIDE TEACHER REMOVE ASSIGNMENT API..</body></html>');
}); // [cite: 38]

// Start the Express server and listen on port 5001
app.listen(5001, () => {
    console.log('EXPRESS Server Started at Port No: 5001');
}); // [cite: 32, 38]

//start teacher microservice

app.listen(5001, () => {
    console.log('Teacher Microservice is running on port 5001');
}); // [cite: 32, 38]

