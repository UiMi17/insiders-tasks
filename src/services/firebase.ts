import { initializeApp } from 'firebase/app';
import { getAuth } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBKen8Wcrz-eEnt2IyWJhEQ5XzDOY0x144',
  authDomain: 'insiders-tests.firebaseapp.com',
  projectId: 'insiders-tests',
  storageBucket: 'insiders-tests.firebasestorage.app',
  messagingSenderId: '972857252380',
  appId: '1:972857252380:web:30aaf9c3f5d63fd9a0ddd9',
  measurementId: 'G-31V2PCDZ1Q',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
