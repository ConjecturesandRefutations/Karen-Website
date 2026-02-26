// Banco de Mexico
import bancoFeatured from "../assets/images/Banco_de_Mexico/Featured.jpg";
import bancoTwo from "../assets/images/Banco_de_Mexico/Two.jpg";
import bancoThree from "../assets/images/Banco_de_Mexico/Three.jpg";
import bancoFour from "../assets/images/Banco_de_Mexico/Four.jpg";
import bancoFive from "../assets/images/Banco_de_Mexico/Five.jpg";

// Bienestar
import bienestarFeatured from "../assets/images/Bienestar/Featured.jpg";
import bienestarTwo from "../assets/images/Bienestar/Two.png";
import bienestarThree from "../assets/images/Bienestar/Three.png";
import bienestarFour from "../assets/images/Bienestar/Four.png";
import bienestarFive from "../assets/images/Bienestar/Five.png";

// Visa Conexiones
import visaFeatured from "../assets/images/Visa_Conexiones/Featured.jpg";
import visaTwo from "../assets/images/Visa_Conexiones/Two.jpg";
import visaThree from "../assets/images/Visa_Conexiones/Three.jpg";
import visaFour from "../assets/images/Visa_Conexiones/Four.jpg";
import visaFive from "../assets/images/Visa_Conexiones/Five.jpg";


export const projects = [
  {
    id: "banco-de-mexico",
    title: "Banco de Mexico",
    category: "Concept & Exhibition Design",
    featuredImage: bancoFeatured,
    content: [
      `Conoce cuál es el papel del Banco de México en nuestra vida, el Banco de México contribuye al bienestar de las personas al mantener la estabilidad de precios, ya que cuida el poder adquisitivo de nuestro dinero para que podamos decidir qué hacer con él en el presente y en el futuro. `,
  `En esta sala se explican las funciones del Banco mediante interactivos que enfatizan su objetivo prioritario y cómo ello se relaciona con la vida cotidiana de todos los mexicanos. El hilo conductor de las explicaciones es el dinero y sus distintas presentaciones con lo cual se introduce el sistema financiero y los sistemas de pagos.`,
`La finalidad de esta perspectiva de las finanzas en la sociedad es que el visitante comprenda cómo el objetivo prioritario del Banco de México –procurar la estabilidad de precios o combatir la inflación-, repercute directamente en la mayoría de sus actividades. La exposición también pretende explicar con mayor profundidad cómo ejerce el Banco de México su política monetaria mediante un ejercicio interactivo que muestra, de forma práctica, la interacción entre la tasa de interés de referencia que establece la Junta de Gobierno del banco central y la tasa de inflación futura.`,
`La exposición se completa con reseñas históricas de los procesos inflacionarios y sus consecuencias sobre la economía del país, así como con los ejemplos más característicos de otras economías.`,
    ],
    images: [
      bancoTwo,
      bancoThree,
      bancoFour,
      bancoFive,
      bancoFeatured
    ]
  },
  {
    id: "bienestar",
    title: "Bienestar",
    category: "Concept & Exhibition Design",
    featuredImage: bienestarFeatured,
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis tellus nunc, nec mattis nisi maximus in. Praesent sodales elementum ex, et aliquet nulla aliquam a. Ut interdum lorem eget purus mattis, sed blandit nisl suscipit. Sed sed quam non massa volutpat euismod. Nam quis vulputate est, elementum blandit enim. In nibh lorem, eleifend eu ex eget, posuere rutrum ipsum. Vivamus placerat egestas magna, in placerat tortor feugiat non. Nullam mollis nibh sem, quis volutpat eros sagittis eu. Etiam sapien tortor, porta at urna fringilla, elementum rhoncus lorem. Morbi vitae felis vel lectus gravida congue.
    `,
    images: [
      bienestarTwo,
      bienestarThree,
      bienestarFour,
      bienestarFive,
      bienestarFeatured
    ]
  },
  {
    id: "visa_conexiones",
    title: "Visa Conexiones",
    category: "Concept & Exhibition Design",
    featuredImage: visaFeatured,
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis tellus nunc, nec mattis nisi maximus in. Praesent sodales elementum ex, et aliquet nulla aliquam a. Ut interdum lorem eget purus mattis, sed blandit nisl suscipit. Sed sed quam non massa volutpat euismod. Nam quis vulputate est, elementum blandit enim. In nibh lorem, eleifend eu ex eget, posuere rutrum ipsum. Vivamus placerat egestas magna, in placerat tortor feugiat non. Nullam mollis nibh sem, quis volutpat eros sagittis eu. Etiam sapien tortor, porta at urna fringilla, elementum rhoncus lorem. Morbi vitae felis vel lectus gravida congue.
    `,
    images: [
      visaTwo,
      visaThree,
      visaFeatured,
      visaFour,
      visaFive,
    ]
  }
];
