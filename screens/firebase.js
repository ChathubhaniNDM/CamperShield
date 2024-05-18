import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBtDkmxjLQhgHqZZbrdvc1qvUv7PJ6wtgc",
    authDomain: "campershield.firebaseapp.com",
    projectId: "campershield",
    storageBucket: "campershield.appspot.com",
    messagingSenderId: "365120305435",
    appId: "1:365120305435:web:bd18984473585eedfa7bbe"
};

// Initialize Firebase if it's not already initialized
const app = initializeApp(firebaseConfig);

// Get the Firebase Authentication instance
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firebase Storage
const storage = getStorage(app);

const db = getFirestore(app);

export { auth, db, storage };