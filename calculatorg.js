const display= document.getElementById("display");
function appendToDisplay(input){
   display.value += input;
}
function clearDisplay(input){
   display.value="";
}
function Calculate(){
   try{
       display.value=eval(display.value);
      }
   catch(error){
   display.value="Error";
}
}
function displayDate(){
   const date=document.getElementById('demo').innerHTML=new Date();
}