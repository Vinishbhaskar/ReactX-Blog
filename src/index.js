import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAQS6VylQY-ZDnqQ5svjOyYTqh2GXnGwkA",
  authDomain: "my-react-blog-272f9.firebaseapp.com",
  projectId: "my-react-blog-272f9",
  storageBucket: "my-react-blog-272f9.appspot.com",
  messagingSenderId: "625196229889",
  appId: "1:625196229889:web:626e6e34da09947a90a700",
  measurementId: "G-7CENJB7CW2"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
