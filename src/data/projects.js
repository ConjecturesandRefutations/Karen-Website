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
    category: "Exhibition Designer – Spatial Concept - Interactive media integration",
    featuredImage: bancoFeatured,
    content: [
      `Permanent exhibition about the Central Bank of Mexico exploring the financial system and its impact on everyday life.`,
  `For this project I wanted to incorporate elements of the iconic building of the Central Bank, keeping the language of steel structures and solid forms as symbols of stability and reliability, brought into a dynamic exhibition environment with bright colors and animated light details. Interactive stations, including multiplayer games and role-playing experiences, were integrated to communicate the principles of monetary policy in an engaging and approachable way.`,
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
    category: "Exhibition Designer – Spatial Concept - Interactive media integration",
    featuredImage: bienestarFeatured,
    content: [`
      Permanent exhibition illustrating how economic growth relates to quality of life, showing how subjective factors and different conditions influence the individual perception and global indicators such as the Better Life Index. 
    `,
  `For this project, I created a concept based on the sunrise, which can serve as an abstract yet universal symbol of well-being and enjoyment. With gradient walls painted by hand and a mix of natural woods, we created a warmer, more human atmosphere, contrasting with the more technical feel of the rest of the museum. 
    `],
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
    title: "Sala El futuro del dinero",
    category: "Exhibition Designer – Spatial Concept - Interactive media integration",
    featuredImage: visaFeatured,
    content: [`
      Exhibition designed to introduce visitors to emerging tools and technologies for digital payments and electronic transactions. Through a range of interactive media, including audio installations, video games and a 360° projection, it explores the evolution of the concept of money into an intangible transaction system. 
    `,
  `The design challenge was to transform four small rooms of a 300-year-old, protected building into a futuristic gallery that would feel like one single exhibition space that encourages visitors to explore and interact with each station.
    `],
    images: [
      visaTwo,
      visaThree,
      visaFeatured,
      visaFour,
      visaFive,
    ]
  }
];
