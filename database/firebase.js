import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCGx46-LSq0nAHAk_UZV7aXNyYGz-1rckk",
  authDomain: "shop-app-56a1f.firebaseapp.com",
  databaseURL: "https://shop-app-56a1f.firebaseio.com",
  projectId: "shop-app-56a1f",
  storageBucket: "shop-app-56a1f.appspot.com",
  messagingSenderId: "946851150330",
  appId: "1:946851150330:web:dbb55d05a58582cfaacc43",
};

firebase.initializeApp(firebaseConfig);

export default firebase;