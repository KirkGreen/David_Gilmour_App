import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAcsJKxy-JqCjBWiA1L7zlbFJhweTeUZ9A",
    authDomain: "david-gilmour.firebaseapp.com",
    databaseURL: "https://david-gilmour.firebaseio.com",
    projectId: "david-gilmour",
    storageBucket: "david-gilmour.appspot.com",
    messagingSenderId: "619502093259"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
};

export {
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseLooper,
    firebase
}