import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDWj7oyXnRySKpNsCBq0taI74wmRtDU_Eo',
    authDomain: 'chautapp.firebaseapp.com',
    projectId: 'chautapp',
    storageBucket: 'chautapp.appspot.com',
    messagingSenderId: '843210553285',
    appId: '1:843210553285:web:151183bd2b18dc6b3bfdac',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
