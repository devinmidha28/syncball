class Game {
    constructor() {

    }
    getState() {
        var gs = db.ref('gameState')
        gs.on("value", function (data){
            gameState=data.val()
        })
    }
    update(state){
        db.ref('/').update({
            gameState:state
        }
        );
    }
    start(){
        if (gameState==0){
            player = new Player();
            player.getcount()
            form = new Form();
            form.display();
        }
    }
}                                                                 