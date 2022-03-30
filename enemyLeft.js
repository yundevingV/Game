let enemyLeft = {
    x : 0,
    y : Math.random() * 700,
    width : 10,
    height : 10,
    draw(){
        ctx.fillStyle ='green'; 
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
