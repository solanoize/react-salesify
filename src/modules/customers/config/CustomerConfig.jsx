import { CustomerLayout } from "../layouts";
import module from "../module.json";
import { CustomerPageList } from "../pages";

export default {
  ...module,
  router: {
    layout: {
      path: module.id,
      element: <CustomerLayout />,
    },
    childs: {
      customerPageList: {
        index: true,
        element: <CustomerPageList />,
      },
    },
  },
};
