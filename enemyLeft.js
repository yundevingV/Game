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
    if(testTimer1 %10 == 1){
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
},500)

let testTimer2 =0
let test2 = setInterval(function(){
    testTimer2 ++
    if(testTimer2 %10 ==2){
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
    

},500)

let testTimer3 =0
let test3 = setInterval(function(){
    testTimer3 ++
    if(testTimer3 %10 ==2){
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
    

},500)

let testTimer4 =0
let test4 = setInterval(function(){
    testTimer4 ++
    if(testTimer4 %10 ==5){
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
    

},500)
let testTimer5 =0
let test5 = setInterval(function(){
    testTimer5 ++
    if(testTimer5 %10 ==5){
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
    

},500)

let testTimer6 =0
let test6 = setInterval(function(){
    testTimer6 ++
    if(testTimer6 %10 ==5){
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

let testTimer7 =0
let test7 = setInterval(function(){
    testTimer7 ++
    if(testTimer7 %10 ==7){
    enemyLeft7 = new enemyLeft(0,Math.random() * 700,10,10)
    enemyLeft7.draw()
    }
    else { 
        r = Math.random()*50

        enemyLeft7.x +=111
        enemyLeft7.draw()
        ctx.fillStyle = 'bisque'
        ctx.fillRect(enemyLeft7.x-111-1,enemyLeft7.y-1,12,12)
        enemyLeft6.draw();
        let collisionX = (enemyLeft7.x+enemyLeft7.width) -dino.x -111
        let collisionY = (enemyLeft7.y + enemyLeft7.height) - dino.y 
        if (((0 < collisionX) && (collisionX <dino.width+enemyLeft7.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyLeft7.height))){
        alert('Game Over') }
}
    

},300)

let testTimer8 =0
let test8 = setInterval(function(){
    testTimer8 ++
    if(testTimer6 %10 ==7){
    enemyLeft8 = new enemyLeft(0,Math.random() * 700,10,10)
    enemyLeft8.draw()
    }
    else { 
        r = Math.random()*50

        enemyLeft8.x +=95
        enemyLeft8.draw()
        ctx.fillStyle = 'bisque'
        ctx.fillRect(enemyLeft8.x-95-1,enemyLeft8.y-1,12,12)
        enemyLeft6.draw();
        let collisionX = (enemyLeft6.x+enemyLeft8.width) -dino.x -95
        let collisionY = (enemyLeft6.y + enemyLeft8.height) - dino.y 
        if (((0 < collisionX) && (collisionX <dino.width+enemyLeft8.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyLeft8.height))){
        alert('Game Over') }
}
    

},300)

let testTimer9 =0
let test9 = setInterval(function(){
    testTimer9 ++
    if(testTimer9 %10 ==7){
    enemyLeft9 = new enemyLeft(0,Math.random() * 700,10,10)
    enemyLeft9.draw()
    }
    else { 
        

        enemyLeft9.x +=77
        enemyLeft9.draw()
        ctx.fillStyle = 'bisque'
        ctx.fillRect(enemyLeft9.x-77-1,enemyLeft9.y-1,12,12)
        enemyLeft9.draw();
        let collisionX = (enemyLeft9.x+enemyLeft9.width) -dino.x -77
        let collisionY = (enemyLeft9.y + enemyLeft9.height) - dino.y 
        if (((0 < collisionX) && (collisionX <dino.width+enemyLeft9.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyLeft9.height))){
        alert('Game Over') }
}
    

},300)

let testTimer10 =0
let test10 = setInterval(function(){
    testTimer10 ++
    if(testTimer10 %10 ==7){
    enemyLeft10 = new enemyLeft(0,Math.random() * 700,10,10)
    enemyLeft10.draw()
    }
    else { 
        r = Math.random()*50
        enemyLeft10.x +=80
        enemyLeft10.draw()
        ctx.fillStyle = 'bisque'
        ctx.fillRect(enemyLeft10.x-80-1,enemyLeft10.y-1,12,12)
        enemyLeft10.draw();
        let collisionX = (enemyLeft10.x+enemyLeft10.width) -dino.x -80
        let collisionY = (enemyLeft10.y + enemyLeft10.height) - dino.y 
        if (((0 < collisionX) && (collisionX <dino.width+enemyLeft10.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyLeft10.height))){
        alert('Game Over') }
}
    

},300   )