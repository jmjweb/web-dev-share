/** 
*       
* @Cat       method / brush.js
* @Desc      
* @Options    

* @Ruturn    
* @Date      2015/06
* @Author    jiangminjing    
*
**/

var options = {
	selWidth: 4,
	selColor: 'red'
}

var mousePressed = false;
var lastX, lastY;
var ctx;
var oDrawBoard = document.getElementById('drawBoard');

// 该方法用于初始化所需要的鼠标事件
function InitThis() {

    ctx = document.getElementById('drawBoard').getContext("2d");	

    oDrawBoard.onmousedown = function(e){
        mousePressed = true;
        Draw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, false);
    }
 
    oDrawBoard.onmousemove = function(e){
        if (mousePressed) {
            Draw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        }
    }
 
    oDrawBoard.onmouseup = function(e){
        mousePressed = false;
    }

    oDrawBoard.onmouseleave = function(e){
        mousePressed = false;
   	}

}

// 该方法在鼠标左键被按下时每次移动都会画一条线
function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = options.selColor;
        ctx.lineWidth = options.selWidth;
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x; lastY = y;
}

// 该方法用于清空画板上的所有线条
function clearArea() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}      




// 初始化
InitThis();

// 监听事件
window.onkeypress = function(event){
	// `键 开启关闭画板
	if(event.keyCode === 96){
        if(oDrawBoard.style.display == 'block'){
            oDrawBoard.style.display = 'none';
        }else{
            oDrawBoard.style.display = 'block';
        }
		
	}
	// c键 清除画板
	if(event.keyCode === 99){
		clearArea();
	}
}
