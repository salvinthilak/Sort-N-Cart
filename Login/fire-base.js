// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnqfWcjkhjfa7Y0DzqxlkyLAvkrMuTWUE",
  authDomain: "sortndcart.firebaseapp.com",
  databaseURL:
    "https://sortndcart-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sortndcart",
  storageBucket: "sortndcart.appspot.com",
  messagingSenderId: "527398606361",
  appId: "1:527398606361:web:0e2b8d3c155f4e6203fc88",
  measurementId: "G-LYTL2675XQ",
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(firebaseConfig);
// const analytics = getAnalytics(firebaseConfig);
// const auth = getAuth(firebaseConfig);
// connectAuthEmulator(auth, "http://localhost:8081");

// const loginEmailPassword = async () => {
//   const loginEmail = txtEmail.value;
//   const loginPassword = txtPassword.value;
// };
// const userCredential = await signInWithEmailAndPassword(
//   auth,
//   loginEmail,
//   loginPassword
// );
// console.log(userCredential.user);
var SignUp = document.getElementById("SignUp").value;
//sign-up
SignUp.addEventListener("click"),
  (e) => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setInterval(ref(database, "users/" + user.uid), {
          username: username,
          email: email,
        });
        alert("User Created Sucessfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };



      // // Import the functions you need from the SDKs you need
      // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
      // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
      // import {
      //   getAuth,
      //   createUserWithEmailAndPassword,
      // } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
      // import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
      // import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
      // // TODO: Add SDKs for Firebase products that you want to use
      // // https://firebase.google.com/docs/web/setup#available-libraries

      // // Your web app's Firebase configuration
      // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      // const firebaseConfig = {
      //   apiKey: "AIzaSyBnqfWcjkhjfa7Y0DzqxlkyLAvkrMuTWUE",
      //   authDomain: "sortndcart.firebaseapp.com",
      //   databaseURL:
      //     "https://sortndcart-default-rtdb.asia-southeast1.firebasedatabase.app",
      //   projectId: "sortndcart",
      //   storageBucket: "sortndcart.appspot.com",
      //   messagingSenderId: "527398606361",
      //   appId: "1:527398606361:web:0e2b8d3c155f4e6203fc88",
      //   measurementId: "G-LYTL2675XQ",
      // };

      // // Initialize Firebase
      // const app = initializeApp(firebaseConfig);
      // const analytics = getAnalytics(app);
      // const auth = firebase.auth(app);
      // const database = firebase.database(app);
      // const provider = new GoogleAuthProvider(app);

      // function register() {
      //   //getting all the input fields
      //   var username = document.getElementById("username").value;
      //   var email = document.getElementById("emailId").value;
      //   var password = document.getElementById("newPassword").value;
      // }
      // // validating the emai and password
      // if (
      //   validate_emailId(email) == false ||
      //   validate_password(password) == false
      // ) {
      //   alert("Enter a valid Email ID and Password");
      //   return;
      // }

      // //validating email and password with firebase server
      // firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(auth, email, password)
      //   .then(function () {
      //     //declaring user variable
      //     var user = auth.currentUser;

      //     // adding to fire base database
      //     var database_ref = database.ref();

      //     // creating new user
      //     var user_data = {
      //       username: username,
      //       email: email,
      //       last_login: Date.now(),
      //     };

      //     database_ref.child("users/" + user.uid).set(user_data);
      //   })
      //   .catch(function (error) {
      //     // firebase will use this line of code to alert the user
      //     var errorCode = error.code;
      //     var errorMessage = error.message;
      //     alert(errorMessage);
      //   });

      // //login function

      // firebase
      //   .auth()
      //   .signInWithEmailAndPassword(email, password)
      //   .then((userCredential) => {
      //     // Signed in
      //     var user = userCredential.user;
      //     // ...
      //   })
      //   .catch((error) => {
      //     var errorCode = error.code;
      //     var errorMessage = error.message;
      //     alert(errorMessage);
      //   });

      // firebase.auth().onAuthStateChanged((user) => {
      //   if (user) {
      //     // User is signed in, see docs for a list of available properties
      //     // https://firebase.google.com/docs/reference/js/firebase.User
      //     var uid = user.uid;
      //     // ...
      //   } else {
      //     // User is signed out
      //     // ...
      //   }
      // });

      // function validate_emailId(email) {
      //   expression = /^[^@]+@\w+(\.\w+)+\w$/;
      //   if (expression.test(email) == true) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }

      // function validate_password(password) {
      //   if (password < 6) {
      //     return false;
      //   } else {
      //     return true;
      //   }
      // }
