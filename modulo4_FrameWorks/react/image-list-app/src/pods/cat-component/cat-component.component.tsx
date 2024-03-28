import React from "react";
import { MainPageComponent } from "@/common/components/main-page";
import { PictureInfo } from "./cat-component.vm";

export const CatListComponent: React.FC = () => {
  const [animals, setAnimals] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then(setAnimals);
  }, []);

  return <MainPageComponent animals={animals} />;
};
