import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCHtfRoZODePOboqFpSnnp1agwdPXhky1M",
  authDomain: "tenedores-db3ef.firebaseapp.com",
  databaseURL: "https://tenedores-db3ef.firebaseio.com",
  projectId: "tenedores-db3ef",
  storageBucket: "tenedores-db3ef.appspot.com",
  messagingSenderId: "274735351820",
  appId: "1:274735351820:web:bb455dff424c770c884629",
  measurementId: "G-2T4E6PQV66"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);