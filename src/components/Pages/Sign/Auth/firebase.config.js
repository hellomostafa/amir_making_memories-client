import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyBVrFvqKtt49r05sJGztGDgrq0xAfk1Bgk",
  authDomain: "amir-mking-memories.firebaseapp.com",
  projectId: "amir-mking-memories",
  storageBucket: "amir-mking-memories.appspot.com",
  messagingSenderId: "617788392027",
  appId: "1:617788392027:web:06557b4974c1df20af357e"
});

export const auth = app.auth()
export default app;