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
    category: "Installation",
    featuredImage: bancoFeatured,
    content: `
      Examining the Economics of Banking in Mexico
    `,
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
    category: "Interactive Media",
    featuredImage: bienestarFeatured,
    content: `
      A responsive light installation reacting to motion...
    `,
    images: [
      bienestarTwo,
      bienestarThree,
      bienestarFour,
      bienestarFeatured
    ]
  },
  {
    id: "visa_conexiones",
    title: "Visa Conexiones",
    category: "Interactive Media",
    featuredImage: visaFeatured,
    content: `
      A responsive light installation reacting to motion...
    `,
    images: [
      visaTwo,
      visaThree,
      visaFour,
      visaFive,
      visaFeatured
    ]
  }
];
