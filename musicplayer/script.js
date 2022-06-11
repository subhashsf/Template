const image=document.querySelector('img');
const title=document.getElementById('title');
const artist=document.getElementById('artist');
const music =document.querySelector('audio');
const curTime = document.getElementById('current-time');
const audioDuration = document.getElementById('duration');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const prevBtn =document.getElementById('prev');
const playBtn =document.getElementById('play');
const nextBtn =document.getElementById('next');
let songIndex = 0;
// console.log(music,prevBtn,playBtn,nextBtn);

let isPlaying = false;

function playSong(){
    isPlaying=true;
    playBtn.classList.replace('fa-play','fa-pause');
    playBtn.setAttribute('title','pause');
    music.play();
}

function pauseSong(){
    isPlaying=false;
    playBtn.classList.replace('fa-pause','fa-play');
    playBtn.setAttribute('title','play');
    music.pause();
}

playBtn.addEventListener('click',() => {
    (isPlaying?pauseSong():playSong())});


const songs =[
    {
        name:'jacinto-1',
        displayName:'Electric Chill Machine',
        artist:'JacintoDesign',
    },
    {
        name:'jacinto-2',
        displayName:'Seven Nation Army(Remix)',
        artist:'Jacinto Design',
    },
    {
        name:'jacinto-3',
        displayName:'Good night Disco Queem',
        artist:'Jacinto Design',
    },
    {
        name:'metric-1',
        displayName:'Front Row (Remix)',
        artist:'Metric/JacintoDesign',
    },

];

function loadsong(song){
    title.textContent=song.displayName;
    artist.textContent=song.artist;
    music.src=`music/${song.name}.mp3`;
    image.src= `img/${song.name}.jpg`;
}

function nextSong(){
    
    // console.log(songIndex);
    if(songIndex==3){
        songIndex=0;
        loadsong(songs[songIndex]);
    }
    else{
        songIndex=songIndex+1;
        loadsong(songs[songIndex]);
    }
    playSong();
}
function prevSong(){
    if(songIndex==0){
        songIndex=3;;
        loadsong(songs[songIndex]);
    }
    else{
        songIndex=songIndex-1;
        loadsong(songs[songIndex]);
    }
    playSong();
}

function updateProgressBar(e){
    let {currentTime,duration} = e.srcElement;
    // audioDuration.textContent = duration;
    // curTime.textContent= currentTime;
    let progressPer = currentTime/duration * 100;
    progress.style.width=`${progressPer}%`;
    // let curTimeValue = Math.floor(currentTime);
    // let durationValue =Math.floor(duration);
    let curTimeMin = Math.floor(currentTime/60);
    let durationMin = Math.floor(duration/60);
    let curTimeSec = Math.floor(currentTime%60);
    let durationSec = Math.floor(duration%60);
    if(curTimeSec<10){
        curTimeSec=`0${curTimeSec}`;
    }
    if(durationSec<10){
        durationSec =`0${durationSec}`;
    }
    if(durationSec){
        audioDuration.textContent = `${durationMin}:${durationSec}`;
        curTime.textContent= `${curTimeMin}:${curTimeSec}`;
    }
}

function setProgressBar(e){
    const width = this.clientWidth;
    const clicX = e.offsetX;
    const {duration}= music;
    // console.log(clicX/width);
    // console.log(clicX/width*duration);
    let newcurtime = clicX/width*duration;
    music.currentTime = newcurtime;
    
}

prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);
music.addEventListener('ended',nextSong);
music.addEventListener('timeupdate',updateProgressBar);
progressContainer.addEventListener('click',setProgressBar);