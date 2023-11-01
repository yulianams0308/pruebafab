let opcion;

do {
    opcion = parseInt(prompt("Menú: \n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Salir \n Escoge una opción: "));

    if (opcion === 5) {
        console.log("Saliste!");
        break;

    }

    let num1 = parseInt(prompt("Ingresa un número: "));
    let num2 = parseInt(prompt("Ingresa otro número: "));

    switch (opcion) {
        case 1:
            console.log("Suma = ", num1 + num2);
            break;

        case 2:
            console.log("Resta = ", num1 - num2);
            break;

        case 3:
            console.log("Multiplicación = ", num1 * num2);
            break;

        case 4:
            if (num2 != 0) {
                console.log("División = ", num1 / num2);
            } else {
                console.log("No se puede dividir por cero.");
            }
            break;

        default:
            console.log("Opción no válida.");
    }
} while (opcion != 5) {

};