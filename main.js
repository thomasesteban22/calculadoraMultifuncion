/* FUNCIONAMIENTO DE LA APARICION Y DESAPARICION DE FORMULARIOS Y DEL BOTON ROJO SELECCIONADO*/
const botones = document.querySelectorAll('.btn-formulario');
const formularios = document.querySelectorAll('.formulario');
// Ocultar todos los formularios al cargar la página
formularios.forEach(formulario => formulario.classList.add('oculto'));
botones.forEach(boton => {
    boton.addEventListener('click', function() {
        mostrarFormularioAsociado(boton.id);
    });
});
function mostrarFormularioAsociado(botonId) {
    const formularioId = botonId.replace('btn-', '');
    const formulario = document.getElementById(formularioId);
    formularios.forEach(f => f.classList.add('oculto'));
    formulario.classList.remove('oculto');
    const spanElements = document.querySelectorAll('.animate__animated .animate__fade_in');
    spanElements.forEach(span => span.remove());
    let spanInicial = document.getElementById('textoConsola');
    spanInicial.textContent = '>';
    spanInicial.classList.remove('animate__fade_in');
    spanInicial.classList.add('animate__fade_out');
}
/**/
const buttons = document.querySelectorAll('button'); // Obtener todos los botones
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        if (!event.target.classList.contains('calcular')) {
            buttons.forEach(btn => btn.classList.remove('red-button'));
            event.target.classList.add('red-button');
        }
    });
});
/*FIN FUNCIONAMIENTO FORMULARIOS*/


/* OBTENCION DE FORMULARIOS Y TEXTO DE CONSOLA*/
const form1 = document.getElementById('formulario1');
const form2 = document.getElementById('formulario2');
const form3 = document.getElementById('formulario3');
const form4 = document.getElementById('formulario4');
const form5 = document.getElementById('formulario5');
const form6 = document.getElementById('formulario6');
const form7 = document.getElementById('formulario7');
const form8 = document.getElementById('formulario8');
const form9 = document.getElementById('formulario9');
const form10 = document.getElementById('formulario10');
let textoConsola = document.getElementById("textoConsola")
textoConsola.classList.add('animate__animated', 'animate__fade_out');
/* FIN OBTENCION DE FORMULARIOS Y TEXTO DE CONSOLA*/

/* EVENT LISTENER DE LOS BOTONES DE CALCULO*/
    /* FORMULARIO MCM*/
form1.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    textoConsola.textContent = '';
    const valorA = parseInt(document.getElementById('valorA').value);
    const valorB = parseInt(document.getElementById('valorB').value);
    const mcm = calcularMCM(valorA, valorB);
    let resultadoConsola = document.getElementById("textoConsola");
    resultadoConsola.classList.remove('animate__fade_out')
    resultadoConsola.classList.add('animate__fade_in')
    resultadoConsola.textContent += `> El mcm de ${valorA}  y  ${valorB} es:  ${mcm}`;
    animacionLetraPorLetra(resultadoConsola.textContent);
    let inputA = document.getElementById("valorA");
    let inputB = document.getElementById("valorB");
    inputA.value = '';
    inputB.value = '';
});
/* FIN FORMULARIO MCM*/

/* FORMULARIO MCd*/
form2.addEventListener('submit', function (event) {
    event.preventDefault();
    textoConsola.textContent = '';
    const valorA2 = parseInt(document.getElementById('valorA2').value);
    const valorB2 = parseInt(document.getElementById('valorB2').value);
    const mcd = calcularMCD(valorA2, valorB2);
    let resultadoConsola2 = document.getElementById("textoConsola");
    resultadoConsola2.classList.remove('animate__fade_out')
    resultadoConsola2.classList.add('animate__fade_in')
    resultadoConsola2.textContent += `> El mcd de ${valorA2}  y  ${valorB2} es:  ${mcd}`;
    animacionLetraPorLetra(resultadoConsola2.textContent);
    let inputA2 = document.getElementById("valorA2");
    let inputB2 = document.getElementById("valorB2");
    inputA2.value = '';
    inputB2.value = '';

});
/* FIN FORMULARIO MCd*/

/* FORMULARIO division entera*/
form3.addEventListener('submit', function (event) {
    event.preventDefault();
    textoConsola.textContent = '';
    const valorA3 = parseInt(document.getElementById('valorA3').value);
    const valorB3 = parseInt(document.getElementById('valorB3').value);
    const division = divisionEntera(valorA3, valorB3);
    let resultadoConsola3 = document.getElementById("textoConsola");
    resultadoConsola3.classList.remove('animate__fade_out')
    resultadoConsola3.classList.add('animate__fade_in')
    if(valorB3 === 0){
        resultadoConsola3.textContent += '> Syntax Error: división por 0';
    }else{
        resultadoConsola3.textContent += `> La division de ${valorA3}  y  ${valorB3} es:  ${division}`;
    }

    animacionLetraPorLetra(resultadoConsola3.textContent);
    let inputA3 = document.getElementById("valorA3");
    let inputB3 = document.getElementById("valorB3");
    inputA3.value = '';
    inputB3.value = '';
});
/*FIN FORMULARIO MCd*/

/* FORMULARIO #Primo*/
form4.addEventListener('submit', function (event) {
    event.preventDefault();
    textoConsola.textContent = '';
    const valorA4 = parseInt(document.getElementById('valorA4').value);
    const primo = esPrimo(valorA4);
    let resultadoConsola4 = document.getElementById("textoConsola");
    resultadoConsola4.classList.remove('animate__fade_out')
    resultadoConsola4.classList.add('animate__fade_in')
    resultadoConsola4.textContent += `> ${primo}`;
    animacionLetraPorLetra(resultadoConsola4.textContent);
    let inputA4 = document.getElementById("valorA4");
    inputA4.value = '';
});
/* FIN FORMULARIO #primo*/

/* FORMULARIO Fibonacci*/
form5.addEventListener('submit', function (event) {
    event.preventDefault();
    textoConsola.textContent = '';
    const valorA5 = parseInt(document.getElementById('valorA5').value);
    const fibonacciv = fibonacci(valorA5);
    console.log(fibonacciv);
    let resultadoConsola5 = document.getElementById("textoConsola");
    resultadoConsola5.classList.remove('animate__fade_out')
    resultadoConsola5.classList.add('animate__fade_in')
    resultadoConsola5.textContent = `> ${fibonacciv}`;
    animacionLetraPorLetra(resultadoConsola5.textContent);
    let inputA5 = document.getElementById("valorA5");
    inputA5.value = '';
});
/* FIN FORMULARIO #primo*/

/* FORMULARIO combinacion con rep*/
form7.addEventListener('submit', function (event) {
    event.preventDefault();
    textoConsola.textContent = '';
    const valorA7 = parseInt(document.getElementById('valorA7').value);
    const valorB7 = parseInt(document.getElementById('valorB7').value);
    const combConRep = combinacionConRep(valorA7, valorB7);
    let resultadoConsola7 = document.getElementById("textoConsola");
    resultadoConsola7.classList.remove('animate__fade_out')
    resultadoConsola7.classList.add('animate__fade_in')
    if (combConRep === "m debe ser mayor que s"){
        resultadoConsola7.textContent = "m debe ser mayor que s";
    }
    else{
        resultadoConsola7.textContent += `> El resultado de la combinacion con repeticion de ${valorA7}  y  ${valorB7} es:  ${combConRep}`;
    }
    animacionLetraPorLetra(resultadoConsola7.textContent);
    let inputA7 = document.getElementById("valorA7");
    let inputB7 = document.getElementById("valorB7");
    inputA7.value = '';
    inputB7.value = '';

});
/* FORMULARIO combinacion sin rep*/
form8.addEventListener('submit', function (event) {
    event.preventDefault();
    textoConsola.textContent = '';
    const valorA8 = parseInt(document.getElementById('valorA8').value);
    const valorB8 = parseInt(document.getElementById('valorB8').value);
    const combSinRep = combinacionConRep(valorA8, valorB8);
    let resultadoConsola8 = document.getElementById("textoConsola");
    resultadoConsola8.classList.remove('animate__fade_out')
    resultadoConsola8.classList.add('animate__fade_in')
    if (combSinRep === "m debe ser mayor que s"){
        resultadoConsola8.textContent = "m debe ser mayor que s";
    }
    else{
        resultadoConsola8.textContent += `> El resultado de la combinacion sin repeticion de ${valorA8}  y  ${valorB8} es:  ${combSinRep}`;
    }
    animacionLetraPorLetra(resultadoConsola8.textContent);
    let inputA8 = document.getElementById("valorA8");
    let inputB8 = document.getElementById("valorB8");
    inputA8.value = '';
    inputB8.value = '';

});
/* FORMULARIO permutacion con repeticion*/
form9.addEventListener('submit', function (event) {
    event.preventDefault();
    textoConsola.textContent = '';
    const valorA9 = parseInt(document.getElementById('valorA9').value);
    const valorB9 = parseInt(document.getElementById('valorB9').value);
    const permutaConRep = permutacionConRep(valorA9, valorB9);
    let resultadoConsola9 = document.getElementById("textoConsola");
    resultadoConsola9.classList.remove('animate__fade_out')
    resultadoConsola9.classList.add('animate__fade_in')
    resultadoConsola9.textContent += `> El resultado de la permutacion con repeticion de ${valorA9}  y  ${valorB9} es:  ${permutaConRep}`;
    animacionLetraPorLetra(resultadoConsola9.textContent);
    let inputA9 = document.getElementById("valorA9");
    let inputB9 = document.getElementById("valorB9");
    inputA9.value = '';
    inputB9.value = '';

});
/* FORMULARIO permutacion sin rep*/
form10.addEventListener('submit', function (event) {
    event.preventDefault();
    textoConsola.textContent = '';
    const valorA10 = parseInt(document.getElementById('valorA10').value);
    const valorB10 = parseInt(document.getElementById('valorB10').value);
    const permuSinRep = permutacionSinRep(valorA10, valorB10);
    let resultadoConsola10 = document.getElementById("textoConsola");
    resultadoConsola10.classList.remove('animate__fade_out')
    resultadoConsola10.classList.add('animate__fade_in')
    if (combSinRep === "m debe ser mayor que s"){
        resultadoConsola10.textContent = "m debe ser mayor que s";
    }
    else{
        resultadoConsola10.textContent += `> El resultado de la permutacion sin repeticion de ${valorA10}  y  ${valorB10} es:  ${permuSinRep}`;
    }
    animacionLetraPorLetra(resultadoConsola10.textContent);
    let inputA10 = document.getElementById("valorA10");
    let inputB10 = document.getElementById("valorB10");
    inputA10.value = '';
    inputB10.value = '';

});



/* FIN EVENT LISTENER DE LOS BOTONES DE CALCULO*/

/*ANIMACIONES*/
function animacionLetraPorLetra(texto) {
    textoConsola.textContent = ''; // Limpiar el contenido previo
    let i = 0;
    const intervalo = 60; // Ajustar la velocidad de animación (en milisegundos)
    const mostrarLetra = () => {
        if (i < texto.length) {
            const span = document.createElement('span');
            span.textContent = texto[i];
            span.classList.add('animate__animated', 'animate__fade_in');
            if (i === texto.length - 1) {
                span.classList.add('ultima-letra');
            }
            textoConsola.appendChild(span);
            i++;
            setTimeout(mostrarLetra, intervalo);
        }
    };

    mostrarLetra(); // Iniciar la animación
}
/* FIN ANIMACIONES*/

/*CALCULAR mcm*/
function calcularMCM(a, b) {
    // Using the Euclidean algorithm to find the GCD (greatest common divisor)
    let x = Math.max(a, b);
    let y = Math.min(a, b);

    while (y) {
        const temp = y;
        y = x % y;
        x = temp;
    }

    // MCM is the product of a and b divided by their GCD
    return (a * b) / x;
}
/*CALCULAR mcd*/
function calcularMCD(a, b) {
    if (b === 0) {
        return a;
    } else {
        return calcularMCD(b, a % b);
    }
}
/*CALCULAR division entera*/
function divisionEntera(a, b) {
    if (b === 0) {
        return "No se puede dividir por 0"
        throw new Error('No se puede dividir entre cero');

    }
    return Math.floor(a / b);
}
/* # PRIMOS */
function esPrimo(num) {
    if (num <= 1) return 'No es numero primo, numero no valido';
    if (num === 2) return "Si es numero primo";
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return 'No es numero primo';
        }
    }
    return "Si es numero primo";
}
/* FIBONACCI */
function fibonacci(num) {
    if (num <= 0) {
        return '';
    } else if (num === 1) {
        return '0';
    } else if (num === 2) {
        return '0, 1';
    } else {
        let fib = fibonacci(num - 1);
        const lastTerm = fib.split(',').pop();
        const nextTerm = parseInt(lastTerm) + parseInt(fib.split(',')[fib.split(',').length - 2]);
        fib += `, ${nextTerm}`;
        return fib;
    }
}

/*combinacion con rep*/
function combinacionConRep(m, s) {
    if (m < s || m < 1 || s < 1) {
        return "m debe ser mayor que s";
        //throw new Error("m must be greater than or equal to s and both must be greater than or equal to 1");
    }

    const numerator = factorial(m + s - 1);
    const denominator = factorial(s) * factorial(m - 1);

    return numerator / denominator;
}
/*combinacion sin rep*/
function combSinRep(m, s) {
    if (m < s || m < 1 || s < 1) {
        return "m debe ser mayor que s";
        //throw new Error("m must be greater than or equal to s and both must be greater than or equal to 1");
    }

    const numerator = factorial(m);
    const denominator = factorial(s) * factorial(m - s);

    return numerator / denominator;
}


/*permutacion con rep*/
function permutacionConRep(m, s) {
    return Math.pow(m, s);
}

function permutacionSinRep(m, s) {
    if (m < s || m < 1 || s < 1) {
        return "m debe ser mayor que s";
        //throw new Error("m must be greater than or equal to s and both must be greater than or equal to 1");
    }

    const numerator = factorial(m);
    const denominator = factorial(m - s);

    return numerator / denominator;
}


/*Funcion para hallar el factorial*/
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}