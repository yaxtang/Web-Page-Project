// import React from 'react';
// import logo from './tree.gif';
// import icon from './lithops icon.png'
// import './App.css';
// import 'bulma/css/bulma.css'
// // Correct! This is a component and should be capitalize
// //  icon address http://mothwick.tumblr.com/post/126187134851/lithops-drawn-for-answers-magazine-and-published
      

// class App extends React.Component {
//    render() {
//        // return <div>Circle </div>;
//       return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to lithops Garden</h1>
//         </header>
//         <body className="layout-default">
//           <section className="body is-primary">
//               <div className="login">
//                <article className="card is-rounded">
//                 <div className="card-content">
//                   <h1 className="App-icons">                  
//                     <img src={icon} alt= {icon} width="150"/>
//                   </h1>
//                   <p className="control has-icon">
//                     <input className="input" type="email" placeholder="Email"/>
//                     <i className="fa fa-envelope"></i>
//                   </p>
//                   <p className="control has-icon">
//                     <input className="input" type="password" placeholder="Password"/>
//                     <i className="fa fa-lock"></i>
//                   </p>
//                   <p className="control">
//                     <label className="checkbox">
//                       <input type="checkbox"/>
//                       Remember me
//                     </label>
//                   </p>
//                   <p className="control">
//                     <button className="button is-medium is-info is-fullwidth">
//                       <i className="fa fa-user"></i>
//                       Login
//                     </button>
//                   </p>
//                   <p className="control">
//                     <button className="button is-medium is-info is-fullwidth">
//                       <i className="fa fa-user"></i>
//                       Register
//                     </button>
//                   </p>
                 
//                   </div>
//               </article>
//               </div>
//         </section>
//       </body>
//     <div className="copyright is-primary is-medium">
//     © Copyright 2017. All Rights Reserved.
//     </div>
//     </div>

//       );
//     }
//  }
//  export default App;


// //   // <h1 className="App-icons">                  
// //                 //     <img src={icon} alt="logo" width="150"/>
// //                 //   </h1>
// //                 //   <p className="control has-icon">
// //                 //     <input className="input" type="email" placeholder="Email"/>
// //                 //     <i className="fa fa-envelope"></i>
// //                 //   </p>
// //                 //   <p className="control has-icon">
// //                 //     <input className="input" type="password" placeholder="Password"/>
// //                 //     <i className="fa fa-lock"></i>
// //                 //   </p>
// //                 //   <p className="control">
// //                 //     <label className="checkbox">
// //                 //       <input type="checkbox"/>
// //                 //       Remember me
// //                 //     </label>
// //                 //   </p>
// //                 //   <p className="control">
// //                 //     <button className="button is-primary is-medium is-fullwidth">
// //                 //       <i className="fa fa-user"></i>
// //                 //       Login
// //                 //     </button>
// //                 //   </p>
                
              
      
// //   //        <section className="hero is-fullheight is-medium is-primary is-bold">
// //   // <div className="hero-body is-centered">
// //   //         <div className="container is-centered">
// //   //           <div className="columns is-centered">
// //   //              <article className="card is-rounded">
// //   //               <div className="card-content">
// //   //                 </div>
// //   //             </article>
// //   // //           </div>
// //   //         </div>
// //   //   </div>
// //   // </section>

// // // classname App extends Component {
// // //   render() {
// // //     return (
// // //       <div className="App">
// // //         <header className="App-header">
// // //           <img src={logo} className="App-logo" alt="logo" />
// // //           <h1 className="App-title">Welcome to React</h1>
// // //         </header>
// // //         <p className="App-intro">
// // //           To get started, edit <code>src/App.js</code> and save to reload.
// // //         </p>
// // //       </div>
// // //    );
// // //   }
// // // }
// // export default App;

// import React, { Component } from 'react'
// import { login, resetPassword } from './helpers/auth'

// export default class App extends Component {
//   render () {
//     return (
//       <div className="col-sm-6 col-sm-offset-3">
//         <h1> Login </h1>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label>Email</label>
//             <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
//           </div>
//           {
//             <div className="alert alert-danger" role="alert">
//               <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
//               <span className="sr-only">Error:</span>
//             </div>
//           }
//           <button type="submit" className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }
