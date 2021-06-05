class MediaPlayer{
    constructor(config){
        this.media=config
        this.plugins=config.plugins || []  
    }
    togglePlay(){
        if (this.media.paused) {
            this.media.play();
          } else {
            this.media.pause();
          }
    };
    initPlugins(){
        this.plugins.forEach(plugin => {
            plugin.run(this)
            
        });
    }
    mute(){
        this.media.muted=true
    }
}

export default MediaPlayer