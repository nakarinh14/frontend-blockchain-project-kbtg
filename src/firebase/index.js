import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCX3_OxmfYNm0EfWnuWabjIXv9-FDorUq8",
    authDomain: "test-db-for-blockchain.firebaseapp.com",
    projectId: "test-db-for-blockchain",
    storageBucket: "test-db-for-blockchain.appspot.com",
    messagingSenderId: "1090340423456",
    appId: "1:1090340423456:web:b7fb72a3b79aabadd57945",
    measurementId: "G-8MCB59VNVN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage,firebase as default
}
