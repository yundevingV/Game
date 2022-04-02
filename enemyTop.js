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
        
        rtest = (Math.random()+ 1) *35
        console.log(rtest)
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
            ctx.fillRect(enemyTop4.x-20-1,enemyTop4.y-35,20,20)
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
            ctx.fillRect(enemyTop5.x-r-1,enemyTop5.y-r,20,20)
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
            enemyTop6.y += 30
            enemyTop6.x += 22
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop6.x-22-1,enemyTop6.y-30,50,50)
            enemyTop6.draw();
            
        let collisionX = (enemyTop6.x+enemyTop6.width) -dino.x -22
        let collisionY = (enemyTop6.y+enemyTop6.height) - dino.y -30

        if (((0 < collisionX) && (collisionX <dino.width+30)) && ((-10 < collisionY) && (collisionY < dino.height+30))){
        alert('Game Over')     

        }
    
        },120)

    }


    if(timeTop7 == 10) {
        setInterval(function (){
            r = Math.random()*50
            enemyTop7.y += 58
            enemyTop7.x += 32
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop7.x-32-1,enemyTop7.y-58,50,50)
            enemyTop7.draw();
        let collisionX = (enemyTop7.x+enemyTop7.width) -dino.x -32
        let collisionY = (enemyTop7.y+enemyTop7.height) - dino.y -58

        if (((0 < collisionX) && (collisionX <dino.width +30)) && ((0 < collisionY) && (collisionY < dino.height+30))){
        alert('Game Over')     

        }
    
        },100)
    }
    if(timeTop8 == 10) {
        setInterval(function (){
            r = Math.random()*70
            enemyTop8.y += 32
            enemyTop8.x -= 10
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop8.x+10-1,enemyTop8.y-32,50,50)
            enemyTop8.draw();
        let collisionX = (enemyTop8.x+enemyTop8.width) -dino.x +10
        let collisionY = (enemyTop8.y+enemyTop8.height) - dino.y -32

        if (((0 < collisionX) && (collisionX <dino.width +30)) && ((0 < collisionY) && (collisionY < dino.height+30))){
        alert('Game Over')     

        }
    
        },100)
    }

    if(timeTop9 == 10) {
        setInterval(function (){
            r = Math.random()*70
            enemyTop9.y += 33
            enemyTop9.x -= 33
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop9.x+33-1,enemyTop9.y-33,50,50)
            enemyTop9.draw();
        let collisionX = (enemyTop9.x+enemyTop9.width) -dino.x +33
        let collisionY = (enemyTop9.y+enemyTop9.height) - dino.y -33

        if (((0 < collisionX) && (collisionX <dino.width +30)) && ((0 < collisionY) && (collisionY < dino.height+30))){
        alert('Game Over')     

        }
    
        },100)
    }

    if(timeTop10 == 10) {
        setInterval(function (){
            r = Math.random()*70
            enemyTop10.y += 22
            enemyTop10.x -= 22
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop10.x+22-1,enemyTop10.y-22,50,50)
            enemyTop10.draw();
        let collisionX = (enemyTop10.x+enemyTop10.width) -dino.x +22
        let collisionY = (enemyTop10.y+enemyTop10.height) - dino.y -22

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
            ctx.fillRect(enemyTop12.x-25-1,enemyTop12.y-44,50,50)
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
            ctx.fillRect(enemyTop13.x-44-1,enemyTop13.y-r,50,50)
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
            ctx.fillRect(enemyTop14.x-10-1,enemyTop14.y-10,50,50)
            enemyTop14.draw();
        let collisionX = (enemyTop14.x+enemyTop14.width) -dino.x -10
        let collisionY = (enemyTop14.y+enemyTop14.height) - dino.y -10

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop14.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop14.height))){
            alert('Game Over')   

        }
    
        },90)
    }

    if(timeTop15 == 14) {
        setInterval(function (){
            r = Math.random()*70
            enemyTop15.y += 10
            enemyTop15.x -= 10
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop15.x+10-1,enemyTop15.y-10,50,50)
            enemyTop15.draw();
        let collisionX = (enemyTop15.x+enemyTop15.width) -dino.x +10
        let collisionY = (enemyTop15.y+enemyTop15.height) - dino.y -10

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop15.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop15.height))){
            alert('Game Over')   

        }
    
        },90)
    }

    if(timeTop16 == 10) {
        setInterval(function (){
            r = Math.random()*70
            enemyTop16.y += r
            enemyTop16.x -= r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop16.x+r-1,enemyTop16.y-r,50,50)
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
            ctx.fillRect(enemyTop17.x-r-1,enemyTop17.y-25,50,50)
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
            ctx.fillRect(enemyTop18.x-r-1,enemyTop18.y-r,50,50)
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
            ctx.fillRect(enemyTop19.x+r-1,enemyTop19.y-r,50,50)
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
            ctx.fillRect(enemyTop20.x-r-1,enemyTop20.y-r,50,50)
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

let enemyTop21 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop22 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop23 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop24 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop25 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop26 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop27 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop28 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}


let enemyTop29 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop30 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop31 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop32 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop33 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop34 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop35 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop36 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop37 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop38 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}


let enemyTop39 = {
    x : Math.random() * 700,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let timeTop21 = 0
let timeTop22 = 0
let timeTop23 = 0
let timeTop24 = 0
let timeTop25 = 0
let timeTop26 = 0
let timeTop27 = 0
let timeTop28 = 0
let timeTop29 = 0



let timerTop21_39 = setInterval(function(){

timeTop21 ++;
timeTop22 ++;
timeTop23 ++;
timeTop24 ++;
timeTop25 ++;
timeTop26 ++;
timeTop27 ++;
timeTop28 ++;
timeTop29 ++;
timeTop30 ++;
timeTop31 ++
timeTop32 ++
timeTop33 ++
timeTop34 ++
timeTop35 ++
timeTop36 ++
timeTop37 ++
timeTop38 ++
timeTop39 ++

if(timeTop21 == 10) {
    setInterval(function (){
            enemyTop21.y += 44
            enemyTop21.x += 25
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop21.x-25-1,enemyTop21.y-44,20,20)
            enemyTop21.draw();
            
        let collisionX = (enemyTop21.x+enemyTop21.width) -dino.x -25
        let collisionY = (enemyTop21.y+enemyTop21.height) - dino.y -44

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop21.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop21.height))){
        alert('Game Over')     

        }
    
        },100)

    }


    if(timeTop22 == 10) {
        setInterval(function (){
            
            enemyTop22.y += 20
            enemyTop22.x += 44
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop22.x-44-1,enemyTop22.y-20,20,20)
            enemyTop22.draw();
        let collisionX = (enemyTop22.x+enemyTop22.width) -dino.x -44
        let collisionY = (enemyTop22.y+enemyTop22.height) - dino.y -20

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop22.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop22.height))){
            alert('Game Over')   

        }
    
        },100)
    }
    if(timeTop23 == 10) {
        setInterval(function (){
            
            enemyTop23.y += 10
            enemyTop23.x += 10
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop23.x-10-1,enemyTop23.y-10,20,20)
            enemyTop23.draw();
        let collisionX = (enemyTop23.x+enemyTop23.width) -dino.x -10
        let collisionY = (enemyTop23.y+enemyTop23.height) - dino.y -10

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop23.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop23.height))){
            alert('Game Over')   

        }
    
        },100)
    }

    if(timeTop24 == 10) {
        setInterval(function (){
            enemyTop24.y += 20
            enemyTop24.x += 20
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop24.x-20-1,enemyTop24.y-20,20,20)
            enemyTop24.draw();
        let collisionX = (enemyTop24.x+enemyTop24.width) -dino.x -20
        let collisionY = (enemyTop24.y+enemyTop24.height) - dino.y -20

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop24.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop24.height))){
            alert('Game Over')   

        }
    
        },100)
    }

    if(timeTop25 == 10) {
        setInterval(function (){
            
            enemyTop25.y += 25
            enemyTop25.x += 25
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop25.x-25-1,enemyTop25.y-25,20,20)
            enemyTop25.draw();
        let collisionX = (enemyTop25.x+enemyTop25.width) -dino.x - 25
        let collisionY = (enemyTop25.y+enemyTop25.height) - dino.y - 25

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop25.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop25.height))){
            alert('Game Over')    

        }
    
        },100)
    }

    if(timeTop26 == 10) {
        setInterval(function (){
            
            enemyTop26.y += 26
            enemyTop26.x += 26
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop26.x-26-1,enemyTop26.y-26,20,20)
            enemyTop26.draw();
        let collisionX = (enemyTop26.x+enemyTop26.width) -dino.x -26
        let collisionY = (enemyTop26.y+enemyTop26.height) - dino.y -26

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop26.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop26.height))){
            alert('Game Over')    

        }
    
        },100)
    }
    if(timeTop27 == 10) {
        setInterval(function (){
            
            enemyTop27.y += 44
            enemyTop27.x += 44
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop27.x-44-1,enemyTop27.y-44,20,20)
            enemyTop27.draw();
        let collisionX = (enemyTop27.x+enemyTop27.width) -dino.x -44
        let collisionY = (enemyTop27.y+enemyTop27.height) - dino.y -44

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop27.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop27.height))){
            alert('Game Over')    

        }
    
        },88)
    }
    
    if(timeTop28 == 10) {
        setInterval(function (){
            
            enemyTop28.y += 22
            enemyTop28.x += 22
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop28.x-22-1,enemyTop28.y-22,20,20)
            enemyTop28.draw();
        let collisionX = (enemyTop28.x+enemyTop28.width) -dino.x -22
        let collisionY = (enemyTop28.y+enemyTop28.height) - dino.y -22

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop28.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop28.height))){
            alert('Game Over')    

        }
    
        },88)
    }
    if(timeTop29 == 10) {
        setInterval(function (){
            
            enemyTop29.y += 29
            enemyTop29.x += 29
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop29.x-29-1,enemyTop29.y-29,20,20)
            enemyTop29.draw(); 
        let collisionX = (enemyTop29.x+enemyTop29.width) -dino.x -29
        let collisionY = (enemyTop29.y+enemyTop29.height) - dino.y -29

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop29.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop29.height))){
            alert('Game Over')    

        }
    
        },88)
    }
    if(timeTop30 == 12) {
        setInterval(function (){
                enemyTop30.y += 30
                enemyTop30.x += 30
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop30.x-30-1,enemyTop30.y-30,20,20)
                enemyTop30.draw();
                
            let collisionX = (enemyTop30.x+enemyTop30.width) -dino.x -30
            let collisionY = (enemyTop30.y+enemyTop30.height) - dino.y -30
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop30.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop30.height))){
            alert('Game Over')     
    
            }
        
            },100)
    
        }
    if(timeTop31 == 12) {
        setInterval(function (){
                enemyTop31.y += 40
                enemyTop31.x += 40
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop31.x-40-1,enemyTop31.y-40,20,20)
                enemyTop31.draw();
                
            let collisionX = (enemyTop31.x+enemyTop31.width) -dino.x -40
            let collisionY = (enemyTop31.y+enemyTop31.height) - dino.y -40
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop31.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop31.height))){
            alert('Game Over')     
    
            }
        
            },100)
    
        }
    
    
        if(timeTop32 == 12) {
            setInterval(function (){
                
                enemyTop32.y += 50
                enemyTop32.x += 50
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop32.x-50-1,enemyTop32.y-50,20,20)
                enemyTop32.draw();
            let collisionX = (enemyTop32.x+enemyTop32.width) -dino.x -50
            let collisionY = (enemyTop32.y+enemyTop32.height) - dino.y -50
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop22.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop22.height))){
                alert('Game Over')   
    
            }
        
            },100)
        }
        if(timeTop33 == 12) {
            setInterval(function (){
                
                enemyTop33.y += 10
                enemyTop33.x += 10
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop33.x-10-1,enemyTop33.y-10,20,20)
                enemyTop33.draw();
            let collisionX = (enemyTop33.x+enemyTop33.width) -dino.x -10
            let collisionY = (enemyTop33.y+enemyTop33.height) - dino.y -10
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop33.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop33.height))){
                alert('Game Over')   
    
            }
        
            },100)
        }
    
        if(timeTop34 == 12) {
            setInterval(function (){
                enemyTop34.y += 23
                enemyTop34.x += 23
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop34.x-23-1,enemyTop34.y-23,20,20)
                enemyTop34.draw();
            let collisionX = (enemyTop34.x+enemyTop34.width) -dino.x -23
            let collisionY = (enemyTop34.y+enemyTop34.height) - dino.y -23
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop34.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop34.height))){
                alert('Game Over')   
    
            }
        
            },100)
        }
    
        if(timeTop35 == 12) {
            setInterval(function (){
                
                enemyTop35.y += 2
                enemyTop35.x += 25
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop35.x-25-1,enemyTop35.y-2,20,20)
                enemyTop35.draw();
            let collisionX = (enemyTop35.x+enemyTop35.width) -dino.x - 25
            let collisionY = (enemyTop35.y+enemyTop35.height) - dino.y - 2
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop35.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop35.height))){
                alert('Game Over')    
    
            }
        
            },100)
        }
    
        if(timeTop36 == 12) {
            setInterval(function (){
                
                enemyTop36.y += 50
                enemyTop36.x -= 26
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop36.x+26-1,enemyTop36.y-50,20,20)
                enemyTop36.draw();
            let collisionX = (enemyTop36.x+enemyTop36.width) -dino.x +26
            let collisionY = (enemyTop36.y+enemyTop36.height) - dino.y -50
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop36.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop36.height))){
                alert('Game Over')    
    
            }
        
            },100)
        }
        if(timeTop37 == 12) {
            setInterval(function (){
                
                enemyTop37.y += 44
                enemyTop37.x -= 44
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop37.x+44-1,enemyTop37.y-44,20,20)
                enemyTop37.draw();
            let collisionX = (enemyTop37.x+enemyTop37.width) -dino.x +44
            let collisionY = (enemyTop37.y+enemyTop37.height) - dino.y -44
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop37.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop37.height))){
                alert('Game Over')    
    
            }
        
            },88)
        }
        
        if(timeTop38 == 12) {
            setInterval(function (){
                
                enemyTop38.y += 22
                enemyTop38.x -= 22
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop38.x+22-1,enemyTop38.y-22,20,20)
                enemyTop38.draw();
            let collisionX = (enemyTop38.x+enemyTop38.width) -dino.x +22
            let collisionY = (enemyTop38.y+enemyTop38.height) - dino.y -22
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop38.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop38.height))){
                alert('Game Over')    
    
            }
        
            },88)
        }
        if(timeTop39 == 12) {
            setInterval(function (){
                
                enemyTop39.y += 70
                enemyTop39.x -= 2
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop39.x+2-1,enemyTop39.y-70,20,20)
                enemyTop39.draw(); 
            let collisionX = (enemyTop39.x+enemyTop39.width) -dino.x +2
            let collisionY = (enemyTop39.y+enemyTop39.height) - dino.y -70
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop39.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop39.height))){
                alert('Game Over')    
    
            }
        
            },88)
        }


},1000)

/* 난이도 업 */


let bigEnemyTop1 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let bigEnemyTop2 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let bigEnemyTop3 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let bigEnemyTop4 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let bigEnemyTop5 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let bigEnemyTop6 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let bigEnemyTop7 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let bigEnemyTop8 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let bigEnemyTop9 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let bigEnemyTop11 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let bigEnemyTop12 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let bigEnemyTop13 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}


let bigEnemyTop14 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let bigEnemyTop15= {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let bigEnemyTop16 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let bigEnemyTop17 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let bigEnemyTop18 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let bigEnemyTop19 = {
    x : Math.random() * 700,
    y : 0,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let bigTop1 = 0
let bigTop2 = 0
let bigTop3 = 0
let bigTop4 = 0
let bigTop5 = 0
let bigTop6 = 0
let bigTop7 = 0
let bigTop8 = 0
let bigTop9 = 0
let bigTop11 = 0
let bigTop12 = 0
let bigTop13 = 0
let bigTop14 = 0
let bigTop15 = 0
let bigTop16 = 0
let bigTop17 = 0
let bigTop18 = 0
let bigTop19 = 0


let bigTop21_39 = setInterval(function(){

bigTop1 ++;
bigTop2 ++;
bigTop3 ++;
bigTop4 ++;
bigTop5 ++;
bigTop6 ++;
bigTop7 ++;
bigTop8 ++;
bigTop9 ++;
bigTop11 ++;
bigTop12 ++
bigTop13 ++
bigTop14 ++
bigTop15 ++
bigTop16 ++
bigTop17 ++
bigTop18 ++
bigTop19 ++

if(bigTop1 == 20) {
    setInterval(function (){
            r = Math.random() *20
            bigEnemyTop1.y += r
            bigEnemyTop1.x += 44
            ctx.fillStyle = 'bisque'
            ctx.fillRect(bigEnemyTop1.x-44-1,bigEnemyTop1.y-r-1,60,60)
            bigEnemyTop1.draw();
            
        let collisionX = (bigEnemyTop1.x+bigEnemyTop1.width) -dino.x -44
        let collisionY = (bigEnemyTop1.y+bigEnemyTop1.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop1.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop1.height))){
        alert('Game Over')     

        }
    
        },150)

    }


    if(bigTop2 == 20) {
        setInterval(function (){
                bigEnemyTop2.y += 44
                bigEnemyTop2.x += 44
                ctx.fillStyle = 'bisque'
                ctx.fillRect(bigEnemyTop2.x-44-1,bigEnemyTop2.y-44-1,60,60)
                bigEnemyTop2.draw();
                
            let collisionX = (bigEnemyTop2.x+bigEnemyTop2.width) -dino.x -44
            let collisionY = (bigEnemyTop2.y+bigEnemyTop2.height) - dino.y -44
    
            if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop2.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop2.height))){
            alert('Game Over')     
    
            }
        
            },150)
    
        }

        if(bigTop3 == 20) {
    setInterval(function (){
            r = Math.random() *21
            bigEnemyTop3.y += r
            bigEnemyTop3.x += 44
            ctx.fillStyle = 'bisque'
            ctx.fillRect(bigEnemyTop3.x-44-1,bigEnemyTop3.y-r-1,60,60)
            bigEnemyTop3.draw();
            
        let collisionX = (bigEnemyTop3.x+bigEnemyTop3.width) -dino.x -44
        let collisionY = (bigEnemyTop3.y+bigEnemyTop3.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop3.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop3.height))){
        alert('Game Over')     

        }
    
        },150)

    }


    if(bigTop4 == 20) {
        setInterval(function (){
                bigEnemyTop4.y += 22
                bigEnemyTop4.x += 3
                ctx.fillStyle = 'bisque'
                ctx.fillRect(bigEnemyTop4.x-3-1,bigEnemyTop4.y-22-1,60,60)
                bigEnemyTop4.draw();
                
            let collisionX = (bigEnemyTop4.x+bigEnemyTop4.width) -dino.x -3
            let collisionY = (bigEnemyTop4.y+bigEnemyTop4.height) - dino.y -70
    
            if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop4.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop4.height))){
            alert('Game Over')     
    
            }
        
            },150)
    
        }

        if(bigTop5 == 20) {
    setInterval(function (){
            r = Math.random() *55
            bigEnemyTop5.y += r
            bigEnemyTop5.x += 20
            ctx.fillStyle = 'bisque'
            ctx.fillRect(bigEnemyTop5.x-20-1,bigEnemyTop5.y-r-1,60,60)
            bigEnemyTop5.draw();
            
        let collisionX = (bigEnemyTop5.x+bigEnemyTop5.width) -dino.x -20
        let collisionY = (bigEnemyTop5.y+bigEnemyTop5.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop5.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop5.height))){
        alert('Game Over')     

        }
    
        },150)

    }


    if(bigTop6 == 20) {
        setInterval(function (){
                bigEnemyTop6.y += 30
                bigEnemyTop6.x += 30
                ctx.fillStyle = 'bisque'
                ctx.fillRect(bigEnemyTop6.x-30-1,bigEnemyTop6.y-30-1,60,60)
                bigEnemyTop2.draw();
                
            let collisionX = (bigEnemyTop6.x+bigEnemyTop6.width) -dino.x -30
            let collisionY = (bigEnemyTop6.y+bigEnemyTop6.height) - dino.y -30
    
            if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop6.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop6.height))){
            alert('Game Over')     
    
            }
        
            },150)
    
        }

        if(bigTop7 == 22) {
    setInterval(function (){
            r = Math.random() *55
            bigEnemyTop7.y += r
            bigEnemyTop7.x += 44
            ctx.fillStyle = 'bisque'
            ctx.fillRect(bigEnemyTop7.x-44-1,bigEnemyTop7.y-r-1,60,60)
            bigEnemyTop7.draw();
            
        let collisionX = (bigEnemyTop7.x+bigEnemyTop7.width) -dino.x -44
        let collisionY = (bigEnemyTop7.y+bigEnemyTop7.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop7.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop7.height))){
        alert('Game Over')     

        }
    
        },150)

    }


    if(bigTop8 == 22) {
        setInterval(function (){
                bigEnemyTop8.y += 11
                bigEnemyTop8.x += 44
                ctx.fillStyle = 'bisque'
                ctx.fillRect(bigEnemyTop8.x-44-1,bigEnemyTop8.y-11-1,60,60)
                bigEnemyTop8.draw();
                
            let collisionX = (bigEnemyTop8.x+bigEnemyTop8.width) -dino.x -11
            let collisionY = (bigEnemyTop8.y+bigEnemyTop8.height) - dino.y -44
    
            if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop8.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop8.height))){
            alert('Game Over')     
    
            }
        
            },150)
    
        }

        if(bigTop9== 22) {
    setInterval(function (){
            r = Math.random() *55
            bigEnemyTop9.y += r
            bigEnemyTop9.x += r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(bigEnemyTop9.x-r-1,bigEnemyTop9.y-r-1,60,60)
            bigEnemyTop9.draw();
            
        let collisionX = (bigEnemyTop9.x+bigEnemyTop9.width) -dino.x -r
        let collisionY = (bigEnemyTop9.y+bigEnemyTop9.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop9.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop9.height))){
        alert('Game Over')     

        }
    
        },150)

    }


    if(bigTop11 == 22) {
        setInterval(function (){
            r = Math.random() *11
                bigEnemyTop11.y += r
                bigEnemyTop11.x += r
                ctx.fillStyle = 'bisque'
                ctx.fillRect(bigEnemyTop11.x-r-1,bigEnemyTop11.y-r-1,60,60)
                bigEnemyTop11.draw();
                
            let collisionX = (bigEnemyTop11.x+bigEnemyTop11.width) -dino.x -r
            let collisionY = (bigEnemyTop11.y+bigEnemyTop11.height) - dino.y -r
    
            if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop11.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop11.height))){
            alert('Game Over')     
    
            }
        
            },150)
    
        }


    if(bigTop12 == 25) {
        setInterval(function (){
            r = Math.random() *44

                bigEnemyTop12.y += r
                bigEnemyTop12.x += r
                ctx.fillStyle = 'bisque'
                ctx.fillRect(bigEnemyTop12.x-r-1,bigEnemyTop12.y-r-1,60,60)
                bigEnemyTop12.draw();
                
            let collisionX = (bigEnemyTop12.x+bigEnemyTop12.width) -dino.x -r
            let collisionY = (bigEnemyTop12.y+bigEnemyTop12.height) - dino.y -r
    
            if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop12.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop12.height))){
            alert('Game Over')     
    
            }
        
            },150)
    
        }

        if(bigTop13 == 25) {
    setInterval(function (){
            r = Math.random() *33
            bigEnemyTop13.y += r
            bigEnemyTop13.x += r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(bigEnemyTop13.x-r-1,bigEnemyTop13.y-r-1,60,60)
            bigEnemyTop3.draw();
            
        let collisionX = (bigEnemyTop13.x+bigEnemyTop13.width) -dino.x -r
        let collisionY = (bigEnemyTop13.y+bigEnemyTop13.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop13.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop13.height))){
        alert('Game Over')     

        }
    
        },150)

    }


    if(bigTop14 == 25) {
        setInterval(function (){
                bigEnemyTop14.y += 70
                bigEnemyTop14.x += 20
                ctx.fillStyle = 'bisque'
                ctx.fillRect(bigEnemyTop14.x-20-1,bigEnemyTop14.y-70-1,60,60)
                bigEnemyTop14.draw();
                
            let collisionX = (bigEnemyTop14.x+bigEnemyTop14.width) -dino.x -20
            let collisionY = (bigEnemyTop14.y+bigEnemyTop14.height) - dino.y -70
    
            if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop14.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop14.height))){
            alert('Game Over')     
    
            }
        
            },150)
    
        }

        if(bigTop15 == 27) {
    setInterval(function (){
            r = Math.random() *55
            bigEnemyTop15.y += r
            bigEnemyTop15.x += r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(bigEnemyTop15.x-r-1,bigEnemyTop15.y-r-1,60,60)
            bigEnemyTop15.draw();
            
        let collisionX = (bigEnemyTop15.x+bigEnemyTop15.width) -dino.x -r
        let collisionY = (bigEnemyTop15.y+bigEnemyTop15.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop15.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop15.height))){
        alert('Game Over')     

        }
    
        },150)

    }


    if(bigTop16 == 28) {
        setInterval(function (){
                bigEnemyTop16.y += 30
                bigEnemyTop16.x += 30
                ctx.fillStyle = 'bisque'
                ctx.fillRect(bigEnemyTop16.x-30-1,bigEnemyTop16.y-30-1,60,60)
                bigEnemyTop16.draw();
                
            let collisionX = (bigEnemyTop16.x+bigEnemyTop16.width) -dino.x -30
            let collisionY = (bigEnemyTop16.y+bigEnemyTop16.height) - dino.y -30
    
            if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop16.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop16.height))){
            alert('Game Over')     
    
            }
        
            },150)
    
        }

        if(bigTop17 == 28) {
    setInterval(function (){
            r = Math.random() *55
            bigEnemyTop17.y += r
            bigEnemyTop17.x += r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(bigEnemyTop17.x-r-1,bigEnemyTop17.y-r-1,60,60)
            bigEnemyTop17.draw();
            
        let collisionX = (bigEnemyTop17.x+bigEnemyTop17.width) -dino.x -r
        let collisionY = (bigEnemyTop17.y+bigEnemyTop17.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop7.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop7.height))){
        alert('Game Over')     

        }
    
        },150)

    }


    if(bigTop18 == 29) {
        setInterval(function (){
                bigEnemyTop18.y += 24
                bigEnemyTop18.x += 44
                ctx.fillStyle = 'bisque'
                ctx.fillRect(bigEnemyTop18.x-44-1,bigEnemyTop18.y-24-1,60,60)
                bigEnemyTop18.draw();
                
            let collisionX = (bigEnemyTop18.x+bigEnemyTop18.width) -dino.x -44
            let collisionY = (bigEnemyTop18.y+bigEnemyTop18.height) - dino.y -24
    
            if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop18.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop18.height))){
            alert('Game Over')     
    
            }
        
            },150)
    
        }

        if(bigTop19== 29) {
    setInterval(function (){
            r = Math.random() *55
            bigEnemyTop19.y += r
            bigEnemyTop19.x += r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(bigEnemyTop19.x-r-1,bigEnemyTop19.y-r-1,60,60)
            bigEnemyTop19.draw();
            
        let collisionX = (bigEnemyTop19.x+bigEnemyTop19.width) -dino.x -r
        let collisionY = (bigEnemyTop19.y+bigEnemyTop19.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+bigEnemyTop19.width)) && ((0 < collisionY) && (collisionY < dino.height+bigEnemyTop19.height))){
        alert('Game Over')     

        }
    
        },150)

    }
},900)

let enemyTop40 = {
    x : 10,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let enemyTop41 = {
    x : 50,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop42 = {
    x : 140,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop43 = {
    x : 210,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop44 = {
    x : 280,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop45 = {
    x : 350,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop46 = {
    x : 420,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop47 = {
    x : 490,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop48 = {
    x : 560,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}


let enemyTop49 = {
    x : 630,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop50 = {
    x : 10,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
let enemyTop51 = {
    x : 70,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop52 = {
    x : 140,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop53 = {
    x : 210,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop54 = {
    x : 280,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop55 = {
    x : 350,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop56 = {
    x : 420,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop57 = {
    x : 490,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let enemyTop58 = {
    x : 560,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}


let enemyTop59 = {
    x : 630,
    y : 0,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let timeTop40 = 0
let timeTop41 = 0
let timeTop42 = 0
let timeTop43 = 0
let timeTop44 = 0
let timeTop45 = 0
let timeTop46 = 0
let timeTop47 = 0
let timeTop48 = 0
let timeTop49 = 0
let timeTop50 = 0
let timeTop51 = 0
let timeTop52 = 0
let timeTop53 = 0
let timeTop54 = 0
let timeTop55 = 0
let timeTop56 = 0
let timeTop57 = 0
let timeTop58 = 0
let timeTop59 = 0


let timerTop40_59 = setInterval(function(){

    timeTop40 ++
    timeTop41 ++
    timeTop42 ++
    timeTop43 ++
    timeTop44 ++
    timeTop45 ++
    timeTop46 ++
    timeTop47 ++
    timeTop48 ++
    timeTop49 ++
    timeTop50 ++
    timeTop51 ++
    timeTop52 ++
    timeTop53 ++
    timeTop54 ++
    timeTop55 ++
    timeTop56 ++
    timeTop57 ++
    timeTop58 ++
    timeTop59 ++

if(timeTop40 == 32) {
    setInterval(function (){
            r=Math.random() * 22
            enemyTop40.y += r
            enemyTop40.x += 25
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop40.x-25-1,enemyTop40.y-r-1,20,20)
            enemyTop40.draw();
            
        let collisionX = (enemyTop40.x+enemyTop40.width) -dino.x -25
        let collisionY = (enemyTop40.y+enemyTop40.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop40.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop40.height))){
        alert('Game Over')     

        }
    
        },100)

    }


    if(timeTop41 == 32) {
        setInterval(function (){
            r=Math.random() * 22

            enemyTop41.y += r
            enemyTop41.x += 44
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop41.x-44-1,enemyTop41.y-r-1,20,20)
            enemyTop41.draw();
        let collisionX = (enemyTop41.x+enemyTop41.width) -dino.x -44
        let collisionY = (enemyTop41.y+enemyTop41.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop41.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop41.height))){
            alert('Game Over')   

        }
    
        },100)
    }
    if(timeTop42 == 32) {
        setInterval(function (){
            
            enemyTop41.y += 10
            enemyTop41.x += 10
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop41.x-10-1,enemyTop41.y-10-1,20,20)
            enemyTop41.draw();
        let collisionX = (enemyTop41.x+enemyTop41.width) -dino.x -10
        let collisionY = (enemyTop41.y+enemyTop41.height) - dino.y -10

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop41.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop41.height))){
            alert('Game Over')   

        }
    
        },100)
    }

    if(timeTop43 == 32) {
        setInterval(function (){
            enemyTop43.y += 33
            enemyTop43.x += 20
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop43.x-20-1,enemyTop43.y-33-1,20,20)
            enemyTop43.draw();
        let collisionX = (enemyTop43.x+enemyTop43.width) -dino.x -20
        let collisionY = (enemyTop43.y+enemyTop43.height) - dino.y -33

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop43.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop43.height))){
            alert('Game Over')   

        }
    
        },100)
    }

    if(timeTop44 == 32) {
        setInterval(function (){
            r = Math.random*80
            enemyTop44.y += r
            enemyTop44.x += 25
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop44.x-25-1,enemyTop44.y-r-1,20,20)
            enemyTop44.draw();
        let collisionX = (enemyTop44.x+enemyTop44.width) -dino.x - 25
        let collisionY = (enemyTop44.y+enemyTop44.height) - dino.y - 25

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop44.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop44.height))){
            alert('Game Over')    

        }
    
        },100)
    }

    if(timeTop45 == 32) {
        setInterval(function (){
            
            enemyTop44.y += 26
            enemyTop44.x += 26
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop44.x-26-1,enemyTop44.y-26-1,20,20)
            enemyTop44.draw();
        let collisionX = (enemyTop44.x+enemyTop44.width) -dino.x -26
        let collisionY = (enemyTop44.y+enemyTop44.height) - dino.y -26

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop44.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop44.height))){
            alert('Game Over')    

        }
    
        },100)
    }
    if(timeTop46 == 33) {
        setInterval(function (){
            r = Math.random() * 50
            enemyTop46.y += r
            enemyTop46.x -= r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop46.x+r-1,enemyTop46.y-r-1,20,20)
            enemyTop46.draw();
        let collisionX = (enemyTop46.x+enemyTop46.width) -dino.x +r
        let collisionY = (enemyTop46.y+enemyTop46.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop46.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop46.height))){
            alert('Game Over')    

        }
    
        },88)
    }
    
    if(timeTop47 == 33) {
        setInterval(function (){
            r = Math.random() * 50
            enemyTop47.y += r
            enemyTop47.x -= r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop47.x+r-1,enemyTop47.y-r-1,20,20)
            enemyTop47.draw();
        let collisionX = (enemyTop47.x+enemyTop47.width) -dino.x +r
        let collisionY = (enemyTop47.y+enemyTop46.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop46.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop46.height))){
            alert('Game Over')    

        }
    
        },88)
    }

    if(timeTop48 == 33) {
        setInterval(function (){
            r = Math.random() * 50
            enemyTop48.y += r
            enemyTop48.x -= r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop48.x+r-1,enemyTop48.y-r-1,20,20)
            enemyTop48.draw();
        let collisionX = (enemyTop48.x+enemyTop48.width) -dino.x +r
        let collisionY = (enemyTop48.y+enemyTop48.height) - dino.y -r

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop48.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop48.height))){
            alert('Game Over')    

        }
    
        },88)
    }

    if(timeTop49 == 33) {
        setInterval(function (){
            r = Math.random() * 50
            enemyTop49.y += 30
            enemyTop49.x -= r
            ctx.fillStyle = 'bisque'
            ctx.fillRect(enemyTop49.x+r-1,enemyTop49.y-30-1,20,20)
            enemyTop49.draw();
        let collisionX = (enemyTop49.x+enemyTop49.width) -dino.x +r
        let collisionY = (enemyTop49.y+enemyTop49.height) - dino.y -30

        if (((0 < collisionX) && (collisionX <dino.width+enemyTop49.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop49.height))){
            alert('Game Over')    

        }
    
        },88)
    }


    if(timeTop50 == 35) {
        setInterval(function (){
            r = Math.random() * 50           
                enemyTop50.y += r
                enemyTop50.x += r
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop50.x-r-1,enemyTop50.y-r-1,20,20)
                enemyTop50.draw();
                
            let collisionX = (enemyTop50.x+enemyTop50.width) -dino.x -r
            let collisionY = (enemyTop50.y+enemyTop50.height) - dino.y -r
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop50.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop50.height))){
            alert('Game Over')     
    
            }
        
            },100)
    
        }
    if(timeTop51 == 35) {
        setInterval(function (){
                enemyTop51.y += 40
                enemyTop51.x += 40
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop51.x-40-1,enemyTop51.y-40-1,20,20)
                enemyTop51.draw();
                
            let collisionX = (enemyTop51.x+enemyTop51.width) -dino.x -40
            let collisionY = (enemyTop51.y+enemyTop51.height) - dino.y -40
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop51.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop51.height))){
            alert('Game Over')     
    
            }
        
            },100)
    
        }
    
    
        if(timeTop52 == 35) {
            setInterval(function (){
                
                enemyTop52.y += 50
                enemyTop52.x += 50
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop52.x-50-1,enemyTop52.y-50-1,20,20)
                enemyTop52.draw();
            let collisionX = (enemyTop52.x+enemyTop52.width) -dino.x -50
            let collisionY = (enemyTop52.y+enemyTop52.height) - dino.y -50
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop52.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop52.height))){
                alert('Game Over')   
    
            }
        
            },100)
        }
        if(timeTop53 == 35) {
            setInterval(function (){
                r=Math.random*55
                enemyTop53.y += r
                enemyTop53.x += r
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop53.x-r-1,enemyTop53.y-r-1,20,20)
                enemyTop53.draw();
            let collisionX = (enemyTop53.x+enemyTop53.width) -dino.x -r
            let collisionY = (enemyTop53.y+enemyTop53.height) - dino.y -r
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop53.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop53.height))){
                alert('Game Over')   
    
            }
        
            },100)
        }
    
        if(timeTop54 == 35) {
            setInterval(function (){
                enemyTop54.y += 23
                enemyTop54.x += 23
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop54.x-23-1,enemyTop54.y-23+0,20,20)
                enemyTop54.draw();
            let collisionX = (enemyTop54.x+enemyTop54.width) -dino.x -23
            let collisionY = (enemyTop54.y+enemyTop54.height) - dino.y -23
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop54.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop54.height))){
                alert('Game Over')   
    
            }
        
            },100)
        }
    
        if(timeTop55 == 35) {
            setInterval(function (){
                
                enemyTop55.y += 22
                enemyTop55.x += 25
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop55.x-25-1,enemyTop55.y-22-1,20,20)
                enemyTop55.draw();
            let collisionX = (enemyTop55.x+enemyTop55.width) -dino.x - 25
            let collisionY = (enemyTop55.y+enemyTop55.height) - dino.y - 22
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop55.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop55.height))){
                alert('Game Over')    
    
            }
        
            },100)
        }
    
        if(timeTop56 == 37) {
            setInterval(function (){
                r=Math.random *44
                enemyTop56.y += r
                enemyTop56.x -= r
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop56.x+r-1,enemyTop56.y-r-1,20,20)
                enemyTop56.draw();
            let collisionX = (enemyTop56.x+enemyTop56.width) -dino.x +r
            let collisionY = (enemyTop56.y+enemyTop56.height) - dino.y -r
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop56.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop56.height))){
                alert('Game Over')    
    
            }
        
            },100)
        }
        if(timeTop57 == 37) {
            setInterval(function (){
                
                enemyTop57.y += 44
                enemyTop57.x -= 44
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop57.x+44-1,enemyTop57.y-44-1,20,20)
                enemyTop57.draw();
            let collisionX = (enemyTop57.x+enemyTop57.width) -dino.x +44
            let collisionY = (enemyTop57.y+enemyTop57.height) - dino.y -44
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop57.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop57.height))){
                alert('Game Over')    
    
            }
        
            },88)
        }
        
        if(timeTop58 == 37) {
            setInterval(function (){
                
                enemyTop58.y += 22
                enemyTop58.x -= 22
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop58.x+22-1,enemyTop58.y-22,20,20)
                enemyTop58.draw();
            let collisionX = (enemyTop58.x+enemyTop58.width) -dino.x +22
            let collisionY = (enemyTop58.y+enemyTop58.height) - dino.y -22
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop58.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop58.height))){
                alert('Game Over')    
    
            }
        
            },88)
        }
        if(timeTop59 == 37) {
            setInterval(function (){
                
                enemyTop59.y += 70
                enemyTop59.x -= 2
                ctx.fillStyle = 'bisque'
                ctx.fillRect(enemyTop59.x+2-1,enemyTop59.y-70,20,20)
                enemyTop59.draw(); 
            let collisionX = (enemyTop59.x+enemyTop59.width) -dino.x +2
            let collisionY = (enemyTop59.y+enemyTop59.height) - dino.y -70
    
            if (((0 < collisionX) && (collisionX <dino.width+enemyTop59.width)) && ((0 < collisionY) && (collisionY < dino.height+enemyTop59.height))){
                alert('Game Over')    
    
            }
        
            },88)
        }


},900)
