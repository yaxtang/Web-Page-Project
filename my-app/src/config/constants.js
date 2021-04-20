import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyB7Q0TVoyYn2APPGOsfNCelNt37_OgakXI",
    authDomain: "lithops-5208d.firebaseapp.com",
    databaseURL: "https://lithops-5208d.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth




// <script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyB7Q0TVoyYn2APPGOsfNCelNt37_OgakXI",
//     authDomain: "lithops-5208d.firebaseapp.com",
//     databaseURL: "https://lithops-5208d.firebaseio.com",
//     projectId: "lithops-5208d",
//     storageBucket: "",
//     messagingSenderId: "473992423985"
//   };
//   firebase.initializeApp(config);
// </script>