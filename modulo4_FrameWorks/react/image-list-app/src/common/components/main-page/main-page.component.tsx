import React , { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { ListAnimalComponent } from "./main-page.img-list";
import { PictureInfo } from "./main-page.vm";
import { Carrito } from "../carrito/carrito.component";
import "./main-page.layout.css"

interface Props {
  animals: PictureInfo[];
  selectedImages: PictureInfo[];
  toggleImageSelection: (image:PictureInfo) => void;
  deleteImagesfromCarrito: (image:PictureInfo) => void;
}

export const MainPageComponent: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const { animals, selectedImages, toggleImageSelection, deleteImagesfromCarrito } = props;

  return (
    <>
    <Button variant="outlined" onClick={()=>navigate("/puppies")}>Puppies</Button>
    <Button variant="outlined" onClick={()=>navigate("/kitties")}>Kitties</Button>
    <div className="main-page-component">
      <ListAnimalComponent animals={animals} selected={selectedImages} onImageClick= {toggleImageSelection} />
      <div className="splitter"></div>
      <Carrito animals={selectedImages} onImageClickCarrito={deleteImagesfromCarrito} />
    </div>
    </>
  );
};
