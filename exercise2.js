firstAlert();
let cont = 1;

function eleven(e) {
    if(e.key == "Enter"){
        const n = document.querySelector(".input-number").value;
        
        cont++;
    if(cont <= 0){
        alert(`Ingrese la nota ${cont}`);

    }else {
        alert(`No se permiten mas notas`);
    }

        //for(let i = 1; i<=8; i++){
            
            
       // }
        //let result = "";
        //for (let i = 0; i <= n; i++){
        //
        }
    }


function firstAlert(){
    alert("ingrese la nota 1");

}