import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBaBAcIzo0QS-sRHQu8XcBr8avcgs1UXxE',
  authDomain: 'react-crud-46b5a.firebaseapp.com',
  databaseURL: 'https://react-crud-46b5a.firebaseio.com',
  projectId: 'react-crud-46b5a',
  storageBucket: 'react-crud-46b5a.appspot.com',
  messagingSenderId: '95037401094',
  appId: '1:95037401094:web:0aac91ed1353cd1c01fb87',
};
// Initialize Firebase
let fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
