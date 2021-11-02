var firebaseConfig = {
  apiKey: "AIzaSyA_JTV6Y9yGmhm5J4hkpZowPbPtI7ch3Nc",
  authDomain: "lets-chat-web-app-8abc1.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-8abc1-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-8abc1",
  storageBucket: "lets-chat-web-app-8abc1.appspot.com",
  messagingSenderId: "371981881657",
  appId: "1:371981881657:web:55503aa8b0cd2f11c058e8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addRoom(){
  room_name =  document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

    
    //Start code
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot)
     { document.getElementById("output").innerHTML = "";
     snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
       childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey;
             message_data = childData;
      //Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4" + name + "<img class = 'user_tick' src = tick.png></h4>";
      like_button = "<button class = 'btn btn - warning' id = "+firebase_message_id +" value= "+like+" onclick='updateLike(this.id)'";
      message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";

      console.log("Room name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>+"+ Room_names + "</div><hr>"
      document.getElementById("output").innerHTML+= row;
      //End code
} }); }); }
getData();
    row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>+"+ Room_names + "</div><hr>"
    

    function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
  }

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }