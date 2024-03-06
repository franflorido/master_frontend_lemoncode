import React from "react";
import { createRoot } from "react-dom/client";
import logoImg from "./content/logo_2.png";
import "./mystyles.scss";

console.log(`API BASE ${process.env.API_BASE}`);

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <span>Hola Mundo con React!!</span>
  </div>
);

const img: HTMLImageElement = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);
