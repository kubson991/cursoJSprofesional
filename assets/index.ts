import 'regenerator-runtime/runtime'
import MediaPlayer from "./Mediaplayer"
import AutoPlay from "../plugins/AutoPlay"
import AutoPause from "../plugins/AutoPause"
import Ads from '../plugins/ads'
const video = document.querySelector('video');
const player = new MediaPlayer(video,[new AutoPlay(),new AutoPause(),new Ads()]) 
const start_button:HTMLElement = document.querySelector('#playButton');
const  mute_button:HTMLElement = document.querySelector('#muteButton');
start_button.onclick=() => player.togglePlay();
mute_button.onclick=()=>player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js').catch(error=>{
    console.log(error.message)    
    })
}