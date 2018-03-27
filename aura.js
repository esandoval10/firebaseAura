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

  function signUp(){

    var userEmail = document.getElementById("email_sign").value;
    var userPass = document.getElementById("password_sign").value;
  
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      console.log("Error : " + errorMessage);
    });
  };
  
  function logout(){
    firebase.auth().signOut();
  };
  

  var database = firebase.database();
  
//   Initial Values
  var globalCounter = 11,
    topPlaylist = "gangsta",
    selectedPlaylist = "gangsta",
    currentPlaylist = null;
    playlistId = ""

//  Song Playlists
    playlists = [
        happy = {
            name : "happy",
            id : "PLt1JKPbhDoObzEaQuyp-cml5C1ajeSyPp",
            timesPlayed : 0,
            
        },
        sad = {
            name : "sad",
            id : "PLt1JKPbhDoObZOyTTis5HU3nvFg5kW9Cr",
            timesPlayed : 0,
        },
        angry = {
            name : "angry",
            id : "PLt1JKPbhDoOaM04RFYG7TODvW1zaTUEnZ",
            timesPlayed : 0,
        },
        love = {
            name : "love",
            id : "PLt1JKPbhDoObeWgrfkeV3Yqe8TL93dpU7",
            timesPlayed : 0,
        },
        fine = {
            name : "fine",
            id : "PLt1JKPbhDoObdw0UK9I8ZOnSEFSTIk5fz",
            timesPlayed : 0,
        },
        sleepy = {
            name : "sleepy",
            id : "PLt1JKPbhDoObCF3_2XLM013utylmXmPa8",
            timesPlayed : 0,
        },
        motivated = {
            name : "motivated",
            id : "PLt1JKPbhDoOZnQ_tKH1UQtid7sbUBgy3S",
            timesPlayed : 0,
        },
        depressed = {
            name : "depressed",
            id : "PLt1JKPbhDoObXSMz7lH9Itj3yFAWCz7xd",
            timesPlayed : 0,
        },
        femme = {
            name : "femme",
            id : "PLt1JKPbhDoOaL_FhPnCacLDQlG7F5YxJf",
            timesPlayed : 0,
        },
        party = {
            name : "party",
            id : "PLt1JKPbhDoOZwp-LuVeLlkKZRywx2AwCA",
            timesPlayed : 0,
        },
        beyonce = {
            name : "beyonce",
            id : "PLt1JKPbhDoObo1zpGwalf_pVkn0pDf6P0",
            timesPlayed : 0,
        },
        intellectual = {
            name : "intellectual",
            id : "PLt1JKPbhDoObaf_uzak9s_ymjaHSuftZa",
            timesPlayed : 0,
        },
        calm = {
            name : "calm",
            id : "PLt1JKPbhDoOaUmmNMQzgo3cbwtcsBCKxf",
            timesPlayed : 0,
        },
        artistic = {
            name : "artistic",
            id : "PLt1JKPbhDoOZMvLUZB0wuxynWe38Mo4gb",
            timesPlayed : 0,
        },
    ];
    console.log(playlists.length);

    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
   
   var player;
   
    function onYouTubeIframeAPIReady() {
    }
    function createPlayer(){
      player = new YT.Player('player', 
      {
        height: '390',
        width: '640',
        playerVars: 
        {
          listType:'playlist',
          list: playlistId
        }
      });
   }
   // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      event.target.playVideo();
    }

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

    playlistId = currentPlaylist.id;
    console.log(playlistId);
    

    createPlayer();

    currentPlaylist.timesPlayed ++;

    var playlistCount = currentPlaylist.timesPlayed; 

    if (playlistCount > globalCounter){

        alert("new favorite mood");

        database.ref().set({
            globalCounter: playlistCount,
            topPlaylist : currentPlaylist
        });
    }
// OR HERE
    event.preventDefault();
});


