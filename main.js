//step 5
var mouseEvent = "";
var last_position_x,last_position_y;
//step 6
canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//step 7
color="black";
circle_radius=20;
line_info=5;
//step 8
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    
    color=document.getElementById("color").value;
    circle_radius=document.getElementById("circle_radius").value;
    line_info=document.getElementById("line_info").value;
    mouseEvent="mousedown";
    console.log("last position of x and y="+last_position_x+","+last_position_y);
}
//step 9
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    color=document.getElementById("color").value;
    circle_radius=document.getElementById("circle_radius").value;
    line_info=document.getElementById("line_info").value;
    mouseEvent="mouseup";
}
//step 10
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    color=document.getElementById("color").value;
    circle_radius=document.getElementById("circle_radius").value;
    line_info=document.getElementById("line_info").value;
    mouseEvent="mouseleave";
}
//step 11
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    //step 12
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent=="mousedown")
    {
        console.log("Current positions of x and y coordinates ");
        console.log("x = " + current_position_of_mouse_x + " y = " + current_position_of_mouse_y);
        //step 13
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_info;
       
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,circle_radius,0,2 * Math.PI);
        ctx.stroke();
    }
    last_position_x=current_position_of_mouse_x;
    last_position_y=current_position_of_mouse_y;

    color=document.getElementById("color").value;
    circle_radius=document.getElementById("circle_radius").value;
    line_info=document.getElementById("line_info").value;
    
}
function clear_fu(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}