function calcular(){
       
    var valor = document.getElementById("valor").value;
    
  
    var result= document.getElementById('result');
    var total= document.getElementById('total');
  
    
    var descuento = parseInt(valor)*0.08;
  
    
    result.innerHTML = 'Ahorro de: $' + descuento;
    total.innerHTML =  'Total:     $' + (parseInt(valor)-descuento);
}
function calcular(){
       
    var valor = document.getElementById("valor").value;
    
  
    var result= document.getElementById('result');
    var total= document.getElementById('total');
  
    
    var descuento = parseInt(valor)*0.08;
  
    
    result.innerHTML = 'Ahorro de: $' + descuento;
    total.innerHTML =  'Total:     $' + (parseInt(valor)-descuento);
}