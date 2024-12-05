let pregunta = prompt('Que cotización queres saber? 1- Dolar 2- Euro 3- Real');

if (pregunta == 1) {
    let pregunta2 = prompt("1- Compra o 2- Venta");
    if (pregunta2 == 1) {
        alert("La cotización del dolar para la compra es 1060");
    } else if (pregunta2 == 2){
        alert("La cotización del dolar para la venta es 1080");
    } else {
        alert("Opcion incorrecta");
    }
} else if (pregunta == 2) {
    let pregunta2 = prompt("1- Compra o 2- Venta");
    if (pregunta2 == 1) {
        alert("La cotización del euro para la compra es 1120");
    } else if (pregunta2 == 2){
        alert("La cotización del euro para la venta es 1180");
    } else {
        alert("Opcion incorrecta");
    }
} else if (pregunta == 3) {
    let pregunta2 = prompt("1- Compra o 2- Venta");
    if (pregunta2 == 1) {
        alert("La cotización del real para la compra es 170");
    } else if (pregunta2 == 2){
        alert("La cotización del real para la venta es 220");
    } else {
        alert("Opcion incorrecta");
    }
} else {
    alert("Opción incorrecta");
}