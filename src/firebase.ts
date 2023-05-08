import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from './environments/environment';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  ...environment.firebase,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
