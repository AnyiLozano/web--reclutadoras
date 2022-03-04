import useViews from "../../../views";
import Chapter22 from "../../../views/Chapter2-2";

const useRoutes = () => {
  /** Views */
  const {
    Home,
    Chapter1,
    Chapter12,
    Chapter2,
    Chapter3,
    Chapter4,
    Chapter33,
    Chapter44,
  } = useViews();

  /** Routes */
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/chapter-1",
      element: <Chapter1 />,
    },
    {
      path: "/chapter-2",
      element: <Chapter2 />,
    },
    {
      path: "/chapter-3",
      element: <Chapter3 />,
    },
    {
      path: "/chapter-4",
      element: <Chapter4 />,
    },
    {
      path: "/chapter-1-2",
      element: <Chapter12 />,
    },
    {
      path: "/chapter-2-2",
      element: <Chapter22 />,
    },
    {
      path: "/chapter-3-3",
      element: <Chapter33 />,
    },
    {
      path: "/chapter-4-4",
      element: <Chapter44 />,
    },
  ];

  return {
    routes,
  };
};

export default useRoutes;
