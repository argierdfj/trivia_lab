// Declaro la variable del boton iniciar que voy a usar para la funcion con su respectivo Id.
const botonIniciar = document.getElementById('iniciar');
// A la variable botonIniciar (que es el boton iniciar) se le aplica el .addEventListener.
botonIniciar.addEventListener('click', () => {
    //declaro las variables con los elementos html que voy a manipular identificados con su Id.
    const varPantallaPrincipal = document.getElementById('pantallaPrincipal');
    const varNombre = document.getElementById('nombre');
    const varNombreIngresado = varNombre.value.trim(); 
    const varPantallaDeOpcines = document.getElementById('pantallaDeOpciones');
    const varMensajeUsuario = document.getElementById('mensajeUsuario');

    if (varNombre) {
        varPantallaPrincipal.classList.add('ocultar');
        varPantallaDeOpcines.classList.remove('ocultar');
        varMensajeUsuario.innerText = `Hola ${varNombre.toUpperCase()}, veamos cuánto conoces del Perú.`
    } else {
        alert('Debes ingresar tu nombre para continuar');
    }
});

// Funcionalidad trivia Perú
const botonPeru = document.getElementById('peru');
botonPeru.addEventListener('click', () => {
    const varPantallaDeOpciones = document.getElementById('pantallaDeOpciones');
    const varPeru1 = document.getElementById('peru1');

    varPantallaDeOpciones.classList.add('ocultar');
    varPeru1.classList.remove('ocultar');
});

const botonSiguiente1Peru = document.getElementById('siguiente1Peru');
botonSiguiente1Peru.addEventListener('click', () => {
    const varPeru1 = document.getElementById('peru1');
    const varPeru2 = document.getElementById('peru2');

    varPeru1.classList.add('ocultar');
    varPeru2.classList.remove('ocultar');
});

const botonSiguiente2Peru = document.getElementById('siguiente2Peru');
botonSiguiente2Peru.addEventListener('click', () => {
    const varPeru2 = document.getElementById('peru2');
    const varPeru3 = document.getElementById('peru3');

    varPeru2.classList.add('ocultar');
    varPeru3.classList.remove('ocultar');
});

const botonResultadoPeru = document.getElementById('resultadoPeru');
botonResultadoPeru.addEventListener('click', () => {
    const varPeru3 = document.getElementById('peru3');
    const varResultadoOpciones = document.getElementById('resultadoOpciones');
    const varNombre = document.getElementById('nombre');
    const varUsuario = varNombre.value.toUpperCase();
    const varMensajeResultado = document.getElementById('mensajeResultado');
    const preg1Peru = document.trivia1.preg1Peru.value;
    const preg2Peru = document.trivia1.preg2Peru.value;
    const preg3Peru = document.trivia1.preg3Peru.value;
    document.trivia1.reset()

    varPeru3.classList.add('ocultar');
    varResultadoOpciones.classList.remove('ocultar');

    let correctas = 0;

    if (preg1Peru === 'Cuzco') {
        correctas++;
    }

    if (preg2Peru === 'Vicuña') {
        correctas++;
    }

    if (preg3Peru === 'Quechua') {
        correctas++;
    }

    const mensaje = [
        '¡Intentalo de nuevo!', '¡Puedes hacerlo mejor!', '¡Bien hecho!', '¡Excelente!'
    ]

    if (correctas === 1) {
        varMensajeResultado.innerText = `Tienes ${correctas} acierto ${varUsuario} \n ${mensaje[correctas]}`
    } else {
        varMensajeResultado.innerText = `Tienes ${correctas} aciertos ${varUsuario} \n ${mensaje[correctas]}`
    }


});

// Funcionalidad trivia Gastronomía
const botonGastronomia = document.getElementById('gastronomia');
botonGastronomia.addEventListener('click', () => {
    const varPantallaDeOpciones = document.getElementById('pantallaDeOpciones');
    const varGastronomia1 = document.getElementById('gastronomia1');

    varPantallaDeOpciones.classList.add('ocultar');
    varGastronomia1.classList.remove('ocultar');
});

const botonSiguiente1Gastronomia = document.getElementById('siguiente1Gastronomia');
botonSiguiente1Gastronomia.addEventListener('click', () => {

    const varGastronomia1 = document.getElementById('gastronomia1');
    const varGastronomia2 = document.getElementById('gastronomia2');

    varGastronomia1.classList.add('ocultar');
    varGastronomia2.classList.remove('ocultar');
});

const botonSiguiente2Gastronomia = document.getElementById('siguiente2Gastronomia');
botonSiguiente2Gastronomia.addEventListener('click', () => {

    const varGastronomia2 = document.getElementById('gastronomia2');
    const varGastronomia3 = document.getElementById('gastronomia3');

    varGastronomia2.classList.add('ocultar');
    varGastronomia3.classList.remove('ocultar');

});

const botonResultadoGastronomia = document.getElementById('resultadoGastronomia');
botonResultadoGastronomia.addEventListener('click', () => {

    const varGastronomia3 = document.getElementById('gastronomia3');
    const varResultadoOpciones = document.getElementById('resultadoOpciones');
    const varNombre = document.getElementById('nombre');
    const varUsuario = varNombre.value.toUpperCase();
    const varMensajeResultado = document.getElementById('mensajeResultado');
    const preg1Gastronomia = document.trivia2.preg1Gastronomia.value;
    const preg2Gastronomia = document.trivia2.preg2Gastronomia.value;
    const preg3Gastronomia = document.trivia2.preg3Gastronomia.value;
    document.trivia2.reset()

    varGastronomia3.classList.add('ocultar');
    varResultadoOpciones.classList.remove('ocultar');

    let correctas = 0;

    if (preg1Gastronomia === 'Pachamanca') {
        correctas++;
    }

    if (preg2Gastronomia === 'Papa seca y carne de cerdo') {
        correctas++;
    }

    if (preg3Gastronomia === 'Costa') {
        correctas++;
    }

    const mensaje = [
        '¡Intentalo de nuevo!', '¡Puedes hacerlo mejor!', '¡Bien hecho!', '¡Excelente!'
    ]

    if (correctas === 1) {
        varMensajeResultado.innerText = `Tienes ${correctas} acierto ${varUsuario} \n ${mensaje[correctas]}`
    } else {
        varMensajeResultado.innerText = `Tienes ${correctas} aciertos ${varUsuario} \n ${mensaje[correctas]}`
    }
});

// Funcionalidad trivia Festividades

const botonFestividades = document.getElementById('festividades');
botonFestividades.addEventListener('click', () => {
    const varPantallaDeOpciones = document.getElementById('pantallaDeOpciones');
    const varFestividades1 = document.getElementById('festividades1');
    varPantallaDeOpciones.classList.add('ocultar');
    varFestividades1.classList.remove('ocultar');
});

const botonSiguiente1Festividades = document.getElementById('siguiente1Festividades');
botonSiguiente1Festividades.addEventListener('click', () => {
    const varFestividades1 = document.getElementById('festividades1');
    const varFestividades2 = document.getElementById('festividades2');
    varFestividades1.classList.add('ocultar');
    varFestividades2.classList.remove('ocultar');
});

const botonSiguiente2Festividades = document.getElementById('siguiente2Festividades');
botonSiguiente2Festividades.addEventListener('click', () => {
    const varFestividades2 = document.getElementById('festividades2');
    const varFestividades3 = document.getElementById('festividades3');
    varFestividades2.classList.add('ocultar');
    varFestividades3.classList.remove('ocultar');
});

const botonResultadoFestividades = document.getElementById('resultadoFestividades');
botonResultadoFestividades.addEventListener('click', () => {

    const varFestividades3 = document.getElementById('festividades3');
    const varResultadoOpciones = document.getElementById('resultadoOpciones');
    const varNombre = document.getElementById('nombre');
    const varUsuario = varNombre.value.toUpperCase();
    const varMensajeResultado = document.getElementById('mensajeResultado');
    const preg1Festividades = document.trivia3.preg1Festividades.value;
    const preg2Festividades = document.trivia3.preg2Festividades.value;
    const preg3Festividades = document.trivia3.preg3Festividades.value;
    document.trivia3.reset()

    varFestividades3.classList.add('ocultar');
    varResultadoOpciones.classList.remove('ocultar');

    let correctas = 0;

    if (preg1Festividades === 'Día del Pisco Sour') {
        correctas++;
    }

    if (preg2Festividades === 'Santa Rosa de Lima') {
        correctas++;
    }

    if (preg3Festividades === 'Día de la canción criolla') {
        correctas++;
    }

    const mensaje = [
        '¡Intentalo de nuevo!', '¡Puedes hacerlo mejor!', '¡Bien hecho!', '¡Excelente!'
    ]

    if (correctas === 1) {
        varMensajeResultado.innerText = `Tienes ${correctas} acierto ${varUsuario} \n ${mensaje[correctas]}`
    } else {
        varMensajeResultado.innerText = `Tienes ${correctas} aciertos ${varUsuario} \n ${mensaje[correctas]}`
    }
});

const botonVolverAJugar = document.getElementById('vovlverAJugar');
botonVolverAJugar.addEventListener('click', () => {
    const varResultadoOpciones = document.getElementById('resultadoOpciones');
    const varPantallaDeOpcines = document.getElementById('pantallaDeOpciones');
    varResultadoOpciones.classList.add('ocultar');
    varPantallaDeOpcines.classList.remove('ocultar');
});

const botonSalir = document.getElementById('salir');
botonSalir.addEventListener('click', () => {
    const varResultadoOpciones = document.getElementById('resultadoOpciones');
    const varDespedida = document.getElementById('despedida');
    varResultadoOpciones.classList.add('ocultar');
    varDespedida.classList.remove('ocultar');
});

// // Declaro la variable del boton iniciar que voy a usar para la funcion con su respectivo Id.
// const iniciarTrivia = document.getElementById('iniciar');

// // A la variable iniciarTrivia (que es el boton iniciar) se le aplica el .addEventListener.
// iniciarTrivia.addEventListener('click', () => {
//     //declaro las variables con los elementos html que voy a manipular identificados con su Id.
//     const varPantallaPrincipal = document.getElementById('pantallaPrincipal'); // bienv, cm t llm
//     const varNombre = document.getElementById('nombre'); // declaro la variable del input text
//     const varUsuario = varNombre.value // me retorna el nombre ingresado.
//     const varOpcionesTrivia = document.getElementById('opcionesTrivia'); // 2da vista que quiero mostrar
//     const varMensajeUsuario = document.getElementById('mensajeUsuario'); // mensaje 'hola x, veamos cuanto...'


//     varPantallaPrincipal.classList.add('ocultar'); // añade la clase ocultar a la pant. princ.
//     varOpcionesTrivia.classList.remove('ocultar'); // remueve ocultar de la 2da vista (opciones)
//     varMensajeUsuario.innerText = `Hola ${varUsuario.toUpperCase()}, veamos cuánto conoces sobre el Perú`
// }) // 