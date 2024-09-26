
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
    let inventario = prompt (" bienvenido seleccione la uva que desea consultar  (malbec/ Chardonnay/ Cabernet) o coloque 'cancelar' para salir")
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

        case 'cancelar':
            alert ('gracias por su visita, ¡¡¡hasta pronto!!!')
            break;

        default :
            alert('seleccione una opcion de las mostradas')
            SeleccionarUva ()
        
    } 
    
// TODO LO COMENTADO QUEDA PARA FUTURO!!!! 
}
let AgregarAlCarritoMalbec = () => {
    let BotellaMalbec = parseInt(prompt ('que botella de malbec desea agregar? \n\ 1 para alma mora \n\ 2 para fond de cave \n\ 3 para Don David \n\ 4 si quiere volver al menu de seleccion de uva \n\ 5 para salir')) 
    indiceMalbec = (BotellaMalbec - 1)
        switch (BotellaMalbec) {
            case 1 :
                alert('usted agrego un '+ Malbec[indiceMalbec].nombre +' malbec al carrito con un valor de $'+ Malbec[indiceMalbec].precio)
                PrecioBotella = Malbec[indiceMalbec].precio
                CantidadDeProductos ()
                // CarritoDeCompra.push (Malbec[indiceMalbec].precio)
                // console.log (CarritoDeCompra)
                // IrAlCarrito ()
                break;

                
            case 2 :
                alert('usted agrego un '+ Malbec[indiceMalbec].nombre +' malbec al carrito con un valor de $'+ Malbec[indiceMalbec].precio)
                PrecioBotella = Malbec[indiceMalbec].precio
                CantidadDeProductos ()
                // CarritoDeCompra.push (Malbec[indiceMalbec].precio)
                // console.log (CarritoDeCompra)
                // IrAlCarrito ()
                break;
            case 3 :
                alert('usted agrego un'+ Malbec[indiceMalbec].nombre +' malbec al carrito con un valor de $'+ Malbec[indiceMalbec].precio)
                PrecioBotella = Malbec[indiceMalbec].precio
                CantidadDeProductos ()// CarritoDeCompra.push (Malbec[indiceMalbec].precio)
                // console.log (CarritoDeCompra)
                // IrAlCarrito ()
                break;
            case 4 :
                SeleccionarUva()
                break;
            
            case 5 :
                alert ('gracias por todo, adios.')
                return;
            
            
            default :
            alert ('porfavor coloque una de las opciones mostradas en el mensaje')
            AgregarAlCarritoMalbec ()
        }

            
        }

let AgregarAlCarritoChardonnay = () => {
    let BotellaChardonnay = parseInt(prompt ('que botella de Chardonnay desea agregar? (1 para trumpeter-2 para santa Julia-3 para Escorihuela Gascon), 4 si quiere volver al menu de seleccion de uva o 5 para salir')) 
    IndiceChardonnay = (BotellaChardonnay - 1)
        switch (BotellaChardonnay) {
            case 1 :
                alert('usted agrego una botella de '+ Chardonnay[IndiceChardonnay].nombre +' Chardonnay al carrito con un valor de $'+ Chardonnay[IndiceChardonnay].precio)
                PrecioBotella = Chardonnay[IndiceChardonnay].precio
                CantidadDeProductos ()
                // CarritoDeCompra.push (Chardonnay[IndiceChardonnay].precio)
                // console.log (CarritoDeCompra)
                // IrAlCarrito ()
                break;
                
            case 2 :
                alert('usted agrego una botella de '+ Chardonnay[IndiceChardonnay].nombre +' Chardonnay al carrito con un valor de $'+ Chardonnay[IndiceChardonnay].precio)
                PrecioBotella = Chardonnay[IndiceChardonnay].precio
                CantidadDeProductos ()
                // CarritoDeCompra.push (Chardonnay[IndiceChardonnay].precio)
                // console.log (CarritoDeCompra)
                // IrAlCarrito ()
                break;
            case 3 :
                alert('usted agrego una botella de '+ Chardonnay[IndiceChardonnay].nombre +' Chardonnay al carrito con un valor de $'+ Chardonnay[IndiceChardonnay].precio)
                PrecioBotella = Chardonnay[IndiceChardonnay].precio
                CantidadDeProductos ()
                // CarritoDeCompra.push (Chardonnay[IndiceChardonnay].precio)
                // console.log (CarritoDeCompra)
                // IrAlCarrito ()
                break;
            case 4 :
                SeleccionarUva()
                break;
            
            case 5 :
                alert ('gracias por todo, adios.')
                break;
            
            default :
            alert ('porfavor coloque una de las opciones mostradas en el mensaje')
            AgregarAlCarritoChardonnay ()
        }
}

let AgregarAlCarritoCabernet = () => {
    let BotellaCabernet = parseInt(prompt ('que botella de Cabernet desea agregar? (1 para Fond de Cave-2 para Fond de cave Reserva-3 para Saint Felicien), 4 si quiere volver al menu de seleccion de uva o 5 para salir')) 
    IndiceCabernet = (BotellaCabernet - 1)
        switch (BotellaCabernet) {
            case 1 :
                alert('usted agrego una botella de '+ Cabernet[IndiceCabernet].nombre +' Cabernet al carrito con un valor de $'+ Cabernet[IndiceCabernet].precio)
                PrecioBotella = Cabernet[IndiceCabernet].precio
                CantidadDeProductos ()
                // CarritoDeCompra.push (Cabernet[IndiceCabernet].precio)
                // console.log (CarritoDeCompra)
                // IrAlCarrito ()
                break;
            case 2 :
                alert('usted agrego una botella de '+ Cabernet[IndiceCabernet].nombre +' Cabernet al carrito con un valor de $'+ Cabernet[IndiceCabernet].precio)
                PrecioBotella = Cabernet[IndiceCabernet].precio
                CantidadDeProductos ()
                // CarritoDeCompra.push (Cabernet[IndiceCabernet].precio)
                // console.log (CarritoDeCompra)
                // IrAlCarrito ()
                break;
            case 3 :
                alert('usted agrego una botella de '+ Cabernet[IndiceCabernet].nombre +' Cabernet al carrito con un valor de $'+ Cabernet[IndiceCabernet].precio)
                PrecioBotella = Cabernet[IndiceCabernet].precio
                CantidadDeProductos ()
                // CarritoDeCompra.push (Cabernet[IndiceCabernet].precio)
                // console.log (CarritoDeCompra)
                // IrAlCarrito ()
                // break;
            case 4 :
                SeleccionarUva()
                break;
            case 5 :
                alert ('gracias por todo, adios.')
                break;
            default :
                alert('la opcion ingresada no es correcta, vuelva a intentarlo.')   
                AgregarAlCarritoCabernet()    
        
    }

}


let CantidadDeProductos = () => {
    let seguir = true 
    while (seguir) {
        let numero = parseInt(prompt("ingrese la cantidad de botellas que desea"))
        CantBotellas = numero
        
        let confirmation = parseInt(prompt("usted desea agregar " + CantBotellas + " botellas al carrito?  \n\  1-para continuar  \n\  2-para volver a introducir cantidad"))
        if (confirmation == 1 ) {
            seguir = false
            console.log("continuamos al carrito")
            
        }
    }
    CalcularTotal ()
}

let CalcularTotal = () => {
    TotalCarrito = CantBotellas * PrecioBotella
    alert ("El precio total es $" + TotalCarrito)
    Abonar ()

}

let Abonar = () => {
    let FormaDePago = parseInt (prompt("seleccione el metodo de pago: \n\ 1: tarjeta de credito \n\ 2: tarjeta de debito \n\ 3: mercado pago \n\ 4: efectivo "))
        switch (FormaDePago) {
            case 1 : 
                alert ("gracias por comprar en nuestra tienda, que tengas un lindo dia")
                return;
            
            case 2:
                alert ("gracias por comprar en nuestra tienda, que tengas un lindo dia")
                return;

            case 3:
                alert ("gracias por comprar en nuestra tienda, que tengas un lindo dia")
                return;

            case 4:
                alert ("gracias por comprar en nuestra tienda, que tengas un lindo dia")
                return;

            default:
                alert ("ingresa una forma de pago valida")
                abonar ()
        }
}
// let IrAlCarrito = () => {
//     let continuar = parseInt(prompt('Desea continuar al carrito? (1, ir al carrito/ 2, seguir comprando)'))
//     if (continuar == 1 ) {
//         carritoDeCompra ()
//     } else if (continuar == 2) {
//         SeleccionarUva ()
        
//     } else {
//         alert("porfavos seleccione una de las opciones")
//         IrAlCarrito ()
//     }
// }

// let carritoDeCompra = () => {
//     let sumarcarrito = parseInt(prompt ("desea ver el total del carrito? 1 para mostrar el total/ 2 para volver al menu anterior"))
//         if (sumarcarrito == 1) {
//             for (let i=carritoDeCompra[0]; i=carritoDeCompra[carritoDeCompra.length-1];i++){
//                 let totalDelCarrito = i
//                 console.log(i)
//                 pagar(console.log (irAPagar))
//             }
//         } else if (sumarcarrito == 2){
//             IrAlCarrito ()
//         }else {
//             alert("porfavor introduzca una de las opciones")
//             carritoDeCompra ()
//         }
    
// }

// function irAPagar () {
//     let FinalizarCompra = parseInt (prompt ("desea pagar el total? (1) o desea volver al menu de compra? (2)"))
//         if (FinalizarCompra == 1) {
//             alert("gracias por su compra, que lo disfrute!!!")
//             return
            
//         }else if (FinalizarCompra == 2) {
//             SeleccionarUva()
//         }else {
//             alert ("seleccione una opcion de las mostradas")
//         }
// }

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

