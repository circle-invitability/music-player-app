
 
 
 
 
 
 
 
 
 let progress = document.getElementById("progress");
 let song = document.getElementById("song");
 let ctrplay = document.getElementById("ctrplay");

 song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

 }

 function playpause(){
    if(ctrplay.classList.contains("fa-pause")){
        song.pause();
        ctrplay.classList.remove("fa-pause");
        ctrplay.classList.add("fa-google-play");
        
    }
    else{
        song.play();
        ctrplay.classList.add("fa-pause");
        ctrplay.classList.remove("fa-google-play");
        
    }
 }
 if (song.play()){
    setInterval(()=>(
        progress.value = song.currentTime)
    ,500)
 }