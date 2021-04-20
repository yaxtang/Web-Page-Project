import { ref, firebaseAuth } from '../config/constants'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(function(user){
      
      if ( user && user.emailVerified == false){
          user.sendEmailVerification().then(function(){
          console.log("email verification sent to user", user.emailVerified);
        })
      }else{
        saveUser(user);
      }
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}


export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid,
      displayName:user.name,
      gender: null,
      bio:null,
      phone:null,
      emailVerified: user.emailVerified


    })
    .then(() => user)
}
