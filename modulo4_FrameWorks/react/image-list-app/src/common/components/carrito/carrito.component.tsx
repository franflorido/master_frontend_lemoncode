import React from "react";
import { PictureInfo } from "../main-page/main-page.vm";
import "./carrito.layout.css"
import { ImgCarrito } from "./carrito.image-card";

interface Props {
  animals: PictureInfo[];
  onImageClickCarrito: (animal:any) => void
}

export const Carrito: React.FC<Props> = (props) => {
  const { animals, onImageClickCarrito } = props;

  return (
    <div className="list-user-list-container-carrito">
      {animals.map((animal) => (
          <ImgCarrito key={animal.id} animal={animal} onClick={()=>onImageClickCarrito(animal)}/>
      ))}
    </div>
  );
};