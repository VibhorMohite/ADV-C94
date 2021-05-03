
//ADD YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBA_NQVaal9gZUHbkyxw7eLHQHrFEy6slw",
    authDomain: "kwitter-2bd0b.firebaseapp.com",
    databaseURL: "https://kwitter-2bd0b-default-rtdb.firebaseio.com",
    projectId: "kwitter-2bd0b",
    storageBucket: "kwitter-2bd0b.appspot.com",
    messagingSenderId: "1036143510114",
    appId: "1:1036143510114:web:871638f912c1c6fbbd473b",
    measurementId: "G-3C406EJ0H4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
   function addUser()
   {
       user_name=document.getElementById("user_name").value;
       firebase.dataBase().ref("/").child(user_name).update({
           purpose : "adding user"
       });
   }