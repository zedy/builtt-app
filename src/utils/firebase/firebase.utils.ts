/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  UserCredential,
  User as AuthUser,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  DocumentData,
} from 'firebase/firestore';
import { get } from 'lodash';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// @ts-ignore
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export type User = {
  displayName: string;
  email: string;
  role?: string;
  createdAt: Date;
} & DocumentData;

export const createUserDocumentFromAuth = async (
  userAuth: AuthUser,
  additionalInformation = {}
) => {
  if (!userAuth) return undefined;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });

      sendEmailVerification(userAuth);
    } catch (error) {
      console.error('error creating the user', get(error, 'message'));
    }
  }

  return userSnapshot.data();
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential | undefined> => {
  if (!email || !password) return undefined;

  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result;
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return undefined;

  const result = await signInWithEmailAndPassword(auth, email, password);
  return result;
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (
  callback: (user: AuthUser) => void
  // @ts-ignore
) => onAuthStateChanged(auth, callback);

export type ProductObject = {
  id: number;
  title: {
    sr: string;
    en: string;
  };
  price: number;
  description: {
    sr: string;
    en: string;
  };
  category: string;
  image: {
    hover: string;
    default: string;
  };
  stock: number;
  rating: {
    rate: number;
    count: number;
  };
};

type SeedObjects = [ProductObject];

export const batchDBSeeding = async (
  collectionKey: string,
  objectsToAdd: SeedObjects
) => {
  try {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object: ProductObject) => {
      const docRef = doc(collectionRef);
      batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
  } catch (e) {
    console.log(e);
  }
};

export const getProducts = async () => {
  const collectionRef = collection(db, 'products');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};
