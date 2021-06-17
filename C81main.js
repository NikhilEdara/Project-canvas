canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",draw);
function draw(e){
    color=document.getElementById("color").value;
    console.log(color);
    mouse_X=e.clientX-canvas.offsetLeft;
    mouse_Y=e.clientY-canvas.offsetTop;
    circle(mouse_X,mouse_Y);
}
function circle(mouse_X,mouse_Y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_X,mouse_Y,40,0,2*Math.PI);
    ctx.stroke(); 
}
function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}