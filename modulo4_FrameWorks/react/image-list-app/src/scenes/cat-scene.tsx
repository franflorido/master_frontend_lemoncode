import React from "react";
import { CatListComponent } from "@/pods/cat-component";
import { PictureInfo } from "./scenes.vm";

interface Props {
  selectedImages: PictureInfo[];
  toggleImageSelection: (image:PictureInfo) => void;
  deleteImagesfromCarrito: (image:PictureInfo) => void;
}

export const CatScene: React.FC<Props> = (props) => {
  const {selectedImages, toggleImageSelection, deleteImagesfromCarrito} = props
  return <CatListComponent selectedImages={selectedImages} toggleImageSelection={toggleImageSelection} deleteImagesfromCarrito={deleteImagesfromCarrito}/>;
};
