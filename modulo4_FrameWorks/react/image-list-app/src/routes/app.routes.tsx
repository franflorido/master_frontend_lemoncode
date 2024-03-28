import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { LoginScene, DogScene, CatScene } from "@/scenes";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />}></Route>
        <Route path={switchRoutes.kitties} element={<CatScene />}></Route>
        <Route path={switchRoutes.puppies} element={<DogScene />}></Route>
        <Route path="*" element={<div>404 Not Fount</div>}></Route>
      </Routes>
    </HashRouter>
  );
};
