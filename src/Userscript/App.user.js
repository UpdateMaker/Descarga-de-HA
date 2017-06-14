// ==UserScript==
// @name            Descarga de HA
// @version         1.1
// @author          Juan Ignacio Veron Desimoni
// @include         *.ha.*
// @exclude         https://www.ha.com/
// @downloadURL https://github.com/UpdateMaker/Descarga-de-HA/raw/master/src/Userscript/App.user.js
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant GM_download
// ==/UserScript==]

document.addEventListener('contextmenu', function(e) {

 if (event.target.tagName.toUpperCase() == 'IMG') {

      var src = event.target.src;
      var w = event.target.width;
     var h = event.target.height;
     var name = event.target.alt;
     var Pregunta = prompt("La resolución de la imagen actual es de "+w+" x "+h + " ¿cuantas veces mas grande quieres descargarla?", "");
     if(Pregunta == "") {alert("No olvides de completar los campos");}
     else{
if (Pregunta != null || Pregunta >= 1) { 
var ol = src.search("sizedata");
var n1 = Number(Pregunta);
var n2 = Number(src.substr(ol + 11 , 3 ));
var n3 = Number(src.substr(ol + 15 , 3 ));
var f1 = n1 * n2;
var f2 = n1 * n3;
var ff = f1 + "x" + f2;

var res = src.substr(0, ol + 11);
var res1 = src.substr(ol + 18 , src.length - (ol + 18) );
var ur = res + ff + res1;    
alert("Se descargo la imagen a "+ w*Pregunta +"x" + h*Pregunta );
var arg = { url: ur,
name: name + "(" +w*Pregunta +"x" + h*Pregunta+")"+ ".jpg"};
GM_download(arg);
}}}});
