import React from "react";
import { MainPageComponent } from "@/common/components/main-page";
import data from "@/common/data/dogs-data.json"

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

export const DogListComponent: React.FC<Props> = (props) => {
  const [animals, setAnimals] = React.useState<PictureInfo[]>([]);
  const {selectedImages, toggleImageSelection, deleteImagesfromCarrito} = props

  React.useEffect(() => {
    setAnimals(data);
  }, []);

  return <MainPageComponent animals={animals} selectedImages={selectedImages} toggleImageSelection={toggleImageSelection} deleteImagesfromCarrito={deleteImagesfromCarrito} />;
};
