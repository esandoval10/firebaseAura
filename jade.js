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


var happy = [],  //PLt1JKPbhDoObzEaQuyp-cml5C1ajeSyPp
   angry = [], //PLt1JKPbhDoOaM04RFYG7TODvW1zaTUEnZ
   love  = [], // PLt1JKPbhDoObeWgrfkeV3Yqe8TL93dpU7
   fine  = [], //PLt1JKPbhDoObdw0UK9I8ZOnSEFSTIk5fz
   sleepy = [], //PLt1JKPbhDoObCF3_2XLM013utylmXmPa8
   motivated = [], //PLt1JKPbhDoOZnQ_tKH1UQtid7sbUBgy3S
   depressed = [], //PLt1JKPbhDoObXSMz7lH9Itj3yFAWCz7xd
   femme  = [], //PLt1JKPbhDoOaL_FhPnCacLDQlG7F5YxJf
   party  = [], //PLt1JKPbhDoOZwp-LuVeLlkKZRywx2AwCA
   beyonce  = [], //PLt1JKPbhDoObo1zpGwalf_pVkn0pDf6P0
   intellectual  = [], //PLt1JKPbhDoObaf_uzak9s_ymjaHSuftZa
   heartbreak  = [], //PLt1JKPbhDoOZmWN6FHUm5Xx2_UCSlXLeX
   calm  = [], //PLt1JKPbhDoOaUmmNMQzgo3cbwtcsBCKxf
