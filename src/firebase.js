// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-6-mNgma4JdV6De_tVflq5xB0bbqiSso",
  authDomain: "lets-chat-9a68b.firebaseapp.com",
  projectId: "lets-chat-9a68b",
  storageBucket: "lets-chat-9a68b.appspot.com",
  messagingSenderId: "989839260672",
  appId: "1:989839260672:web:3ba5bd7fc669f358006ce5",
  measurementId: "G-CBS8QM4QPC"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBtZPF-pHghXJ07xFPC9hLBktzVaFNJp84",
//   authDomain: "let-s-chat-156f7.firebaseapp.com",
//   projectId: "let-s-chat-156f7",
//   storageBucket: "let-s-chat-156f7.appspot.com",
//   messagingSenderId: "1049594494905",
//   appId: "1:1049594494905:web:cadfc70ee50c7374880068",
//   measurementId: "G-NKW3F2GRTZ"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBtZPF-pHghXJ07xFPC9hLBktzVaFNJp84",
//   authDomain: "let-s-chat-156f7.firebaseapp.com",
//   projectId: "let-s-chat-156f7",
//   storageBucket: "let-s-chat-156f7.appspot.com",
//   messagingSenderId: "1049594494905",
//   appId: "1:1049594494905:web:cadfc70ee50c7374880068",
//   measurementId: "G-NKW3F2GRTZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);