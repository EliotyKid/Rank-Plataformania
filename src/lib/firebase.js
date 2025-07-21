// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBAASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBAASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBAASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBAASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBAASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBAASE_APP_ID,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
