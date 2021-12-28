let songIndex = 0;
let audioElement = new Audio('Fav/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgessBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));   

let songs = [
    {songName: "Teri Khair Mangadi", filePath: "Fav/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Aachi Lagti Ho", filePath: "Fav/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Tune Jo Na Kaha", filePath: "Fav/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Khoobseerat", filePath: "Fav/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Tujse Naraj Nhi Zindgi", filePath: "Fav/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Chitta", filePath: "Fav/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Dil Mera Chahe Jab Bhi Tu Ayega", filePath: "Fav/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Jashan-E-Bahara", filePath: "Fav/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Ranjha", filePath: "Fav/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Tera Chehra", filePath: "Fav/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){ 
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{ 
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        Index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `Fav/${Index+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[Index].songName;
        gif.style.opacity = 1;
        
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(Index>=9){
        Index = 0;
    }
    else{
        Index += 1;
    }
    audioElement.src = `Fav/${Index+1}.mp3`;
    masterSongName.innerText = songs[Index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;

})

document.getElementById("previous").addEventListener('click', ()=>{
    if(Index<=0){
        Index = 0;
    }
    else{
        Index -= 1;
    }
    audioElement.src = `Fav/${Index+1}.mp3`;
    masterSongName.innerText = songs[Index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 0;
})


