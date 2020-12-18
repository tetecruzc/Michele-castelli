import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCD_9puV53HrX2mhuK0flyvFkxgjDgr3lM",
    authDomain: "michele-castelli.firebaseapp.com",
    databaseURL: "https://michele-castelli.firebaseio.com",
    projectId: "michele-castelli",
    storageBucket: "michele-castelli.appspot.com",
    messagingSenderId: "862957015050",
    appId: "1:862957015050:web:39dafad4a1e25454588ff3",
    measurementId: "G-HR612DTCQ9"
};

firebase.initializeApp(config);

export default firebase;
