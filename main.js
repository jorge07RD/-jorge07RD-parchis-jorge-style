//This function load the page
window.onload = function () {
    var dx=300;
    var dy= 200;
    var myCanvas = document.getElementById('CanvasSpace');
    var ctx = myCanvas.getContext('2d');
    var image = document.getElementById("source");
    ctx.drawImage(image, 33, 71, 104, 124, dx,dy, 20, 20);
    
}

const ficha = document.querySelectorAll('.ficharoja')

ficha.forEach(ficha => {
    ficha.addEventListener('dragstart', () => {
       console.log('hola perro')
    
    })
})



var x=1;
var y=0;
var x2=1;
var y2=0;
function rollDice(){

    var die1 = document.getElementById("die1");
    var die2= document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    // posicion de dados 
    var pos =d1 + y;
    var pos2=d2 +y2;
    // total 
    var toal=pos + pos2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;

    status.innerHTML = "Tu posicion "+ pos +" e "+pos2+"="+toal;
    tiro.innerHTML = "Tu numero de tiro es "+x+" dado "+x2+".";
    x = x+1;
    y = pos;
    //segundo dado
    x2=x2+1;
    y2=pos2;

    if (pos > 99){
    	alert("EL juego ha terminado");
    	y = 0;

    }
   
}

