var canvas=document.getElementById("my_canvas");
ctx =canvas.getContext("2d");
color="blue";
var last_position_x, last_position_y;
width_of_a_line = 2;
var mouseEvent="empty";



canvas.addEventListener("mousedown", mouse_down );

function mouse_down(e){  mouseEvent="mouseDown" ;
}

canvas.addEventListener("mouseup", mouse_up);

function mouse_up(e) {  mouseEvent="mouseUp" ;
}


canvas.addEventListener("mouseleave", mouse_leave);

function mouse_leave(e) {  mouseEvent="mouseLeave" ;
}


canvas.addEventListener("mousemove", mouse_move);

function mouse_move(e) {  
curren_x_postion=e.clientX - canvas.offsetLeft; 
curren_y_postion=e.clientY - canvas.offsetTop;

if (mouseEvent=="mouseDown"){
    ctx.beginPath(); 
ctx.strokeStyle = color;
 ctx.lineWidth = width_of_a_line ; 
 console.log("x = " + last_position_x + "y = " + last_position_y);
ctx.moveTo ( last_position_x,last_position_y);
console.log("x = " + curren_x_postion + "y = " + curren_y_postion);
ctx.lineTo(curren_x_postion,curren_y_postion);
ctx.stroke();
}

 last_position_x=curren_x_postion;
last_position_y=curren_y_postion;


}

