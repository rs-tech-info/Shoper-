// SHOPER Firebase connection. This is the public web-app config; secure access with Firebase Rules.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/13.4.0/firebase-database.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/13.4.0/firebase-storage.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAcjLyEuHGfpIxbooMV1USOUvymYtpiQno',
  authDomain: 'shopshine-4f753.firebaseapp.com',
  databaseURL: 'https://shopshine-4f753-default-rtdb.firebaseio.com',
  projectId: 'shopshine-4f753',
  storageBucket: 'shopshine-4f753.firebasestorage.app',
  messagingSenderId: '149636187825',
  appId: '1:149636187825:web:14be56021b8a8b23ee8490',
  measurementId: 'G-1J6KSJHPZJ'
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
