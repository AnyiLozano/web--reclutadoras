import { lazy } from "react";

const Navbar = lazy(() => import("./NavBar"));

const useComponents = () => {
  return {
    Navbar,
  };
};

export default useComponents;
