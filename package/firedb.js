import React from 'react';
import * as firebase from 'firebase';
// const firebase = require('firebase');
const config = {
    apiKey: "AIzaSyCmbAlEzRkBUpv0hMt_0YkfbpRKKITwwW8",
    authDomain: "test-fm-192711.firebaseapp.com",
    databaseURL: "https://test-fm-192711.firebaseio.com",
    projectId: "test-fm-192711",
    storageBucket: "test-fm-192711.appspot.com",
    messagingSenderId: "1023808790958"
  };
  firebase.initializeApp(config);

export const rootRef = firebase.database().ref();
export const fishRef = rootRef.child('fishs');
