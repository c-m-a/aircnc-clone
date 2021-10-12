import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBoYz7X8SVpgrBHl-JjFoxQgutJGRWI3fQ',
  authDomain: 'fansbox-41e3b.firebaseapp.com',
  databaseURL: 'https://fansbox-41e3b.firebaseio.com',
  projectId: 'fansbox-41e3b',
  storageBucket: 'fansbox-41e3b.appspot.com',
  messagingSenderId: '411234661108',
  appId: '1:411234661108:web:33f0c9a404a9acfa3424a1',
  measurementId: 'G-C50REPDPX7'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getFirestore(app)

export { db, storage }
export default app;

