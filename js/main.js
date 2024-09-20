
let precioFinal = 0;
let CarritoDeCompra = [];
//agregar funcion para sumar vinos al stock


    
    const Don_david = {
        nombre: "Don david",
        año:2022,
        capacidad:750,
        precio:8972,
    }

    
    const fond_de_cave = {
        nombre:"fond de cave",
        año:2021,
        capacidad:750, 
        precio:6540,       
    }

    
    const alma_mora = {
        nombre:"alma mora",
        año:2023,
        capacidad:750,  
        precio:7500,      
    }

const Malbec = [ alma_mora,fond_de_cave,Don_david ]

    
    const Trumpeter = {
        nombre:'trumpeter',
        año:2021,
        capacidad:2023,
        precio:9600,
    }
    
    
    const SantaJulia = {
        nombre:'santa julia',
        año:2022,
        capacidad:375,   
        precio:7850,     
    }

    
    const EscorihuelaGascon = {
        nombre:'Escorihuela Gascon',
        año:2019,
        capacidad:750,    
        precio:5900,    
    }

const Chardonnay = [Trumpeter,SantaJulia,EscorihuelaGascon]

    
    const FondDeCave = {
        nombre:'fond de cave',
        año:2019,
        capacidad:750,
        precio:6800,
    }
    
    
    const FondDeCaveR = {
        nombre:'fond de cave reserva',
        año:2012,
        capacidad:750, 
        precio:10500,       
    }

    
    const SaintFelicien = {
        nombre:'saint felicien',
        año:2022,
        capacidad:750, 
        precio:8450,       
    }

const Cabernet = [FondDeCave,FondDeCaveR,SaintFelicien]



const SeleccionarUva = ( ) => {
    let inventario = prompt (" bienvenido seleccione la uva que desea consultar (malbec/ Chardonnay/ Cabernet) o coloque 'cancelar' para salir")
    switch (inventario) {
        case 'malbec' :
            console.table(Malbec)
            AgregarAlCarritoMalbec()
            break;

        case 'chardonnay' :
            console.table(Chardonnay)
            AgregarAlCarritoChardonnay()
            break;

        case 'cabernet':
            console.table (Cabernet)
            AgregarAlCarritoCabernet()
            break;

        case 'cancelar' :
            alert ('gracias por su visita, ¡¡¡hasta pronto!!!')
            break;

        default :
            alert('seleccione una opcion de las mostradas')
            SeleccionarUva ()
        
    } 
    

}
let AgregarAlCarritoMalbec = () => {
    let BotellaMalbec = parseInt(prompt ('que botella de malbec desea agregar? (1 para alma mora-2 para fond de cave-3 para Don David), 4 si quiere volver al menu de seleccion de uva o 5 para salir')) 
    indiceMalbec = (BotellaMalbec - 1)
        switch (BotellaMalbec) {
            case 1 :
                alert('usted agrego una botella de '+ Malbec[indiceMalbec].nombre +' malbec al carrito con un valor de $'+ Malbec[indiceMalbec].precio)
                CarritoDeCompra.push (Malbec[indiceMalbec].precio)
                console.log (CarritoDeCompra)
                AgregarAlCarritoMalbec()
                
            case 2 :
                alert('usted agrego una botella de '+ Malbec[indiceMalbec].nombre +' malbec al carrito con un valor de $'+ Malbec[indiceMalbec].precio)
                CarritoDeCompra.push (Malbec[indiceMalbec].precio)
                console.log (CarritoDeCompra)
            case 3 :
                alert('usted agrego una botella de '+ Malbec[indiceMalbec].nombre +' malbec al carrito con un valor de $'+ Malbec[indiceMalbec].precio)
                CarritoDeCompra.push (Malbec[indiceMalbec].precio)
                console.log (CarritoDeCompra)
            case 4 :
                SeleccionarUva()
                break;
            
            case 5 :
                alert ('gracias por todo, adios.')
                break;
            
            default :
            alert ('porfavor coloque una de las opciones mostradas en el mensaje')
        }

            
        }

let AgregarAlCarritoChardonnay = () => {
    let BotellaChardonnay = parseInt(prompt ('que botella de chardonnay desea agregar? (1-2-3)')) 
    IndiceChardonnay = (BotellaChardonnay - 1)
        switch (BotellaChardonnay) {
            case 1 :
                alert('usted agrego una botella de '+ Chardonnay[IndiceChardonnay].nombre +' Chardonnay al carrito con un valor de $'+ Chardonnay[IndiceChardonnay].precio)
                CarritoDeCompra.push (Chardonnay[IndiceChardonnay].precio)
                console.log (CarritoDeCompra)
                AgregarAlCarritoMalbec()
                
            case 2 :
                alert('usted agrego una botella de '+ Chardonnay[IndiceChardonnay].nombre +' Chardonnay al carrito con un valor de $'+ Chardonnay[IndiceChardonnay].precio)
                CarritoDeCompra.push (Chardonnay[IndiceChardonnay].precio)
                console.log (CarritoDeCompra)
            case 3 :
                alert('usted agrego una botella de '+ Chardonnay[IndiceChardonnay].nombre +' Chardonnay al carrito con un valor de $'+ Chardonnay[IndiceChardonnay].precio)
                CarritoDeCompra.push (Chardonnay[IndiceChardonnay].precio)
                console.log (CarritoDeCompra)
            case 4 :
                SeleccionarUva()
                break;
            
            case 5 :
                alert ('gracias por todo, adios.')
                break;
            
            default :
            alert ('porfavor coloque una de las opciones mostradas en el mensaje')
        }
}

let AgregarAlCarritoCabernet = () => {
    let BotellaCabernet = parseInt(prompt ('que vino desea agregar? (1-2-3)')) 
        switch (BotellaCabernet) {
            case 1 :
            case 2 :
            default :
                alert('la opcion ingresada no es correcta, vuelva a intentarlo.')   
                AgregarAlCarritoCabernet()    
        
    }

}


// let Carrito = () => {
//     let agregar = prompt ('desea agregar un vino'+vinoSeleccionado+' al carrito? (si/no)').toLowerCase
//     if (agregar == 'si') {
                     //puedo meter un while si quiere volver a agregar otro vino o salir 
                     //calclar el total del carrito
//     } else {
//         alert ('gracias, lo redirigimos al listado inicial')
//         SeleccionarUva ()

//     }
 
 //}

            

    

 
    
 
     
SeleccionarUva ()

