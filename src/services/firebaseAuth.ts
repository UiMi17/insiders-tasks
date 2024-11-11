import { auth, db } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export const registerUser = async (email, password, fullName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, 'users', user.uid), {
      fullName,
      email,
      createdAt: new Date(),
    });

    return { success: true, user };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, error };
  }
};