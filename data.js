const proyectos = [
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
    ],["Node",6],["Python",5],["C#",3]
  ],
  redes: [
    ["github", "https://github.com/cacalo"],
    ["linkedin", "https://www.linkedin.com/in/gonzalo-bechara-baladi-05b14353/"],
    ["youtube", "https://www.youtube.com/@puntoJson"],
    ["instagram", ""],
  ]
};
