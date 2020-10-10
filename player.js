class Player{
    constructor(){

    }


     getcount(){
         var gc = db.ref('playerCount')
         gc.on("value",function (data){
             playerCount=data.val()
         })

    }
    updateCount(count){
        db.ref('/').update({
            playerCount:count
        })
    }
    update(name){
        var pc = "player" + playerCount 
        db.ref(pc).set({name:name})
    }
}
