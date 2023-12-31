import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNhQUGJo0OQnhNufgO6WMVdsXs1WaBPaU",
  authDomain: "proyecto-irigoyen.firebaseapp.com",
  projectId: "proyecto-irigoyen",
  storageBucket: "proyecto-irigoyen.appspot.com",
  messagingSenderId: "1061507727396",
  appId: "1:1061507727396:web:a7fc9015b4b3ef110658b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
