var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let dino = {
    x : 300,
    y : 300,
    width : 20,
    height : 20,
    draw(){
        ctx.fillStyle ='red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
dino.draw();






window.addEventListener("keydown", moveSomething, false);

function moveSomething(e) {
	switch(e.keyCode) {
		case 37:
        dino.x-=10
        ctx.fillStyle = 'bisque'
        ctx.fillRect(dino.x+10,dino.y,20,20)
        dino.draw();
        if(dino.x==-10){
            dino.x =0
            dino.draw()
        }
        if(dino.y == -10){
            dino.y =0
            dino.draw()
        }
        if(dino.x==700){
            dino.x = 690
            dino.draw()
        }
        if(dino.y==680){
            dino.y =670
            dino.draw()
        }
 //이런식으로 출동이벤트 생성
        //left
        break;
		
        case 38:
        dino.y-=10
        ctx.fillStyle = 'bisque'
        ctx.fillRect(dino.x,dino.y+10,20,20)
        dino.draw();
        if(dino.x==-10){
            dino.x =0
            dino.draw()
        }
        if(dino.y == -10){
            dino.y =0
            dino.draw()
        }
        if(dino.x==700){
            dino.x = 690
            dino.draw()
        }
        if(dino.y==680){
            dino.y =670
            dino.draw()
        }
        //up
		break;
		
        case 39:
        dino.x+=10
        ctx.fillStyle = 'bisque'
        ctx.fillRect(dino.x-10,dino.y,20,20)
        dino.draw();
        if(dino.x==-10){
            dino.x =0
            dino.draw()
        }
        if(dino.y == -10){
            dino.y =0
            dino.draw()
        }
        if(dino.x==700){
            dino.x = 690
            dino.draw()
        }
        if(dino.y==680){
            dino.y =670
            dino.draw()
        }
        //right
		break;
		
        case 40:
        dino.y+=10
        ctx.fillStyle = 'bisque'
        ctx.fillRect(dino.x,dino.y-10,20,20)
        dino.draw();
        if(dino.x==-10){
            dino.x =0
            dino.draw()
        }
        if(dino.y == -10){
            dino.y =0
            dino.draw()
        }
        if(dino.x==700){
            dino.x = 690
            dino.draw()
        }
        if(dino.y==700){
            dino.y =690
            dino.draw()
        }
        //down
		break;	
        
	}	
}


