import React from "react";
import { PictureInfo } from "./main-page.vm";
import { ImgMediaCard } from "./main-page.img-card";

interface Props {
  animals: PictureInfo[];
  selected: PictureInfo[];
  onImageClick: (animal:any) => void
}

export const ListAnimalComponent: React.FC<Props> = (props) => {
  const { animals, selected, onImageClick } = props;

  return (
    <div className="list-user-list-container">
      {animals.map((animal) => (
          <ImgMediaCard key={animal.id} animal={animal} selected={selected} onClick= {() => onImageClick(animal)}/>
      ))}
    </div>
  );
};
