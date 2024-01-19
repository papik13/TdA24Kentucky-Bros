const firebase = require('firebase');

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to post data to Firebase
const postLecturer = (lecturerData: any) => {
  const newLecturerRef = db.ref('lecturers').push();
  newLecturerRef.set(lecturerData);
};

// Function to get data from Firebase
const getLecturers = async () => {
  const snapshot = await db.ref('lecturers').once('value');
  return snapshot.val();
};

// Function to update data in Firebase
const updateLecturer = (lecturerId: string, updatedData: any) => {
  const lecturerRef = db.ref(`lecturers/${lecturerId}`);
  lecturerRef.update(updatedData);
};

// Function to delete data from Firebase
const deleteLecturer = (lecturerId: string) => {
  const lecturerRef = db.ref(`lecturers/${lecturerId}`);
  lecturerRef.remove();
};


