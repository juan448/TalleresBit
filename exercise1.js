

function eleven(e){

    
    if(e.key == "Enter"){


    const n = document.querySelector('.input-number').value;
    alert(n);
    
    let result = "";

    for(let i = 0; i <= n; i++){
    result = result + `<td>${i*11}<td>`
    
    }

    let tableContent = `<tr> ${result} </tr>`;

    document.querySelector('.tbody').innerHTML = tableContent;
   }

}