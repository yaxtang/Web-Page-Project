import React, {render, Component, createClass, createElement } from 'react'
import '../css/Home.css';
import '../bulma/css/bulma.css'
import logo from '../tree.gif';
import icon from '../lithops icon.png'
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css'
import firebase from 'firebase'
import { ref, firebaseAuth } from '../config/constants'
import { login, resetPassword, auth} from '../helpers/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

function addPost (title, content, date, name) {
 var ref = firebase.database();
  var ref = firebase.database().ref('/post')
  ref.once("value")
    .then(function(snapshot){
      var aa = snapshot.child("post/0/content").val() ; // {first:"Ada",last:"Lovelace"}foncl        
      console.log("content"+aa)   
      var length = snapshot.numChildren();
      ref.child('/'+length)
      .set({
        title: title,
        user: name,
        content: content,
        date: date,
    })
    .then(() => ref)
        
 });
} 
export default class Home extends Component {

  //var savedPost = [{title: "a", content: "b", date:"c"}];

  state = { registerError: null }
  
  cancel = (e) => {
    e.preventDefault()
    document.querySelector(".modal").classList.toggle("is-active");
    e.preventDefault()
  }

  addnewpost = (e) => {
    e.preventDefault()
    document.querySelector(".modal").classList.toggle("is-active");
    e.preventDefault()
    
    addPost(this.title.value, this.content.value, this.date.value, "Yaxin");
  }
 state = { showing: false };
 render () {
    const { showing } = this.state;
    var date = new Date();
    var user = firebase.auth().currentUser;
    var title, content, name, date;  


   if (user != null) {
    var userId = firebase.auth().currentUser.uid;
    var ref = firebase.database().ref('/users/' + userId);
    var titleElement = document.getElementById('Addnew');
   // titleElement.disabled = verified;
  }

//var verified = user.isEmailVerified();
    
      if (user != null) {

        var ref = firebase.database().ref('/post')
        ref.once("value")
        .then(function(snapshot){
        var l= snapshot.numChildren()-1;
      for (var length = 1; length < l;length++ ){
        title = snapshot.child("post/"+length+"/title").val() ; // {first:"Ada",last:"Lovelace"}
        var titleElement = document.getElementById('temp');
        titleElement.value = title;

        content = snapshot.child("post/"+length+"/content").val() ; // {first:"Ada",last:"Lovelace"}
        var contentElement = document.getElementById('temp');
        contentElement.value = content;


        name = snapshot.child("post/"+length+"/name").val() ; // {first:"Ada",last:"Lovelace"}
        var nameElement = document.getElementById('temp');
        nameElement.value = name;
        date= snapshot.child("post/"+length+"/date").val(); // "Ada"
        var dateElement = document.getElementById('temp');
        dateElement.value = date;
        class post extends Component{
           render(){
            return (
              <div className="blog-post">
                        <h1 className="blog-title">{title}</h1>
                        <h2 className="date">{date}}</h2>
                        <p className="blog-content">
                        {content}
                        </p>
                      </div>
        )};
        }
    }//end for loop
 });
}
    return (
      
  <div>  

    <header>
      <h1 className="title push-left is-large">Blog</h1>
      <h2 className="subtitle-a push-left is-small">Share your thoughts</h2>
      <button id="Addnew" disabled={!user} className="button push-right is-median" aria-label="close" onClick={() => {document.querySelector(".modal").classList.toggle("is-active");}}>Add New Post</button> 
      <button id="Allpost" className="button push-right is-median">All Post</button> 
      <button id="Mypost" disabled={!user} className="button push-right is-median">My Post</button> 
    </header>
      <div id="proper-list-render1" className="list"></div>
      <div id="proper-list-render2" className="list"></div>
    
    <form onSubmit={this.addnewpost} className="modal" id="newpost">
      <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">New Post</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">

            <div className="field">
                <label className="label">Title</label>
                <div className="control has-icons-left has-icons-right">
                  <input className="input" id ="titleinput" ref={(title) => this.title = title}  placeholder="title"/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-heart"></i>
                  </span>
                </div>
                <p className="help"></p>
              </div>

              <div className="field">
                <label className="label">Time</label>
                <div className="control has-icons-left has-icons-right">
                  <input className="input" id ="dateinput"  ref={(date) => this.date = date} defaultValue={date} disabled/>
                  <span className="icon is-left is-small">
                    <span className="fa fa-calendar"></span>
                  </span>
                 
                </div>
                <p className="help"></p>
              </div>

              <div className="field">
                <label className="label">Content</label>
                <div className="control">
                  <textarea className="textarea" id="contentinput" ref={(content) => this.content = content} placeholder="Something you want to post..." ></textarea>
                </div>
              </div>

          </section>
          <footer className="modal-card-foot">

            <button className="button" type="submit" onClick={() => this.setState({ showing: !showing })} aria-label="close">Post</button>
            <button className="button" aria-label="close" onClick={this.cancel}>Cancel</button>
          </footer>
      </div>
    </form>

  <div className="container">
      <div className="section">
          <div className="col span_2_of_3" id="addfield">   

            <div className="blog-post">
            <h1 className="blog-title">Lithops</h1>
            <h2 className="date">Posted 28th Feb 2015</h2>

            <h3 className="date">Tim</h3>
            <p className="blog-content">
            Lithops is a genus of succulent plants in the ice plant family, 
          Aizoaceae. Members of the genus are native to southern Africa. 
          The name is derived from the Ancient Greek words λίθος (lithos),
           meaning "stone," and ὄψ (ops), meaning "face," referring to the stone-like 
           appearance of the plants. They avoid being eaten by blending in with surrounding rocks 
           and are often known as pebble plants or living stones. The formation of the name from the Greek 
           "-ops" means that even a single plant is called a Lithops.
           </p>
            <a href="#" className="post-link">Read More...</a>
            </div>
        
            <div className="blog-post">
            <h1 className="blog-title">Lithops</h1>
            <h2 className="date">Posted 22nd Feb 2015</h2>
            <p className="blog-content">
            Lithops is a genus of succulent plants in the ice plant family, 
            Aizoaceae. Members of the genus are native to southern Africa. 
            The name is derived from the Ancient Greek words λίθος (lithos),
             meaning "stone," and ὄψ (ops), meaning "face," referring to the stone-like 
            appearance of the plants. They avoid being eaten by blending in with surrounding rocks 
            and are often known as pebble plants or living stones. The formation of the name from the Greek 
            "-ops" means that even a single plant is called a Lithops.
             </p>
            <a href="#" className="post-link">Read More...</a>
          </div>

            <div className="blog-post">
            <h1 className="blog-title">Lithops</h1>
            <h2 className="date">Posted 12th Feb 2015</h2>
            <p className="blog-content">
            Lithops is a genus of succulent plants in the ice plant family, 
            Aizoaceae. Members of the genus are native to southern Africa. 
            The name is derived from the Ancient Greek words λίθος (lithos),
            meaning "stone," and ὄψ (ops), meaning "face," referring to the stone-like 
            appearance of the plants. They avoid being eaten by blending in with surrounding rocks 
            and are often known as pebble plants or living stones. The formation of the name from the Greek 
            "-ops" means that even a single plant is called a Lithops.
           </p>
           <a href="#" className="post-link">Read More...</a>
          </div>
            
           <div>
                { showing 
                    ?  <div className="blog-post">
                        <h1 className="blog-title">hello</h1>
                        <h2 className="date">Posted 6th Dec 2017</h2>
                        <p className="blog-content">

                        </p>
                      </div>
                    : null
                }
            </div>  
        </div>
 

          <aside className="col span_1_of_3">
              <div className="side-post">
              <img src="http://www.lithops.net/images/Lithops_photos/Litauc-Kuru4648.JPG" alt="img"/>
            <p className="side-content">Share your any thoughts abouth the lithops! </p>
              </div>
           </aside>
      </div>
  </div>
  </div>
    );
  }
}
