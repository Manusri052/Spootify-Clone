console.log("Welcome To JS")
let songIndex=0;
let masterPlay=document.getElementById("masterPlay")
let myProgressBar=document.getElementById("progressbar")
let songItems=Array.from(document.getElementsByClassName("SongItems"));
let songs=[
    {songName:"Kabira-Ae Jawani Hey Diwani",filepath:"songs/1.mp3",duration:"4:32"},
    {songName:"love- Student Of The  Year",filepath:"songs/2.mp3",duration:"4:18"},
    {songName:"Khuda janee-kk",filepath:"songs/3.mp3",duration:"5:32"},
    {songName:"Paniyon Sa-Satyameva Jeyathe",filepath:"songs/4.mp3",duration:"3:56"},
    {songName:"Rait-Zara-si-Atrangi Re",filepath:"songs/5.mp3",duration:"4:51"},
]
songItems.forEach((element,i)=>{
    element.getElementsByClassName("text")[0].innerText=songs[i].duration;
    element.getElementsByClassName("songName")[0].innerText =songs[i].songName;
})
let audioElement=new Audio(`songs/${songIndex+1}.mp3`);
let indice=-1;
masterPlay.addEventListener('click',()=>{
 if(audioElement.paused || audioElement.currentTime<=0)
 {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    let element=document.getElementById(songIndex);
    console.log(element);
    element.classList.remove('fa-play-circle');
    element.classList.add('fa-pause-circle');
    indice=songIndex;

}
// else if(audioElement.play() &&songIndex!=indice)
// {
//     let element=document.getElementById(indice);
//     console.log(element);
//     element.classList.remove('fa-pause-circle');
//     element.classList.add('fa-play-circle');
//     indice=songIndex;

// }
 else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    let element=document.getElementById(songIndex);
    console.log(element);
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');

 }
})
 audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value= progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
           element.classList.remove('fa-pause-circle');
           element.classList.add('fa-play-circle');
    
    })
}
let songInd;
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       //makeAllplays();
       if(audioElement.paused || audioElement.currentTime<=0 ){
       // makeAllplays();
       songIndex=parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       audioElement.src=`songs/${songIndex+1}.mp3`;
       let ind=songIndex+1;
       audioElement.currentTime=0;
       audioElement.play();
     
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');

    }
    else{
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        audioElement.pause();
       masterPlay.classList.remove('fa-pause-circle');
       masterPlay.classList.add('fa-play-circle');
    }
})
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4)
    {
        songIndex=0;
    }
    else
    {
        songIndex=songIndex+1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=4;
    }
    else
    {
        songIndex=songIndex-1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
})