import "./style.css";

// Creamos la interfaz GrupoMusical con la información de cada grupo y su tipo
interface GrupoMusical {
    nombre: string;
    año: number;
    activo: boolean;
    genero: string;
}

// Creamos los géneros en variables independientes y así también les asignamos un logotipo
const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

// Creamos la constante para definir el estilo del nombre de los grupos
const estiloNombre = "font-weight: bold; font-size: 16px; background-color: green;";

// Declaramos cada grupo musical referenciandolo a la interfaz y con su información correspondiente
const grupoA: GrupoMusical = {
    nombre: "The Beatles",
    año: 1960,
    activo: true,
    genero: popRock,
}

const grupoB: GrupoMusical = {
    nombre: "Queen",
    año: 1970,
    activo: false,
    genero: rock,
}

const grupoC: GrupoMusical = {
    nombre: "AC DC",
    año: 1973,
    activo: true,
    genero: hardRock,
}

const grupoD: GrupoMusical = {
    nombre: "Ludwig van Beethoven",
    año: 1770,
    activo: false,
    genero: clasica,
}

const grupoE: GrupoMusical = {
    nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    genero: rock,
}

// Sacamos por consola la información de cada grupo musical para que nos lo muestre por pantalla, aplicando los estilos definidos al nombre
console.log(`%c${grupoA.nombre}`, estiloNombre,`/ ${grupoA.año} / Activo: ${grupoA.activo} / ${grupoA.genero} `);
console.log(`%c${grupoB.nombre}`, estiloNombre,`/ ${grupoB.año} / Activo: ${grupoB.activo} / ${grupoB.genero} `);
console.log(`%c${grupoC.nombre}`, estiloNombre,`/ ${grupoC.año} / Activo: ${grupoC.activo} / ${grupoC.genero} `);
console.log(`%c${grupoD.nombre}`, estiloNombre,`/ ${grupoD.año} / Activo: ${grupoD.activo} / ${grupoD.genero} `);
console.log(`%c${grupoE.nombre}`, estiloNombre,`/ ${grupoE.año} / Activo: ${grupoE.activo} / ${grupoE.genero} `);