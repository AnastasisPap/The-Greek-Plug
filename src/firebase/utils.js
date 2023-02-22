import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, collection} from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAjlILQ6nNelh42Jvg-nDExkfIa1qkrm8s",
  authDomain: "dispovapes-103f2.firebaseapp.com",
  projectId: "dispovapes-103f2",
  storageBucket: "dispovapes-103f2.appspot.com",
  messagingSenderId: "709762094614",
  appId: "1:709762094614:web:80243f6c7a94cdf5200737",
  measurementId: "G-F02CQLZQWS"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const GoogleProvider = new GoogleAuthProvider();

export const handleUserProfile = async ({ userAuth, additionalData }) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = doc(firestore, "users", uid);
  const docSnap = await getDoc(userRef);

  return docSnap;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}