class enemyRight {
    constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}
    draw() {
            ctx.fillStyle ='red'; 
            ctx.fillRect(this.x,this.y,this.width,this.height);
            
        }
}

let rTimer1 =0
let r1 = setInterval(function(){
    rTimer1 ++
    if(rTimer1 % 20 == 1){
    enemyRight1 = new enemyRight(700,Math.random() * 700,10,10)
    enemyRight1.draw()
}
    enemyRight1.x -=100
    enemyRight1.draw()
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyRight1.x+100-1,enemyRight1.y-1,12,12)
    enemyRight1.draw();
    let collisionX = (enemyRight1.x+enemyRight1.width) -dino.x +100
    let collisionY = (enemyRight1.y + enemyRight1.height) - dino.y 
    if (((0 < collisionX) && (collisionX <dino.width+enemyRight1.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyRight1.height))){
    alert('Game Over')     
}   
},600)

let rTimer2 =0
let r2 = setInterval(function(){
    rTimer2 ++
    if(rTimer2 % 20 == 3){
    enemyRight2 = new enemyRight(700,Math.random() * 700,10,10)
    enemyRight2.draw()
}
    enemyRight2.x -=100
    enemyRight2.draw()
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyRight2.x+100-1,enemyRight2.y-1,12,12)
    enemyRight2.draw();
    let collisionX = (enemyRight2.x+enemyRight2.width) -dino.x +100
    let collisionY = (enemyRight2.y + enemyRight2.height) - dino.y 
    if (((0 < collisionX) && (collisionX <dino.width+enemyRight2.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyRight2.height))){
    alert('Game Over')     
}   
},600)

let rTimer3 =0
let r3 = setInterval(function(){
    rTimer3 ++
    if(rTimer3 % 20 == 7){
    enemyRight3 = new enemyRight(700,Math.random() * 700,10,10)
    enemyRight3.draw()
}
    enemyRight3.x -=100
    enemyRight3.draw()
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyRight3.x+100-1,enemyRight3.y-1,12,12)
    enemyRight2.draw();
    let collisionX = (enemyRight3.x+enemyRight3.width) -dino.x +100
    let collisionY = (enemyRight3.y + enemyRight3.height) - dino.y 
    if (((0 < collisionX) && (collisionX <dino.width+enemyRight3.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyRight3.height))){
    alert('Game Over')     
}   
},600)

let rTimer4 =0
let r4 = setInterval(function(){
    rTimer4 ++
    if(rTimer4 % 20 == 8){
    enemyRight4 = new enemyRight(700,Math.random() * 700,10,10)
    enemyRight4.draw()
}
    enemyRight4.x -=100
    enemyRight4.draw()
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyRight4.x+100-1,enemyRight4.y-1,12,12)
    enemyRight4.draw();
    let collisionX = (enemyRight4.x+enemyRight4.width) -dino.x +100
    let collisionY = (enemyRight4.y + enemyRight4.height) - dino.y 
    if (((0 < collisionX) && (collisionX <dino.width+enemyRight4.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyRight4.height))){
    alert('Game Over')     
}   
},600)

let rTimer5 =0
let r5 = setInterval(function(){
    rTimer5 ++
    if(rTimer5 % 20 == 7){
    enemyRight5 = new enemyRight(700,Math.random() * 700,10,10)
    enemyRight5.draw()
}
    enemyRight5.x -=100
    enemyRight5.draw()
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyRight5.x+100-1,enemyRight5.y-1,12,12)
    enemyRight5.draw();
    let collisionX = (enemyRight5.x+enemyRight5.width) -dino.x +100
    let collisionY = (enemyRight5.y + enemyRight5.height) - dino.y 
    if (((0 < collisionX) && (collisionX <dino.width+enemyRight5.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyRight5.height))){
    alert('Game Over')     
}   
},600)  

let rTimer6 =0
let r6 = setInterval(function(){
    rTimer6 ++
    if(rTimer6 % 20 == 8){
    enemyRight6 = new enemyRight(700,Math.random() * 700,10,10)
    enemyRight6.draw()
}
    enemyRight6.x -=100
    enemyRight6.draw()
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyRight6.x+100-1,enemyRight6.y-1,12,12)
    enemyRight6.draw();
    let collisionX = (enemyRight6.x+enemyRight6.width) -dino.x +100
    let collisionY = (enemyRight6.y + enemyRight6.height) - dino.y 
    if (((0 < collisionX) && (collisionX <dino.width+enemyRight6.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyRight6.height))){
    alert('Game Over')     
}   
},600)