
window.onload = function () {
    var dx=300;
    var dy= 200;
    var myCanvas = document.getElementById('CanvasSpace');
    var ctx = myCanvas.getContext('2d');
    var image = document.getElementById("source");
    ctx.drawImage(image, 33, 71, 104, 124, dx,dy, 20, 20);
    
}

var ficharoja;

var mousex = null;
var mousey = null;




document.addEventListener("dragstart", function( event ) {

    ficharoja = event.target;


    console.log('hola')
    
    
}, false);

document.addEventListener("dragend", function(event){
    ficharoja = event.target;
    event.target.style.opacity = "";
    event.dataTransfer.setDragImage(event.target, 0, 0);

    mousex = event.pageX;
            
    mousey = event.pageY;


    document.getElementById("data").style.position="absolute";
    document.getElementById("data").style.left=(mousex-170)+"px";
    document.getElementById("data").style.top=(mousey-180)+"px";



},false);

document.addEventListener("dragover", function( event ) {
 
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function( event ) {
    
    if ( event.target.className == "tablero" ) {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("dragleave", function( event ) {
    
    if ( event.target.className == "tablero" ) {
        event.target.style.background = "";
    }

}, false);







document.addEventListener("drop", function( event ) {
    
    event.preventDefault();
 
    if ( event.target.className == "tablero" ) {
        event.target.style.background = "";
        event.target.style.opacity = "";
        ficharoja.parentNode.removeChild( ficharoja );
        event.target.appendChild( ficharoja );
        
               
                // Posicion absoluta del raton
                mousex = event.pageX;
            
                mousey = event.pageY;


                document.getElementById("data").style.position="absolute";
                document.getElementById("data").style.left=(mousex-170)+"px";
                document.getElementById("data").style.top=(mousey-180)+"px";

    }
  
}, false);

var turno  = document.getElementById("tiro");

var x=1;
var y=0;
var x2=1;
var y2=0;
var count = 1;
function rollDice(){

    var die1 = document.getElementById("die1");
    var die2= document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    // posicion de dados 
    var pos =d1;
    var pos2=d2; 
    // total 
    var toal=pos + pos2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
 
    if(count==1 & pos != pos2){
        count = 2;
        status.innerHTML = "Tu posicion "+ pos +" e "+pos2+"="+toal;
        tiro.innerHTML = "turno del lado rojo";
        document.getElementById("tiro").style.background="red";
    } else if (count==1 & pos == pos2){
        count = 1;
        status.innerHTML = "Tu posicion "+ pos +" e "+pos2+"="+toal;
        tiro.innerHTML = "turno del lado rojo de nuevo";
        document.getElementById("tiro").style.background="red";
    } else if (count==2 & pos != pos2){
        count = 3;
        status.innerHTML = "Tu posicion "+ pos +" e "+pos2+"="+toal;
        tiro.innerHTML = "turno del lado amarrillo";
        document.getElementById("tiro").style.background="yellow";
    } else if (count==2 & pos == pos2){
        count = 2;
        status.innerHTML = "Tu posicion "+ pos +" e "+pos2+"="+toal;
        tiro.innerHTML = "turno del lado amarrillo de nuevo";
        document.getElementById("tiro").style.background="yellow";
    }else if (count==3 & pos != pos2){
        count = 4;
        status.innerHTML = "Tu posicion "+ pos +" e "+pos2+"="+toal;
        tiro.innerHTML = "turno del lado verde";
        document.getElementById("tiro").style.background="green";
    } else if (count==3 & pos == pos2){
        count = 3;
        status.innerHTML = "Tu posicion "+ pos +" e "+pos2+"="+toal;
        tiro.innerHTML = "turno del lado verde de nuevo";
        document.getElementById("tiro").style.background="green";
    }else if (count==4 & pos != pos2){
        count = 1;
        status.innerHTML = "Tu posicion "+ pos +" e "+pos2+"="+toal;
        tiro.innerHTML = "turno del lado azul";
        document.getElementById("tiro").style.background="dodgerblue";
    } else if (count==4 & pos == pos2){
        count = 4;
        status.innerHTML = "Tu posicion "+ pos +" e "+pos2+"="+toal;
        tiro.innerHTML = "turno del lado azul de nuevo";
        document.getElementById("tiro").style.background="dodgerblue";
    }
    
   
    
   





    x = x+1;
    y = pos;
    //segundo dado
    x2=x2+1;
    y2=pos2;

    if (pos > 999){
    	alert("EL juego ha terminado");
    	y = 0;

    }
   
}

