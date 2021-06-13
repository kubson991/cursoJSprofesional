import { relative } from "path/posix"

class MediaPlayer{

    media:HTMLMediaElement
    plugins:any[]
    container:HTMLElement

    constructor(config,plugins){
        this.media=config
        this.plugins=plugins || []  
        this.initPlayer()
        this.initPlugins()
    }

    initPlayer(){
        this.container =document.createElement('div')
        this.container.style.position='relative'
        this.media.parentNode.insertBefore(this.container,this.media)
        this.container.appendChild(this.media)
    }

    togglePlay(){
        if (this.media.paused) {
            this.media.play();
          } else {
            this.media.pause();
          }
          
    };
    toggleMute(){
        this.media.muted ? 
            this.media.muted=false:
            this.media.muted=true;
           
    };
    private initPlugins(){
        this.plugins.forEach(plugin => {
            plugin.run(this)
    
        });
    }
    mute(){
        this.media.muted=true
    }
    play(){
        this.media.play()
    }
    pause(){
        this.media.pause()
    }
}
export default MediaPlayer