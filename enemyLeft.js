class enemyLeft {
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
 
let testTimer1 =0
let test1 = setInterval(function(){
    testTimer1 ++
    if(testTimer1 <=  1){
    enemyLeft1 = new enemyLeft(0,Math.random() * 700,10,10)
    enemyLeft1.draw()
}
    enemyLeft1.x +=100
    enemyLeft1.draw()
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyLeft1.x-100-1,enemyLeft1.y-1,12,12)
    enemyLeft1.draw();
    let collisionX = (enemyLeft1.x+enemyLeft1.width) -dino.x +100
    let collisionY = (enemyLeft1.y + enemyLeft1.height) - dino.y 
    if (((0 < collisionX) && (collisionX <dino.width+enemyLeft1.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyLeft1.height))){
    alert('Game Over')     
}   
},600)

let testTimer2 =0
let test2 = setInterval(function(){
    testTimer2 ++
    if(testTimer2 ==  3){
    enemyLeft2 = new enemyLeft(0,Math.random() * 700,10,10)
    enemyLeft2.draw()
    }
    else { 
        enemyLeft2.x +=100
        enemyLeft2.draw()
        ctx.fillStyle = 'bisque'
        ctx.fillRect(enemyLeft2.x-100-1,enemyLeft2.y-1,12,12)
        enemyLeft2.draw();
        let collisionX = (enemyLeft2.x+enemyLeft2.width) -dino.x +100
        let collisionY = (enemyLeft2.y + enemyLeft2.height) - dino.y 
        if (((0 < collisionX) && (collisionX <dino.width+enemyLeft2.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyLeft2.height))){
        alert('Game Over') }
}
    

},600)

let testTimer3 =0
let test3 = setInterval(function(){
    testTimer3 ++
    if(testTimer3 ==  3){
    enemyLeft3 = new enemyLeft(0,Math.random() * 700,10,10)
    enemyLeft3.draw()
    }
    else { 
        enemyLeft3.x +=100
        enemyLeft3.draw()
        ctx.fillStyle = 'bisque'
        ctx.fillRect(enemyLeft3.x-100-1,enemyLeft3.y-1,12,12)
        enemyLeft3.draw();
        let collisionX = (enemyLeft2.x+enemyLeft3.width) -dino.x +100
        let collisionY = (enemyLeft2.y + enemyLeft3.height) - dino.y 
        if (((0 < collisionX) && (collisionX <dino.width+enemyLeft3.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyLeft3.height))){
        alert('Game Over') }
}
    

},600)

let testTimer4 =0
let test4 = setInterval(function(){
    testTimer4 ++
    if(testTimer4 ==  4){
    enemyLeft4 = new enemyLeft(0,Math.random() * 700,10,10)
    enemyLeft4.draw()
    }
    else { 
        enemyLeft4.x +=100
        enemyLeft4.draw()
        ctx.fillStyle = 'bisque'
        ctx.fillRect(enemyLeft4.x-100-1,enemyLeft4.y-1,12,12)
        enemyLeft4.draw();
        let collisionX = (enemyLeft4.x+enemyLeft4.width) -dino.x +100
        let collisionY = (enemyLeft4.y + enemyLeft4.height) - dino.y 
        if (((0 < collisionX) && (collisionX <dino.width+enemyLeft4.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyLeft4.height))){
        alert('Game Over') }
}
    

},600)
let testTimer5 =0
let test5 = setInterval(function(){
    testTimer5 ++
    if(testTimer5 ==  4){
    enemyLeft5 = new enemyLeft(0,Math.random() * 700,10,10)
    enemyLeft5.draw()
    }
    else { 
        enemyLeft5.x +=100
        enemyLeft5.draw()
        ctx.fillStyle = 'bisque'
        ctx.fillRect(enemyLeft5.x-100-1,enemyLeft5.y-1,12,12)
        enemyLeft5.draw();
        let collisionX = (enemyLeft5.x+enemyLeft5.width) -dino.x +100
        let collisionY = (enemyLeft5.y + enemyLeft5.height) - dino.y 
        if (((0 < collisionX) && (collisionX <dino.width+enemyLeft5.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyLeft5.height))){
        alert('Game Over') }
}
    

},600)

let testTimer6 =0
let test6 = setInterval(function(){
    testTimer6 ++
    if(testTimer6 ==  4){
    enemyLeft6 = new enemyLeft(0,Math.random() * 700,10,10)
    enemyLeft6.draw()
    }
    else { 
        enemyLeft6.x +=100
        enemyLeft6.draw()
        ctx.fillStyle = 'bisque'
        ctx.fillRect(enemyLeft6.x-100-1,enemyLeft6.y-1,12,12)
        enemyLeft6.draw();
        let collisionX = (enemyLeft6.x+enemyLeft6.width) -dino.x +100
        let collisionY = (enemyLeft6.y + enemyLeft6.height) - dino.y 
        if (((0 < collisionX) && (collisionX <dino.width+enemyLeft6.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyLeft6.height))){
        alert('Game Over') }
}
    

},600)
