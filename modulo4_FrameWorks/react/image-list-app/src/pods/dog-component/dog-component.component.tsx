import React from "react";
import { MainPageComponent } from "@/common/components/main-page";
import { PictureInfo } from "./dog-component.vm";

export const DogListComponent: React.FC = () => {
  const [animals, setAnimals] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then(setAnimals);
  }, []);

  return <MainPageComponent animals={animals} />;
};
