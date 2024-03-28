import React from "react";
import { ListAnimalComponent } from "./main-page.content";
import { PictureInfo } from "./main-page.vm";

interface Props {
  animals: PictureInfo[];
}

export const MainPageComponent: React.FC<Props> = (props) => {
  const { animals } = props;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <ListAnimalComponent animals={animals} />
    </div>
  );
};
