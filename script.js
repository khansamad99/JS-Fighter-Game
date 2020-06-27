function loadimages(){

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
}

function draw(){

    pen.clearRect(0,0,W,H);
    pen.fillStyle = "red";
    pen.fillRect(box.x,box.y,box.w,box.h);

}
function update(){

   box.y+=box.speed;
   if(box.y>=H-box.h||box.y<0){
       box.speed*=-1;
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