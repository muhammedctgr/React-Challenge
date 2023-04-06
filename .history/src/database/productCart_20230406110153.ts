import { ProductType } from "../@types/reducer/shoppingCart";

const productsCart: ProductType[] = [
  {
    color: "white",
    href: "#",
    id: 1,
    image: "/white.png",
    name: "Nike latest T-Shirt",
    packagePrice: 0,
    price: 50070.0,
    quantity: 1,
  },
  {
    color: "black",
    href: "#",
    id: 2,
    image: "/blackshirt.png",
    name: "Black Adidas T-shirt",
    packagePrice: 0,
    price: 31000,
    quantity: 1,
  },
  {
    color: "black",
    href: "#",
    id: 3,
    image: "/iphone.jpg",
    name: "Iphone 14 pro max",
    packagePrice: 0,
    price: 900000.0,
    quantity: 1,
  },
  {
    id: 4,
    name: "Americano Lono locumotion cream",
    href: "#",
    color: "",
    price: 32000.0,
    quantity: 1,
    image: "/cream.jpg",
    packagePrice: 0,
  },
  {
    id: 5,
    name: "Canoe 60.7 mega pixel",
    href: "#",
    color: "",
    price: 302000.0,
    quantity: 1,
    image: "/camera.jpg",
    packagePrice: 0,
  },
];

export default productsCart;
