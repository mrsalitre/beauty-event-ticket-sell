import firebase from "firebase/app";
import "firebase/functions";

const config = {
  apiKey: "AIzaSyCEkZpvYHwkeo3QU_g2YyH4AqTX8f4uiiI",
  authDomain: "beauty-event-ticket-sell.firebaseapp.com",
  databaseURL: "https://beauty-event-ticket-sell.firebaseio.com",
  projectId: "beauty-event-ticket-sell",
  storageBucket: "beauty-event-ticket-sell.appspot.com",
  messagingSenderId: "971303257839",
  appId: "1:971303257839:web:69add94c4c4ee6e5907d1a",
  measurementId: "G-PCDS4EBYMK"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const functions = firebase.functions();

export { functions };
