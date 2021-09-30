// Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCVUuo2kj338RjTDnqM7jqtID_e-MI6XrE",
    authDomain: "chat-room-6fd6a.firebaseapp.com",
    databaseURL: "https://chat-room-6fd6a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-room-6fd6a",
    storageBucket: "chat-room-6fd6a.appspot.com",
    messagingSenderId: "706627574928",
    appId: "1:706627574928:web:5f35e19b6dc15ea2bb4c15"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log(firebase);

  
// the above is firebase. Put it at the top, so that will not touch it later


var sendButton = document.getElementById("send-button");
// var inputName = document.getElementById("inputName");
var inputMessage = document.getElementById("inputMessage");

userNameInput = localStorage.getItem("name");
// console.log(userName);


sendButton.addEventListener("click", sendMessage);

firebase.database().ref('chat').child('message').on('child_added', function(snapshot){
    var nameVal = snapshot.val().name; //string
    var msgVal = snapshot.val().msg; // string

    // create element when firebase got new child
    var chatBox = document.createElement('div');
    var userName = document.createElement('h5');
    var messageText = document.createElement('p');
    var chatRoom = document.getElementById("chat-room");

    userName.innerHTML = nameVal;
    messageText.innerHTML = msgVal;

    if(nameVal == "Fikri"){
        chatBox.classList.add("self");
    } 

    var chatBoxHolder = document.createElement('div'); //aku try

    chatBox.append(userName);
    chatBox.append(messageText);

    chatBoxHolder.append(chatBox); // aku try
    chatBoxHolder.style.width = "100%"; // aku try
    chatRoom.append(chatBoxHolder);

    chatBox.classList.add('chat-box');

    chatRoom.scrollTo(0, chatRoom.scrollHeight);
})

function sendMessage(){
    console.log(userNameInput, inputMessage.value );
        
    // push the data and store in database
    if (userNameInput !== "" && inputMessage.value !==""){
    firebase.database().ref("chat").child('message').push({
        name: userNameInput,
        msg: inputMessage.value,
    })}
    
    var todayDateIs = new Date();
    console.log(todayDateIs.toTimeString().slice(0,8));




    userNameInput= "";
    inputMessage.value= "";  

    
}