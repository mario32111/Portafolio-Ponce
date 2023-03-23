const proyectos = [
  {
    titulo: "Compositor online de música",
    descripcion:
      "Página web con compositor online de música. Front y Back completos hechos por mí.",
    link: "https://musicboxmelodies.com/",
    fecha: "01/01/2022",
    imagen: "mbm.png",
    tecnologias: ["Angular", "Typescript", "SCSS", "NodeJs","GraphQL","ToneJs","Paypal","Social Login"],
  },
  {
    titulo: "Pong",
    descripcion:
      "Landing del canal de YouTube puntoJson",
    link: "https://cacalo.github.io/pong-html/",
    fecha: "29/03/2023",
    imagen: "pong.png",
    tecnologias: ["Javascript"],
  },
  {
    titulo: "Landing puntoJson",
    descripcion:
      "Landing del canal de YouTube puntoJson",
    link: "https://puntojson.com/",
    fecha: "22/03/2023",
    imagen: "paginaoficial.png",
    tecnologias: ["Angular", "Typescript", "SCSS"],
  },
  {
    titulo: "Pokédex",
    descripcion:
      "Herramienta para ver información de distintos pokémon, inspirada en la pokedex de pokemon diamante brillante. Obtiene los datos de una API.",
    link: "https://pokedex-puntojson.netlify.app/",
    fecha: "29/02/2023",
    imagen: "pokedex.jpg",
    tecnologias: ["Angular", "Typescript", "SCSS", "PokeApi"],
  },
  {
    titulo: "Calo responde",
    descripcion:
      "Juego para hacer creer a la gente de que hay una inteligencia artificial que sabe todo sobre tí.",
    link: "https://cacalo.github.io/Calo-responde/",
    fecha: "29/02/2023",
    imagen: "calo responde.png",
    tecnologias: ["HTML","CSS","Javascript"],
  },
  {
    titulo: "Mega curso HTML",
    descripcion:
      "Curso completo de HTML, en donde explico desde lo más básico (¿Qué es una etiqueta?) hasta conceptos complejos (ARIA).",
    link: "https://youtu.be/xF5HIi84Few",
    fecha: "29/02/2023",
    imagen: "html mega curso.png",
    tecnologias: ["HTML"],
  },
  {
    titulo: "Test de mecanografía",
    descripcion:
      "Juego para ver quién puede escribir más rápido. Se te da un minuto y tenés que escribir la mayor cantidad de letras correctas evitando escribir letras incorrectas.",
    link: "https://cacalo.github.io/test-mecanografia/",
    fecha: "29/02/2023",
    imagen: "mecanografia.png",
    tecnologias: ["HTML","CSS","Javascript","APIs"],
  },
  {
    titulo: "Contador de truco",
    descripcion:
      "Herramienta para ver información de distintos pokémon, inspirada en la pokedex de pokemon diamante brillante. Obtiene los datos de una API.",
    link: "https://cacalo.github.io/Contador-truco/",
    fecha: "29/02/2023",
    imagen: "truco.png",
    tecnologias: ["HTML","CSS","Javascript"],
  },
  {
    titulo: "Porfolio",
    descripcion:
      "Sitio web donde se pueden ver todos los proyectos que hice, las visualización de los proyectos se genera en tiempo de ejecución desde una constante por lo cual es de fácil mantenimiento.",
    link: "https://cacalo.github.io/portfolio-basico/",
    fecha: "08/02/2023",
    imagen: "portfolio.png",
    tecnologias: ["HTML", "CSS", "Javascript"],
  },
  {
    titulo: "Ruelta personalizable",
    descripcion:
      "Herramienta para generar un sorteo entre opciones y visualizarlo como si fuese una ruleta. Para practicar eventos y para demostrar el uso que puede tener la matemática en un proyecto.",
    link: "https://cacalo.github.io/Ruleta-cusomizable/",
    fecha: "08/02/2023",
    imagen: "ruleta.png",
    tecnologias: ["HTML", "CSS", "Javascript"],
  },
  {
    titulo: "Reloj digital",
    descripcion:
      "Práctica en donde usamos limitaciones en el código para programar algo 'sensillo' de una manera más compleja, terminando en un reloj programado segmento a segmento. Se usa mucho los distintos tipos de posicionamiento básicos, el relativo y el absoluto.",
    link: "https://cacalo.github.io/reloj-digital/",
    fecha: "08/02/2023",
    imagen: "reloj digital.png",
    tecnologias: ["HTML", "CSS", "Javascript"],
  },
  {
    titulo: "Herramienta para un 'amigo invisible'",
    descripcion:
      "Herramienta que nos permite gestionar varios sorteos de amigos invisibles (una actividad en donde se hacen regalos entre grupos de amigos). Está creada pensada en su eso en teléfonos.",
    link: "https://amigo-inivisible.netlify.app/",
    fecha: "08/02/2023",
    imagen: "amigo invisible.png",
    tecnologias: ["Angular", "Ionic", "Typescript"],
  },
  ,
  {
    titulo: "Ta-Te-Ti",
    descripcion:
      "Proyecto sencillo de un juego de Ta-te-ti, en donde vemos lo básico de algoritmos y generamos uno para detectar si algún jugador ganó la partida.",
    link: "https://cacalo.github.io/Ta-Te-Ti/",
    fecha: "08/02/2023",
    imagen: "tateti.png",
    tecnologias: ["HTML", "CSS", "Javascript"],
  },
  {
    titulo: "Calculadora",
    descripcion:
      "Proyecto de práctica de calculadora sencilla.",
    link: "https://cacalo.github.io/calculadora-basica/",
    fecha: "08/02/2023",
    imagen: "calculadora.png",
    tecnologias: ["HTML", "CSS", "Javascript"],
  },
  {
    titulo: "Página sencilla",
    descripcion:
      "Proyecto orientado para que alguien que esté dando sus primeros pasos en el desarrollo web se pueda copiar",
    link: "https://cacalo.github.io/introduccion-basica-html-css/",
    fecha: "08/02/2023",
    imagen: "introduccion basica.png",
    tecnologias: ["HTML", "CSS", "Javascript"],
  },
];

const informacionPersonal = {
  nombre: "Calo",
  subtitulo: "Desarrollador web",
  imagen: "img/calo1.png",
  otros: [
    ["Nacionalidad", "Argentino"],
    [
      "Edad",
      new Date(new Date() - new Date("1993/12/27")).getFullYear()-1970 + " años",
    ],
  ],
  idiomas: [
    ["Español", "Nativo"],["Inglés", "Muy bueno"],["Japonés", "Principiante"],
  ],
  tecnologias: [
    ["Html", 9],["Css", 8],["Javascript", 9],["Typescript", 8],["Angular", 8
    ],["Ionic",7],["Node",6],["Python",5],["C#",3]
  ],
  redes: [
    ["github", "https://github.com/cacalo"],
    ["linkedin", "https://www.linkedin.com/in/gonzalo-bechara-baladi-05b14353/"],
    ["youtube", "https://www.youtube.com/@puntoJson"],
    ["instagram", ""],
  ]
};
