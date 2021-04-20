import React, { Component } from 'react'
import { auth } from '../helpers/auth'
import '../css/About.css';
import '../bulma/css/bulma.css'
import icon from '../lithops icon.png'
import ReactDOM from 'react-dom';


  
export default class About extends Component {
  
render() {
  
    return (
    /* trigger someFunction using  a button */
<section className="hero">
     <div className="hero-header">
       <h1 className="title">
              About
       </h1>
    </div>
         
  <div className="hero-body">
      <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={icon} alt="Image"/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <div>
          <strong>lithops</strong> 
          <p>Lithops is a genus of succulent plants in the ice plant family, 
          Aizoaceae. Members of the genus are native to southern Africa. 
          The name is derived from the Ancient Greek words λίθος (lithos),
           meaning "stone," and ὄψ (ops), meaning "face," referring to the stone-like 
           appearance of the plants. They avoid being eaten by blending in with surrounding rocks 
           and are often known as pebble plants or living stones. The formation of the name from the Greek 
           "-ops" means that even a single plant is called a Lithops.</p></div>
      </div>
      <nav className="level">
        <div className="level-left">
          <a className="level-item">
            <h1 className="email is-small"><strong>Email:</strong>  yaxin.t@gmail.com</h1>
          </a>
          <a className="level-item">
            <h2 className="phone is-small">
          <strong>Phone:</strong>  (507)-420-0042</h2>
          </a>

        <div className="level-right">
          <li className="level-item">
           <a href="https://www.gardeningknowhow.com/ornamental/cacti-succulents/lithop/growing-living-stone-plants.htm">More info</a> 
          </li>
          <li className="level-item"> 
           <a href="http://www.lithops.net/lithop7.htm">More info1</a>
        </li>
        </div>
        </div>
      </nav>
    </div>
  </article>
</div>
</div>

<div className="hero-footer">
</div>
</section>

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