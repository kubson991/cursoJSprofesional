import MediaPlayer from "./Mediaplayer.js"
import AutoPlay from "../plugins/AutoPlay.js"
import AutoPause from "../plugins/AutoPause.js"
const video = document.querySelector('video');
const player = new MediaPlayer(video,[new AutoPlay(),new AutoPause()]) 
const start_button = document.querySelector('#playButton');
const  mute_button = document.querySelector('#muteButton');
start_button.onclick = () => player.togglePlay();
mute_button.onclick=()=>player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js').catch(error=>{
    console.log(error.message)    
    })
}