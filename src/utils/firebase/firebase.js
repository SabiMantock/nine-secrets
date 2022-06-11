import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import { getFirestore, getDoc, setDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBKJA1YPdMm4nL0Vf5ePJvUXPK-oCcOcHg',
  authDomain: 'secrets-clothing-db.firebaseapp.com',
  projectId: 'secrets-clothing-db',
  storageBucket: 'secrets-clothing-db.appspot.com',
  messagingSenderId: '143982210374',
  appId: '1:143982210374:web:60c2ac378789428f8ec947'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating user', error)
    }
  }

  return userDocRef
}
