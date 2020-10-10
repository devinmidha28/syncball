class Form {
    constructor(){

    }


    display(){
        var title = createElement ('h4');
        title.html("Devin's Multiplayer Game");
        title.position(200, 200);
        var input = createInput("Devin")
        input.position (175,500);
        var button = createButton("PRESS ME")
        button.position(700,200);
        var greeting = createElement ('h4');
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var sun = input.value();
            playerCount=playerCount+1;
            player.update(sun);
            player.update(playerCount);
            greeting.html("WAITING FOR PLAYERS");
            greeting.position (500,500);
        })

    }
}