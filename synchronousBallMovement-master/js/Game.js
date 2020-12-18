class Game{
constructor(){
}
getState(){
var gameStateREF=database.ref('gameState');
gameStateREF.on("value", function(data){
gameState=data.val();
})
}
update(state){
    database.ref('/').update({

        gameState:state
    })
}
async start(){
    if (gameState===0){
        player=new Player();
        var playerCountREF=await database.ref('playerCount').once("value")
        if(playerCountREF.exists()){
            playerCount=playerCountREF.val();
            player.getCount();
                }
        form = new Form();
        form.display();
    }
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
    cars=[car1,car2,car3,car4]
}
play(){
    form.hide()
    text("GAME IS STARTING",500,200)
    Player.getPlayerInfo()
    if(allPlayer!==undefined){
        var index=0
        var x=0
        var y
//var displayP=150
for (var plr in allPlayer){
    index=index+1
    x=x+200
    y=displayHeight-allPlayer[plr].distance
    cars[index-1].x=x
    cars[index-1].y=y
    if(index=player.index){
        cars[index-1].shapeColor="red"
        camera.position.x=displayWidth/2
        camera.position.y=cars[index-1].y
    }
    

//displayP+=20
//text(allPlayer[plr].name+" "+allPlayer[plr].distance,180,displayP)
    }
}
if(keyIsDown(UP_ARROW)&&player.index!==null){
player.distance+=20;
player.update()
}
drawSprites();
}
}