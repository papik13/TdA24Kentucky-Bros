const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors'); // Enable CORS if necessary
const app = express();

// Enable CORS for all routes
app.use(cors());

// Example in-memory database (replace this with your actual database connection)
const lecturersDatabase = [];

// Middleware to parse JSON in request body
app.use(express.json());

// Route to create a new lecturer
app.post('/api/lecturers', (req, res) => {
  const newLecturer = req.body;
  newLecturer.uuid = generateUUID(); // Replace with your UUID generation logic

  // Add new lecturer to the in-memory database
  lecturersDatabase.push(newLecturer);

  res.status(200).json(newLecturer);
});

// Route to get all lecturers
app.get('/api/lecturers', (req, res) => {
  res.status(200).json(lecturersDatabase);
});

// Route to get a specific lecturer by UUID
app.get('/api/lecturers/:uuid', (req, res) => {
  const uuid = req.params.uuid;
  const lecturer = lecturersDatabase.find((lec) => lec.uuid === uuid);

  if (lecturer) {
    res.status(200).json(lecturer);
  } else {
    res.status(404).json({ code: 404, message: 'Lecturer not found' });
  }
});

// Route to update a specific lecturer by UUID
app.put('/api/lecturers/:uuid', (req, res) => {
  const uuid = req.params.uuid;
  const updatedLecturer = req.body;

  const index = lecturersDatabase.findIndex((lec) => lec.uuid === uuid);

  if (index !== -1) {
    // Update lecturer in the in-memory database
    lecturersDatabase[index] = { ...lecturersDatabase[index], ...updatedLecturer };
    res.status(200).json(lecturersDatabase[index]);
  } else {
    res.status(404).json({ code: 404, message: 'Lecturer not found' });
  }
});

// Route to delete a specific lecturer by UUID
app.delete('/api/lecturers/:uuid', (req, res) => {
  const uuid = req.params.uuid;
  const index = lecturersDatabase.findIndex((lec) => lec.uuid === uuid);

  if (index !== -1) {
    // Remove lecturer from the in-memory database
    const deletedLecturer = lecturersDatabase.splice(index, 1)[0];
    res.status(204).end();
  } else {
    res.status(404).json({ code: 404, message: 'Lecturer not found' });
  }
});

// Helper function to generate UUID (replace with your actual UUID generation logic)
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Export the HTTP function
exports.nuxtApp = functions.https.onRequest(app);
