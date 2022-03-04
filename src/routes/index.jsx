import _ from "lodash";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useComponents from "../components";
import useControllers from "../controllers";

const Router = () => {
  /** controllers */
  const { useScreenHooks } = useControllers();
  const { useRoutes } = useScreenHooks();
  const { routes } = useRoutes();

  /** Components */
  const { Navbar } = useComponents();
  return (
    <BrowserRouter>
      <Routes>
        {_.map(routes, (item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
};

export default Router;
