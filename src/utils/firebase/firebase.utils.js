import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  collection,
  writeBatch,
  query,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBs3Ots53piT_73-aP0qh_ht8CRFi0VMGQ",
  authDomain: "bird-shop-5bb31.firebaseapp.com",
  projectId: "bird-shop-5bb31",
  storageBucket: "bird-shop-5bb31.appspot.com",
  messagingSenderId: "601904130154",
  appId: "1:601904130154:web:c090105339b2617eb4c213",
  measurementId: "G-GLN7TPLNZL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
const db = getFirestore();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs
    .filter((docSnapshot) => {
      return (
        docSnapshot.exists() &&
        docSnapshot.data().title &&
        docSnapshot.data().items
      );
    })
    .map((docSnapshot) => {
      return docSnapshot.data();
    });
};

export const deleteFormField = async (title, id) => {
  const docRef = doc(db, "categories", title);
  getDoc(docRef)
    .then((docSnapshot) => {
      if (docSnapshot.exists() && docSnapshot.data().items.length > 1) {
        const data = docSnapshot.data();
        const updatedItems = data.items.filter((item) => item.id !== id);

        updateDoc(docRef, { items: updatedItems });
      } else if (docSnapshot.data().items.length === 1) {
        deleteDoc(docRef);
      } else {
        console.log(`${title} category does not exist.`);
      }
    })
    .catch((error) => {
      console.error(`Error getting ${title} category data:`, error);
    });
};

export const signInWithEmailAndPasswords = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const deleteHomeForm = async (itemToDelete) => {
  const homeDocRef = doc(db, "home", itemToDelete.toLowerCase());
  await deleteDoc(homeDocRef);
};
export const getHomeItemsAndDocuments = async () => {
  const collectionRef = collection(db, "home");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => {
    return docSnapshot.data();
  });
};
export const creatingHomeDocForm = async (items) => {
  const homeDocRef = doc(db, "home", items.title.toLowerCase());
  const homeSnapshot = await getDoc(homeDocRef);
  if (!homeSnapshot.exists() || homeSnapshot.exists()) {
    try {
      await setDoc(homeDocRef, { ...items });
    } catch (error) {
      console.log("error creating the HomePage", error.message);
    }
  }
  return homeSnapshot;
};
export const creatingUserDocForm = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
export const signOutUser = () => signOut(auth);
