var canvas, database;
//var position;
var gameState=0
var playerCount;
var form, player,game
var allPlayer
var cars 
var car1
var car2
var car3
var car4
var distance=0
function setup(){
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game=new Game()
  game.getState()
  game.start();
}

function draw(){
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear()
    game.play();
  }
}
