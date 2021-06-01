class MediaPlayer{
    constructor(config){
        this.media=config
    }
    togglePlay(){
        if (this.media.paused) {
            this.media.play();
          } else {
            this.media.pause();
          }
    };
}
const video = document.querySelector('video');
const player = new MediaPlayer(video) 
const button = document.querySelector('button');
button.onclick = () => player.togglePlay();