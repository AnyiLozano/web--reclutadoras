import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Chapter1 = lazy(() => import("./Chapter1"));
const Chapter2 = lazy(() => import("./Chapter2"));
const Chapter3 = lazy(() => import("./Chapter3"));
const Chapter4 = lazy(() => import("./Chapter4"));
const Chapter12 = lazy(() => import("./Chapter1-2"));
const Chapter33 = lazy(() => import("./Chapter3-3"));
const Chapter44 = lazy(() => import("./Chapter4-4"));

const useViews = () => {
  return {
    Home,
    Chapter1,
    Chapter2,
    Chapter3,
    Chapter4,
    Chapter12,
    Chapter33,
    Chapter44,
  };
};

export default useViews;
