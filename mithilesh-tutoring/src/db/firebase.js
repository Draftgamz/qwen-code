// src/db/firebase.js
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore';
import { 
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// User management functions
const registerUser = async (email, password, userData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Add additional user data to Firestore
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      email: user.email,
      ...userData,
      createdAt: new Date()
    });
    
    return user;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Session booking functions
const bookSession = async (sessionData) => {
  try {
    const docRef = await addDoc(collection(db, 'sessions'), {
      ...sessionData,
      createdAt: new Date(),
      status: 'scheduled'
    });
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

const getUserSessions = async (userId) => {
  try {
    const q = query(
      collection(db, 'sessions'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    throw error;
  }
};

// Student data functions
const addStudentData = async (userId, data) => {
  try {
    const docRef = await addDoc(collection(db, 'students'), {
      userId,
      ...data,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

const updateStudentData = async (studentId, data) => {
  try {
    const studentRef = doc(db, 'students', studentId);
    await updateDoc(studentRef, {
      ...data,
      updatedAt: new Date()
    });
  } catch (error) {
    throw error;
  }
};

// Learning path functions
const saveLearningPath = async (userId, pathData) => {
  try {
    const docRef = await addDoc(collection(db, 'learningPaths'), {
      userId,
      ...pathData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

const getLearningPath = async (userId) => {
  try {
    const q = query(
      collection(db, 'learningPaths'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc'),
      limit(1)
    );
    
    const querySnapshot = await getDocs(q);
    const paths = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return paths.length > 0 ? paths[0] : null;
  } catch (error) {
    throw error;
  }
};

// Testimonials functions
const addTestimonial = async (testimonialData) => {
  try {
    const docRef = await addDoc(collection(db, 'testimonials'), {
      ...testimonialData,
      approved: false, // Need admin approval
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

const getApprovedTestimonials = async () => {
  try {
    const q = query(
      collection(db, 'testimonials'),
      where('approved', '==', true),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    throw error;
  }
};

// File upload function
const uploadFile = async (file, folder = 'general') => {
  try {
    const storageRef = ref(storage, `${folder}/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    throw error;
  }
};

// Export all functions and services
export {
  auth,
  db,
  storage,
  registerUser,
  loginUser,
  logoutUser,
  onAuthStateChanged,
  bookSession,
  getUserSessions,
  addStudentData,
  updateStudentData,
  saveLearningPath,
  getLearningPath,
  addTestimonial,
  getApprovedTestimonials,
  uploadFile
};

// Also export the services directly if needed
export { app };