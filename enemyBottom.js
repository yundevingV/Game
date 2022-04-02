
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
    ctx.fillRect(enemyBottom1.x-r-1,enemyBottom1.y+r-1,12,12)
    enemyBottom1.draw();

let collisionX = (enemyBottom1.x+enemyBottom1.width) -dino.x -r
let collisionY = (enemyBottom1.y + enemyBottom1.height) - dino.y +r
if (((0 < collisionX) && (collisionX <dino.width+enemyBottom1.width )) && ((0 < collisionY) && (collisionY <dino.height + enemyBottom1.height))){
alert('Game Over')     
}

},100)

let bT2 = 0

//시간.

let enemyBottom2 = {
    x : 200,
    y : 700,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
//객체 생성

let bottom2= setInterval(function (){
    r = Math.random()*50
    enemyBottom2.y -= r
    enemyBottom2.x += r
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyBottom2.x-r-1,enemyBottom2.y+r-1,12,12)
    enemyBottom2.draw();

let collisionX = (enemyBottom2.x+enemyBottom2.width) -dino.x -r
let collisionY = (enemyBottom2.y + enemyBottom2.height) - dino.y +r
if (((0 < collisionX) && (collisionX <dino.width+enemyBottom2.width ))
&& ((0 < collisionY) && (collisionY <dino.height + enemyBottom2.height))){
alert('Game Over')     
}

},100)

let bT3 = 0

//시간.

let enemyBottom3 = {
    x : 300,
    y : 700,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
//객체 생성

let bottom3= setInterval(function (){
    r = Math.random()*50
    enemyBottom3.y -= r
    enemyBottom3.x += r
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyBottom3.x-r-1,enemyBottom3.y+r-1,12,12)
    enemyBottom3.draw();

let collisionX = (enemyBottom3.x+enemyBottom3.width) -dino.x -r
let collisionY = (enemyBottom3.y + enemyBottom3.height) - dino.y +r
if (((0 < collisionX) && (collisionX <dino.width+enemyBottom3.width ))
&& ((0 < collisionY) && (collisionY <dino.height + enemyBottom3.height))){
alert('Game Over')     
}

},100)

let bT4 = 0

//시간.

let enemyBottom4 = {
    x : 400,
    y : 700,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
//객체 생성

let bottom4= setInterval(function (){
    r = Math.random()*50
    enemyBottom4.y -= r
    enemyBottom4.x += 0
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyBottom4.x-0-1,enemyBottom4.y+r-1,12,12)
    enemyBottom4.draw();

let collisionX = (enemyBottom4.x+enemyBottom4.width) -dino.x -r
let collisionY = (enemyBottom4.y + enemyBottom4.height) - dino.y +r
if (((0 < collisionX) && (collisionX <dino.width+enemyBottom4.width ))
&& ((0 < collisionY) && (collisionY <dino.height + enemyBottom4.height))){
alert('Game Over')     
}

},100)

let bT5 = 0

//시간.

let enemyBottom5 = {
    x : 500,
    y : 700,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
//객체 생성

let bottom5= setInterval(function (){
    r = Math.random()*50
    enemyBottom5.y -= r
    enemyBottom5.x -= r
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyBottom5.x+r-1,enemyBottom5.y+r-1,12,12)
    enemyBottom5.draw();

let collisionX = (enemyBottom5.x+enemyBottom5.width) -dino.x+r
let collisionY = (enemyBottom5.y + enemyBottom5.height) - dino.y +r
if (((0 < collisionX) && (collisionX <dino.width+enemyBottom5.width ))
&& ((0 < collisionY) && (collisionY <dino.height + enemyBottom5.height))){
alert('Game Over')     
}

},100)

let bT6 = 0

//시간.

let enemyBottom6 = {
    x : 600,
    y : 700,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
//객체 생성

let bottom6= setInterval(function (){
    r = Math.random()*50
    enemyBottom6.y -= r
    enemyBottom6.x -= r
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyBottom6.x+r-1,enemyBottom6.y+r-1,12,12)
    enemyBottom5.draw();

let collisionX = (enemyBottom6.x+enemyBottom6.width) -dino.x +r
let collisionY = (enemyBottom6.y + enemyBottom6.height) - dino.y +r
if (((0 < collisionX) && (collisionX <dino.width+enemyBottom6.width ))
&& ((0 < collisionY) && (collisionY <dino.height + enemyBottom6.height))){
alert('Game Over')     
}

},100)

let bT7 = 0

//시간.

let enemyBottom7 = {
    x : 690,
    y : 700,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
//객체 생성

let bottom7= setInterval(function (){
    r = Math.random()*50
    enemyBottom7.y -= r
    enemyBottom7.x -= r
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyBottom7.x+r-1,enemyBottom7.y+r-1,12,12)
    enemyBottom7.draw();

let collisionX = (enemyBottom7.x+enemyBottom7.width) -dino.x +r
let collisionY = (enemyBottom7.y + enemyBottom7.height) - dino.y +r
if (((0 < collisionX) && (collisionX <dino.width+enemyBottom7.width ))
&& ((0 < collisionY) && (collisionY <dino.height + enemyBottom7.height))){
alert('Game Over')     
}

},100)


/* 매 간격마다 등장 */
let bT8 = 0
let bT9 = 0
let bT10 = 0
let bT11 = 0
let bT12 = 0
let bT13 = 0
let bT14 = 0
let bT15 = 0
let bT16 = 0
let bT17 = 0
let bT18 = 0
let bT19 = 0
let bT20 = 0
let bT21 = 0
let bT22 = 0
let bT23 = 0
let bT24 = 0
let bT25 = 0
let bT26 = 0
let bT27 = 0
let bT28 = 0
let bT29 = 0

let bottomTimer = setInterval(function() {
   bT8 ++
    let enemyBottom8 = {
        x : Math.random()*700,
        y : 700,
        width : 10,
        height : 10,
        draw(){
            ctx.fillStyle ='red'; 
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
    }

    if(bT8 == 1){
            setInterval(function (){
            r = Math.random()*50
            enemyBottom8.y -= r
            enemyBottom8.x -= r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyBottom8.x+r-1,enemyBottom8.y+r-1,12,12)
            enemyBottom8.draw();
        
        let collisionX = (enemyBottom8.x+enemyBottom8.width) -dino.x +r
        let collisionY = (enemyBottom8.y + enemyBottom8.height) - dino.y +r
        if (((0 < collisionX) && (collisionX <dino.width+enemyBottom8.width ))
        && ((0 < collisionY) && (collisionY <dino.height + enemyBottom8.height))){
        alert('Game Over')     
        }
        
        },100)
    }
    
    bT9 ++
    let enemyBottom9 = {
        x : Math.random()*700,
        y : 700,
        width : 10,
        height : 10,
        draw(){
            ctx.fillStyle ='red'; 
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
    }

    if(bT9 == 2){
            setInterval(function (){
            r = Math.random()*50
            enemyBottom9.y -= r
            enemyBottom9.x -= r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyBottom9.x+r-1,enemyBottom9.y+r-1,12,12)
            enemyBottom9.draw();
        
        let collisionX = (enemyBottom9.x+enemyBottom9.width) -dino.x +r
        let collisionY = (enemyBottom9.y + enemyBottom9.height) - dino.y +r
        if (((0 < collisionX) && (collisionX <dino.width+enemyBottom9.width ))
        && ((0 < collisionY) && (collisionY <dino.height + enemyBottom9.height))){
        alert('Game Over')     
        }
        
        },100)
    }
    bT10 ++

    let enemyBottom10 = {
        x : 100,
        y :700,
        width : 10,
        height : 10,
        draw(){
            ctx.fillStyle ='red'; 
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
    }

    if(bT10 == 2){
            setInterval(function (){
            r = Math.random()*50
            enemyBottom10.y -= r
            enemyBottom10.x += r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyBottom10.x-r-1,enemyBottom10.y+r-1,12,12)
            enemyBottom10.draw();
        
        let collisionX = (enemyBottom10.x+enemyBottom10.width) -dino.x -r
        let collisionY = (enemyBottom10.y + enemyBottom10.height) - dino.y +r
        if (((0 < collisionX) && (collisionX <dino.width+enemyBottom10.width ))
        && ((0 < collisionY) && (collisionY <dino.height + enemyBottom10.height))){
        alert('Game Over')     
        }
        
        },100)
    }

    bT11++
    let enemyBottom11 = {
        x : 100,
        y : 700,
        width : 10,
        height : 10,
        draw(){
            ctx.fillStyle ='blue'; 
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
    }

    if(bT11 == 3){
            setInterval(function (){
            r = Math.random()*50
            enemyBottom11.y -= r
            enemyBottom11.x += r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyBottom11.x-r-1,enemyBottom11.y+r-1,12,12)
            enemyBottom11.draw();
        
        let collisionX = (enemyBottom11.x+enemyBottom11.width) -dino.x -r
        let collisionY = (enemyBottom11.y + enemyBottom11.height) - dino.y +r
        if (((0 < collisionX) && (collisionX <dino.width+enemyBottom11.width ))
        && ((0 < collisionY) && (collisionY <dino.height + enemyBottom11.height))){
        alert('Game Over')     
        }
        
        },100)
    }



    bT12 ++
    let enemyBottom12 = {
        x : 600,
        y :700,
        width : 10,
        height : 10,
        draw(){
            ctx.fillStyle ='red'; 
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
    }

    if(bT12 == 3){
            setInterval(function (){
            r = Math.random()*50
            enemyBottom12.y -= r
            enemyBottom12.x -= r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyBottom12.x+(r)-1,enemyBottom12.y+r-1,12,12)
            enemyBottom12.draw();
        
        let collisionX = (enemyBottom12.x+enemyBottom12.width) -dino.x +r
        let collisionY = (enemyBottom12.y + enemyBottom12.height) - dino.y +r
        if (((0 < collisionX) && (collisionX <dino.width+enemyBottom12.width ))
        && ((0 < collisionY) && (collisionY <dino.height + enemyBottom12.height))){
        alert('Game Over')     
        }
        
        },100)
    }
    bT13 ++
    let enemyBottom13 = {
        x : Math.random()*700,
        y :700,
        width : 10,
        height : 10,
        draw(){
            ctx.fillStyle ='blue'; 
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
    }

    if(bT13 == 3){
            setInterval(function (){
            r = Math.random()*50
            enemyBottom13.y -= r
            enemyBottom13.x += 0
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyBottom13.x-1,enemyBottom13.y+r-1,12,12)
            enemyBottom13.draw();
        
        let collisionX = (enemyBottom13.x+enemyBottom13.width) -dino.x 
        let collisionY = (enemyBottom13.y + enemyBottom13.height) - dino.y +r
        if (((0 < collisionX) && (collisionX <dino.width+enemyBottom13.width ))
        && ((0 < collisionY) && (collisionY <dino.height + enemyBottom13.height))){
        alert('Game Over')     
        }
        
        },100)
    }



    bT14 ++
    bT15 ++
    bT16 ++
    bT17 ++
    bT18 ++
    bT19 ++
    bT20 ++
    bT21 ++
    bT22 ++
    bT23 ++
    bT24 ++
    bT25 ++
    bT26 ++
    bT27 ++
    bT28 ++
    bT29 ++
},1000)
