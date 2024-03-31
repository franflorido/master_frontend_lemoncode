import React , { useState } from "react";
import { AppRouter } from "./routes/app.routes";


export interface PictureInfo {
  id: string;
  picUrl: string;
  title: string;
  selected?: boolean;
}


export const App = () => {
  const [selectedImages, setSelectedImages] = useState<PictureInfo[]>([]);


  const toggleImageSelection = (image: PictureInfo) => {
    const isSelected = selectedImages.some((selectedImage) => selectedImage.id === image.id);
    image.selected = true
    
    if (isSelected) {
      setSelectedImages(selectedImages.filter((selectedImage) => selectedImage.id !== image.id));
    } else {
      setSelectedImages([...selectedImages, image]);
    }
  };

  const deleteImagesfromCarrito = (image:any) => {
    image.selected = false
    setSelectedImages(selectedImages.filter((selectedImage) => selectedImage.id !== image.id))
    
  }

  return <AppRouter selectedImages={selectedImages} toggleImageSelection={toggleImageSelection} deleteImagesfromCarrito={deleteImagesfromCarrito}/>;
};
