function loadimages(){
    enemy_image = new Image;
    enemy_image.src = "Assets/v1.png";
    
    player_img = new Image;
    player_img.src = "Assets/superhero.png";
    
    gem_image = new Image;
    gem_image.src = "Assets/gemm.png";
}

function init(){
    canvas = document.getElementById('mycanvas');
    console.log(canvas);
    W=700;
    H=500;
    canvas.height = H;
    canvas.width = W;

    pen = canvas.getContext('2d');
    
    box = {
        x:150,
        y:50,
        w:60,
        h:60,
        speed:2 
    };

    e1 = {
		x : 150,
		y : 50,
		w : 60,
		h : 60,
		speed : 10
	};
	e2 = {
		x : 300,
		y : 150,
		w : 60,
		h : 60,
		speed : 12,
	};
	e3 = {
		x : 450,
		y : 20,
		w : 60,
		h : 60,
		speed : 15,
	};
    
    enemy = [e1,e2,e3];

    player = {
		x : 20,
		y : H/2,
		w : 60,
		h : 60,
		speed : 5,
        moving  : false,
        health : 100,
	};
	gem = {
		x : W-100,
		y : H/2,
		w : 60,
		h : 60,
    };
    
    canvas.addEventListener('onkeydown',function(){
        player.moving = true;
    });

    canvas.addEventListener('mouseup',function(){
        console.log('mouseup');
        player.moving = false;
    });
}

function draw(){

    pen.clearRect(0,0,W,H);

    pen.drawImage(player_img,player.x,player.y,player.w,player.h);
    pen.drawImage(gem_image,gem.x,gem.y,gem.w,gem.h);
    
    for(var i=0;i<enemy.length;i++){
        pen.drawImage(enemy_image,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h);
    }

}
function update(){

    if(player.moving = true){
        player.x += player.speed;
    }
    for(let i=0;i<enemy.length;i++){
        enemy[i].y += enemy[i].speed;
        if(enemy[i].y>H-enemy[i].h || enemy[i].y <0){
            enemy[i].speed *= -1;
        }   
    }
}
function gameloop(){
    draw();
    update();
    console.log('gameloop')
}

loadimages();
init();
var f = setInterval(gameloop,10);
