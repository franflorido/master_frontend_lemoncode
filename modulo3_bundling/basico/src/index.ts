import logoImg from "./content/logo_2.png";
import "./mystyles.scss";

const message: string = "Hello World!";
console.log(message);

const img: HTMLImageElement = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);
