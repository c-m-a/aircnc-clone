import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBoYz7X8SVpgrBHl-JjFoxQgutJGRWI3fQ",
  authDomain: "fansbox-41e3b.firebaseapp.com",
  databaseURL: "https://fansbox-41e3b.firebaseio.com",
  projectId: "fansbox-41e3b",
  storageBucket: "fansbox-41e3b.appspot.com",
  messagingSenderId: "411234661108",
  appId: "1:411234661108:web:33f0c9a404a9acfa3424a1",
  measurementId: "G-C50REPDPX7"
}

const app = !firebase.apps.length ?
  firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export { db, storage }

