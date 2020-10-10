var db, gameState=0, playerCount, form, player, game



function setup () {
  db = firebase.database()
  createCanvas (800,800);
  g = new Game()
  g.getState()
  g.start()
}

function draw() {

}