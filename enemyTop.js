let timeTop1 = 0;
let timeTop2 = 0;
let timeTop3 = 0;
let timeTop4 = 0;
let timeTop5 = 0;
let timeTop6 = 0;
let timeTop7 = 0;
let timeTop8 = 0;
let timeTop9 = 0;
let timeTop10 = 0;
let timeTop11= 0;
let timeTop12 = 0;
let timeTop13 = 0;
let timeTop14 = 0;
let timeTop15 = 0;
let timeTop16 = 0;
let timeTop17 = 0;
let timeTop18 = 0;
let timeTop19 = 0;
let timeTop20 = 0;
let timeTop30 = 0;
let timeTop31= 0;
let timeTop32 = 0;
let timeTop33 = 0;
let timeTop34 = 0;
let timeTop35 = 0;
let timeTop36 = 0;
let timeTop37 = 0;
let timeTop38 = 0;
let timeTop39 = 0;
let timeTop40 = 0;


let enemyTop1 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let moveTop1= setInterval(function (){
            r = Math.random()*20
            enemyTop1.y += 50
            enemyTop1.x += r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop1.x-r-1,enemyTop1.y-50,20,20)
            enemyTop1.draw();

        let collisionX = (enemyTop1.x+enemyTop1.width) -dino.x -r
        let collisionY = (enemyTop1.y+enemyTop1.height) - dino.y  -50

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop1.width )) && ((0 < collisionY) && (collisionY < dino.height+enemyTop1.height))){
        alert('Game Over')     
        }

        },200)

let enemyTop2 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let moveTop2= setInterval(function (){
            r = Math.random()*20
            enemyTop2.y += 50
            enemyTop2.x += r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop2.x-r-1,enemyTop2.y-50,20,20)
            enemyTop2.draw();

        let collisionX = (enemyTop2.x+enemyTop2.width) -dino.x -r
        let collisionY = (enemyTop2.y+enemyTop2.height) - dino.y -50

        if (((0 < collisionX) && (collisionX <dino.width + enemyTop2.width)) && ((0 < collisionY) && (collisionY < dino.height +10))){
        alert('Game Over')     

        }

        },200)

let enemyTop3 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let moveTop3= setInterval(function (){
            r = Math.random()*20
            enemyTop3.y += 50
            enemyTop3.x += r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop3.x-r-1,enemyTop3.y-50,20,20)
            enemyTop3.draw();

        let collisionX = (enemyTop3.x+enemyTop3.width) -dino.x -r
        let collisionY = (enemyTop3.y+enemyTop3.height) - dino.y -50

        if (((0 < collisionX) && (collisionX <dino.width +10)) && ((0 < collisionY) && (collisionY < dino.height +10))){
        alert('Game Over')     

        }

        },100)

let enemyTop4 = {
    x : 0,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let moveTop4= setInterval(function (){
            
            enemyTop4.y += 35
            enemyTop4.x += 20
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop4.x-20,enemyTop4.y-35,20,20)
            enemyTop4.draw();

        let collisionX = (enemyTop4.x+enemyTop4.width) -dino.x -20
        let collisionY = (enemyTop4.y+enemyTop4.height) - dino.y -35

        if (((0 < collisionX) && (collisionX <dino.width +10)) && ((0 < collisionY) && (collisionY < dino.height +10))){
        alert('Game Over')     

        }

        },60)


let enemyTop5 = {
    x : Math.random*700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let moveTop5= setInterval(function (){
            r = Math.random()*50
            enemyTop5.y += r
            enemyTop5.x += r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop5.x-r1,enemyTop5.y-r,22,22)
            enemyTop5.draw();

        let collisionX = (enemyTop5.x+enemyTop5.width) -dino.x -r
        let collisionY = (enemyTop5.y+enemyTop5.height) - dino.y -r
            console.log(r)
        if (((0 < collisionX) && (collisionX <dino.width +10)) && ((0 < collisionY) && (collisionY < dino.height +10))){
        alert('Game Over')     

        }

        },200)


/* 6 7 8 9 10 30*30몬스터 */
let enemyTop6 = {
    x : 0,
    y : 0,
    width : 30,
    height : 30,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop7 = {
    x : 100,
    y : 0,
    width : 30,
    height : 30,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop8 = {
    x : 700,
    y : 0,
    width : 30,
    height : 30,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop9 = {
    x : 600,
    y : 0,
    width : 30,
    height : 30,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop10 = {
    x : 500,
    y : 0,
    width : 30,
    height : 30,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}


let timerTop6_10 = setInterval(function(){
    timeTop6 ++;
    timeTop7 ++;
    timeTop8 ++;
    timeTop9 ++;
    timeTop10 ++;

if(timeTop6 == 10) {
    setInterval(function (){
            r = Math.random()*50
            enemyTop6.y += r
            enemyTop6.x += 22
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop6.x-22,enemyTop6.y-r,enemyTop6.width,enemyTop6.height)
            enemyTop6.draw();
            
        let collisionX = (enemyTop6.x+enemyTop6.width) -dino.x -22
        let collisionY = (enemyTop6.y+enemyTop6.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+30)) && ((-10 < collisionY) && (collisionY < dino.height+30))){
        alert('Game Over')     

        }
    
        },120)

    }


    if(timeTop7 == 10) {
        setInterval(function (){
            r = Math.random()*50
            enemyTop7.y += r
            enemyTop7.x += 10
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop7.x-10,enemyTop7.y-r,enemyTop7.width,enemyTop7.height)
            enemyTop7.draw();
        let collisionX = (enemyTop7.x+enemyTop7.width) -dino.x -10
        let collisionY = (enemyTop7.y+enemyTop7.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width +30)) && ((0 < collisionY) && (collisionY < dino.height+30))){
        alert('Game Over')     

        }
    
        },100)
    }
    if(timeTop8 == 10) {
        setInterval(function (){
            r = Math.random()*70
            enemyTop8.y += r
            enemyTop8.x -= 10
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop8.x+10,enemyTop8.y-r,enemyTop8.width,enemyTop8.height)
            enemyTop8.draw();
        let collisionX = (enemyTop8.x+enemyTop8.width) -dino.x +10
        let collisionY = (enemyTop8.y+enemyTop8.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width +30)) && ((0 < collisionY) && (collisionY < dino.height+30))){
        alert('Game Over')     

        }
    
        },100)
    }

    if(timeTop9 == 10) {
        setInterval(function (){
            r = Math.random()*70
            enemyTop9.y += r
            enemyTop9.x -= 33
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop9.x+33,enemyTop9.y-r,enemyTop9.width,enemyTop9.height)
            enemyTop9.draw();
        let collisionX = (enemyTop9.x+enemyTop9.width) -dino.x +33
        let collisionY = (enemyTop9.y+enemyTop9.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width +30)) && ((0 < collisionY) && (collisionY < dino.height+30))){
        alert('Game Over')     

        }
    
        },100)
    }

    if(timeTop10 == 10) {
        setInterval(function (){
            r = Math.random()*70
            enemyTop10.y += r
            enemyTop10.x -= r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop10.x+r,enemyTop10.y-r,enemyTop10.width,enemyTop10.height)
            enemyTop10.draw();
        let collisionX = (enemyTop10.x+enemyTop10.width) -dino.x +r
        let collisionY = (enemyTop10.y+enemyTop10.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width +30)) && ((0 < collisionY) && (collisionY < dino.height+30))){
        alert('Game Over')     

        }
    
        },100)
    }


},200)




let enemyTop12 = {
    x : Math.random() * 700,
    y : 0,
    width : 30,
    height : 30,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop13 = {
    x : 0,
    y : 0,
    width : 30,
    height : 30,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop14 = {
    x : 0,
    y : 0,
    width : 30,
    height : 30,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop15 = {
    x : 700,
    y : 0,
    width : 30,
    height : 30,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop16 = {
    x : Math.random() * 700,
    y : 0,
    width : 30,
    height : 30,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop17 = {
    x : Math.random() * 700,
    y : 0,
    width : 20,
    height : 20,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop18 = {
    x : Math.random() * 700,
    y : 0,
    width : 20,
    height : 20,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop19 = {
    x : Math.random() * 700,
    y : 0,
    width : 20,
    height : 20,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}


let enemyTop20 = {
    x : Math.random() * 700,
    y : 0,
    width : 20,
    height : 20,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}


let timerTop12_20 = setInterval(function(){

    timeTop12 ++;
    timeTop13 ++;
    timeTop14 ++;
    timeTop15 ++;
    timeTop16 ++;
    timeTop17 ++;
    timeTop18 ++;
    timeTop19 ++;
    timeTop19 ++;
    timeTop20 ++;


if(timeTop12 == 10) {
    setInterval(function (){
            r = Math.random()*50
            enemyTop12.y += 44
            enemyTop12.x += 25
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop12.x-25,enemyTop12.y-44,enemyTop12.width,enemyTop12.height)
            enemyTop6.draw();
            
        let collisionX = (enemyTop12.x+enemyTop12.width) -dino.x -25
        let collisionY = (enemyTop12.y+enemyTop12.height) - dino.y -44

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop12.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop12.height))){
        alert('Game Over')     

        }
    
        },150)

    }


    if(timeTop13 == 10) {
        setInterval(function (){
            r = Math.random()*50
            enemyTop13.y += r
            enemyTop13.x += 44
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop13.x-44,enemyTop13.y-r,40,40)
            enemyTop13.draw();
        let collisionX = (enemyTop13.x+enemyTop13.width) -dino.x -44
        let collisionY = (enemyTop13.y+enemyTop13.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop13.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop13.height))){
            alert('Game Over')   

        }
    
        },100)
    }
    if(timeTop14 == 14) {
        setInterval(function (){
            r = Math.random()*70
            enemyTop14.y += 10
            enemyTop14.x += 10
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop14.x-10,enemyTop14.y-10,40,40)
            enemyTop14.draw();
        let collisionX = (enemyTop14.x+enemyTop14.width) -dino.x -10
        let collisionY = (enemyTop14.y+enemyTop14.height) - dino.y -10

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop14.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop14.height))){
            alert('Game Over')   

        }
    
        },100)
    }

    if(timeTop15 == 14) {
        setInterval(function (){
            r = Math.random()*70
            enemyTop15.y += 10
            enemyTop15.x -= 10
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop15.x+10,enemyTop15.y-10,40,40)
            enemyTop15.draw();
        let collisionX = (enemyTop15.x+enemyTop15.width) -dino.x +10
        let collisionY = (enemyTop15.y+enemyTop15.height) - dino.y -10

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop15.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop15.height))){
            alert('Game Over')   

        }
    
        },100)
    }

    if(timeTop16 == 10) {
        setInterval(function (){
            r = Math.random()*70
            enemyTop16.y += r
            enemyTop16.x -= r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop16.x+r,enemyTop16.y-r,40,40)
            enemyTop16.draw();
        let collisionX = (enemyTop16.x+enemyTop16.width) -dino.x +r
        let collisionY = (enemyTop16.y+enemyTop16.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop16.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop16.height))){
            alert('Game Over')    

        }
    
        },100)
    }

    if(timeTop17 == 14) {
        setInterval(function (){
            r = Math.random()*70
            enemyTop17.y += 25
            enemyTop17.x += r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop17.x-r,enemyTop17.y-25,40,40)
            enemyTop17.draw();
        let collisionX = (enemyTop17.x+enemyTop17.width) -dino.x -r
        let collisionY = (enemyTop17.y+enemyTop17.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop17.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop17.height))){
            alert('Game Over')    

        }
    
        },100)
    }
    if(timeTop18 == 17) {
        setInterval(function (){
            r = Math.random()*70
            enemyTop18.y += r
            enemyTop18.x += r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop18.x-r,enemyTop18.y-r,40,40)
            enemyTop18.draw();
        let collisionX = (enemyTop18.x+enemyTop18.width) -dino.x +r
        let collisionY = (enemyTop18.y+enemyTop18.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop18.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop18.height))){
            alert('Game Over')    

        }
    
        },88)
    }
    
    if(timeTop19 == 17) {
        setInterval(function (){
            r = Math.random()*70
            enemyTop19.y += r
            enemyTop19.x -= r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop19.x+r,enemyTop19.y-r,40,40)
            enemyTop19.draw();
        let collisionX = (enemyTop19.x+enemyTop19.width) -dino.x -r
        let collisionY = (enemyTop19.y+enemyTop19.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop19.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop19.height))){
            alert('Game Over')    

        }
    
        },88)
    }
    if(timeTop20 == 17) {
        setInterval(function (){
            r = Math.random()*70
            enemyTop20.y += r
            enemyTop20.x += r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop20.x-r,enemyTop20.y-r,40,40)
            enemyTop20.draw();
        let collisionX = (enemyTop20.x+enemyTop20.width) -dino.x -r
        let collisionY = (enemyTop20.y+enemyTop20.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop20.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop20.height))){
            alert('Game Over')    

        }
    
        },88)
    }
},500)


/*비같이 내리는 장애물*/

let timeTopRain1 = 0
let timeTopRain2 = 0
let timeTopRain3 = 0
let timeTopRain4 = 0
let timeTopRain5 = 0
let timeTopRain6 = 0
let timeTopRain7 = 0
let timeTopRain8 = 0
let timeTopRain9 = 0
let timeTopRain10 = 0
let timeTopRain11 = 0


let enemyRain1 = {
    x : 0,
    y : 0,
    width : 10,
    height : 100,
    draw(){
        ctx.fillStyle ='blue'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let enemyRain2 = {
    x : 126,
    y : 0,
    width : 10,
    height : 100,
    draw(){
        ctx.fillStyle ='blue'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let enemyRain3 = {
    x : 252,
    y : 0,
    width : 10,
    height : 100,
    draw(){
        ctx.fillStyle ='blue'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let enemyRain4 = {
    x : 378,
    y : 0,
    width : 10,
    height : 100,
    draw(){
        ctx.fillStyle ='blue'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let enemyRain5 = {
    x : 504,
    y : 0,
    width : 10,
    height : 100,
    draw(){
        ctx.fillStyle ='blue'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let enemyRain6 = {
    x : 690,
    y : 0,
    width : 10,
    height : 100,
    draw(){
        ctx.fillStyle ='blue'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}


let enemyRain7 = {
    x : 63,
    y : 0,
    width : 10,
    height : 100,
    draw(){
        ctx.fillStyle ='blue'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let enemyRain8 = {
    x : 189,
    y : 0,
    width : 10,
    height : 100,
    draw(){
        ctx.fillStyle ='blue'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let enemyRain9 = {
    x : 315,
    y : 0,
    width : 10,
    height : 100,
    draw(){
        ctx.fillStyle ='blue'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let enemyRain10 = {
    x : 441,
    y : 0,
    width : 10,
    height : 100,
    draw(){
        ctx.fillStyle ='blue'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let enemyRain11 = {
    x : 567,
    y : 0,
    width : 10,
    height : 100,
    draw(){
        ctx.fillStyle ='blue'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let timerTopRain = setInterval(function(){
    timeTopRain1 ++;
    timeTopRain2 ++;
    timeTopRain3 ++;
    timeTopRain4 ++;
    timeTopRain5 ++;
    timeTopRain6 ++;
    timeTopRain7 ++;
    timeTopRain8 ++;
    timeTopRain9 ++;
    timeTopRain10 ++;
    timeTopRain11 ++;


   if(timeTopRain1 == 10){
        setInterval(function (){
        enemyRain1.y += 100
        enemyRain1.x += 0
        ctx.fillStyle = 'bisque'
        ctx.fillRect(enemyRain1.x,enemyRain1.y-100,10,100)
        enemyRain1.draw();
    let collisionX = (enemyRain1.x+enemyRain1.width) -dino.x
    let collisionY = (enemyRain1.y+enemyRain1.height) - dino.y -100

    if (((0 < collisionX) && (collisionX <dino.width+enemyRain1.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyRain1.height))){
        alert('Game Over')    

    }
    },222)
}
    if(timeTopRain2 == 10){
        setInterval(function (){
        enemyRain2.y += 100
        enemyRain2.x += 0
        ctx.fillStyle = 'bisque'
        ctx.fillRect(enemyRain2.x,enemyRain2.y-100,10,100)
        enemyRain2.draw();
    let collisionX = (enemyRain2.x+enemyRain2.width) -dino.x
    let collisionY = (enemyRain2.y+enemyRain2.height) - dino.y -100

    if (((0 < collisionX) && (collisionX <dino.width+enemyRain2.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyRain2.height))){
        alert('Game Over')    

    }

    },222)
}
if(timeTopRain3 == 10){
    setInterval(function (){
    enemyRain3.y += 100
    enemyRain3.x += 0
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyRain3.x,enemyRain3.y-100,10,100)
    enemyRain3.draw();
let collisionX = (enemyRain3.x+enemyRain3.width) -dino.x
let collisionY = (enemyRain3.y+enemyRain3.height) - dino.y -100

if (((0 < collisionX) && (collisionX <dino.width+enemyRain3.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyRain3.height))){
    alert('Game Over')    

}

},222)
}
if(timeTopRain4 == 10){
    setInterval(function (){
    enemyRain4.y += 100
    enemyRain4.x += 0
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyRain4.x,enemyRain4.y-100,10,100)
    enemyRain4.draw();
let collisionX = (enemyRain4.x+enemyRain4.width) -dino.x
let collisionY = (enemyRain4.y+enemyRain4.height) - dino.y -100

if (((0 < collisionX) && (collisionX <dino.width+enemyRain4.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyRain4.height))){
    alert('Game Over')    

}

},222)
}
if(timeTopRain5 == 10){
    setInterval(function (){
    enemyRain5.y += 100
    enemyRain5.x += 0
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyRain5.x,enemyRain5.y-100,10,100)
    enemyRain5.draw();
let collisionX = (enemyRain5.x+enemyRain5.width) -dino.x
let collisionY = (enemyRain5.y+enemyRain5.height) - dino.y -100

if (((0 < collisionX) && (collisionX <dino.width+enemyRain5.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyRain5.height))){
    alert('Game Over')    

}

},222)
}
if(timeTopRain6 == 10){
    setInterval(function (){
    enemyRain6.y += 100
    enemyRain6.x += 0
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyRain6.x,enemyRain6.y-100,10,100)
    enemyRain6.draw();
let collisionX = (enemyRain6.x+enemyRain6.width) -dino.x
let collisionY = (enemyRain6.y+enemyRain6.height) - dino.y -100

if (((0 < collisionX) && (collisionX <dino.width+enemyRain6.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyRain6.height))){
    alert('Game Over')    

}

},222)
}

if(timeTopRain7 == 15){
    setInterval(function (){
    enemyRain7.y += 100
    enemyRain7.x += 0
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyRain7.x,enemyRain7.y-100,10,100)
    enemyRain7.draw();
let collisionX = (enemyRain7.x+enemyRain7.width) -dino.x
let collisionY = (enemyRain7.y+enemyRain7.height) - dino.y -100

if (((0 < collisionX) && (collisionX <dino.width+enemyRain7.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyRain7.height))){
    alert('Game Over')    

}
},222)
}
if(timeTopRain8 == 15){
    setInterval(function (){
    enemyRain8.y += 100
    enemyRain8.x += 0
    ctx.fillStyle = 'bisque'
    ctx.fillRect(enemyRain8.x,enemyRain8.y-100,10,100)
    enemyRain8.draw();
let collisionX = (enemyRain8.x+enemyRain8.width) -dino.x
let collisionY = (enemyRain8.y+enemyRain8.height) - dino.y -100

if (((0 < collisionX) && (collisionX <dino.width+enemyRain8.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyRain8.height))){
    alert('Game Over')    

}

},222)
}
if(timeTopRain9 == 15){
setInterval(function (){
enemyRain9.y += 100
enemyRain9.x += 0
ctx.fillStyle = 'bisque'
ctx.fillRect(enemyRain9.x,enemyRain9.y-100,10,100)
enemyRain9.draw();
let collisionX = (enemyRain9.x+enemyRain9.width) -dino.x
let collisionY = (enemyRain9.y+enemyRain9.height) - dino.y -100

if (((0 < collisionX) && (collisionX <dino.width+enemyRain9.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyRain9.height))){
alert('Game Over')    

}

},222)
}
if(timeTopRain10 == 15){
setInterval(function (){
enemyRain10.y += 100
enemyRain10.x += 0
ctx.fillStyle = 'bisque'
ctx.fillRect(enemyRain10.x,enemyRain10.y-100,10,100)
enemyRain10.draw();
let collisionX = (enemyRain10.x+enemyRain10.width) -dino.x
let collisionY = (enemyRain10.y+enemyRain10.height) - dino.y -100

if (((0 < collisionX) && (collisionX <dino.width+enemyRain10.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyRain10.height))){
alert('Game Over')    

}

},222)
}
if(timeTopRain11 == 15){
setInterval(function (){
enemyRain11.y += 100
enemyRain11.x += 0
ctx.fillStyle = 'bisque'
ctx.fillRect(enemyRain11.x,enemyRain11.y-100,10,100)
enemyRain11.draw();
let collisionX = (enemyRain11.x+enemyRain11.width) -dino.x
let collisionY = (enemyRain11.y+enemyRain11.height) - dino.y -100

if (((0 < collisionX) && (collisionX <dino.width+enemyRain11.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyRain11.height))){
alert('Game Over')    

}

},222)
}


},800)

