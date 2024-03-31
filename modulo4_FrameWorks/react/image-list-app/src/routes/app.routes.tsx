import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { LoginScene, DogScene, CatScene } from "@/scenes";
import { switchRoutes } from "./routes";

export interface PictureInfo {
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

export const AppRouter:React.FC<Props> = (props) => {
  const {selectedImages, toggleImageSelection, deleteImagesfromCarrito} = props

  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />}></Route>
        <Route path={switchRoutes.kitties} element={<CatScene selectedImages={selectedImages} toggleImageSelection={toggleImageSelection} deleteImagesfromCarrito={deleteImagesfromCarrito} />}></Route>
        <Route path={switchRoutes.puppies} element={<DogScene selectedImages={selectedImages} toggleImageSelection={toggleImageSelection} deleteImagesfromCarrito={deleteImagesfromCarrito}/>}></Route>
        <Route path="*" element={<div>404 Not Fount</div>}></Route>
      </Routes>
    </HashRouter>
  );
};
