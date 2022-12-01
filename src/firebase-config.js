import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAZFlKel5zfioQNVxCSkvWvOv4W1om4P4c",
    authDomain: "oyunmarket-1c07d.firebaseapp.com",
    projectId: "oyunmarket-1c07d",
    storageBucket: "oyunmarket-1c07d.appspot.com",
    messagingSenderId: "270452565996",
    appId: "1:270452565996:web:06100122d6c554c62e02c9",
    measurementId: "G-SY738CNW4R"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)