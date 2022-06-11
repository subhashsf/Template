const image=document.querySelector('img');
const title=document.getElementById('title');
const artist=document.getElementById('artist');
const music =document.querySelector('audio');
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
    console.log(songIndex);
    if(songIndex==3){
        songIndex=0;;
        loadsong(songs[songIndex]);
    }
    else{
        songIndex=songIndex+1;
        loadsong(songs[songIndex]);
    }
}
function prevSong(){
    console.log(songIndex);
    if(songIndex==0){
        songIndex=3;;
        loadsong(songs[songIndex]);
    }
    else{
        songIndex=songIndex-1;
        loadsong(songs[songIndex]);
    }
}

prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);


