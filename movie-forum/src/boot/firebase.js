import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAnYgLCc1pXYUEiWgpJnVq42aldXgfGOeQ",
  authDomain: "movie-forum-ec249.firebaseapp.com",
  projectId: "movie-forum-ec249",
  storageBucket: "movie-forum-ec249.appspot.com",
  messagingSenderId: "1061624439402",
  appId: "1:1061624439402:web:884cf7773dae71c39de013"
};

const app = initializeApp(firebaseConfig);

let db = firebase.firestore()

export default db