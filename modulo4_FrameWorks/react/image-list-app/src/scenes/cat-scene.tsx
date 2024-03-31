import React from "react";
import { CatListComponent } from "@/pods/cat-component";

interface PictureInfo {
  id: string;
  picUrl: string;
  title: string;
  selected?: boolean;
}

interface Props {
  selectedImages: PictureInfo[];
  toggleImageSelection: (image:PictureInfo) => void;
  deleteImagesfromCarrito: (image:PictureInfo) => void;
}

export const CatScene: React.FC<Props> = (props) => {
  const {selectedImages, toggleImageSelection, deleteImagesfromCarrito} = props
  return <CatListComponent selectedImages={selectedImages} toggleImageSelection={toggleImageSelection} deleteImagesfromCarrito={deleteImagesfromCarrito}/>;
};
