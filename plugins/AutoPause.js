class AutoPause{
    constructor(){
        this.pausedByTab=false
        this.threshold=0.25
        this.handleIntersection =this.handleIntersection.bind(this)
        this.handleVisibilityChange=this.handleVisibilityChange.bind(this)
    }
    run(player){
        this.player=player
        const observer = new IntersectionObserver(this.handleIntersection,{threshold:0.25})
        observer.observe(this.player.media)
        document.addEventListener(`visibilitychange`,this.handleVisibilityChange)
    }
    handleIntersection(entries){
        const entry=entries[0]
        const isVisible=entry.intersectionRatio>=this.threshold
        if(isVisible){
            this.player.play()    
        }else{
             
            this.player.pause()
        }
    }
    handleVisibilityChange(){
        
        const isVisible=document.visibilityState==='visible'
        if ( !isVisible && !this.player.media.paused ) {
            this.player.pause();  
            this.pausedByTab = true;
        }
        if ( isVisible && this.pausedByTab ) {
            this.player.play();
            this.pausedByTab = false;
        }
    }
}

export default AutoPause 