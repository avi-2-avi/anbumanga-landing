import manga1 from "../assets/images/manga1.png";
import manga2 from "../assets/images/manga2.png";
import manga3 from "../assets/images/manga3.png";

interface Manga {
  title: string;
  body: string;
  price: string;
  src: any;
  alt: string;
}

const mangas: Manga[] = [
  {
    title: "One Piece",
    body: "Una aventura de piratas en busca del tesoro más grande del mundo, el 'One Piece'.",
    price: "S./ 9.99",
    src: manga1,
    alt: "One Piece cover",
  },
  {
    title: "Dragon Ball",
    body: "La historia de Goku y sus amigos en la búsqueda de las Esferas del Dragón.",
    price: "S./ 8.99",
    src: manga2,
    alt: "Dragon Ball cover",
  },
  {
    title: "Chainsaw Man",
    body: "Denji, un cazador de demonios que se convierte en el hombre motosierra.",
    price: "S./ 11.99",
    src: manga3,
    alt: "Chainsaw Man cover",
  },
];

export default mangas;
