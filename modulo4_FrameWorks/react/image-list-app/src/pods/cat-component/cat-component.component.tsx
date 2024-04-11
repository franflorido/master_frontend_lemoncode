import React from "react";
import { MainPageComponent } from "@/common/components/main-page";
import data from "@/common/data/cats-data.json"
import { PictureInfo } from "./cat-component.vm";


interface Props {
  selectedImages: PictureInfo[];
  toggleImageSelection: (image:PictureInfo) => void;
  deleteImagesfromCarrito: (image:PictureInfo) => void;
}

export const CatListComponent: React.FC<Props> = (props) => {
  const [animals, setAnimals] = React.useState<PictureInfo[]>([]);
  const {selectedImages, toggleImageSelection, deleteImagesfromCarrito} = props

  React.useEffect(() => {
    setAnimals(data);
  }, []);

  return <MainPageComponent animals={animals} selectedImages={selectedImages} toggleImageSelection={toggleImageSelection} deleteImagesfromCarrito={deleteImagesfromCarrito} />;
};