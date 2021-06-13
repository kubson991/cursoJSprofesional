import MediaPlayer from "../assets/Mediaplayer"

class AutoPlay{
    constructor(){}
    run (player:MediaPlayer){
        player.mute()
        player.togglePlay()
 
    }
}
export default AutoPlay