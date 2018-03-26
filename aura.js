firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome : " + email_id;
  
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      console.log("Error : " + errorMessage);
  
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
  }
  

  var database = firebase.database();
  
//   Initial Values
  var globalCounter = 11,
    topPlaylist = "gangsta",
    selectedPlaylist = "gangsta",
    currentPlaylist = null;
    playlistId = "00j&f"

//  Song Playlists
    playlists = [
        happy = {
            name : "happy",
            timesPlayed : 0,
            id : "00j&m",
        },
        sad = {
            name : "sad",
            songsOne : "ayay",
            timesPlayed : 1,
        },
        angry = {
            name : "angry",
            songsOne : "ayay",
            timesPlayed : 2,
        },
        love = {
            name : "love",
            songsOne : "ayay",
            timesPlayed : 3,
        },
        fine = {
            name : "fine",
            songsOne : "ayay",
            timesPlayed : 4,
        },
        sleepy = {
            name : "sleepy",
            songsOne : "ayay",
            timesPlayed : 5,
        },
        motivated = {
            name : "motivated",
            songsOne : "ayay",
            timesPlayed : 6,
        },
        depressed = {
            name : "depressed",
            songsOne : "ayay",
            timesPlayed : 7,
        },
        femme = {
            name : "femme",
            songsOne : "ayay",
            timesPlayed : 8,
        },
        party = {
            name : "party",
            songsOne : "ayay",
            timesPlayed : 9,
        },
        beyonce = {
            name : "beyonce",
            songsOne : "ayay",
            timesPlayed : 10,
        },
        intellectual = {
            name : "intellectual",
            songsOne : "ayay",
            timesPlayed : 11,
        },
        calm = {
            name : "calm",
            songsOne : "ayay",
            timesPlayed : 12,
        },
        artistic = {
            name : "artistic",
            songsOne : "ayay",
            timesPlayed : 13,
        },
        heartbreak = {
            name : "heartbreak",
            songsOne : "ayay",
            timesPlayed : 14,       
        },
        gangsta = {
            name: "gangsta",
            songsOne : "ayay",
            timesPlayed : 15,
        }
    ];

    findName = function(selectedPlaylist){
        for(var i = 0; i < playlists.length; i++){
            if (playlists[i].name === selectedPlaylist)
            return playlists[i];
        }
        return null;
    };

    database.ref().on("value", function(snapshot) {

        if (snapshot.child("globalCounter").exists() && snapshot.child("topPlaylist").exists()) {

            globalCounter = snapshot.val().globalCounter;
            topPlaylist = snapshot.val().topPlaylist;

            console.log(snapshot.val().globalCounter);
            console.log(snapshot.val().topPlaylist);
        }
        else{
            console.log(globalCounter);
            console.log(topPlaylist);
        }
    });

//Will read buttons data-attribute of name and use it to know which playlist has been selected to play 

$(document).on('click', '.emojiMood', function() {

    selectedPlaylist = $(this).data('name');
    console.log(selectedPlaylist);

    currentPlaylist = findName(selectedPlaylist);
    console.log(currentPlaylist);

    currentPlaylist.timesPlayed ++;

    var playlistCount = currentPlaylist.timesPlayed; 

    if (playlistCount > globalCounter){

        alert("new favorite mood");

        database.ref().set({
            globalCounter: playlistCount,
            topPlaylist : currentPlaylist
        });
    }

    event.preventDefault();
});
