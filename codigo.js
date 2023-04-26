//navegacion
function cambiar(x) {
   document.querySelectorAll("a")[x].style.color="var(--e)";
   document.querySelectorAll("a")[x].style.background="#797678";
   document.querySelectorAll("a")[x].style.transition= "all 1s";
   }
   
   function soltar(y) {
    document.querySelectorAll("a")[y].style.background="var(--bi)";
    document.querySelectorAll("a")[y].style.color="var(--d)";
    document.querySelectorAll("a")[x].style.transition= "all 1s";
    
   }


var videos = ["/video/video1.mp4","/video/video2.mp4","/video/video4.mp4","/video/video5.mp4"];
var frase = [ "BLACK-FRIDAY", "Moda que Gusta", "Nuestras Mejores Prendas","Vive Tu Estilo"];
var x = 0;

//------avanzar retorceder home--
function retroceso(a) { 
   if(a==1){
    document.getElementById("slider-video").src = videos[x];
    document.getElementsByClassName("texto")[0].innerHTML = frase[x];
    x--;

    if (x < 0) x = 3;  
   }
}
function siguiente() {
    document.getElementById("slider-video").src = videos[x];
    document.getElementsByClassName("texto")[0].innerHTML = frase[x];
    x++;
    if (x >= videos.length) x = 0;
}

//------mostar texto o imagen home----
function encima(x) {
    document.getElementsByClassName("efecto")[x].style.display = "flex";
    document.getElementsByClassName("efecto")[x].style.background = "var(--dimgray)";
    document.getElementsByClassName("efecto")[x].style.transition = "all 2s";
    document.getElementsByClassName("efecto")[x].style.opacity = "0.5";
 }
 function fuera(y){
    document.getElementsByClassName("efecto")[y].style.display="none";
    document.getElementsByClassName("efecto")[x].style.transition = "all 1s";
 }
 //------galerias----
function efecto(x){
document.getElementsByClassName("galeria-item")[x].style.transform="scale(1.2)"

}

function salir(y){
 document.getElementsByClassName("galeria-item")[y].style.transform="none"     
}
//--------cambio iconos------

function iconoCamb(a){
   var img = a.getAttribute("data-ico");
   a.src = ["/img/"+ img + "_1"+".png"]
   a.style.cursor = "pointer";
   a.style.transition = "all 3s";
}
function iconoFu(a){
   var img = a.getAttribute("data-ico");
   a.src ="/img/"+ img +".png";
   a.style.transition = "all 1s";
}

for (var i = 0; i < document.getElementsByClassName("icon").length; i++) {
   document.getElementsByClassName("icon")[i].setAttribute("onmouseover", "iconoCamb(this)");
   document.getElementsByClassName("icon")[i].setAttribute("onmouseout", "iconoFu(this)");
}
 //--------cambiar de imagen ellas--------
 function cambio(e) {
  var img = e.getAttribute("data-ropa");
   e.src = ["/img/ropaMujer/"+ img + "_1"+".jpg"]
   e.style.cursor = "pointer";
   e.style.transition = "all 3s"; 
}

function suelta(e) {
   var img = e.getAttribute("data-ropa");
   e.src ="/img/ropaMujer/"+ img  +".jpg";
   e.style.transition = "all 1s";
}
for (var i = 0; i < document.getElementsByClassName("ropas").length; i++) {
   document.getElementsByClassName("ropas")[i].setAttribute("onmouseover", "cambio(this)");
   document.getElementsByClassName("ropas")[i].setAttribute("onmouseout", "suelta(this)");

}
//--------nosotros---
function nosotros(){
   document.getElementsByClassName("imagen").style.transform="scale(1.2)"
   }
   
   function salirNo(){
    document.getElementsByClassName("imagen").style.transform="none"     
   }
   //----fotmulario---
   function formulario(){
      var nombre=document.getElementById("nombre").value;
      var grado=document.getElementById("grado").value;
      var direccion=document.getElementById("direccion").value;
      var telefono=document.getElementById("telefono").value;
      var correo=document.getElementById("correo").value;
      var terminos=document.getElementById("terminos");
      var sexo=document.getElementById("sexo").value;
      var textos=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      var email = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
      var celu=/^(\()?\d{3}(\))?(|\s)?\d{3}(|\s)\d{3}$/;
      var dir=/[a-z0-9ñçáéíóú\s]/i;
      if(!textos.test(nombre)){
         alert("No ingreso los nombres");
      }
       else if(!textos.test(grado)){
         alert("No ingreso el grado");
      }
      else if(!dir.test(direccion)){
         alert("No ingreso la direccion");
      }
      else if(!celu.test(telefono)){
         alert("No ingreso el telefono corectamente");
      }
       else if(!email.test(correo)){
       alert("Correo no valido");
       }
       
       else if(sexo.checked==false){
         alert("Valide los terminos");
      }
      else if(terminos.checked==false){
         alert("Valide los terminos");
      }
      
      else{
         alert("Datos correctamente ingresados");
         document.getElementsByClassName("respuesta")[0].innerHTML="NOmbres y Apellidos:"
         +nombre+"<br>"+"Ocupacion: "+grado+"<br> Dirección: "+direccion+"<br> Telefono: "
         +telefono+"<br> Correo Electronico: "+correo+"<br> Sexo: "+sexo;
      }     
   }
   //----------producto-----
   function pro(e) {
      var img = e.getAttribute("data-pro");
       e.src = ["/img/life/"+ img + "_1"+".jpeg"]
       e.style.cursor = "pointer";
       e.style.transition = "all 3s"; 
    }
    
    function prodes(e) {
       var img = e.getAttribute("data-pro");
       e.src ="/img/life/"+ img  +".jpeg";
       e.style.transition = "all 1s";
    }
    for (var i = 0; i < document.getElementsByClassName("pro").length; i++) {
       document.getElementsByClassName("pro")[i].setAttribute("onmouseover", "pro(this)");
       document.getElementsByClassName("pro")[i].setAttribute("onmouseout", "prodes(this)");
    
    }
    //------enlace------
    function enlaenci(){
      document.getElementsByClassName("enlace")[0].style.transform="scale(1.2)"
      document.getElementsByClassName("enlace")[0].style.color="var(--bi)"
      }
      
      function enlasal(){
       document.getElementsByClassName("enlace")[0].style.transform="none"  
       document.getElementsByClassName("enlace")[0].style.color="var(--dimgray)"  
      }
      //-----------nosotros-----
      function cambio(e) {
         var img = e.getAttribute("data-logo");
         e.style.transform = "rotateY(360deg)";
         e.style.transition = "all 1s";
     }
     
     function regresa(e) {
         var img = e.getAttribute("data-logo");
         e.style.transform = "rotateY(0deg)";
         e.style.transition = "all 1s";
     }
     for (var i = 0; i < document.getElementsByClassName("logos").length; i++) {
         document.getElementsByClassName("logos")[i].setAttribute("onmouseover", "cambio(this)");
         document.getElementsByClassName("logos")[i].setAttribute("onmouseout", "regresa(this)");
     
     }
   





