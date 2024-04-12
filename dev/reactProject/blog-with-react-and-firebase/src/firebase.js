import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAQNUzZK4vXtVkzAMM5zOjXA8tMQhAd6mM',
  authDomain: 'blog-c8d31.firebaseapp.com',
  projectId: 'blog-c8d31',
  storageBucket: 'blog-c8d31.appspot.com',
  messagingSenderId: '583860897879',
  appId: '1:583860897879:web:d6d20666c84dc4b1c5bb12',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
