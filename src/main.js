// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* Import the firebase SDK and extend with firestore */
import firebase from 'firebase';
require('firebase/firestore');

 // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAT-hAIklInHggmFe3h5eCx_W1cDJakcds",
  authDomain: "meal-fa56b.firebaseapp.com",
  databaseURL: "https://meal-fa56b.firebaseio.com",
  projectId: "meal-fa56b",
  storageBucket: "meal-fa56b.appspot.com",
  messagingSenderId: "413449168086",
  appId: "1:413449168086:web:6f75aca69bfbd01b535577",
  measurementId: "G-7W71SM5FL7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* Bind firebase to your Vue instance */
Vue.prototype.$firebase = firebase;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
