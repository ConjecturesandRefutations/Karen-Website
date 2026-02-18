import featuredOne from "../images/Project_1/Featured_Image_1.jpg";
import featuredTwo from "../images/Project_2/Gallery.jpg";


export const projects = [
  {
    id: "silent-architecture",
    title: "Silent Architecture",
    category: "Installation",
    featuredImage: featuredOne,
    content: `
      A spatial exploration of negative space and sound absence...
    `,
    images: [
      "/images/silent-architecture/1.jpg",
      "/images/silent-architecture/2.jpg"
    ]
  },
  {
    id: "echoes-of-light",
    title: "Echoes of Light",
    category: "Interactive Media",
    featuredImage: featuredTwo,
    content: `
      A responsive light installation reacting to motion...
    `,
    images: [
      "/images/echoes/1.jpg",
      "/images/echoes/2.jpg"
    ]
  }
];
