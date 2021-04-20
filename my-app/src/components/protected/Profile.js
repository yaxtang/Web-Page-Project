import React, { Component } from 'react'
import firebase from 'firebase'
import { ref, firebaseAuth } from '../component/config/constants'
import { ref, firebaseAuth } from '../component/config/constants'
  
export default class Profile extends Component {
  //  constructor(props) {
  //   super(props);
  //   this.state = {
  //     inputValue: 'adada'
  //   };
  // }

 
input(){
  var current = document.getElementById("input");
  document.getElementById("input").placeholder= current;

}

update(value) {
   var user = firebase.auth().currentUser;
    user.updateProfile({
    displayName: "yaxin"
    }).then(function() {
    // Update successful.
  }).catch(function(error) {
    this.setState(('Invalid username/password.'))
  });

  }

  // updateInputValue: function(evt) {
  //   this.setState({
  //     inputValue: 'evt.target.valu'
  //   });
  // }
  // state = { inputValue: 'hhha' }
  
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //     var email = "yoyoyo"

  // }
 

render() {
  var user = firebase.auth().currentUser;
  var name, email, uid;

  if (user != null) {
    name = user.name;    
    email = user.email;
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                     // this value to authenticate with your backend server, i                                        // you have one. Use User.getToken() instead.
  }
  

    return (
    /* trigger someFunction using  a button */
    <section className="profile">
       <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" type="name" placeholder="username" value={name}/>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="email" value={email}/>
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
          <label className="label">Phone</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="tel" placeholder="number"/>
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-warning"></i>
            </span>
          </div>
          <p className="help is-danger"></p>
        </div>

        <div className="Gender">
          <label className="label">Gender</label>
          <div className="control">
            <div className="select">
              <select>
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
            <textarea className="textarea" placeholder="Something about you"></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button onclick="update()" className="button is-link">Save</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>
      </section>
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