// Declaro la variable del boton iniciar que voy a usar para la funcion con su respectivo Id.
const botonIniciar = document.getElementById('iniciar');

// A la variable botonIniciar (que es el boton iniciar) se le aplica el .addEventListener.
botonIniciar.addEventListener('click', () => {
    //declaro las variables con los elementos html que voy a manipular identificados con su Id.
    const varPantallaPrincipal = document.getElementById('pantallaPrincipal');
    const varNombre = document.getElementById('nombre').value;
    const varPantallaDeOpcines = document.getElementById('pantallaDeOpciones');
    const varMensajeUsuario = document.getElementById('mensajeUsuario');

    varPantallaPrincipal.classList.add('ocultar');
    varPantallaDeOpcines.classList.remove('ocultar');
    varMensajeUsuario.innerText = `Hola ${varNombre.toUpperCase()}, veamos cuánto conoces del Perú.`
});

const botonGastronomia = document.getElementById('gastronomia');

botonGastronomia.addEventListener('click', () => {
    const varPantallaDeOpcines = document.getElementById('pantallaDeOpciones');
    const varGastronomia1 = document.getElementById('gastronomia1');

    varPantallaDeOpcines.classList.add('ocultar');
    varGastronomia1.classList.remove('ocultar');
})

const botonSiguiente1Gastronomia = document.getElementById('siguiente1Gastronomia');

botonSiguiente1Gastronomia.addEventListener('click', () => {

    const varGastronomia1 = document.getElementById('gastronomia1');
    const varGastronomia2 = document.getElementById('gastronomia2');

    varGastronomia1.classList.add('ocultar');
    varGastronomia2.classList.remove('ocultar');
})

const botonSiguiente2Gastronomia = document.getElementById('siguiente2Gastronomia');

botonSiguiente2Gastronomia.addEventListener('click', () => {

    const varGastronomia2 = document.getElementById('gastronomia2');
    const varGastronomia3 = document.getElementById('gastronomia3');

    varGastronomia2.classList.add('ocultar');
    varGastronomia3.classList.remove('ocultar');

})

const botonResultadoGastronomia = document.getElementById('resultadoGastronomia')

botonResultadoGastronomia.addEventListener('click', () => {

    const varGastronomia3 = document.getElementById('gastronomia3');
    const varResultadoOpciones = document.getElementById('resultadoOpciones');
    const varNombre = document.getElementById('nombre');
    const varUsuario = varNombre.value;
    const varmensajeResultado = document.getElementById('mensajeResultado');
    const preg1gastronomia = document.trivia1.preg1gastronomia.value;
    const preg2gastronomia = document.trivia1.preg2gastronomia.value;
    const preg3gastronomia = document.trivia1.preg3gastronomia.value;

    varGastronomia3.classList.add('ocultar');
    varResultadoOpciones.classList.remove('ocultar');

    let correctas = 0;

    if (preg1gastronomia === 'Pachamanca') {
        correctas++;
    }

    if (preg2gastronomia === 'Papa seca y carne de cerdo') {
        correctas++;
    }

    if (preg3gastronomia === 'Costa') {
        correctas++;
    }

    if (correctas === 1) {
        varmensajeResultado.innerText = `${varUsuario} Tienes ${correctas} acierto`
    } else {
        varmensajeResultado.innerText = `${varUsuario} Tienes ${correctas} aciertos`
    }

   // varmensajeResultado.innerText = ` ${varUsuario} Tienes ${correctas} aciertos`

})



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