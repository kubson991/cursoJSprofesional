class MediaPlayer{
    constructor(config,plugins){
        this.media=config
        this.plugins=plugins || []  
        this.initPlugins()
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
    initPlugins(){
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