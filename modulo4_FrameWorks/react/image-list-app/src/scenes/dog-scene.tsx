import React from "react";
import { DogListComponent } from "@/pods/dog-component";
import { PictureInfo } from "./scenes.vm";

interface Props {
  selectedImages: PictureInfo[];
  toggleImageSelection: (image:PictureInfo) => void;
  deleteImagesfromCarrito: (image:PictureInfo) => void;
}

export const DogScene: React.FC<Props> = (props) => {

  const {selectedImages, toggleImageSelection, deleteImagesfromCarrito} = props
  return (
  <DogListComponent selectedImages={selectedImages} toggleImageSelection={toggleImageSelection} deleteImagesfromCarrito={deleteImagesfromCarrito}/>
  );
};
