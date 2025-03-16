import module from "../module.json";
import { WelcomeLayout } from "../layouts";
import { WelcomePage } from "../pages";

export default {
  ...module,
  router: {
    layout: {
      path: module.id,
      element: <WelcomeLayout />,
    },
    childs: {
      welcomePage: {
        index: true,
        element: <WelcomePage />,
      },
    },
  },
};
