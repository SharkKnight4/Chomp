var firebaseConfig = {
    apiKey: "AIzaSyBFTH_DjrCc7rwLpGA5mq81s_HolbiYg6w",
    authDomain: "chomp-up.firebaseapp.com",
    databaseURL: "https://chomp-up-default-rtdb.firebaseio.com",
    projectId: "chomp-up",
    storageBucket: "chomp-up.appspot.com",
    messagingSenderId: "122608077223",
    appId: "1:122608077223:web:ab30de3e65dad2447e8e82",
    measurementId: "G-QJPSH7SZZ9"}

function adduser() {
    username = document.getElementById("username_goes_here1").value;
    password = document.getElementById("password_goes_here1").value;
    email = document.getElementById("email_goes_here").value;
    localStorage.setItem(username, password);
    firebase.database().ref("/").child(username).update({
        purpose:password
    });
    window.location = "Chomp_room.html";
}
