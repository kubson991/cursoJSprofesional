import MediaPlayer from "./Mediaplayer.js"
import AutoPlay from "../plugins/AutoPlay.js"
const video = document.querySelector('video');
const player = new MediaPlayer(video,[new AutoPlay()]) 
const button = document.querySelector('button');
button.onclick = () => player.togglePlay();
 