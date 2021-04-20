import React, { Component } from 'react'
import firebase from 'firebase'
import { ref } from '../config/constants'
import { login, resetPassword, auth} from '../helpers/auth'
import FontAwesome from 'react-fontawesome';
import "../css/Profile.css"
import 'font-awesome/css/font-awesome.css'


  

// 'use strict';

// // Shortcuts to DOM Elements.
// var messageForm = document.getElementById('message-form');
// var messageInput = document.getElementById('new-post-message');
// var titleInput = document.getElementById('new-post-title');
// var signInButton = document.getElementById('sign-in-button');
// var signOutButton = document.getElementById('sign-out-button');
// var splashPage = document.getElementById('page-splash');
// var addPost = document.getElementById('add-post');
// var addButton = document.getElementById('add');
// var recentPostsSection = document.getElementById('recent-posts-list');
// var userPostsSection = document.getElementById('user-posts-list');
// var topUserPostsSection = document.getElementById('top-user-posts-list');
// var recentMenuButton = document.getElementById('menu-recent');
// var myPostsMenuButton = document.getElementById('menu-my-posts');
// var myTopPostsMenuButton = document.getElementById('menu-my-top-posts');
// var listeningFirebaseRefs = [];



// /**
//  * Saves a new post to the Firebase DB.
//  */
// // [START write_fan_out]
// function writeNewPost(uid, username, picture, title, body) {
//   // A post entry.
//   var postData = {
//     author: username,
//     uid: uid,
//     body: body,
//     title: title,
//     starCount: 0,
//     authorPic: picture
//   };

//   // Get a key for a new Post.
//   var newPostKey = firebase.database().ref().child('posts').push().key;

//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   var updates = {};
//   updates['/posts/' + newPostKey] = postData;
//   updates['/user-posts/' + uid + '/' + newPostKey] = postData;

//   return firebase.database().ref().update(updates);
// }
// // [END write_fan_out]

// /**
//  * Star/unstar post.
//  */
// // [START post_stars_transaction]
// function toggleStar(postRef, uid) {
//   postRef.transaction(function(post) {
//     if (post) {
//       if (post.stars && post.stars[uid]) {
//         post.starCount--;
//         post.stars[uid] = null;
//       } else {
//         post.starCount++;
//         if (!post.stars) {
//           post.stars = {};
//         }
//         post.stars[uid] = true;
//       }
//     }
//     return post;
//   });
// }
// // [END post_stars_transaction]

// /**
//  * Creates a post element.
//  */
// function createPostElement(postId, title, text, author, authorId, authorPic) {
//   var uid = firebase.auth().currentUser.uid;

//   var html =
//       '<div class="post post-' + postId + ' mdl-cell mdl-cell--12-col ' +
//                   'mdl-cell--6-col-tablet mdl-cell--4-col-desktop mdl-grid mdl-grid--no-spacing">' +
//         '<div class="mdl-card mdl-shadow--2dp">' +
//           '<div class="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">' +
//             '<h4 class="mdl-card__title-text"></h4>' +
//           '</div>' +
//           '<div class="header">' +
//             '<div>' +
//               '<div class="avatar"></div>' +
//               '<div class="username mdl-color-text--black"></div>' +
//             '</div>' +
//           '</div>' +
//           '<span class="star">' +
//             '<div class="not-starred material-icons">star_border</div>' +
//             '<div class="starred material-icons">star</div>' +
//             '<div class="star-count">0</div>' +
//           '</span>' +
//           '<div class="text"></div>' +
//           '<div class="comments-container"></div>' +
//           '<form class="add-comment" action="#">' +
//             '<div class="mdl-textfield mdl-js-textfield">' +
//               '<input class="mdl-textfield__input new-comment" type="text">' +
//               '<label class="mdl-textfield__label">Comment...</label>' +
//             '</div>' +
//           '</form>' +
//         '</div>' +
//       '</div>';

//   // Create the DOM element from the HTML.
//   var div = document.createElement('div');
//   div.innerHTML = html;
//   var postElement = div.firstChild;
//   if (componentHandler) {
//     componentHandler.upgradeElements(postElement.getElementsByClassName('mdl-textfield')[0]);
//   }

//   var addCommentForm = postElement.getElementsByClassName('add-comment')[0];
//   var commentInput = postElement.getElementsByClassName('new-comment')[0];
//   var star = postElement.getElementsByClassName('starred')[0];
//   var unStar = postElement.getElementsByClassName('not-starred')[0];

//   // Set values.
//   postElement.getElementsByClassName('text')[0].innerText = text;
//   postElement.getElementsByClassName('mdl-card__title-text')[0].innerText = title;
//   postElement.getElementsByClassName('username')[0].innerText = author || 'Anonymous';
//   postElement.getElementsByClassName('avatar')[0].style.backgroundImage = 'url("' +
//       (authorPic || './silhouette.jpg') + '")';

//   // Listen for comments.
//   // [START child_event_listener_recycler]
//   var commentsRef = firebase.database().ref('post-comments/' + postId);
//   commentsRef.on('child_added', function(data) {
//     addCommentElement(postElement, data.key, data.val().text, data.val().author);
//   });

//   commentsRef.on('child_changed', function(data) {
//     setCommentValues(postElement, data.key, data.val().text, data.val().author);
//   });

//   commentsRef.on('child_removed', function(data) {
//     deleteComment(postElement, data.key);
//   });
//   // [END child_event_listener_recycler]

//   // Listen for likes counts.
//   // [START post_value_event_listener]
//   var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
//   starCountRef.on('value', function(snapshot) {
//     updateStarCount(postElement, snapshot.val());
//   });
//   // [END post_value_event_listener]

//   // Listen for the starred status.
//   var starredStatusRef = firebase.database().ref('posts/' + postId + '/stars/' + uid)
//   starredStatusRef.on('value', function(snapshot) {
//     updateStarredByCurrentUser(postElement, snapshot.val());
//   });

//   // Keep track of all Firebase reference on which we are listening.
//   listeningFirebaseRefs.push(commentsRef);
//   listeningFirebaseRefs.push(starCountRef);
//   listeningFirebaseRefs.push(starredStatusRef);

//   // Create new comment.
//   addCommentForm.onsubmit = function(e) {
//     e.preventDefault();
//     createNewComment(postId, firebase.auth().currentUser.displayName, uid, commentInput.value);
//     commentInput.value = '';
//     commentInput.parentElement.MaterialTextfield.boundUpdateClassesHandler();
//   };

//   // Bind starring action.
//   var onStarClicked = function() {
//     var globalPostRef = firebase.database().ref('/posts/' + postId);
//     var userPostRef = firebase.database().ref('/user-posts/' + authorId + '/' + postId);
//     toggleStar(globalPostRef, uid);
//     toggleStar(userPostRef, uid);
//   };
//   unStar.onclick = onStarClicked;
//   star.onclick = onStarClicked;

//   return postElement;
// }


// function createPostElement() {
//   var uid = firebase.auth().currentUser.uid;

//   var html =
//       '<div class="post post-' + 123 + ' mdl-cell mdl-cell--12-col ' +
//                   'mdl-cell--6-col-tablet mdl-cell--4-col-desktop mdl-grid mdl-grid--no-spacing">' +
//         '<div class="mdl-card mdl-shadow--2dp">' +
//           '<div class="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">' +
//             '<h4 class="mdl-card__title-text"></h4>' +
//           '</div>' +
//           '<div class="header">' +
//             '<div>' +
//               '<div class="avatar"></div>' +
//               '<div class="username mdl-color-text--black"></div>' +
//             '</div>' +
//           '</div>' +
//           '<span class="star">' +
//             '<div class="not-starred material-icons">star_border</div>' +
//             '<div class="starred material-icons">star</div>' +
//             '<div class="star-count">0</div>' +
//           '</span>' +
//           '<div class="text"></div>' +
//           '<div class="comments-container"></div>' +
//           '<form class="add-comment" action="#">' +
//             '<div class="mdl-textfield mdl-js-textfield">' +
//               '<input class="mdl-textfield__input new-comment" type="text">' +
//               '<label class="mdl-textfield__label">Comment...</label>' +
//             '</div>' +
//           '</form>' +
//         '</div>' +
//       '</div>';

// }


// function writeUserData(userId,name,email) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//   });
// }


function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

function userPost (user, name,phone,bio, gender) {
 var user = firebase.auth().currentUser;
     console.log("mix",gender,bio,phone,user.uid);
  return ref.child(`users/${user.uid}/info`)
    .set({

      email: user.email,
      displayName: name,
      phone: phone,
      gender: gender,
      bio:bio
    
    })
    .then(() => user)
}

// function handleChange: function(event) {
//     this.setState({value2: event.target.value});
// }


export default class Profile extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    var user = firebase.auth().currentUser;
    var ge = document.getElementById("gender");
    var value = ge.options[ge.selectedIndex].value;

    console.log("genervalue",value)
    userPost(this.user, this.name.value, this.phone.value, this.bio.value, value)
     .catch(e => this.setState(setErrorMsg(e)))
  // })
}
state = { showing: false };

 

render() {
  const { showing } = this.state;
  var user = firebase.auth().currentUser;
  var name,email,uid,gender,bio,phone;
  
  // var email;
  // var name = firebase.database().ref('/users/' + user.uid).once("value")
  //     .then(function(snapshot){
  //     return snapshot.child("info/email").toString(); // {first:"Ada",last:"Lovelace"}
  //   });

  //   var neww = name.then(function(result) {
  //  // do something with result
  //  return result;
  //   });
  //   console.log("hkjdjsalkjdlka"+neww);
   if (user != null) {
    var userId = firebase.auth().currentUser.uid;
    var ref = firebase.database().ref('/users/' + userId)
    ref.once("value")
    .then(function(snapshot){
      name = snapshot.child("info/displayName").val() || 'Anonymous'; // {first:"Ada",last:"Lovelace"}
      var nameElement = document.getElementById('nameinput');
      nameElement.value = name;
      
      email = snapshot.child("info/email").val()|| user.email; // "Ada"
      var emailElement = document.getElementById('emailinput');
      emailElement.value = email;

       bio = snapshot.child("info/bio").val(); // "Ada"
      var bioElement = document.getElementById('bio');
      bioElement.value = bio;

      phone= snapshot.child("info/phone").val(); // "Ada"
      var phoneElement = document.getElementById('phone');
      phoneElement.value = phone;

      gender = snapshot.child("info/gender").val(); 
      var genderElement = document.getElementById("gender");;
      console.log("gggg",gender);
       for(var i=0; i < genderElement.options.length; i++)
        {
          if(genderElement.options[i].value === gender) {
            genderElement.selectedIndex = i;
            console.log("iii",i, "value",genderElement.options[i].value);
            break;
        }
      }
    })
  }
  

    return (
    /* trigger someFunction using  a button */
    <section className="profile">
      <div className="title is-large">Profile</div>
      
  <form onSubmit={this.handleSubmit}>
                 
      <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" id ="nameinput" ref={(name) => this.name = name}  placeholder="Username" defaultValue={name}/>
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              
              <i className="fa fa-check"></i>
            </span>
          </div>
          <p className="help"></p>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" id ="emailinput"  defaultValue={email}/>
            <span className="icon is-left is-small">
              <span className="fa fa-user"></span>
            </span>
            <span className="icon is-small is-right">
              <span className="fa fa-check"></span>
            </span>
          </div>
          <p className="help"></p>
        </div>

        <div className="field">
          <label className="label">Phone</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" id="phone" type="tel" placeholder="(000)-000-0000" ref={(phone) => this.phone = phone} />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-warning"></i>
            </span>
          </div>
          <p className="help is-danger"></p>
        </div>

        <div className="Gender-part">
          <label className="label">Gender</label>
          <div className="control">
            <div className="select">
              <select className="gender" id="gender">
                <option>Select dropdown</option>
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Bio</label>
          <div className="control">
            <textarea className="textarea" id="bio" ref={(bio) => this.bio = bio} placeholder="Something about you" ></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button type="submit" onClick={() => this.setState({ showing: !showing })} className="button is-medium is-blackboard is-link">Save</button>
              { showing 
                    ?  <div> 
                        <h1 className="text">Saved</h1>
                       
                      </div>
                    : null
                } 
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>
    </form>
      </section>
//document.getElementById("Mobility").selectedIndex = 12; //Option 10
//


//
       // <div name="myForm" >
       //    Name: <input id="inputfield" type="text" name="fname" placeholder="Username"/>
        
       //      <button onclick="input()">Click me</button>

       //  </div> 


        //
      // <form onSubmit={this.handleSubmit}>
                 
      //             <p className="control has-icon">
      //               <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
      //                    <i className="fa fa-envelope"></i>
      //             </p>
      //             <p className="control has-icon">
      //               <input className="input" type="password" ref={(pw) => this.pw = pw} placeholder="Password"/>
      //               <i className="fa fa-lock"></i>
      //             </p>
                 
      //             <p className="control">
      //               <button  type="submit" className="button is-medium is-info is-fullwidth">
      //                 <i className="fa fa-user"></i>
      //                 Login
      //               </button>
      //               </p>
      //  </form>

   );
 }
}
  // render () {
  //   return (
  //   <div>
     
  //     <div className="field">
  //       <label className="label">Username</label>
  //       <div className="control has-icons-left has-icons-right">
  //          <input className="input" type="text" ref={(text) => this.text = text} placeholder="Username"/>         
  //         <span className="icon is-small is-left">
  //           <i className="fa fa-user"></i>
  //         </span>
  //         <span className="icon is-small is-right">
  //           <i className="fa fa-check"></i>
  //         </span>
  //       </div>
  //     </div>
  //   </div>

    //   <div className="field">
    //     <label className="label">Email</label>
    //     <div className="control has-icons-left has-icons-right">
    //       <input className="input" type="email" placeholder="Email input" />
    //       <span className="icon is-small is-left">
    //         <i className="fa fa-envelope"></i>
    //       </span>
    //       <span className="icon is-small is-right">
    //         <i className="fa fa-warning"></i>
    //       </span>
    //     </div>
    //   </div>

    //   <div className="field">
    //     <label className="label">Subject</label>
    //     <div className="control">
    //       <div className="select">
    //         <select>
    //           <option>Select dropdown</option>
    //           <option>With options</option>
    //         </select>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="field">
    //     <label className="label">Message</label>
    //     <div className="control">
    //       <textarea className="textarea" placeholder="Textarea"></textarea>
    //     </div>
    //   </div>

    //   <div className="field">
    //     <div className="control">
    //       <label className="checkbox">
    //         <input type="checkbox"/>
    //         I agree to the <a href=" ">terms and conditions</a>
    //       </label>
    //     </div>
    //   </div>

    //   <div className="field">
    //     <div className="control">
    //       <label className="radio">
    //         <input type="radio" name="question"/>
    //         Yes
    //       </label>
    //       <label className="radio">
    //         <input type="radio" name="question"/>
    //         No
    //       </label>
    //     </div>
    //   </div>

    //   <div className="field is-grouped">
    //     <div className="control">
    //       <button className="button is-link">Submit</button>
    //     </div>
    //     <div className="control">
    //       <button className="button is-text">Cancel</button>
    //     </div>
    //   </div>
    // </div>
//     )
//   }
// }




// // import React from 'react';
// import DocumentTitle from 'react-document-title';
// import firebase from  'firebase'
// import '../bulma/css/bulma.css'

// // export function updateUser (user) {
// //   return ref.child(`users/${user.uid}/info`)
// //     .set({
// //       email: user.email,
// //       uid: user.uid
// //     })
// //     .then(() => user)
// // }

// export default className About extends React.Component {
//   render() {
//     return (
// //       <div>
// //         hahahahha
// //       </div>
// //       );
// //   }
// // }
//       <DocumentTitle title={`My Profile`}>
//         <div className="container">
//           <div className="row">
//             <div className="col-xs-12">
//               <h3>My Profile</h3>
//               <hr />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-xs-12">
//                 <div className='sp-update-profile-form'>
//                   <div className="row">
//                     <div className="col-xs-12">
//                       <div className="form-horizontal">
//                         <div className="form-group">
//                           <label htmlFor="givenName" className="col-xs-12 col-sm-4 control-label">First name</label>
//                           <div className="col-xs-12 col-sm-4">
//                             <input type="text" className="form-control" id="givenName" name="givenName" placeholder="First name" required />
//                           </div>
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="surname" className="col-xs-12 col-sm-4 control-label">Last name</label>
//                           <div className="col-xs-12 col-sm-4">
//                             <input type="text" className="form-control" id="surname" name="surname" placeholder="Last name" required />
//                           </div>
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="email" className="col-xs-12 col-sm-4 control-label">Email</label>
//                           <div className="col-xs-12 col-sm-4">
//                             <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
//                           </div>
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="customData.color" className="col-xs-12 col-sm-4 control-label">Color</label>
//                           <div className="col-xs-12 col-sm-4">
//                             <input type="customData.color" className="form-control" id="customData.color" name="customData.color" placeholder="Color" />
//                           </div>
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="password" className="col-xs-12 col-sm-4 control-label">New Password</label>
//                           <div className="col-xs-12 col-sm-4">
//                             <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
//                           </div>
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="password" className="col-xs-12 col-sm-4 control-label">Current Password</label>
//                           <div className="col-xs-12 col-sm-4">
//                             <input type="password" className="form-control" id="password" name="existingPassword" placeholder="Password" />
//                           </div>
//                         </div>
//                         <div key="update-button" className="form-group">
//                           <div className="col-sm-offset-4 col-sm-4">
//                             <p className="alert alert-danger" data-spIf="form.error"><span data-spBind="form.errorMessage" /></p>
//                             <p className="alert alert-success" data-spIf="form.successful">Profile updated.</p>
//                             <button type="submit" className="btn btn-primary">
//                               <span data-spIf="!form.processing">Update</span>
//                               <span data-spIf="form.processing">Updating...</span>
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </DocumentTitle>
//     );
//   }
// }