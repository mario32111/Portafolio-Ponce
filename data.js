const proyectos = [
  {
    titulo: "Practica 1",
    descripcion:
      "La primera practica de la unidad 3, consiste en hacer el uso de tablas y sus celdas prara almacenar datos e imagenes",
    link: "htmlprac.atwebpages.com/practicas/practicas/practica1",
    fecha: "01/12/2023",
    imagen: "p2.png",
    tecnologias: ["HTML",""],
  },
  {
    titulo: "Practica 2",
    descripcion:
      "Esta practica es algo sencilla, tan solo habia que hacer uso del lorem y de las listas ordenadas y enumeradas para darle algo de formato al texto",
    link: "htmlprac.atwebpages.com/practicas/practicas/practica2",
    fecha: "01/12/2023",
    imagen: "p1.png",
    tecnologias: ["HTML",""],
  },
  {
    titulo: "Practica 3",
    descripcion:
      "Practica en la que se debia replicar una estructura propuesta html por el docente, aqui se emepezo a hacer uso de las hojas de estilo",
    link: "htmlprac.atwebpages.com/practicas/practicas/practica3",
    fecha: "01/12/2023",
    imagen: "p3.png",
    tecnologias: ["HTML","CSS"],
  },
  {
    titulo: "Practica 4",
    descripcion:
      "En esta practica habia que desarrollar la vista principal de una pagina de tema libre, en este caso se eligio la tematica de una tienda online en la que se desarrollo la maquetacion la vista principal de dicha, ademas de que debia ser desarrollada desde cero es decir sin hacer uso de plantillas",
    link: "htmlprac.atwebpages.com/practicas/practicas/practica4/view",
    fecha: "01/12/2023",
    imagen: "p4.png",
    tecnologias: ["HTML","CSS"],
  },
  {
    titulo: "Practica 5",
    descripcion:
      "En esta practica se nos dio a conocer una tecnologia usada para desarrollar la parte visual de una pagina web mucho mas rapido, esta herramienta es bootstrap, que a traves de plantillas se logran crear paginas bastante bien disenadas",
    link: "htmlprac.atwebpages.com/practicas/practicas/practica5/startbootstrap-personal-gh-pages",
    fecha: "01/12/2023",
    imagen: "p5.png",
    tecnologias: ["HTML,CSS,JS, BOOTSTRAP"],
  },
  {
    titulo: "Practica 6",
    descripcion:
      "En esta practica haciendo uso de los formularios de html, se debian extraer los datos de dicho formulario con un arhivo php para procesar esos datos, y con esos datos crear una tarjeta de presentacion",
    link: "htmlprac.atwebpages.com/practicas/practicas/practica6/view/",
    fecha: "01/12/2023",
    imagen: "p6.png",
    tecnologias: ["HTML","CSS","PHP",],
  },
  {
    titulo: "Practica 7",
    descripcion:
    "En esta practica habia que consumir una API REST y mostrar los datos en un archivo html",
    link: "htmlprac.atwebpages.com/practicas/practicas/practica7/view",
    fecha: "01/12/2023",
    imagen: "p7.png",
    tecnologias: ["HTML","CSS","JS",],
  },
  {
    titulo: "Practica 8",
    descripcion:
    "En esta practica habia que hacer una maquetacion de unas tarjetas meteorologicas, ademas los datos de estas tarjetas deben ser obtenidos de una API-REST, de tal manera que sea informacion proveniente de un servidor y en tiempo real",
    link: "htmlprac.atwebpages.com/practicas/practicas/practica8/view",
    fecha: "01/12/2023",
    imagen: "p8.png",
    tecnologias: ["HTML","CSS","JS",],
  },
];

const informacionPersonal = {
  nombre: "Gonzalo Bechara Baladi",
  subtitulo: "Desarrollador web",
  imagen: "img/yo.png",
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
