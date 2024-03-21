import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { LoginScene, ListScene, DetailScene } from "../scenes";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />}></Route>
        <Route path={switchRoutes.list} element={<ListScene />}></Route>
        <Route path={switchRoutes.detail} element={<DetailScene />}></Route>
        <Route path="*" element={<div>404 Not Fount</div>}></Route>
      </Routes>
    </HashRouter>
  );
};
