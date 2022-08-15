import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBxmjaiDUme4gpOInffcxhWnI3x4Pzmvj4",
    authDomain: "projects-a3103.firebaseapp.com",
    projectId: "projects-a3103",
    storageBucket: "projects-a3103.appspot.com",
    messagingSenderId: "496253041812",
    appId: "1:496253041812:web:a5bc4a0358e23224390881"
  }

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  
  export { projectAuth, projectFirestore, timestamp}