
 var firebaseConfig = {
      apiKey: "AIzaSyC0gM97EI1PZVf2HDVsCdNtEJsHQrZJ6xk",
      authDomain: "kwitter-e7704.firebaseapp.com",
      databaseURL: "https://kwitter-e7704-default-rtdb.firebaseio.com",
      projectId: "kwitter-e7704",
      storageBucket: "kwitter-e7704.appspot.com",
      messagingSenderId: "472026456665",
      appId: "1:472026456665:web:42848f3460c19619b30748",
      measurementId: "G-55Q3H4VX6E"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();
function addroom(){
    roomname=document.getElementById("room name here").value;
    firebase.database().ref("/").child(roomname).update({
        purpose:"adding room"
    });
}