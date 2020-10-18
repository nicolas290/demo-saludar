  var caja=document.getElementById("caja");

function saludar(){
var nombre = document.getElementById("txt").value;
var resp = document.getElementById("resp");

if(nombre ==""){
resp.innerHTML ="complete los campos";
}else{
resp.innerHTML=`hola ${nombre}`;
} 

}



 document.getElementById("demo1").addEventListener("click",()=>{

caja.innerHTML=`<h1>demo1</h1>

nombre<br>
<input id="txt"  type="text" placeholder="ingresa tu nombre"/>
<button onclick="saludar()">saludar</button>
<p id="resp"></p> <br>

`;
 });