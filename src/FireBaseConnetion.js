import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';




let firebaseConfig = {
  apiKey: "AIzaSyDQLDqWb2-2DXFo1-u6IzJm7g14QWzh7F8",
  authDomain: "reactapp1project.firebaseapp.com",
  databaseURL: "https://reactapp1project-default-rtdb.firebaseio.com",
  projectId: "reactapp1project",
  storageBucket: "reactapp1project.appspot.com",
  messagingSenderId: "535325635380",
  appId: "1:535325635380:web:c975a9f96feced3f9feb61",
  measurementId: "G-SVX7FPSCK6"
};

if (!firebase.apps.length)
firebase.initializeApp(firebaseConfig);


export default firebase;