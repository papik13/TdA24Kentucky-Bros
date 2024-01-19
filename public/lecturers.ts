const firebase = require('firebase');
const express = require('express');
const cors = require('cors');
const User = require('./config');  // Adjust the path accordingly
const app = express();
app.use(express.json());
app.use(cors());
const db = firebase.firestore();
const lecturersCollection = db.collection('lecturers');

export default defineEventHandler(async (event) => {
  if (event.method === 'POST') {
    // Create a new lecturer
    const newLecturer = await createLecturer(event);
    return newLecturer;
  } else if (event.method === 'GET') {
    // Get all lecturers or a specific lecturer by UUID
    if (event.context.params.uuid) {
      const lecturer = await getLecturerByUUID(event.context.params.uuid);
      return lecturer;
    } else {
      const lecturers = await getAllLecturers();
      return lecturers;
    }
  } else if (event.method === 'PUT') {
    // Update a specific lecturer by UUID
    const updatedLecturer = await updateLecturer(event.context.params.uuid, event);
    return updatedLecturer;
  } else if (event.method === 'DELETE') {
    // Delete a specific lecturer by UUID
    await deleteLecturer(event.context.params.uuid);
    return { status: 'success' };
  } else {
    throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' });
  }
});

async function createLecturer(event) {
  const lecturerData = await readBody(event);
  const newLecturer = { ...lecturerData, uuid: generateUUID() };

  await lecturersCollection.add(newLecturer);

  return newLecturer;
}

async function getAllLecturers() {
  const snapshot = await lecturersCollection.get();
  const lecturers = [];

  snapshot.forEach((doc) => {
    lecturers.push(doc.data());
  });

  return lecturers;
}

async function getLecturerByUUID(uuid) {
  const doc = await lecturersCollection.doc(uuid).get();

  if (doc.exists) {
    return doc.data();
  } else {
    throw createError({ statusCode: 404, statusMessage: 'Lecturer not found' });
  }
}

async function updateLecturer(uuid, event) {
  const updatedData = await readBody(event);
  const doc = await lecturersCollection.doc(uuid).get();

  if (doc.exists) {
    await lecturersCollection.doc(uuid).update(updatedData);
    return { ...doc.data(), ...updatedData };
  } else {
    throw createError({ statusCode: 404, statusMessage: 'Lecturer not found' });
  }
}

async function deleteLecturer(uuid) {
  const doc = await lecturersCollection.doc(uuid).get();

  if (doc.exists) {
    await lecturersCollection.doc(uuid).delete();
  } else {
    throw createError({ statusCode: 404, statusMessage: 'Lecturer not found' });
  }
}

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
