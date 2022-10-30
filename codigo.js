
    
function calculo(){
    let cant=document.getElementById('Cantidad').value
    let categoria=document.getElementById('Categoría').value
    const precio=200

    let desc=0
    switch (categoria) {
        case 'Estudiante':
            desc=0.2
            break;
    
        case 'Trainee':
            desc=0.5
            break;
            case 'Junior':
                desc=0.85
                break;

    }
    console.log(desc)
    console.log(cant)
    if(cant>0){
        let valor=cant*desc*precio
        
        document.getElementById('Total').innerText='Total a pagar: $'+Math.floor(valor)
        document.getElementById('Cantidad').nodeValue=0
        categoria='Estudiante'
        
        
    }else
    document.getElementById('Total').innerText='Ingrese una cantidad mayor a "0" '
        //document.getElementById('Total').innerText('Ingrese la cantidad de tickets deseada')

}

