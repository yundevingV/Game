
/* 1 2 3 4 5 6 7 동시에 n*100 x좌표에 생성 */
let bT1 = 0

//시간.

let enemyBottom1 = {
    x : 100,
    y : 700,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
//객체 생성

let bottom1= setInterval(function (){
    r = Math.random()*50
    enemyBottom1.y -= r
    enemyBottom1.x += r
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyBottom1.x-r-1,enemyBottom1.y+r+1,20,20)
    enemyBottom1.draw();

let collisionX = (enemyBottom1.x+enemyBottom1.width) -dino.x -r
let collisionY = (enemyBottom1.y + enemyBottom1.height) - dino.y +r
if (((0 < collisionX) && (collisionX <dino.width+enemyBottom1.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyBottom1.height))){
alert('Game Over')     
}

},200)