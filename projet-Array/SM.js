let array =[","];
 let ele ;
 document.getElementById("submit").addEventListener("click",function(){
    ele = document.getElementById("text").ariaValueMax; 
    array.push("ele");
    document.getElementById("output")=array;
 })
 document.getElementById("rest").addEventListener("click",function(){
   if(array !== null){
    array.pop("ele");
    document.getElementById("output")=array;
   }
 })