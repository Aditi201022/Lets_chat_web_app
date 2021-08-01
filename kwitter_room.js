var firebaseConfig = {
    apiKey: "AIzaSyD-UwBWubU7Mb43HfP2cbn4nW3knQojwIo",
    authDomain: "lets-chat-98c84.firebaseapp.com",
    databaseURL: "https://lets-chat-98c84-default-rtdb.firebaseio.com",
    projectId: "lets-chat-98c84",
    storageBucket: "lets-chat-98c84.appspot.com",
    messagingSenderId: "358357898419",
    appId: "1:358357898419:web:50ddc77bbaddc2aef0ccc6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
function addRoom(){
    room_name =  document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    })};

    
    //Start code
    function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
});});}
getData();
    //End code
    row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>+"+ Room_names + "</div><hr>"
    

    function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
  }