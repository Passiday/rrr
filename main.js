function sayHello() {
  //alert("Hello, bro");
  //document.getElementById("lielais").innerHTML = "Hacked!!!";
  const cont = document.getElementById("container"); // DOM
  for (let i = 0; i < 5; i++) {
    /*
    kx = document.createElement("div");
    kx.setAttribute("class", "kaste");
    kx.innerHTML = i;
    */
    const xmlns = "http://www.w3.org/2000/svg";
    cx = document.createElementNS(xmlns, "circle");
    cx.setAttribute("cx", Math.random() * 600);
    cx.setAttribute("cy", Math.random() * 300);
    cx.setAttribute("r", Math.random() * 50);
    cx.setAttribute("class", "bumba");

    /*
    <line>
    <rect>
    <ellipse>
    <path>
    <polygon>
    <polyline>
    */

    cont.appendChild(cx);
  }
}

let bumbaX = 50
let time = new Date()
const timeh1 = document.getElementById("lielais")
timeh1.innerHTML = "Laiks: " + String(new Date())
setInterval(() => timeh1.innerHTML = "Laiks: " + String(new Date()), 1000)

function initAnim(){

}

function Animate(){
  const c = document.querySelector("circle")
  c.setAttribute("cx", bumbaX)
  bumbaX+=1
  if (bumbaX <= 600) setTimeout(Animate,10)
}



function sayGoAway() {
  alert("Blast off, bro");
}

function bumbinator(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const borderWidth = 10;
  const x = e.clientX - rect.left - borderWidth; 
  const y = e.clientY - rect.top - borderWidth;

  const cont = document.getElementById("container");
  const xmlns = "http://www.w3.org/2000/svg";
  cx = document.createElementNS(xmlns, "circle");
  cx.setAttribute("cx", x);
  cx.setAttribute("cy", y);
  cx.setAttribute("r", Math.random() * 50);
  cx.setAttribute("class", "bumba");
  cx.setAttribute("style", "fill:red");
  cont.appendChild(cx);
}