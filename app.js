document.addEventListener("DOMContentLoaded",function() {
    let songlist = document.querySelectorAll("#song-list li");
    let audio = document.getElementById("audio");
    let currentsong  = document.getElementById("current-song");

    songlist.forEach(function(songitem){
        songitem.addEventListener("click", function(){
            let song = songitem.getAttribute("data-song")
            audio.src = song
            audio.play()
            currentsong.textContent = songitem.textContent
        })
    })

})